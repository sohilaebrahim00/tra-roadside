import { createServerSupabaseClient } from "@/lib/supabase/server";
import { OpsMap, type OpsDriver } from "@/components/admin/ops-map";

export default async function AdminMapPage() {
  const supabase = await createServerSupabaseClient();

  const { data: drivers } = await supabase
    .from("drivers")
    .select("id, status, profiles(full_name)")
    .neq("status", "off_duty")
    .returns<{ id: string; status: string; profiles: { full_name: string } | null }[]>();

  const opsDrivers: OpsDriver[] = await Promise.all(
    (drivers ?? []).map(async (d) => {
      const { data: location } = await supabase
        .from("driver_locations")
        .select("lat, lng, recorded_at")
        .eq("driver_id", d.id)
        .order("recorded_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      return {
        driverId: d.id,
        name: d.profiles?.full_name ?? "Unknown",
        status: d.status,
        lat: location?.lat ?? null,
        lng: location?.lng ?? null,
        recordedAt: location?.recorded_at ?? null,
      };
    })
  );

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">Live Operations Map</h1>
      <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">Drivers currently on duty.</p>
      <div className="mt-5">
        <OpsMap initialDrivers={opsDrivers} />
      </div>
    </div>
  );
}
