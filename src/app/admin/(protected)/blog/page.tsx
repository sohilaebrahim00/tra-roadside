import Link from "next/link";
import { Plus } from "lucide-react";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { DeletePostButton } from "@/components/admin/delete-post-button";

export default async function AdminBlogPage() {
  const supabase = await createServerSupabaseClient();
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("id, title, slug, status, published_at, updated_at")
    .order("updated_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">Blog</h1>
        <Link href="/admin/blog/new" className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white">
          <Plus className="h-4 w-4" aria-hidden="true" /> New Post
        </Link>
      </div>

      <div className="mt-5 divide-y divide-ink-950/8 rounded-2xl border border-ink-950/8 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-ink-900">
        {(posts ?? []).map((p) => (
          <div key={p.id} className="flex items-center justify-between gap-4 px-5 py-3.5">
            <div>
              <Link href={`/admin/blog/${p.id}`} className="font-semibold text-red-600">
                {p.title}
              </Link>
              <p className="text-xs text-ink-400">
                /{p.slug} · {p.status} · updated {new Date(p.updated_at).toLocaleDateString()}
              </p>
            </div>
            <DeletePostButton id={p.id} />
          </div>
        ))}
        {(posts ?? []).length === 0 && <p className="px-5 py-10 text-center text-sm text-ink-400">No posts yet.</p>}
      </div>
    </div>
  );
}
