"use server";

import { revalidatePath } from "next/cache";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export interface BlogPostInput {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  categoryId: string | null;
  status: "draft" | "published";
  seoTitle: string;
  seoDescription: string;
}

export async function upsertBlogPost(input: BlogPostInput) {
  const supabase = await createServerSupabaseClient();
  const payload = {
    title: input.title,
    slug: input.slug,
    excerpt: input.excerpt || null,
    content: input.content,
    category_id: input.categoryId,
    status: input.status,
    published_at: input.status === "published" ? new Date().toISOString() : null,
    seo_title: input.seoTitle || null,
    seo_description: input.seoDescription || null,
  };

  const { error } = input.id
    ? await supabase.from("blog_posts").update(payload).eq("id", input.id)
    : await supabase.from("blog_posts").insert(payload);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  revalidatePath(`/blog/${input.slug}`);
}

export async function deleteBlogPost(id: string) {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
}
