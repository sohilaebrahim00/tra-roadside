import { cn } from "@/lib/utils/cn";
import { getVideoForPlacement } from "@/data/media-registry";
import type { GeneratedVideoItem, VideoPlacement } from "@/data/media-types";
import { InViewVideo } from "./in-view-video";
import { MediaFallback } from "./media-fallback";

const OVERLAY_CLASSES = {
  none: "",
  soft: "bg-gradient-to-b from-ink-950/40 via-ink-950/20 to-ink-950/50",
  medium: "bg-gradient-to-b from-ink-950/65 via-ink-950/45 to-ink-950/75",
  strong: "bg-gradient-to-b from-ink-950/85 via-ink-950/70 to-ink-950/90",
} as const;

/**
 * Full-bleed absolutely-positioned background video layer for a section.
 * The parent section must be `position: relative` and stack its real
 * content above this with `position: relative; z-index: 1+`. Renders the
 * branded MediaFallback automatically when nothing is registered for the
 * given placement yet.
 */
export function CinematicBackgroundVideo({
  placement,
  video: videoOverride,
  overlay = "medium",
  className,
  priority = false,
}: {
  placement: VideoPlacement;
  /** Resolved video to use instead of looking up `placement` (e.g. a per-service clip). Falls back to `placement` lookup, then the branded empty state. */
  video?: GeneratedVideoItem | null;
  overlay?: keyof typeof OVERLAY_CLASSES;
  className?: string;
  /** Hero only — loads immediately with preload="metadata" instead of waiting until near-viewport. */
  priority?: boolean;
}) {
  const video = videoOverride ?? getVideoForPlacement(placement);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {video ? (
        <InViewVideo
          src={video.source}
          mobileSrc={video.mobileSource}
          poster={video.poster}
          title={video.altText}
          objectPosition={video.objectPosition}
          loop={video.loop}
          autoplay={video.autoplay}
          priority={priority}
          fallbackLabel={placement}
        />
      ) : (
        <MediaFallback label={placement} />
      )}
      {overlay !== "none" && <div className={cn("absolute inset-0", OVERLAY_CLASSES[overlay])} />}
    </div>
  );
}
