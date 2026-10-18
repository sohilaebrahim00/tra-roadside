"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { GalleryItem } from "@/lib/data/gallery";

/**
 * Admin-uploaded job photos (gallery_items in Supabase).
 *
 * Uploads arrive in any aspect ratio with no stored dimensions, so thumbnails
 * sit in fixed square boxes with object-cover. The previous masonry layout
 * gave every image a 400x400 intrinsic size and let it resize to its real
 * ratio on load, which shifted the whole grid as photos arrived. The
 * lightbox still shows each photo uncropped.
 */
export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.category)))], [items]);
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);
  const open = lightboxIndex !== null && Boolean(filtered[lightboxIndex]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? null : Math.min(i + 1, filtered.length - 1)));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? null : Math.max(i - 1, 0)));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, filtered.length]);

  // Move focus into the dialog when it opens and back to the thumbnail that
  // opened it when it closes, so keyboard users are not left at the top of
  // the page behind an overlay.
  useEffect(() => {
    if (open) closeRef.current?.focus();
    else openerRef.current?.focus();
  }, [open]);

  return (
    <div>
      {categories.length > 2 && (
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium",
                active === c ? "border-red-600 bg-red-600 text-white" : "border-ink-950/15 text-ink-600"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item, i) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={(e) => {
                openerRef.current = e.currentTarget;
                setLightboxIndex(i);
              }}
              aria-label={`View larger: ${item.alt_text}`}
              className="relative block aspect-square w-full overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <Image
                src={item.image_url}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </button>
          </li>
        ))}
      </ul>

      {open && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button ref={closeRef} type="button" onClick={() => setLightboxIndex(null)} className="absolute right-4 top-4 text-white" aria-label="Close">
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          {lightboxIndex > 0 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i ?? 0) - 1); }}
              className="absolute left-4 text-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" aria-hidden="true" />
            </button>
          )}
          <Image
            src={filtered[lightboxIndex].image_url}
            alt={filtered[lightboxIndex].alt_text}
            width={1200}
            height={1200}
            sizes="90vw"
            className="max-h-[85vh] w-auto max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {lightboxIndex < filtered.length - 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i ?? 0) + 1); }}
              className="absolute right-4 text-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" aria-hidden="true" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
