"use server";

import { revalidatePath } from "next/cache";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { getStaffSession } from "@/lib/auth/session";
import { REQUEST_STATUS_TRANSITIONS, STATUS_META, type RequestStatus } from "@/lib/types/domain";
import { notify } from "@/lib/notifications/send";
import { firstNameOf } from "@/lib/notifications/vars";
import { env } from "@/lib/env";
import { BUSINESS } from "@/lib/content/business";

async function requireStaff() {
  const session = await getStaffSession();
  if (!session) throw new Error("Not authenticated");
  return session;
}

export async function updateRequestStatus(requestId: string, nextStatus: RequestStatus) {
  const session = await requireStaff();
  const supabase = await createServerSupabaseClient();

  const { data: current } = await supabase.from("service_requests").select("status").eq("id", requestId).single();
  if (!current) throw new Error("Request not found");

  const allowed = REQUEST_STATUS_TRANSITIONS[current.status as RequestStatus] ?? [];
  if (!allowed.includes(nextStatus)) {
    throw new Error(`Cannot move from ${current.status} to ${nextStatus}`);
  }

  const timestampField =
    nextStatus === "accepted" ? { accepted_at: new Date().toISOString() }
    : nextStatus === "completed" ? { completed_at: new Date().toISOString() }
    : nextStatus === "canceled" ? { canceled_at: new Date().toISOString() }
    : {};

  const { error } = await supabase.from("service_requests").update({ status: nextStatus, ...timestampField }).eq("id", requestId);
  if (error) throw new Error(error.message);

  await notifyStatusChange(requestId, nextStatus, session.fullName);
  revalidatePath(`/admin/requests/${requestId}`);
  revalidatePath("/admin/requests");
}

interface NotifyRequestRow {
  request_number: string;
  sms_consent: boolean;
  customers: { full_name: string; phone: string; email: string | null } | null;
  service_types: { name: string } | null;
}

async function notifyStatusChange(requestId: string, status: RequestStatus, changedBy: string) {
  const admin = createAdminSupabaseClient();
  const { data: request } = await admin
    .from("service_requests")
    .select("request_number, customers(full_name, phone, email), service_types(name), sms_consent")
    .eq("id", requestId)
    .maybeSingle()
    .returns<NotifyRequestRow>();
  if (!request) return;

  const customer = request.customers;
  const service = request.service_types;
  const { data: tokenRow } = await admin.from("customer_tracking_tokens").select("token").eq("request_id", requestId).maybeSingle();
  const trackingUrl = tokenRow ? `${env.siteUrl}/t/${tokenRow.token}` : env.siteUrl;

  const eventMap: Partial<Record<RequestStatus, Parameters<typeof notify>[0]["event"]>> = {
    accepted: "request_accepted",
    driver_assigned: "driver_assigned",
    driver_en_route: "driver_en_route",
    driver_nearby: "driver_nearby",
    arrived: "driver_arrived",
    completed: "service_completed",
    canceled: "request_canceled",
  };
  const event = eventMap[status];
  if (!event || !customer) return;

  await notify({
    event,
    requestId,
    channels: { email: customer.email ?? undefined, sms: request.sms_consent ? customer.phone : undefined },
    vars: {
      requestNumber: request.request_number,
      customerName: firstNameOf(customer.full_name),
      serviceName: service?.name,
      trackingUrl,
      statusLabel: STATUS_META[status]?.customerLabel ?? status.replace(/_/g, " "),
      supportPhone: BUSINESS.phoneDisplay,
    },
  });

  if (status === "completed" || status === "canceled") {
    await notify({
      event: status === "completed" ? "dispatch_service_completed" : "dispatch_request_canceled",
      requestId,
      channels: {},
      vars: { requestNumber: request.request_number, driverName: changedBy },
    });
  }
}

export async function assignDriver(requestId: string, driverId: string) {
  const session = await requireStaff();
  const supabase = await createServerSupabaseClient();

  const { error } = await supabase
    .from("service_requests")
    .update({ assigned_driver_id: driverId, status: "driver_assigned" })
    .eq("id", requestId);
  if (error) throw new Error(error.message);

  await supabase.from("driver_assignments").insert({ request_id: requestId, driver_id: driverId, assigned_by: session.userId });
  await notifyStatusChange(requestId, "driver_assigned" as RequestStatus, session.fullName);

  revalidatePath(`/admin/requests/${requestId}`);
}

export async function addInternalNote(requestId: string, body: string) {
  const session = await requireStaff();
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.from("internal_notes").insert({ request_id: requestId, author_id: session.userId, body });
  if (error) throw new Error(error.message);
  revalidatePath(`/admin/requests/${requestId}`);
}
