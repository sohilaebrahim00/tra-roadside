import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronLeft, Phone, Mail } from "lucide-react";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { StatusBadge } from "@/components/admin/status-badge";
import { StatusActions, DriverAssign, NotesForm } from "@/components/admin/request-actions";
import type { RequestStatus, VehicleType } from "@/lib/types/domain";

interface RequestDetailRow {
  id: string;
  request_number: string;
  status: RequestStatus;
  created_at: string;
  assigned_driver_id: string | null;
  vehicle_year: string | null;
  vehicle_make: string | null;
  vehicle_model: string | null;
  vehicle_color: string | null;
  vehicle_type: VehicleType;
  vehicle_license_plate: string | null;
  vehicle_vin: string | null;
  is_drivable: boolean | null;
  notes: string | null;
  truck_type: string | null;
  truck_unit_number: string | null;
  trailer_attached: boolean | null;
  pickup_address: string;
  destination_address: string | null;
  customers: { full_name: string; phone: string; email: string | null } | null;
  service_types: { name: string } | null;
  request_photos: { id: string; storage_path: string; kind: string }[];
}

interface DriverOptionRow {
  id: string;
  status: string;
  profiles: { full_name: string } | null;
}

interface NoteRow {
  id: string;
  body: string;
  created_at: string;
  profiles: { full_name: string } | null;
}

export default async function AdminRequestDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createServerSupabaseClient();

  const { data: request } = await supabase
    .from("service_requests")
    .select(
      "id, request_number, status, created_at, assigned_driver_id, vehicle_year, vehicle_make, vehicle_model, vehicle_color, vehicle_type, vehicle_license_plate, vehicle_vin, is_drivable, notes, truck_type, truck_unit_number, trailer_attached, pickup_address, destination_address, customers(full_name, phone, email), service_types(name), request_photos(id, storage_path, kind)"
    )
    .eq("id", id)
    .maybeSingle()
    .returns<RequestDetailRow>();

  if (!request) notFound();

  const [{ data: drivers }, { data: notes }, { data: notifications }] = await Promise.all([
    supabase.from("drivers").select("id, status, profiles(full_name)").order("status").returns<DriverOptionRow[]>(),
    supabase
      .from("internal_notes")
      .select("id, body, created_at, profiles(full_name)")
      .eq("request_id", id)
      .order("created_at", { ascending: false })
      .returns<NoteRow[]>(),
    supabase.from("notification_logs").select("id, event, channel, status, recipient, created_at").eq("request_id", id).order("created_at", { ascending: false }),
  ]);

  const customer = request.customers;
  const service = request.service_types;
  const photos = request.request_photos ?? [];

  const driverOptions = (drivers ?? []).map((d) => ({
    id: d.id,
    status: d.status,
    full_name: d.profiles?.full_name ?? "Unknown",
  }));

  let photoUrls: { id: string; url: string; kind: string }[] = [];
  if (photos.length > 0) {
    const { data: signed } = await supabase.storage
      .from("request-photos")
      .createSignedUrls(photos.map((p) => p.storage_path), 3600);
    photoUrls = photos.map((p, i) => ({ id: p.id, kind: p.kind, url: signed?.[i]?.signedUrl ?? "" }));
  }

  return (
    <div>
      <Link href="/admin/requests" className="flex items-center gap-1 text-sm font-medium text-ink-500 hover:text-ink-900 dark:text-ink-300">
        <ChevronLeft className="h-4 w-4" aria-hidden="true" /> All requests
      </Link>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">{request.request_number}</h1>
          <p className="text-sm text-ink-500 dark:text-ink-300">{service?.name} · {new Date(request.created_at).toLocaleString()}</p>
        </div>
        <StatusBadge status={request.status} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-6">
          <Section title="Update status">
            <StatusActions requestId={request.id} currentStatus={request.status} />
          </Section>

          <Section title="Assign driver">
            <DriverAssign requestId={request.id} currentDriverId={request.assigned_driver_id} drivers={driverOptions} />
          </Section>

          <Section title="Customer">
            <p className="font-medium text-ink-900 dark:text-white">{customer?.full_name}</p>
            <div className="mt-1 flex flex-wrap gap-4 text-sm text-ink-600 dark:text-ink-200">
              {customer?.phone && (
                <a href={`tel:${customer.phone}`} className="flex items-center gap-1.5 hover:text-red-600">
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" /> {customer.phone}
                </a>
              )}
              {customer?.email && (
                <a href={`mailto:${customer.email}`} className="flex items-center gap-1.5 hover:text-red-600">
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" /> {customer.email}
                </a>
              )}
            </div>
          </Section>

          <Section title="Vehicle">
            <p className="text-sm text-ink-700 dark:text-ink-200">
              {[request.vehicle_year, request.vehicle_make, request.vehicle_model, request.vehicle_color].filter(Boolean).join(" ") || "Not provided"}
            </p>
            <dl className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <Detail label="Type" value={request.vehicle_type} />
              <Detail label="Drivable" value={request.is_drivable === null ? "Unknown" : request.is_drivable ? "Yes" : "No"} />
              <Detail label="Plate" value={request.vehicle_license_plate || "—"} />
              <Detail label="VIN" value={request.vehicle_vin || "—"} />
            </dl>
            {request.notes && <p className="mt-3 rounded-lg bg-paper-50 p-3 text-sm text-ink-600 dark:bg-white/5 dark:text-ink-200">{request.notes}</p>}
          </Section>

          {(request.truck_type || request.truck_unit_number || request.trailer_attached !== null) && (
            <Section title="Truck details">
              <dl className="grid grid-cols-2 gap-2 text-sm">
                <Detail label="Truck type" value={request.truck_type || "Not provided"} />
                <Detail label="Unit #" value={request.truck_unit_number || "Not provided"} />
                <Detail
                  label="Trailer attached"
                  value={request.trailer_attached === null ? "Unknown" : request.trailer_attached ? "Yes" : "No"}
                />
              </dl>
            </Section>
          )}

          <Section title="Location">
            <p className="text-sm text-ink-700 dark:text-ink-200">{request.pickup_address}</p>
            {request.destination_address && (
              <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">→ {request.destination_address}</p>
            )}
          </Section>

          {photoUrls.length > 0 && (
            <Section title="Photos">
              <div className="grid grid-cols-3 gap-3">
                {photoUrls.map((p) => (
                  <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer" className="relative block aspect-square overflow-hidden rounded-lg">
                    <Image src={p.url} alt={p.kind} fill sizes="200px" className="object-cover" />
                  </a>
                ))}
              </div>
            </Section>
          )}
        </div>

        <div className="space-y-6">
          <Section title="Internal notes">
            <NotesForm requestId={request.id} />
            <ul className="mt-4 space-y-3">
              {(notes ?? []).map((n) => (
                <li key={n.id} className="rounded-lg bg-paper-50 p-3 text-sm dark:bg-white/5">
                  <p className="text-ink-700 dark:text-ink-200">{n.body}</p>
                  <p className="mt-1 text-xs text-ink-400">
                    {n.profiles?.full_name ?? "Staff"} · {new Date(n.created_at).toLocaleString()}
                  </p>
                </li>
              ))}
              {(notes ?? []).length === 0 && <p className="text-sm text-ink-400">No notes yet.</p>}
            </ul>
          </Section>

          <Section title="Notification log">
            <ul className="space-y-2">
              {(notifications ?? []).map((n) => (
                <li key={n.id} className="flex items-center justify-between text-sm">
                  <span className="text-ink-700 dark:text-ink-200">
                    {n.event.replace(/_/g, " ")} ({n.channel})
                  </span>
                  <span
                    className={
                      n.status === "sent" ? "text-success-600" : n.status === "failed" ? "text-red-600" : "text-ink-400"
                    }
                  >
                    {n.status}
                  </span>
                </li>
              ))}
              {(notifications ?? []).length === 0 && <p className="text-sm text-ink-400">No notifications sent yet.</p>}
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-ink-950/8 bg-white p-5 dark:border-white/10 dark:bg-ink-900">
      <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-ink-400">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-ink-400">{label}</dt>
      <dd className="text-ink-800 capitalize dark:text-ink-100">{value}</dd>
    </div>
  );
}
