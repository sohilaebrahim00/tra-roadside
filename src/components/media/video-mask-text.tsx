"use client";

import { useEffect, useId, useRef, useState } from "react";
import { getVideoForPlacement } from "@/data/media-registry";
import type { VideoPlacement } from "@/data/media-types";
import { requestPlayback, releasePlayback } from "@/lib/media/playback-manager";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

const VIEW_W = 1000;
const VIEW_H = 340;

/**
 * The word occupies roughly the middle 45% of the 1000-unit viewBox. On a
 * phone that leaves the letterforms at ~41% of screen width inside a squat
 * band — the desktop composition shrunk, which reads as a small motif rather
 * than a signature.
 *
 * The fix is a narrower effective viewport on mobile, done entirely in CSS:
 * the wrapper's aspect-ratio is responsive, and `preserveAspectRatio="slice"`
 * makes the viewBox COVER that box rather than fit inside it. At 520/340 the
 * scale is driven by height, so the glyphs render ~86% of the container width
 * and the empty left/right thirds of the viewBox are cropped away — the word
 * itself (units 282–727) sits comfortably inside the retained 240–760 band.
 *
 * Deliberately NOT matchMedia: `viewBox` cannot be set from CSS, so switching
 * it in JS would mean painting the desktop composition first and snapping to
 * the mobile one after hydration. Making the WRAPPER responsive instead keeps
 * one viewBox, so the correct composition is in the very first paint — no
 * flash, and it stays right with JS disabled.
 */
const MOBILE_ASPECT = "aspect-[520/340]";
const DESKTOP_ASPECT = "sm:aspect-[1000/340]";

/**
 * Signature treatment: a large brand word with video visible only inside
 * the glyph shapes.
 *
 * The clip text and the video live inside the SAME `<svg viewBox>`
 * coordinate system (via `<clipPath><text>` + `<foreignObject>`), so they
 * can't drift out of alignment the way two separately-positioned elements
 * (e.g. an HTML heading + a CSS `mask-image` referencing a detached SVG
 * `<mask>`) can — that approach was tried first and produced visibly
 * distorted, misaligned text, because `maskContentUnits="objectBoundingBox"`
 * non-uniformly stretches text to fit the target's aspect ratio. This is
 * simpler and correct by construction.
 *
 * `<source>` elements are always present from the first render — inserting
 * them dynamically after mount proved unreliable (an `error` event with no
 * MediaError populated). `preload="none"` is what actually prevents any
 * network activity until `.play()` is called once visible.
 *
 * A real, always-rendered `<h2>` is the source of truth for accessibility.
 * It's only visible as a fallback when there's no mask to show (reduced
 * motion, no registered video, or a playback error) — otherwise it's
 * `sr-only`. It must not stay visibly rendered under an active mask: the SVG
 * only paints pixels inside the letter glyphs, so a solid heading sitting
 * behind it shows through around/behind the masked letters instead of
 * staying hidden.
 *
 * Use once as a signature moment — not a repeatable section template.
 */
export function VideoMaskText({
  word,
  placement = "home-letter-mask",
  className,
}: {
  word: string;
  placement?: VideoPlacement;
  className?: string;
}) {
  const maskId = useId();
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [errored, setErrored] = useState(false);
  const [nearViewport, setNearViewport] = useState(false);
  const reduceMotion = useReducedMotion();
  const video = getVideoForPlacement(placement);

  // Gate the poster fetch behind "near viewport" only — the <source>
  // elements are always in the DOM (see file-level note above).
  useEffect(() => {
    if (reduceMotion || nearViewport) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [reduceMotion, nearViewport]);

  useEffect(() => {
    const el = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!el || !wrapper || errored || reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && document.visibilityState === "visible") requestPlayback(el);
        else releasePlayback(el);
      },
      { threshold: 0.3 }
    );
    observer.observe(wrapper);
    return () => {
      observer.disconnect();
      releasePlayback(el);
    };
  }, [errored, reduceMotion]);

  // The SVG layer only paints pixels inside the letter glyphs — everywhere
  // else (and any edge/kerning mismatch against the HTML heading below) is
  // transparent, so the always-present heading must be visually hidden
  // whenever the mask is actually active, or its solid black text shows
  // through behind/around the masked letters. It stays a normal visible
  // heading only when there's no mask to show (reduced motion, no video
  // registered, or a playback error) — that's still its real fallback role.
  const maskActive = !reduceMotion && Boolean(video) && !errored;

  return (
    <div
      ref={wrapperRef}
      className={`relative ${MOBILE_ASPECT} ${DESKTOP_ASPECT} ${className ?? ""}`}
    >
      <h2
        className={
          maskActive
            ? "sr-only"
            : "absolute inset-0 flex select-none items-center justify-center text-center font-display text-[22vw] font-bold uppercase leading-none tracking-tight text-ink-950 sm:text-[9rem]"
        }
      >
        {word}
      </h2>

      {maskActive && video && (
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <defs>
            <clipPath id={maskId}>
              <text
                x={VIEW_W / 2}
                y={VIEW_H / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
                fontSize={VIEW_H * 0.88}
                // Negative tracking only — never a forced `textLength` fill.
                // textLength + the default lengthAdjust="spacing" was tried
                // first and looked wide by inserting large gaps *between*
                // characters to hit the target width, which reads as three
                // separate letters instead of one connected word. Overall
                // width instead comes from the container (see
                // signature-word-section.tsx) scaling this whole,
                // correctly-proportioned SVG up uniformly.
                letterSpacing={-VIEW_H * 0.04}
              >
                {word}
              </text>
            </clipPath>
          </defs>
          <foreignObject x="0" y="0" width={VIEW_W} height={VIEW_H} clipPath={`url(#${maskId})`}>
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              style={{ objectPosition: video.objectPosition, width: "100%", height: "100%" }}
              poster={nearViewport ? video.poster : undefined}
              muted
              loop
              playsInline
              preload="none"
              onError={() => setErrored(true)}
            >
              {/*
                Landscape encode at every width. The mobile encode is 9:16
                portrait, and object-cover inside this 1000x340 box crops it to
                roughly a fifth of the frame magnified ~3.2x — which under a
                mask is fatal, because the fill IS the content. Whatever
                structure the video had disappears and the glyphs read as a
                blurred wash instead of letters.
              */}
              <source src={video.source} />
            </video>
          </foreignObject>
        </svg>
      )}
    </div>
  );
}
