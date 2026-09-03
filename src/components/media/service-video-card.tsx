"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { requestPlayback, releasePlayback } from "@/lib/media/playback-manager";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { MediaFallback } from "./media-fallback";
import type { GeneratedVideoItem } from "@/data/media-types";

export interface ServiceVideoCardProps {
  href: string;
  name: string;
  summary: string;
  icon: LucideIcon;
  video: GeneratedVideoItem;
}

const MAX_LOAD_RETRIES = 2;

/**
 * Premium service card variant for services that have a real preview clip
 * registered. Desktop: plays muted on hover, resets on leave. Touch: plays
 * once ~60% visible, coordinated with every other card/video on the page so
 * only one plays at a time. `preload="none"` is what actually prevents any
 * network activity until playback is requested — `<source>` elements are
 * always present in the DOM from the first render, matching InViewVideo:
 * inserting them dynamically after mount (gated behind "near viewport")
 * proved unreliable in practice (an `error` event with no MediaError
 * populated, i.e. the browser aborting an in-progress resource-selection
 * restart rather than a real decode/network failure).
 */
export function ServiceVideoCard({ href, name, summary, icon: Icon, video }: ServiceVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const retriesRef = useRef(0);
  const [errored, setErrored] = useState(false);
  const [shouldLoadSource, setShouldLoadSource] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldLoadSource) return;
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadSource(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoadSource]);

  useEffect(() => {
    const el = videoRef.current;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!el || errored || reduceMotion || canHover || !shouldLoadSource) return; // touch-only path below

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) requestPlayback(el);
        else releasePlayback(el);
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      releasePlayback(el);
    };
  }, [errored, reduceMotion, shouldLoadSource]);

  function handleMouseEnter() {
    const el = videoRef.current;
    if (!el || errored || reduceMotion || !shouldLoadSource) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    requestPlayback(el);
  }

  function handleMouseLeave() {
    const el = videoRef.current;
    if (!el) return;
    releasePlayback(el);
    el.currentTime = 0;
  }

  // A dynamically-inserted <source> occasionally needs a beat before the
  // browser settles on it — retry a couple of times before giving up and
  // showing the branded fallback instead of a broken preview.
  function handleError() {
    const el = videoRef.current;
    if (el && retriesRef.current < MAX_LOAD_RETRIES) {
      retriesRef.current += 1;
      window.setTimeout(() => el.load(), 300 * retriesRef.current);
      return;
    }
    setErrored(true);
  }

  return (
    <Link
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-950/8 bg-white transition-all hover:-translate-y-0.5 hover:border-red-600/30 hover:shadow-lg hover:shadow-red-600/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-950">
        {errored ? (
          <MediaFallback label={video.id} />
        ) : (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            style={{ objectPosition: video.objectPosition }}
            poster={shouldLoadSource ? video.poster : undefined}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            onError={handleError}
          >
            {/* Only the landscape encode: this card is a fixed 4:3 box, and the
                portrait mobile encode would be cropped to roughly a third of the
                frame by object-cover. Sized for a background, wrong for a card. */}
            <source src={video.source} />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-red-600 backdrop-blur">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        {/* Never claim a preview is available once playback has actually failed. */}
        {!errored && (
          <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-white">
            Preview
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold tracking-tight text-ink-950">{name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{summary}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-red-600 opacity-0 transition-opacity group-hover:opacity-100">
          Learn more <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
