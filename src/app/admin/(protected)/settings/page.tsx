import { createServerSupabaseClient } from "@/lib/supabase/server";
import { SettingsForm } from "@/components/admin/settings-form";

export default async function AdminSettingsPage() {
  const supabase = await createServerSupabaseClient();
  const { data: settings } = await supabase.from("site_settings").select("key, value");
  const map = new Map((settings ?? []).map((s) => [s.key, s.value]));

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">Settings</h1>
      <div className="mt-5">
        <SettingsForm
          dispatchEmail={(map.get("dispatch_notification_email") as string) ?? ""}
          timeoutMinutes={(map.get("unaccepted_request_timeout_minutes") as number) ?? 10}
        />
      </div>
    </div>
  );
}
