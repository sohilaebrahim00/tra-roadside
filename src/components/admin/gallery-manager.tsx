"use client";

import { useRef, useState, useTransition } from "react";
import Image from "next/image";
import { Loader2, Trash2, Upload } from "lucide-react";
import { uploadGalleryItem, deleteGalleryItem } from "@/app/admin/(protected)/gallery/actions";

interface GalleryItem {
  id: string;
  title: string;
  alt_text: string;
  category: string;
  image_url: string;
}

export function GalleryManager({ items }: { items: GalleryItem[] }) {
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
              await uploadGalleryItem(formData);
              formRef.current?.reset();
            } catch (err) {
              setError(err instanceof Error ? err.message : "Upload failed");
            }
          })
        }
        className="flex flex-wrap items-end gap-3 rounded-2xl border border-ink-950/8 bg-white p-4 dark:border-white/10 dark:bg-ink-900"
      >
        <label className="text-sm">
          <span className="mb-1 block text-ink-700 dark:text-ink-200">Image</span>
          <input type="file" name="file" accept="image/*" required className="text-sm" />
        </label>
        <input name="title" placeholder="Title" required className="h-10 rounded-lg border border-ink-950/15 px-3 text-sm dark:border-white/15 dark:bg-ink-800" />
        <input name="category" placeholder="Category" className="h-10 rounded-lg border border-ink-950/15 px-3 text-sm dark:border-white/15 dark:bg-ink-800" />
        <button
          disabled={isPending}
          className="flex h-10 items-center gap-1.5 rounded-lg bg-red-600 px-4 text-sm font-semibold text-white disabled:opacity-60"
        >
          {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
          Upload
        </button>
      </form>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.id} className="group relative aspect-square overflow-hidden rounded-xl border border-ink-950/8 dark:border-white/10">
            <Image src={item.image_url} alt={item.alt_text} fill className="object-cover" sizes="25vw" />
            <button
              onClick={() => startTransition(() => deleteGalleryItem(item.id))}
              className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100"
              aria-label="Delete"
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
            </button>
            <span className="absolute inset-x-0 bottom-0 truncate bg-gradient-to-t from-black/70 to-transparent p-2 text-xs text-white">
              {item.title}
            </span>
          </div>
        ))}
        {items.length === 0 && <p className="col-span-full text-sm text-ink-400">No gallery images yet.</p>}
      </div>
    </div>
  );
}
