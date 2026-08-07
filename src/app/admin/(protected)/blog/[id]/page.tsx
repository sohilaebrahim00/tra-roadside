import { notFound } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { BlogPostForm } from "@/components/admin/blog-post-form";

export default async function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createServerSupabaseClient();

  const [{ data: post }, { data: categories }] = await Promise.all([
    supabase
      .from("blog_posts")
      .select("id, title, slug, excerpt, content, category_id, status, seo_title, seo_description")
      .eq("id", id)
      .maybeSingle(),
    supabase.from("blog_categories").select("id, name").order("name"),
  ]);

  if (!post) notFound();

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">Edit Post</h1>
      <div className="mt-5">
        <BlogPostForm
          categories={categories ?? []}
          initial={{
            id: post.id,
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt ?? "",
            content: post.content,
            categoryId: post.category_id,
            status: post.status,
            seoTitle: post.seo_title ?? "",
            seoDescription: post.seo_description ?? "",
          }}
        />
      </div>
    </div>
  );
}
