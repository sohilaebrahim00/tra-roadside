import { createPublicSupabaseClient } from "@/lib/supabase/public";
import { isDemoMode } from "@/lib/env";

export interface VideoItem {
  id: string;
  title: string;
  description: string | null;
  youtube_id: string | null;
  video_url: string | null;
  poster_url: string | null;
  duration_seconds: number | null;
  category: string;
}

export async function getVideos(): Promise<VideoItem[]> {
  if (isDemoMode()) return [];
  try {
    const supabase = createPublicSupabaseClient();
    const { data, error } = await supabase
      .from("videos")
      .select("id, title, description, youtube_id, video_url, poster_url, duration_seconds, category")
      .eq("is_published", true)
      .order("sort_order", { ascending: true });
    if (error) return [];
    return data ?? [];
  } catch {
    return [];
  }
}
