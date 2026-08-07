import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { MediaFallback } from "./media-fallback";

export interface VideoPosterCardProps {
  title: string;
  poster?: string;
  durationSeconds?: number;
  onPlay: () => void;
  className?: string;
}

function formatDuration(seconds?: number) {
  if (!seconds) return null;
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/** Poster + play button. Opening the actual player is the parent's job (pass an onPlay handler that shows a VideoLightbox). */
export function VideoPosterCard({ title, poster, durationSeconds, onPlay, className }: VideoPosterCardProps) {
  const duration = formatDuration(durationSeconds);

  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={`Play video: ${title}`}
      className={cn(
        "group relative block aspect-video w-full overflow-hidden rounded-2xl bg-ink-900 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500",
        className
      )}
    >
      {poster ? (
        <Image
          src={poster}
          alt={title}
          fill
          className="object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-70"
          sizes="(min-width: 1024px) 33vw, 50vw"
        />
      ) : (
        <MediaFallback label={title} />
      )}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white transition-transform duration-200 group-hover:scale-110">
          <Play className="h-5 w-5 fill-current" aria-hidden="true" />
        </span>
      </span>
      {duration && (
        <span className="absolute right-2 top-2 rounded bg-black/70 px-1.5 py-0.5 text-xs font-medium text-white">{duration}</span>
      )}
      <span className="absolute inset-x-0 bottom-0 truncate bg-gradient-to-t from-black/80 to-transparent p-3 text-sm font-medium text-white">
        {title}
      </span>
    </button>
  );
}
