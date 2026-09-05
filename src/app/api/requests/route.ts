import { NextRequest, NextResponse } from "next/server";
import { createRequestSchema } from "@/lib/validation/request";
import { isDemoMode, env, buildUrl, dispatchPhoneE164, getProductionReadiness } from "@/lib/env";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { generateRequestNumber, generateTrackingToken } from "@/lib/utils/request-number";
import { isRateLimited } from "@/lib/utils/rate-limit";
import { encodeDemoToken } from "@/lib/demo/demo-token";
import { notify } from "@/lib/notifications/send";
import { firstNameOf } from "@/lib/notifications/vars";
import { getService } from "@/lib/content/services";
import { BUSINESS } from "@/lib/content/business";
import { STATUS_META } from "@/lib/types/domain";
import type { CreateRequestInput } from "@/lib/validation/request";
import type { ServiceContent } from "@/lib/content/services";

const SMS_CONSENT_TEXT_VERSION = "2026-08-v1";

/** Year/make/model/colour only. Never contains a VIN or an em dash, so it is safe to interpolate into an SMS. */
function vehicleShort(input: CreateRequestInput): string {
  return [input.vehicleYear, input.vehicleMake, input.vehicleModel, input.vehicleColor]
    .map((p) => p?.trim())
    .filter(Boolean)
    .join(" ");
}

/**
 * " for 2019 Toyota Camry", or "" when no vehicle detail was given.
 *
 * The clause carries its own leading space and preposition so the templates
 * need no punctuation around it. Interpolating the vehicle directly would
 * render "Battery Replacement for  at 1200 Main St" on a request with blank
 * vehicle fields — a double space and a dangling "for". Partial data collapses
 * the same way, since the parts are filtered before joining.
 */
function vehicleClause(input: CreateRequestInput): string {
  const short = vehicleShort(input);
  return short ? ` for ${short}` : "";
}

function vehicleSummary(input: CreateRequestInput): string {
  const short = vehicleShort(input);
  let summary = short || "Not provided";
  // Dispatch orders the battery from this, so the VIN has to travel with the
  // notification, not just sit in the database. Email only — the em dash here
  // is not GSM-7 and would force an SMS to UCS-2 encoding.
  if (input.vehicleVin?.trim()) summary += ` — VIN: ${input.vehicleVin.trim().toUpperCase()}`;
  return summary;
}

/** Fields shared by both dispatch notifications (email + SMS) and both persistence modes (demo + real). */
function buildDispatchVars(input: CreateRequestInput, service: ServiceContent, requestNumber: string, dispatchUrl: string, trackingUrl: string) {
  return {
    requestNumber,
    createdAt: new Date().toLocaleString("en-US", { timeZone: "America/Chicago", dateStyle: "medium", timeStyle: "short" }),
    serviceName: service.name,
    customerName: input.fullName,
    customerPhone: input.phone,
    customerEmail: input.email || "Not provided",
    pickupAddress: input.pickupAddress,
    destinationAddress: input.destinationAddress || "N/A",
    vehicleDetails: vehicleSummary(input),
    // SMS-safe: shortName and the vehicle clause never carry a non-GSM-7
    // character, so the dispatch text stays on 7-bit encoding.
    serviceShort: service.shortName,
    vehicleClause: vehicleClause(input),
    customerNotes: input.notes || "None",
    trackingUrl,
    dispatchUrl,
  };
}

/**
 * Always notifies the business's own dispatch email + phone about a new
 * request — independent of the customer's own SMS consent, which only
 * governs messages sent TO the customer. Two separate notify() calls (one
 * per channel) so a failure on one never gets conflated with the other in
 * notification_logs, and so each is dedup'd under its own event name.
 */
async function notifyDispatch(vars: ReturnType<typeof buildDispatchVars>, requestId?: string) {
  await notify({
    event: "dispatch_new_request_email",
    requestId,
    channels: { email: env.dispatchEmail },
    vars,
  });

  if (dispatchPhoneE164) {
    await notify({
      event: "dispatch_new_request_sms",
      requestId,
      channels: { sms: dispatchPhoneE164 },
      vars,
    });
  } else {
    console.error(`[dispatch] DISPATCH_PHONE ("${env.dispatchPhoneRaw}") is not a valid phone number — skipping dispatch SMS.`);
  }
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(`create-request:${ip}`, 8, 10 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many requests. Please wait a few minutes and try again." }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const parsed = createRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request. Please check the form and try again." }, { status: 400 });
  }
  const input = parsed.data;

  if (input.companyWebsite) {
    // Honeypot tripped — pretend success so the bot doesn't learn anything, but do nothing.
    return NextResponse.json({ requestNumber: generateRequestNumber(), trackingToken: "void" });
  }

  const service = getService(input.serviceSlug);
  if (!service) {
    return NextResponse.json({ error: "Unknown service selected." }, { status: 400 });
  }

  const requestNumber = generateRequestNumber();
  const readiness = getProductionReadiness();
  const channelsLive = { email: readiness.email, sms: readiness.sms };

  if (isDemoMode()) {
    const token = encodeDemoToken({
      requestNumber,
      serviceSlug: service.slug,
      serviceName: service.name,
      pickupAddress: input.pickupAddress,
      pickupLat: input.pickupLat,
      pickupLng: input.pickupLng,
      destinationAddress: input.destinationAddress || undefined,
      customerName: input.fullName,
      createdAt: new Date().toISOString(),
    });
    const trackingUrl = buildUrl(`/t/${token}`);

    await notify({
      event: "request_received",
      channels: { email: input.email || undefined, sms: input.smsConsent ? input.phone : undefined },
      vars: {
        requestNumber,
        customerName: firstNameOf(input.fullName),
        serviceName: service.name,
        pickupAddress: input.pickupAddress,
        serviceShort: service.shortName,
        vehicleClause: vehicleClause(input),
        vehicleText: vehicleShort(input) || "Not provided",
        statusLabel: STATUS_META.new.customerLabel,
        supportPhone: BUSINESS.phoneDisplay,
        trackingUrl,
      },
    });

    // No site_settings/service_requests table exists in demo mode (no
    // database at all) — dispatch still gets notified at the configured
    // DISPATCH_EMAIL/DISPATCH_PHONE, just without a real admin request ID to link to.
    await notifyDispatch(buildDispatchVars(input, service, requestNumber, buildUrl("/admin/requests"), trackingUrl));

    return NextResponse.json({
      requestNumber,
      trackingToken: token,
      demo: true,
      channelsLive,
      customerName: input.fullName,
      serviceName: service.name,
      pickupAddress: input.pickupAddress,
    });
  }

  try {
    const supabase = createAdminSupabaseClient();

    let customerId: string;
    const { data: existingCustomer } = await supabase
      .from("customers")
      .select("id")
      .eq("phone", input.phone)
      .maybeSingle();

    if (existingCustomer) {
      customerId = existingCustomer.id;
    } else {
      const { data: newCustomer, error: customerErr } = await supabase
        .from("customers")
        .insert({ full_name: input.fullName, phone: input.phone, email: input.email || null })
        .select("id")
        .single();
      if (customerErr || !newCustomer) throw customerErr;
      customerId = newCustomer.id;
    }

    const { data: serviceTypeRow } = await supabase
      .from("service_types")
      .select("id")
      .eq("slug", input.serviceSlug)
      .maybeSingle();
    if (!serviceTypeRow) {
      return NextResponse.json({ error: "Service is temporarily unavailable." }, { status: 400 });
    }

    const { data: request, error: requestErr } = await supabase
      .from("service_requests")
      .insert({
        request_number: requestNumber,
        customer_id: customerId,
        service_type_id: serviceTypeRow.id,
        vehicle_year: input.vehicleYear || null,
        vehicle_make: input.vehicleMake || null,
        vehicle_model: input.vehicleModel || null,
        vehicle_color: input.vehicleColor || null,
        vehicle_license_plate: input.vehicleLicensePlate || null,
        vehicle_vin: input.vehicleVin?.trim().toUpperCase() || null,
        vehicle_type: input.vehicleType,
        is_drivable: input.isDrivable,
        notes: input.notes || null,
        pickup_lat: input.pickupLat,
        pickup_lng: input.pickupLng,
        pickup_address: input.pickupAddress,
        destination_lat: input.destinationLat ?? null,
        destination_lng: input.destinationLng ?? null,
        destination_address: input.destinationAddress || null,
        destination_notes: input.destinationNotes || null,
        preferred_contact_method: input.preferredContactMethod,
        sms_consent: input.smsConsent,
        sms_consent_at: input.smsConsent ? new Date().toISOString() : null,
        sms_consent_text_version: input.smsConsent ? SMS_CONSENT_TEXT_VERSION : null,
      })
      .select("id")
      .single();
    if (requestErr || !request) throw requestErr;

    if (input.photos.length > 0) {
      await supabase.from("request_photos").insert(
        input.photos.map((p) => ({ request_id: request.id, storage_path: p.storagePath, kind: p.kind, uploaded_by: "customer" as const }))
      );
    }

    const token = generateTrackingToken();
    await supabase.from("customer_tracking_tokens").insert({
      request_id: request.id,
      token,
      expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    });

    const trackingUrl = buildUrl(`/t/${token}`);
    const dispatchUrl = buildUrl(`/admin/requests/${request.id}`);

    await notify({
      event: "request_received",
      requestId: request.id,
      channels: { email: input.email || undefined, sms: input.smsConsent ? input.phone : undefined },
      vars: {
        requestNumber,
        customerName: firstNameOf(input.fullName),
        serviceName: service.name,
        pickupAddress: input.pickupAddress,
        serviceShort: service.shortName,
        vehicleClause: vehicleClause(input),
        vehicleText: vehicleShort(input) || "Not provided",
        statusLabel: STATUS_META.new.customerLabel,
        supportPhone: BUSINESS.phoneDisplay,
        trackingUrl,
      },
    });

    await notifyDispatch(buildDispatchVars(input, service, requestNumber, dispatchUrl, trackingUrl), request.id);

    return NextResponse.json({
      requestNumber,
      trackingToken: token,
      demo: false,
      channelsLive,
      customerName: input.fullName,
      serviceName: service.name,
      pickupAddress: input.pickupAddress,
    });
  } catch (err) {
    const details =
      err && typeof err === "object"
        ? { message: (err as { message?: string }).message, code: (err as { code?: string }).code, details: (err as { details?: string }).details, hint: (err as { hint?: string }).hint }
        : err;
    console.error("request creation failed: " + JSON.stringify(details));
    return NextResponse.json({ error: "Something went wrong creating your request. Please call " + BUSINESS.phoneDisplay + " for immediate help." }, { status: 500 });
  }
}
