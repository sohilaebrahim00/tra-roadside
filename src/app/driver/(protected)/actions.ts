"use server";

import { revalidatePath } from "next/cache";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getDriverSession } from "@/lib/auth/driver-session";
import { REQUEST_STATUS_TRANSITIONS, type RequestStatus } from "@/lib/types/domain";
import { notify } from "@/lib/notifications/send";
import { firstNameOf } from "@/lib/notifications/vars";
import { env } from "@/lib/env";
import { BUSINESS } from "@/lib/content/business";
import { getService } from "@/lib/content/services";
import { smsLine } from "@/lib/notifications/sms-lines";

async function requireDriver() {
  const session = await getDriverSession();
  if (!session) throw new Error("Not authenticated");
  return session;
}

async function assertOwnJob(requestId: string, driverId: string) {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase.from("service_requests").select("id, status, assigned_driver_id").eq("id", requestId).maybeSingle();
  if (!data || data.assigned_driver_id !== driverId) throw new Error("This job isn't assigned to you");
  return data;
}

export async function updateJobStatus(requestId: string, nextStatus: RequestStatus) {
  const session = await requireDriver();
  const job = await assertOwnJob(requestId, session.driverId);

  const allowed = REQUEST_STATUS_TRANSITIONS[job.status as RequestStatus] ?? [];
  if (!allowed.includes(nextStatus)) throw new Error(`Cannot move from ${job.status} to ${nextStatus}`);

  const supabase = await createServerSupabaseClient();
  const timestamps =
    nextStatus === "completed" ? { completed_at: new Date().toISOString() }
    : nextStatus === "unable_to_complete" ? {}
    : {};

  const { error } = await supabase.from("service_requests").update({ status: nextStatus, ...timestamps }).eq("id", requestId);
  if (error) throw new Error(error.message);

  if (nextStatus === "driver_en_route") {
    await supabase.from("drivers").update({ status: "en_route" }).eq("id", session.driverId);
  }
  if (nextStatus === "completed" || nextStatus === "unable_to_complete") {
    await supabase.from("drivers").update({ status: "available", location_sharing_active: false }).eq("id", session.driverId);
  }

  await notifyCustomer(requestId, nextStatus, session.fullName);

  revalidatePath(`/driver/jobs/${requestId}`);
  revalidatePath("/driver");
}

interface NotifyRequestRow {
  request_number: string;
  sms_consent: boolean;
  customers: { full_name: string; phone: string; email: string | null } | null;
  service_types: { name: string; slug: string } | null;
}

async function notifyCustomer(requestId: string, status: RequestStatus, driverName: string) {
  const supabase = await createServerSupabaseClient();
  const { data: request } = await supabase
    .from("service_requests")
    .select("request_number, sms_consent, customers(full_name, phone, email), service_types(name, slug)")
    .eq("id", requestId)
    .maybeSingle()
    .returns<NotifyRequestRow>();
  if (!request) return;
  const customer = request.customers;
  if (!customer) return;

  const { data: tokenRow } = await supabase.from("customer_tracking_tokens").select("token").eq("request_id", requestId).maybeSingle();
  const trackingUrl = tokenRow ? `${env.siteUrl}/t/${tokenRow.token}` : env.siteUrl;

  const eventMap: Partial<Record<RequestStatus, Parameters<typeof notify>[0]["event"]>> = {
    driver_en_route: "driver_en_route",
    driver_nearby: "driver_nearby",
    arrived: "driver_arrived",
    completed: "service_completed",
  };
  const event = eventMap[status];
  if (!event) return;

  await notify({
    event,
    requestId,
    channels: { email: customer.email ?? undefined, sms: request.sms_consent ? customer.phone : undefined },
    vars: {
      requestNumber: request.request_number,
      customerName: firstNameOf(customer.full_name),
      serviceName: request.service_types?.name,
      // SMS-safe short name (no em dash), so texts stay on GSM-7.
      serviceShort: (request.service_types && getService(request.service_types.slug)?.shortName) ?? request.service_types?.name,
      driverName: firstNameOf(driverName),
      driverLine: smsLine("Driver", firstNameOf(driverName)),
      trackingUrl,
      supportPhone: BUSINESS.phoneDisplay,
    },
  });
}

export async function setLocationSharing(active: boolean) {
  const session = await requireDriver();
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.from("drivers").update({ location_sharing_active: active }).eq("id", session.driverId);
  if (error) throw new Error(error.message);
  revalidatePath("/driver");
}

export async function addJobNote(requestId: string, note: string) {
  const session = await requireDriver();
  await assertOwnJob(requestId, session.driverId);
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.from("internal_notes").insert({ request_id: requestId, author_id: session.driverId, body: note });
  if (error) throw new Error(error.message);
  revalidatePath(`/driver/jobs/${requestId}`);
}
