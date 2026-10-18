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

/**
 * The [DEMO] fallback is for a local install with no database. It is never
 * served by a production build: it used to be returned whenever the Supabase
 * query failed as well, which put a "[DEMO]" article on the live /blog page
 * and in the sitemap — while getBlogPost() returned null for the same slug, so
 * the sitemap advertised a URL that 404s.
 */
const DEMO_POSTS: BlogPostFull[] = process.env.NODE_ENV === "production" ? [] : BLOG_FALLBACK;

export async function getBlogPosts(): Promise<BlogPostSummary[]> {
  if (isDemoMode()) return DEMO_POSTS;
  try {
    const supabase = createPublicSupabaseClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, slug, title, excerpt, cover_image_url, author_name, published_at, blog_categories(name)")
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .returns<BlogPostRow[]>();
    // A failed query means "no posts we can serve", not "show the demo".
    if (error || !data) return [];
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
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPostFull | null> {
  if (isDemoMode()) return DEMO_POSTS.find((p) => p.slug === slug) ?? null;
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
