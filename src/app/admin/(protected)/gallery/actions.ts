"use server";

import { revalidatePath } from "next/cache";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";

export async function uploadGalleryItem(formData: FormData) {
  const supabase = await createServerSupabaseClient();
  const file = formData.get("file");
  const title = String(formData.get("title") ?? "");
  const altText = String(formData.get("altText") ?? title);
  const category = String(formData.get("category") ?? "General");

  if (!(file instanceof File) || !title) throw new Error("Title and image are required");

  const admin = createAdminSupabaseClient();
  const path = `gallery/${Date.now()}-${file.name}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  const { error: uploadErr } = await admin.storage.from("cms-media").upload(path, buffer, { contentType: file.type });
  if (uploadErr) throw new Error(uploadErr.message);

  const { data: publicUrl } = admin.storage.from("cms-media").getPublicUrl(path);

  const { error } = await supabase.from("gallery_items").insert({
    title,
    alt_text: altText,
    category,
    image_url: publicUrl.publicUrl,
  });
  if (error) throw new Error(error.message);

  revalidatePath("/admin/gallery");
  revalidatePath("/gallery");
}

export async function deleteGalleryItem(id: string) {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.from("gallery_items").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/gallery");
  revalidatePath("/gallery");
}
