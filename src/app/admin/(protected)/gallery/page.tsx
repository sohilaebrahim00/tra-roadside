import { createServerSupabaseClient } from "@/lib/supabase/server";
import { GalleryManager } from "@/components/admin/gallery-manager";

export default async function AdminGalleryPage() {
  const supabase = await createServerSupabaseClient();
  const { data: items } = await supabase.from("gallery_items").select("id, title, alt_text, category, image_url").order("sort_order");

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">Gallery</h1>
      <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">Upload real completed-job photos — these appear on the public Gallery page.</p>
      <div className="mt-5">
        <GalleryManager items={items ?? []} />
      </div>
    </div>
  );
}
