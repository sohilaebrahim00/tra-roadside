import Link from "next/link";
import { redirect } from "next/navigation";
import { MapPin } from "lucide-react";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getDriverSession } from "@/lib/auth/driver-session";
import { StatusBadge } from "@/components/admin/status-badge";
import { ACTIVE_STATUSES, type RequestStatus } from "@/lib/types/domain";

interface JobListRow {
  id: string;
  request_number: string;
  status: RequestStatus;
  pickup_address: string;
  service_types: { name: string } | null;
}

export default async function DriverJobsPage() {
  const session = await getDriverSession();
  if (!session) redirect("/driver/login");
  const supabase = await createServerSupabaseClient();

  const { data: jobs } = await supabase
    .from("service_requests")
    .select("id, request_number, status, pickup_address, service_types(name)")
    .eq("assigned_driver_id", session.driverId)
    .in("status", ACTIVE_STATUSES)
    .order("created_at", { ascending: true })
    .returns<JobListRow[]>();

  return (
    <div className="p-4">
      <h1 className="font-display text-xl font-semibold text-ink-950">My Jobs</h1>
      <div className="mt-4 space-y-3">
        {(jobs ?? []).map((j) => (
          <Link key={j.id} href={`/driver/jobs/${j.id}`} className="block rounded-2xl border border-ink-950/8 bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-ink-950">{j.request_number}</p>
              <StatusBadge status={j.status} />
            </div>
            <p className="mt-1 text-sm text-ink-500">{j.service_types?.name}</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-600">
              <MapPin className="h-3.5 w-3.5 text-red-600" aria-hidden="true" /> {j.pickup_address}
            </p>
          </Link>
        ))}
        {(jobs ?? []).length === 0 && (
          <p className="rounded-2xl border border-dashed border-ink-950/15 p-8 text-center text-sm text-ink-400">
            No active jobs assigned right now.
          </p>
        )}
      </div>
    </div>
  );
}
