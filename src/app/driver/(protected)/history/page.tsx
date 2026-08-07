import Link from "next/link";
import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getDriverSession } from "@/lib/auth/driver-session";
import { StatusBadge } from "@/components/admin/status-badge";

export default async function DriverHistoryPage() {
  const session = await getDriverSession();
  if (!session) redirect("/driver/login");
  const supabase = await createServerSupabaseClient();

  const { data: jobs } = await supabase
    .from("service_requests")
    .select("id, request_number, status, pickup_address, completed_at")
    .eq("assigned_driver_id", session.driverId)
    .in("status", ["completed", "unable_to_complete"])
    .order("completed_at", { ascending: false })
    .limit(50);

  return (
    <div className="p-4">
      <h1 className="font-display text-xl font-semibold text-ink-950">Job History</h1>
      <div className="mt-4 space-y-3">
        {(jobs ?? []).map((j) => (
          <Link key={j.id} href={`/driver/jobs/${j.id}`} className="block rounded-2xl border border-ink-950/8 bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-ink-950">{j.request_number}</p>
              <StatusBadge status={j.status} />
            </div>
            <p className="mt-1 text-sm text-ink-500">{j.pickup_address}</p>
          </Link>
        ))}
        {(jobs ?? []).length === 0 && <p className="rounded-2xl border border-dashed border-ink-950/15 p-8 text-center text-sm text-ink-400">No completed jobs yet.</p>}
      </div>
    </div>
  );
}
