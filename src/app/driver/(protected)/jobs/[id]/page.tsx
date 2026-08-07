import { notFound } from "next/navigation";
import { Phone, Navigation2 } from "lucide-react";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getDriverSession } from "@/lib/auth/driver-session";
import { StatusBadge } from "@/components/admin/status-badge";
import { JobActions, JobNoteForm } from "@/components/driver/job-actions";
import { LocationSharingToggle } from "@/components/driver/location-sharing-toggle";

interface JobRow {
  id: string;
  request_number: string;
  status: string;
  pickup_address: string;
  pickup_lat: number;
  pickup_lng: number;
  destination_address: string | null;
  vehicle_year: string | null;
  vehicle_make: string | null;
  vehicle_model: string | null;
  vehicle_color: string | null;
  is_drivable: boolean | null;
  notes: string | null;
  truck_type: string | null;
  truck_unit_number: string | null;
  trailer_attached: boolean | null;
  customers: { full_name: string; phone: string } | null;
  service_types: { name: string } | null;
}

export default async function DriverJobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getDriverSession();
  const supabase = await createServerSupabaseClient();

  const { data: job } = await supabase
    .from("service_requests")
    .select(
      "id, request_number, status, pickup_address, pickup_lat, pickup_lng, destination_address, vehicle_year, vehicle_make, vehicle_model, vehicle_color, is_drivable, notes, truck_type, truck_unit_number, trailer_attached, customers(full_name, phone), service_types(name)"
    )
    .eq("id", id)
    .maybeSingle()
    .returns<JobRow>();

  if (!job || !session) notFound();

  const { data: driver } = await supabase.from("drivers").select("location_sharing_active").eq("id", session.driverId).maybeSingle();
  const navUrl = `https://www.google.com/maps/dir/?api=1&destination=${job.pickup_lat},${job.pickup_lng}`;

  return (
    <div className="p-4 pb-8">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-xl font-semibold text-ink-950">{job.request_number}</h1>
        <StatusBadge status={job.status as never} />
      </div>
      <p className="mt-1 text-sm text-ink-500">{job.service_types?.name}</p>

      <div className="mt-5 space-y-3">
        <a href={navUrl} target="_blank" rel="noopener noreferrer" className="flex h-13 items-center justify-center gap-2 rounded-2xl bg-ink-950 text-base font-bold text-white">
          <Navigation2 className="h-4.5 w-4.5" aria-hidden="true" /> Navigate to Customer
        </a>
        {job.customers?.phone && (
          <a href={`tel:${job.customers.phone}`} className="flex h-13 items-center justify-center gap-2 rounded-2xl border-2 border-ink-950 text-base font-bold text-ink-950">
            <Phone className="h-4.5 w-4.5" aria-hidden="true" /> Call {job.customers.full_name?.split(" ")[0]}
          </a>
        )}
      </div>

      <div className="mt-5">
        <LocationSharingToggle driverId={session.driverId} requestId={job.id} initialActive={driver?.location_sharing_active ?? false} />
      </div>

      <Section title="Status">
        <JobActions requestId={job.id} currentStatus={job.status as never} />
      </Section>

      <Section title="Location">
        <p className="text-sm text-ink-700">{job.pickup_address}</p>
        {job.destination_address && <p className="mt-1 text-sm text-ink-500">→ {job.destination_address}</p>}
      </Section>

      <Section title="Vehicle">
        <p className="text-sm text-ink-700">
          {[job.vehicle_year, job.vehicle_make, job.vehicle_model, job.vehicle_color].filter(Boolean).join(" ") || "Not provided"}
        </p>
        <p className="mt-1 text-sm text-ink-500">Drivable: {job.is_drivable === null ? "Unknown" : job.is_drivable ? "Yes" : "No"}</p>
        {job.notes && <p className="mt-2 rounded-lg bg-paper-50 p-3 text-sm text-ink-600">{job.notes}</p>}
      </Section>

      {(job.truck_type || job.truck_unit_number || job.trailer_attached !== null) && (
        <Section title="Truck details">
          <p className="text-sm text-ink-700">
            {[job.truck_type, job.truck_unit_number && `Unit #${job.truck_unit_number}`].filter(Boolean).join(" · ") || "Not provided"}
          </p>
          <p className="mt-1 text-sm text-ink-500">
            Trailer attached: {job.trailer_attached === null ? "Unknown" : job.trailer_attached ? "Yes" : "No"}
          </p>
        </Section>
      )}

      <Section title="Notes to dispatch">
        <JobNoteForm requestId={job.id} />
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-2xl border border-ink-950/8 bg-white p-4">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-400">{title}</h2>
      <div className="mt-2">{children}</div>
    </div>
  );
}
