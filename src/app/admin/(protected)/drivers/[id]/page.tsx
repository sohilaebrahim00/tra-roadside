import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { StatusBadge } from "@/components/admin/status-badge";

interface DriverDetailRow {
  id: string;
  status: string;
  vehicle_description: string | null;
  license_plate: string | null;
  location_sharing_active: boolean;
  profiles: { full_name: string; phone: string | null; is_active: boolean } | null;
}

export default async function AdminDriverDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createServerSupabaseClient();

  const { data: driver } = await supabase
    .from("drivers")
    .select("id, status, vehicle_description, license_plate, location_sharing_active, profiles(full_name, phone, is_active)")
    .eq("id", id)
    .maybeSingle()
    .returns<DriverDetailRow>();

  if (!driver) notFound();

  const { data: jobs } = await supabase
    .from("service_requests")
    .select("id, request_number, status, created_at")
    .eq("assigned_driver_id", id)
    .order("created_at", { ascending: false })
    .limit(20);

  return (
    <div>
      <Link href="/admin/drivers" className="flex items-center gap-1 text-sm font-medium text-ink-500 hover:text-ink-900 dark:text-ink-300">
        <ChevronLeft className="h-4 w-4" aria-hidden="true" /> All drivers
      </Link>

      <h1 className="mt-3 font-display text-2xl font-semibold text-ink-950 dark:text-white">{driver.profiles?.full_name}</h1>
      <p className="text-sm text-ink-500 dark:text-ink-300">{driver.profiles?.phone} · {driver.vehicle_description ?? "No vehicle on file"}</p>

      <div className="mt-6 rounded-2xl border border-ink-950/8 bg-white dark:border-white/10 dark:bg-ink-900">
        <div className="border-b border-ink-950/8 px-5 py-4 dark:border-white/10">
          <h2 className="font-display text-base font-semibold text-ink-950 dark:text-white">Job history</h2>
        </div>
        <div className="divide-y divide-ink-950/8 dark:divide-white/10">
          {(jobs ?? []).map((j) => (
            <Link key={j.id} href={`/admin/requests/${j.id}`} className="flex items-center justify-between px-5 py-3.5 hover:bg-paper-50 dark:hover:bg-white/5">
              <div>
                <p className="text-sm font-semibold text-ink-900 dark:text-white">{j.request_number}</p>
                <p className="text-xs text-ink-400">{new Date(j.created_at).toLocaleString()}</p>
              </div>
              <StatusBadge status={j.status} />
            </Link>
          ))}
          {(jobs ?? []).length === 0 && <p className="px-5 py-8 text-center text-sm text-ink-400">No jobs assigned yet.</p>}
        </div>
      </div>
    </div>
  );
}
