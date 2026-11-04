import { createPublicSupabaseClient } from "@/lib/supabase/public";
import { isDemoMode } from "@/lib/env";
import { FAQS_FALLBACK, type FaqItem } from "@/lib/content/faqs";
import { roadsideFaqs } from "@/lib/content/quick-answers";

export async function getFaqs(): Promise<FaqItem[]> {
  if (isDemoMode()) return [...roadsideFaqs(), ...FAQS_FALLBACK];

  try {
    const supabase = createPublicSupabaseClient();
    const { data, error } = await supabase
      .from("faqs")
      .select("id, category, question, answer")
      .eq("is_published", true)
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) return [...roadsideFaqs(), ...FAQS_FALLBACK];
    return [...roadsideFaqs(), ...data];
  } catch {
    return [...roadsideFaqs(), ...FAQS_FALLBACK];
  }
}
