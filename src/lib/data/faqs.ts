import { createPublicSupabaseClient } from "@/lib/supabase/public";
import { isDemoMode } from "@/lib/env";
import { FAQS_FALLBACK, type FaqItem } from "@/lib/content/faqs";

export async function getFaqs(): Promise<FaqItem[]> {
  if (isDemoMode()) return FAQS_FALLBACK;

  try {
    const supabase = createPublicSupabaseClient();
    const { data, error } = await supabase
      .from("faqs")
      .select("id, category, question, answer")
      .eq("is_published", true)
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) return FAQS_FALLBACK;
    return data;
  } catch {
    return FAQS_FALLBACK;
  }
}
