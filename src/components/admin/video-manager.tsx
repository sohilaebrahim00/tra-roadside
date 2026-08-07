"use client";

import { useRef, useState, useTransition } from "react";
import { Loader2, Trash2, Plus } from "lucide-react";
import { addVideo, deleteVideo } from "@/app/admin/(protected)/videos/actions";

interface VideoItem {
  id: string;
  title: string;
  youtube_id: string | null;
  video_url: string | null;
  category: string;
}

export function VideoManager({ items }: { items: VideoItem[] }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  return (
    <div>
      <form
        ref={formRef}
        action={(formData) =>
          startTransition(async () => {
            setError(null);
            try {
              await addVideo({
                title: String(formData.get("title") ?? ""),
                youtubeId: String(formData.get("youtubeId") ?? ""),
                videoUrl: String(formData.get("videoUrl") ?? ""),
                category: String(formData.get("category") ?? ""),
              });
              formRef.current?.reset();
            } catch (err) {
              setError(err instanceof Error ? err.message : "Failed to add video");
            }
          })
        }
        className="flex flex-wrap items-end gap-3 rounded-2xl border border-ink-950/8 bg-white p-4 dark:border-white/10 dark:bg-ink-900"
      >
        <input name="title" placeholder="Title" required className="h-10 rounded-lg border border-ink-950/15 px-3 text-sm dark:border-white/15 dark:bg-ink-800" />
        <input name="youtubeId" placeholder="YouTube video ID (optional)" className="h-10 rounded-lg border border-ink-950/15 px-3 text-sm dark:border-white/15 dark:bg-ink-800" />
        <input name="videoUrl" placeholder="Self-hosted video URL (optional)" className="h-10 rounded-lg border border-ink-950/15 px-3 text-sm dark:border-white/15 dark:bg-ink-800" />
        <input name="category" placeholder="Category" className="h-10 rounded-lg border border-ink-950/15 px-3 text-sm dark:border-white/15 dark:bg-ink-800" />
        <button disabled={isPending} className="flex h-10 items-center gap-1.5 rounded-lg bg-red-600 px-4 text-sm font-semibold text-white disabled:opacity-60">
          {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
          Add
        </button>
      </form>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

      <ul className="mt-5 divide-y divide-ink-950/8 rounded-2xl border border-ink-950/8 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-ink-900">
        {items.map((v) => (
          <li key={v.id} className="flex items-center justify-between px-5 py-3.5">
            <div>
              <p className="text-sm font-semibold text-ink-900 dark:text-white">{v.title}</p>
              <p className="text-xs text-ink-400">{v.category} · {v.youtube_id ? "YouTube" : "Self-hosted"}</p>
            </div>
            <button onClick={() => startTransition(() => deleteVideo(v.id))} className="text-ink-400 hover:text-red-600">
              <Trash2 className="h-4 w-4" aria-hidden="true" />
            </button>
          </li>
        ))}
        {items.length === 0 && <p className="px-5 py-8 text-center text-sm text-ink-400">No videos yet.</p>}
      </ul>
    </div>
  );
}
