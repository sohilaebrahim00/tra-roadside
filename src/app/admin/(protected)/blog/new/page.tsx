import { createServerSupabaseClient } from "@/lib/supabase/server";
import { BlogPostForm } from "@/components/admin/blog-post-form";

export default async function NewBlogPostPage() {
  const supabase = await createServerSupabaseClient();
  const { data: categories } = await supabase.from("blog_categories").select("id, name").order("name");

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">New Post</h1>
      <div className="mt-5">
        <BlogPostForm categories={categories ?? []} />
      </div>
    </div>
  );
}
