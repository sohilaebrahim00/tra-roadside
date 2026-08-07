"use server";

import { revalidatePath } from "next/cache";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function addVideo(input: { title: string; youtubeId?: string; videoUrl?: string; category: string }) {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.from("videos").insert({
    title: input.title,
    youtube_id: input.youtubeId || null,
    video_url: input.videoUrl || null,
    category: input.category || "General",
    poster_url: input.youtubeId ? `https://i.ytimg.com/vi/${input.youtubeId}/hqdefault.jpg` : null,
  });
  if (error) throw new Error(error.message);
  revalidatePath("/admin/videos");
  revalidatePath("/videos");
}

export async function deleteVideo(id: string) {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.from("videos").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/videos");
  revalidatePath("/videos");
}
