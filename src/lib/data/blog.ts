import { createPublicSupabaseClient } from "@/lib/supabase/public";
import { isDemoMode } from "@/lib/env";
import { BLOG_FALLBACK, type BlogPostFull, type BlogPostSummary } from "@/lib/content/blog";

interface BlogPostRow {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  cover_image_url: string | null;
  author_name: string;
  published_at: string | null;
  blog_categories: { name: string } | null;
}

interface BlogPostFullRow extends BlogPostRow {
  content: string;
  updated_at: string;
  seo_title: string | null;
  seo_description: string | null;
  og_image_url: string | null;
}

export async function getBlogPosts(): Promise<BlogPostSummary[]> {
  if (isDemoMode()) return BLOG_FALLBACK;
  try {
    const supabase = createPublicSupabaseClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, slug, title, excerpt, cover_image_url, author_name, published_at, blog_categories(name)")
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .returns<BlogPostRow[]>();
    if (error || !data) return BLOG_FALLBACK;
    return data.map((row) => ({
      id: row.id,
      slug: row.slug,
      title: row.title,
      excerpt: row.excerpt,
      cover_image_url: row.cover_image_url,
      author_name: row.author_name,
      published_at: row.published_at,
      category: row.blog_categories?.name ?? null,
    }));
  } catch {
    return BLOG_FALLBACK;
  }
}

export async function getBlogPost(slug: string): Promise<BlogPostFull | null> {
  if (isDemoMode()) return BLOG_FALLBACK.find((p) => p.slug === slug) ?? null;
  try {
    const supabase = createPublicSupabaseClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        "id, slug, title, excerpt, content, cover_image_url, author_name, published_at, updated_at, seo_title, seo_description, og_image_url, blog_categories(name)"
      )
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle()
      .returns<BlogPostFullRow>();
    if (error || !data) return null;
    const { blog_categories, ...rest } = data;
    return { ...rest, category: blog_categories?.name ?? null };
  } catch {
    return null;
  }
}
