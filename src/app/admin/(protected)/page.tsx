import Link from "next/link";
import { ClipboardList, Truck, UserCheck, CheckCircle2, ArrowUpRight } from "lucide-react";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { ACTIVE_STATUSES, type RequestStatus } from "@/lib/types/domain";

interface RecentRequestRow {
  id: string;
  request_number: string;
  status: RequestStatus;
  pickup_address: string;
  created_at: string;
  customers: { full_name: string } | null;
}

export default async function AdminDashboardPage() {
  const supabase = await createServerSupabaseClient();

  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const [{ count: newCount }, { count: activeCount }, { count: completedToday }, { count: driversAvailable }, { count: driversEnRoute }, { data: recent }] =
    await Promise.all([
      supabase.from("service_requests").select("id", { count: "exact", head: true }).eq("status", "new"),
      supabase.from("service_requests").select("id", { count: "exact", head: true }).in("status", ACTIVE_STATUSES),
      supabase
        .from("service_requests")
        .select("id", { count: "exact", head: true })
        .eq("status", "completed")
        .gte("completed_at", startOfDay.toISOString()),
      supabase.from("drivers").select("id", { count: "exact", head: true }).eq("status", "available"),
      supabase.from("drivers").select("id", { count: "exact", head: true }).eq("status", "en_route"),
      supabase
        .from("service_requests")
        .select("id, request_number, status, pickup_address, created_at, customers(full_name)")
        .order("created_at", { ascending: false })
        .limit(8)
        .returns<RecentRequestRow[]>(),
    ]);

  const stats = [
    { label: "New Requests", value: newCount ?? 0, icon: ClipboardList, href: "/admin/requests?status=new" },
    { label: "Active Requests", value: activeCount ?? 0, icon: Truck, href: "/admin/requests" },
    { label: "Drivers Available", value: driversAvailable ?? 0, icon: UserCheck, href: "/admin/drivers" },
    { label: "Completed Today", value: completedToday ?? 0, icon: CheckCircle2, href: "/admin/requests?status=completed" },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">Dashboard</h1>
      <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">
        {driversEnRoute ?? 0} driver{(driversEnRoute ?? 0) === 1 ? "" : "s"} currently en route.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="rounded-2xl border border-ink-950/8 bg-white p-5 hover:border-red-600/30 dark:border-white/10 dark:bg-ink-900"
          >
            <s.icon className="h-5 w-5 text-red-600" aria-hidden="true" />
            <p className="mt-3 font-display text-3xl font-semibold text-ink-950 dark:text-white">{s.value}</p>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">{s.label}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-ink-950/8 bg-white dark:border-white/10 dark:bg-ink-900">
        <div className="flex items-center justify-between border-b border-ink-950/8 px-5 py-4 dark:border-white/10">
          <h2 className="font-display text-base font-semibold text-ink-950 dark:text-white">Recent requests</h2>
          <Link href="/admin/requests" className="flex items-center gap-1 text-sm font-semibold text-red-600">
            View all <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
        <div className="divide-y divide-ink-950/8 dark:divide-white/10">
          {(recent ?? []).length === 0 && <p className="px-5 py-8 text-center text-sm text-ink-400">No requests yet.</p>}
          {(recent ?? []).map((r) => (
            <Link
              key={r.id}
              href={`/admin/requests/${r.id}`}
              className="flex items-center justify-between gap-4 px-5 py-3.5 hover:bg-paper-50 dark:hover:bg-white/5"
            >
              <div>
                <p className="text-sm font-semibold text-ink-900 dark:text-white">{r.request_number}</p>
                <p className="text-xs text-ink-500 dark:text-ink-300">
                  {r.customers?.full_name ?? "—"} · {r.pickup_address}
                </p>
              </div>
              <span className="shrink-0 text-xs font-medium capitalize text-ink-400">{r.status.replace(/_/g, " ")}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
