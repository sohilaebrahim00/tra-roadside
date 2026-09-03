"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { getVideoForPlacement } from "@/data/media-registry";
import type { VideoPlacement } from "@/data/media-types";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap/register";
import { InViewVideo } from "./in-view-video";
import { MediaFallback } from "./media-fallback";
import { Eyebrow } from "@/components/ui/section-heading";

/**
 * Video starts as a small circular window and expands (via a scrubbed
 * `clip-path: circle()`) as the section scrolls past. Uses `position:
 * sticky` rather than GSAP `pin: true` — sticky is native browser scrolling
 * (no spacer-element juggling, no mobile Safari pin quirks) and the scroll
 * distance is just a tall wrapper around it, so there is no scroll-jacking:
 * a fast flick-scroll simply skips through the effect, exactly like any
 * other tall section.
 */
export function CircularScrollVideo({
  placement,
  eyebrow,
  title,
  description,
}: {
  placement: VideoPlacement;
  eyebrow: string;
  title: string;
  description: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const video = getVideoForPlacement(placement);

  useGSAP(
    () => {
      registerGsap();
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion || !frameRef.current) {
        gsap.set(frameRef.current, { clipPath: "circle(150% at 50% 50%)" });
        gsap.set(captionRef.current, { opacity: 1, y: 0 });
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 1023.98px)",
          isDesktop: "(min-width: 1024px)",
        },
        (context) => {
          const { isMobile } = context.conditions as { isMobile: boolean };
          const startRadius = isMobile ? 22 : 12;

          gsap.set(frameRef.current, { clipPath: `circle(${startRadius}% at 50% 50%)` });
          gsap.set(captionRef.current, { opacity: 0, y: 20 });

          // Absolute viewport-relative start/end (not "top top" + a large
          // relative "+=Xvh") so the reveal begins as soon as the section
          // enters from the bottom of the screen and is fully expanded well
          // before it reaches the top — never a late trigger that forces
          // scrolling deep into the section first, and never a long tail
          // that bleeds into "How It Works". Mobile gets an even earlier
          // start and a shorter total window.
          const trigger = ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: isMobile ? "top 92%" : "top 85%",
            end: isMobile ? "top 30%" : "top 15%",
            scrub: 0.6,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const radius = startRadius + (150 - startRadius) * self.progress;
              gsap.set(frameRef.current, { clipPath: `circle(${radius}% at 50% 50%)` });
              gsap.set(captionRef.current, { opacity: self.progress, y: 20 * (1 - self.progress) });
            },
          });

          // Re-measure once the video's real intrinsic size is known and
          // once web fonts finish swapping in (the caption uses the display
          // font) — either can shift layout slightly after the trigger's
          // start/end pixel offsets were first cached.
          const videoEl = frameRef.current?.querySelector("video");
          const refresh = () => ScrollTrigger.refresh();
          videoEl?.addEventListener("loadedmetadata", refresh);
          document.fonts?.ready?.then(refresh);

          return () => {
            trigger.kill();
            videoEl?.removeEventListener("loadedmetadata", refresh);
          };
        }
      );

      return () => mm.revert();
    },
    { scope: wrapperRef }
  );

  return (
    <section ref={wrapperRef} className="relative bg-ink-950 py-24 sm:py-32">
      <div className="sticky top-24 mx-auto flex max-w-5xl flex-col items-center px-4">
        <div
          ref={frameRef}
          className="relative aspect-video w-full overflow-hidden rounded-[2rem] bg-ink-900"
          style={{ clipPath: "circle(12% at 50% 50%)" }}
        >
          {video ? (
            <InViewVideo
              src={video.source}
              // Deliberately NOT passing mobileSrc. The mobile encode is a 9:16
              // portrait clip, which is right for a full-bleed background but
              // wrong here: this frame is a fixed 16:9 box, and object-cover
              // on a portrait source inside it shows barely a third of the
              // frame. The landscape encode fits this container exactly.
              poster={video.poster}
              title={video.altText}
              objectPosition={video.objectPosition}
              loop={video.loop}
              autoplay={video.autoplay}
              fallbackLabel={placement}
            />
          ) : (
            <MediaFallback label={placement} />
          )}
        </div>

        <div ref={captionRef} className="mt-8 max-w-xl text-center text-white">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-semibold uppercase tracking-tight sm:text-3xl">{title}</h2>
          <p className="mt-3 text-white/70">{description}</p>
        </div>
      </div>
    </section>
  );
}
