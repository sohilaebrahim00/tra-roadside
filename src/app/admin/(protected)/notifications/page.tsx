import { createServerSupabaseClient } from "@/lib/supabase/server";
import { TemplateEditor } from "@/components/admin/template-editor";

export default async function AdminNotificationsPage() {
  const supabase = await createServerSupabaseClient();
  const { data: templates } = await supabase
    .from("notification_templates")
    .select("id, event, channel, subject, body, is_active")
    .order("event");

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">Notification Templates</h1>
      <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">
        Use {"{{placeholders}}"} like requestNumber, customerName, driverName, trackingUrl, eta.
      </p>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {(templates ?? []).map((t) => (
          <TemplateEditor key={t.id} template={t} />
        ))}
      </div>
    </div>
  );
}
