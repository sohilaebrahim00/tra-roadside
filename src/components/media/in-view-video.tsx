"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";
import { requestPlayback, releasePlayback } from "@/lib/media/playback-manager";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { useAvoidHeavyMedia } from "@/lib/hooks/use-avoid-heavy-media";
import { MediaFallback } from "./media-fallback";

export interface InViewVideoProps {
  src: string;
  mobileSrc?: string;
  poster?: string;
  title: string;
  className?: string;
  objectPosition?: string;
  loop?: boolean;
  /** Whether this video is allowed to autoplay at all once it's sufficiently in view. */
  autoplay?: boolean;
  /** Fraction of the element that must be visible before it's eligible to play. */
  visibilityThreshold?: number;
  /** Hero-only fast path: preload="metadata" instead of "none". */
  priority?: boolean;
  fallbackLabel?: string;
  fallbackTone?: "dark" | "light";
}

/**
 * Base muted/inline video primitive: plays only while sufficiently in
 * viewport AND the tab is visible, pauses otherwise, and falls back to a
 * branded static state on error or when no autoplay is desired (e.g.
 * prefers-reduced-motion). Never plays audio.
 *
 * `<source>` elements are always present in the DOM from the first render —
 * dynamically inserting them after mount (attaching them only once "near
 * viewport") turned out to be unreliable in practice (an `error` event with
 * no MediaError populated, i.e. the browser aborting an in-progress
 * resource-selection restart rather than a real decode/network failure).
 * `preload="none"` is what actually prevents any network activity — nothing
 * downloads until `.play()` is called, which only happens once the element
 * is substantially visible. This is the same pattern the hero video always
 * used, and it's the one that's proven reliable.
 */
export function InViewVideo({
  src,
  mobileSrc,
  poster,
  title,
  className,
  objectPosition = "center",
  loop = true,
  autoplay = true,
  visibilityThreshold = 0.4,
  priority = false,
  fallbackLabel,
  fallbackTone = "dark",
}: InViewVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [errored, setErrored] = useState(false);
  const [nearViewport, setNearViewport] = useState(false);
  const reduceMotion = useReducedMotion();
  const avoidHeavyMedia = useAvoidHeavyMedia();

  const showPoster = !avoidHeavyMedia && (priority || nearViewport);

  // Gate the poster fetch behind "near viewport" — <video poster> has no
  // native lazy-loading hook (unlike <img loading="lazy">), so without this
  // every below-the-fold video's poster downloads immediately on page load.
  useEffect(() => {
    if (priority || nearViewport || avoidHeavyMedia) return;
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [priority, nearViewport, avoidHeavyMedia]);

  // Play only while substantially visible and the tab is active. With
  // preload="none" this is also what triggers the actual data fetch.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || errored || reduceMotion || !autoplay || avoidHeavyMedia) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && document.visibilityState === "visible") {
          requestPlayback(video);
        } else {
          releasePlayback(video);
        }
      },
      { threshold: visibilityThreshold }
    );
    observer.observe(video);

    function handleVisibilityChange() {
      if (!video) return;
      if (document.visibilityState === "hidden") {
        video.pause();
      } else if (isElementInView(video, visibilityThreshold)) {
        requestPlayback(video);
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      releasePlayback(video);
    };
  }, [errored, reduceMotion, autoplay, visibilityThreshold, avoidHeavyMedia]);

  if (errored) {
    return <MediaFallback label={fallbackLabel} tone={fallbackTone} className={className} />;
  }

  return (
    <video
      ref={videoRef}
      className={cn("h-full w-full object-cover", className)}
      style={{ objectPosition }}
      poster={showPoster ? poster : undefined}
      muted
      loop={loop}
      playsInline
      preload={priority && !avoidHeavyMedia ? "metadata" : "none"}
      aria-label={title}
      onError={() => setErrored(true)}
    >
      {mobileSrc && <source src={mobileSrc} media="(max-width: 768px)" />}
      <source src={src} />
    </video>
  );
}

function isElementInView(el: Element, threshold: number) {
  const rect = el.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  const visibleHeight = Math.min(rect.bottom, viewHeight) - Math.max(rect.top, 0);
  return visibleHeight > 0 && visibleHeight / rect.height >= threshold;
}
