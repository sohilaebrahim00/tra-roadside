"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { upsertBlogPost, type BlogPostInput } from "@/app/admin/(protected)/blog/actions";

interface Category {
  id: string;
  name: string;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function BlogPostForm({
  categories,
  initial,
}: {
  categories: Category[];
  initial?: Partial<BlogPostInput> & { id?: string };
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(Boolean(initial?.slug));

  function handleSubmit(formData: FormData) {
    setError(null);
    const input: BlogPostInput = {
      id: initial?.id,
      title: String(formData.get("title") ?? ""),
      slug: String(formData.get("slug") ?? ""),
      excerpt: String(formData.get("excerpt") ?? ""),
      content: String(formData.get("content") ?? ""),
      categoryId: String(formData.get("categoryId") ?? "") || null,
      status: (formData.get("status") as "draft" | "published") ?? "draft",
      seoTitle: String(formData.get("seoTitle") ?? ""),
      seoDescription: String(formData.get("seoDescription") ?? ""),
    };
    startTransition(async () => {
      try {
        await upsertBlogPost(input);
        router.push("/admin/blog");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to save post");
      }
    });
  }

  return (
    <form action={handleSubmit} className="max-w-3xl space-y-4">
      <label className="block text-sm font-medium text-ink-800 dark:text-ink-100">
        Title
        <input
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (!slugTouched) setSlug(slugify(e.target.value));
          }}
          required
          className="mt-1.5 w-full rounded-xl border border-ink-950/15 px-3.5 py-2.5 dark:border-white/15 dark:bg-ink-900"
        />
      </label>
      <label className="block text-sm font-medium text-ink-800 dark:text-ink-100">
        Slug
        <input
          name="slug"
          value={slug}
          onChange={(e) => {
            setSlug(e.target.value);
            setSlugTouched(true);
          }}
          required
          className="mt-1.5 w-full rounded-xl border border-ink-950/15 px-3.5 py-2.5 font-mono text-sm dark:border-white/15 dark:bg-ink-900"
        />
      </label>
      <label className="block text-sm font-medium text-ink-800 dark:text-ink-100">
        Excerpt
        <textarea name="excerpt" defaultValue={initial?.excerpt} rows={2} className="mt-1.5 w-full rounded-xl border border-ink-950/15 px-3.5 py-2.5 dark:border-white/15 dark:bg-ink-900" />
      </label>
      <label className="block text-sm font-medium text-ink-800 dark:text-ink-100">
        Content
        <textarea name="content" defaultValue={initial?.content} required rows={14} className="mt-1.5 w-full rounded-xl border border-ink-950/15 px-3.5 py-2.5 font-mono text-sm dark:border-white/15 dark:bg-ink-900" />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink-800 dark:text-ink-100">
          Category
          <select name="categoryId" defaultValue={initial?.categoryId ?? ""} className="mt-1.5 w-full rounded-xl border border-ink-950/15 px-3.5 py-2.5 dark:border-white/15 dark:bg-ink-900">
            <option value="">None</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-ink-800 dark:text-ink-100">
          Status
          <select name="status" defaultValue={initial?.status ?? "draft"} className="mt-1.5 w-full rounded-xl border border-ink-950/15 px-3.5 py-2.5 dark:border-white/15 dark:bg-ink-900">
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-ink-800 dark:text-ink-100">
        SEO title
        <input name="seoTitle" defaultValue={initial?.seoTitle} className="mt-1.5 w-full rounded-xl border border-ink-950/15 px-3.5 py-2.5 dark:border-white/15 dark:bg-ink-900" />
      </label>
      <label className="block text-sm font-medium text-ink-800 dark:text-ink-100">
        SEO description
        <textarea name="seoDescription" defaultValue={initial?.seoDescription} rows={2} className="mt-1.5 w-full rounded-xl border border-ink-950/15 px-3.5 py-2.5 dark:border-white/15 dark:bg-ink-900" />
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        disabled={isPending}
        className="flex h-11 items-center gap-2 rounded-full bg-red-600 px-6 text-sm font-bold text-white disabled:opacity-60"
      >
        {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
        Save Post
      </button>
    </form>
  );
}
