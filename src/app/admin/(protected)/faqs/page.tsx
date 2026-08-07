import { createServerSupabaseClient } from "@/lib/supabase/server";
import { FaqManager } from "@/components/admin/faq-manager";

export default async function AdminFaqsPage() {
  const supabase = await createServerSupabaseClient();
  const { data: faqs } = await supabase.from("faqs").select("id, category, question, answer, sort_order, is_published").order("sort_order");

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">FAQs</h1>
      <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">Changes appear on the public FAQ page immediately.</p>
      <div className="mt-5">
        <FaqManager faqs={faqs ?? []} />
      </div>
    </div>
  );
}
