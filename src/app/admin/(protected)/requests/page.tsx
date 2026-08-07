import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { StatusBadge } from "@/components/admin/status-badge";
import { RealtimeRefresher } from "@/components/admin/realtime-refresher";
import { REQUEST_STATUSES, type RequestStatus } from "@/lib/types/domain";

interface RequestListRow {
  id: string;
  request_number: string;
  status: RequestStatus;
  pickup_address: string;
  created_at: string;
  customers: { full_name: string; phone: string } | null;
  service_types: { name: string } | null;
}

export default async function AdminRequestsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; q?: string }>;
}) {
  const { status, q } = await searchParams;
  const supabase = await createServerSupabaseClient();
  const statusFilter = status && REQUEST_STATUSES.includes(status as RequestStatus) ? (status as RequestStatus) : undefined;

  let query = supabase
    .from("service_requests")
    .select("id, request_number, status, pickup_address, created_at, customers(full_name, phone), service_types(name)")
    .order("created_at", { ascending: false })
    .limit(100);

  if (statusFilter) {
    query = query.eq("status", statusFilter);
  }
  if (q) {
    query = query.or(`request_number.ilike.%${q}%`);
  }

  const { data: requests } = await query.returns<RequestListRow[]>();

  return (
    <div>
      <RealtimeRefresher tables={["service_requests"]} />
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">Requests</h1>
        <form className="flex gap-2">
          <input
            type="search"
            name="q"
            defaultValue={q}
            placeholder="Search request number…"
            className="h-10 rounded-lg border border-ink-950/15 px-3 text-sm dark:border-white/15 dark:bg-ink-900"
          />
        </form>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <FilterChip href="/admin/requests" label="All" active={!status} />
        {REQUEST_STATUSES.map((s) => (
          <FilterChip key={s} href={`/admin/requests?status=${s}`} label={s.replace(/_/g, " ")} active={status === s} />
        ))}
      </div>

      <div className="mt-5 overflow-x-auto rounded-2xl border border-ink-950/8 bg-white dark:border-white/10 dark:bg-ink-900">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-ink-950/8 text-xs uppercase tracking-wide text-ink-400 dark:border-white/10">
            <tr>
              <th className="px-5 py-3">Request</th>
              <th className="px-5 py-3">Customer</th>
              <th className="px-5 py-3">Service</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Received</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-950/8 dark:divide-white/10">
            {(requests ?? []).map((r) => {
              const customer = r.customers;
              const service = r.service_types;
              return (
                <tr key={r.id} className="hover:bg-paper-50 dark:hover:bg-white/5">
                  <td className="px-5 py-3">
                    <Link href={`/admin/requests/${r.id}`} className="font-semibold text-red-600">
                      {r.request_number}
                    </Link>
                    <p className="text-xs text-ink-400">{r.pickup_address}</p>
                  </td>
                  <td className="px-5 py-3">
                    <p className="text-ink-900 dark:text-white">{customer?.full_name ?? "—"}</p>
                    <p className="text-xs text-ink-400">{customer?.phone}</p>
                  </td>
                  <td className="px-5 py-3 text-ink-700 dark:text-ink-200">{service?.name ?? "—"}</td>
                  <td className="px-5 py-3">
                    <StatusBadge status={r.status} />
                  </td>
                  <td className="px-5 py-3 text-ink-500 dark:text-ink-300">
                    {new Date(r.created_at).toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                  </td>
                </tr>
              );
            })}
            {(requests ?? []).length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-ink-400">
                  No requests match this filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FilterChip({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`rounded-full border px-3 py-1.5 text-xs font-medium capitalize ${
        active ? "border-red-600 bg-red-600 text-white" : "border-ink-950/15 text-ink-600 dark:border-white/15 dark:text-ink-200"
      }`}
    >
      {label}
    </Link>
  );
}
