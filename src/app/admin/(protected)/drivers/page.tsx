import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { InviteDriverForm } from "@/components/admin/invite-driver-form";

interface DriverRow {
  id: string;
  status: string;
  vehicle_description: string | null;
  location_sharing_active: boolean;
  profiles: { full_name: string; phone: string | null; is_active: boolean } | null;
}

const STATUS_TONE: Record<string, string> = {
  available: "bg-success-600/10 text-success-600",
  en_route: "bg-amber-500/10 text-amber-600",
  off_duty: "bg-ink-950/8 text-ink-500",
};

export default async function AdminDriversPage() {
  const supabase = await createServerSupabaseClient();
  const { data: drivers } = await supabase
    .from("drivers")
    .select("id, status, vehicle_description, location_sharing_active, profiles(full_name, phone, is_active)")
    .returns<DriverRow[]>();

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">Drivers</h1>
        <InviteDriverForm />
      </div>

      <div className="mt-5 overflow-x-auto rounded-2xl border border-ink-950/8 bg-white dark:border-white/10 dark:bg-ink-900">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead className="border-b border-ink-950/8 text-xs uppercase tracking-wide text-ink-400 dark:border-white/10">
            <tr>
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Phone</th>
              <th className="px-5 py-3">Vehicle</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Location Sharing</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-950/8 dark:divide-white/10">
            {(drivers ?? []).map((d) => (
              <tr key={d.id} className="hover:bg-paper-50 dark:hover:bg-white/5">
                <td className="px-5 py-3">
                  <Link href={`/admin/drivers/${d.id}`} className="font-semibold text-red-600">
                    {d.profiles?.full_name ?? "Unknown"}
                  </Link>
                  {!d.profiles?.is_active && <span className="ml-2 text-xs text-ink-400">(inactive)</span>}
                </td>
                <td className="px-5 py-3 text-ink-700 dark:text-ink-200">{d.profiles?.phone ?? "—"}</td>
                <td className="px-5 py-3 text-ink-700 dark:text-ink-200">{d.vehicle_description ?? "—"}</td>
                <td className="px-5 py-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${STATUS_TONE[d.status] ?? ""}`}>
                    {d.status.replace("_", " ")}
                  </span>
                </td>
                <td className="px-5 py-3 text-ink-500 dark:text-ink-300">{d.location_sharing_active ? "Active" : "Off"}</td>
              </tr>
            ))}
            {(drivers ?? []).length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-ink-400">
                  No drivers yet — invite your first driver above.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
