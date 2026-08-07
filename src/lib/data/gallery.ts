import { createPublicSupabaseClient } from "@/lib/supabase/public";
import { isDemoMode } from "@/lib/env";

export interface GalleryItem {
  id: string;
  title: string;
  alt_text: string;
  category: string;
  image_url: string;
  sort_order: number;
}

/**
 * Intentionally returns [] in demo mode / on error rather than stock or
 * AI-generated placeholders — the spec explicitly forbids fake work photos.
 * Real jobs get uploaded through the admin Gallery manager.
 */
export async function getGalleryItems(): Promise<GalleryItem[]> {
  if (isDemoMode()) return [];
  try {
    const supabase = createPublicSupabaseClient();
    const { data, error } = await supabase
      .from("gallery_items")
      .select("id, title, alt_text, category, image_url, sort_order")
      .eq("is_published", true)
      .order("sort_order", { ascending: true });
    if (error) return [];
    return data ?? [];
  } catch {
    return [];
  }
}
