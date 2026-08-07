import { createServerSupabaseClient } from "@/lib/supabase/server";
import { VideoManager } from "@/components/admin/video-manager";

export default async function AdminVideosPage() {
  const supabase = await createServerSupabaseClient();
  const { data: items } = await supabase.from("videos").select("id, title, youtube_id, video_url, category").order("sort_order");

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">Videos</h1>
      <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">Add real service videos — these appear on the public Videos page.</p>
      <div className="mt-5">
        <VideoManager items={items ?? []} />
      </div>
    </div>
  );
}
