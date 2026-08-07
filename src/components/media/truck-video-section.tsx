"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { LifeBuoy, Play, Volume2, VolumeX, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoLightbox } from "./video-lightbox";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { useSaveData } from "@/lib/hooks/use-save-data";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap/register";
import { loadYoutubeIframeApi, type YTPlayer } from "@/lib/media/youtube-iframe-api";
import { cn } from "@/lib/utils/cn";

const TRUCK_VIDEO_ID = "9nvNQNR7of0";
const TRUCK_VIDEO_TITLE = "18 Wheeler Roadside Services — TRA";

// Highest-to-lowest resolution thumbnails; i.ytimg.com is already an
// allowed next/image host (see next.config.ts) and serves identical bytes
// to img.youtube.com, so it's used for all three tiers.
const POSTER_CANDIDATES = [
  `https://i.ytimg.com/vi/${TRUCK_VIDEO_ID}/maxresdefault.jpg`,
  `https://i.ytimg.com/vi/${TRUCK_VIDEO_ID}/sddefault.jpg`,
  `https://i.ytimg.com/vi/${TRUCK_VIDEO_ID}/hqdefault.jpg`,
];

/** Autoplay lifecycle only — "reduced motion" / "save-data" skip this state machine entirely (see `autoplayDisabled`). */
type Phase = "poster" | "starting" | "started" | "blocked";

function isRectInViewport(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

/**
 * Truck Assistance video: a portrait 9:16 frame (matching the source
 * YouTube Short) that autoplays muted once substantially visible, pauses
 * off-screen/tab-hidden, and falls back to a click-to-play poster whenever
 * autoplay isn't available (reduced motion, save-data, or the browser
 * blocking it outright) — never a blank/black frame.
 */
export function TruckVideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const playerMountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const hasStartedOnceRef = useRef(false);
  const blockCheckTimeoutRef = useRef<number | null>(null);

  const reducedMotion = useReducedMotion();
  const saveData = useSaveData();
  const [posterIndex, setPosterIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("poster");
  const [muted, setMuted] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const autoplayDisabled = reducedMotion || saveData;

  useEffect(() => {
    // Reduced-motion / save-data: never request the player at all — stay on
    // the static poster (rendered via `autoplayDisabled` below, not `phase`,
    // so there's nothing to synchronize here).
    if (autoplayDisabled) return;

    const frame = frameRef.current;
    if (!frame) return;

    async function startPlayer() {
      setPhase("starting");
      try {
        const YT = await loadYoutubeIframeApi();
        if (!playerMountRef.current) return;
        playerRef.current = new YT.Player(playerMountRef.current, {
          videoId: TRUCK_VIDEO_ID,
          host: "https://www.youtube-nocookie.com",
          playerVars: {
            autoplay: 1,
            mute: 1,
            playsinline: 1,
            controls: 0,
            rel: 0,
            loop: 1,
            playlist: TRUCK_VIDEO_ID,
            modestbranding: 1,
            enablejsapi: 1,
          },
          events: {
            onReady: (e) => {
              e.target.mute();
              e.target.playVideo();
              setMuted(true);
              // Muted autoplay is rarely blocked, but some browsers/extensions
              // still stop it — if playback never actually starts, fall back
              // to a normal click-to-play poster instead of a stuck frame.
              blockCheckTimeoutRef.current = window.setTimeout(() => {
                if (playerRef.current?.getPlayerState() !== 1) setPhase("blocked");
              }, 1800);
            },
            onStateChange: (e) => {
              if (e.data === 1) {
                hasStartedOnceRef.current = true;
                setPhase("started");
              }
            },
            onError: () => setPhase("blocked"),
          },
        });
      } catch {
        setPhase("blocked");
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasStartedOnceRef.current && !playerRef.current) {
            startPlayer();
          } else {
            playerRef.current?.playVideo();
          }
        } else {
          playerRef.current?.pauseVideo();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(frame);

    function onVisibilityChange() {
      if (!playerRef.current) return;
      const el = frameRef.current;
      if (document.hidden) {
        playerRef.current.pauseVideo();
      } else if (el && isRectInViewport(el)) {
        playerRef.current.playVideo();
      }
    }
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (blockCheckTimeoutRef.current) window.clearTimeout(blockCheckTimeoutRef.current);
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [autoplayDisabled]);

  useGSAP(
    () => {
      if (reducedMotion) return;
      registerGsap();
      const el = frameRef.current;
      if (!el) return;
      gsap.set(el, { opacity: 0, y: 20, scale: 0.98 });
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => gsap.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out" }),
      });
      return () => trigger.kill();
    },
    { scope: sectionRef }
  );

  function toggleMute() {
    const player = playerRef.current;
    if (!player) return;
    if (player.isMuted()) {
      player.unMute();
      setMuted(false);
    } else {
      player.mute();
      setMuted(true);
    }
  }

  const showInlinePlayer = !autoplayDisabled;
  const posterClickable = autoplayDisabled || phase === "blocked";
  const posterFaded = !autoplayDisabled && phase === "started";

  return (
    <section
      ref={sectionRef}
      className="rounded-3xl border border-ink-950/8 bg-white p-6 dark:border-white/10 dark:bg-ink-900 sm:p-8"
    >
      <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-red-600">Watch</p>
          <h2 className="mt-1.5 font-display text-xl font-semibold text-ink-950 dark:text-white sm:text-2xl">
            18 Wheeler Roadside Services
          </h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-600 dark:text-ink-200">
            Roadside support for semi-trucks and commercial vehicles.
          </p>
          <Button
            href="/request?service=truck-assistance"
            size="md"
            className="mt-5"
            icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}
          >
            Request Truck Assistance
          </Button>
        </div>

        <div className="mx-auto w-[240px] sm:mx-0 sm:w-[260px] lg:w-[300px]">
          <div
            ref={frameRef}
            className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-ink-950 p-2 shadow-xl shadow-black/25 ring-1 ring-red-600/25"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-ink-950">
              {/* Always mounted so the started->poster handoff is a CSS
                  opacity crossfade instead of an abrupt unmount. */}
              <button
                type="button"
                onClick={posterClickable ? () => setModalOpen(true) : undefined}
                aria-label={posterClickable ? `Play video: ${TRUCK_VIDEO_TITLE}` : undefined}
                tabIndex={posterClickable ? 0 : -1}
                className={cn(
                  "absolute inset-0 z-10 transition-opacity duration-500",
                  posterFaded ? "pointer-events-none opacity-0" : "opacity-100",
                  !posterClickable && "cursor-default"
                )}
              >
                <Image
                  src={POSTER_CANDIDATES[posterIndex]}
                  alt={TRUCK_VIDEO_TITLE}
                  fill
                  className="object-cover"
                  sizes="300px"
                  onError={() => setPosterIndex((i) => Math.min(i + 1, POSTER_CANDIDATES.length - 1))}
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                {posterClickable && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform duration-200 hover:scale-105">
                      <Play className="h-6 w-6 fill-current" aria-hidden="true" />
                    </span>
                  </span>
                )}
              </button>

              {showInlinePlayer && (
                <div className="absolute inset-0 [&_iframe]:h-full [&_iframe]:w-full">
                  <div ref={playerMountRef} className="h-full w-full" />
                </div>
              )}
            </div>

            {phase === "started" && (
              <button
                type="button"
                onClick={toggleMute}
                aria-pressed={!muted}
                aria-label={muted ? "Unmute video" : "Mute video"}
                className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur transition-colors hover:bg-black/75"
              >
                {muted ? <VolumeX className="h-3.5 w-3.5" aria-hidden="true" /> : <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />}
                {muted ? "Muted" : "Sound on"}
              </button>
            )}
          </div>

          <a
            href={`https://www.youtube.com/watch?v=${TRUCK_VIDEO_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-1 text-xs text-ink-400 hover:text-red-600"
          >
            Watch on YouTube <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>

      {modalOpen && (
        <VideoLightbox title={TRUCK_VIDEO_TITLE} youtubeId={TRUCK_VIDEO_ID} onClose={() => setModalOpen(false)} />
      )}
    </section>
  );
}
