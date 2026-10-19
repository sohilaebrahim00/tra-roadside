"use client";

import { useRef } from "react";
import { Phone, LifeBuoy, Radio, MapPin } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/content/business";
import { RouteGraphic } from "./route-graphic";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CinematicBackgroundVideo } from "@/components/media/cinematic-background-video";
import { gsap } from "@/lib/gsap/register";
import { SplitText } from "gsap/SplitText";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDListElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      // CTAs (ctaRef) are deliberately never part of this timeline and never
      // touched by gsap.set — Call Now / Request Help must be visible and
      // clickable from the very first paint, not fade in after JS runs.
      if (reduceMotion || !headlineRef.current) return;

      const isMobile = window.matchMedia("(max-width: 640px)").matches;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (isMobile) {
        // Skip SplitText's per-word DOM split on small/slower devices — a
        // single whole-heading fade is materially cheaper and just as clear.
        gsap.set([badgeRef.current, headlineRef.current, paraRef.current, statsRef.current], { opacity: 0, y: 14 });
        gsap.set(graphicRef.current, { opacity: 0, y: 20 });
        tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.4 })
          .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
          .to(paraRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.25")
          .to(statsRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2")
          .to(graphicRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.35");
        return;
      }

      gsap.registerPlugin(SplitText);
      const split = new SplitText(headlineRef.current, { type: "words", wordsClass: "inline-block" });

      gsap.set(split.words, { opacity: 0, y: "0.6em" });
      gsap.set([badgeRef.current, paraRef.current, statsRef.current], { opacity: 0, y: 16 });
      gsap.set(graphicRef.current, { opacity: 0, y: 24, scale: 0.97 });

      tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.5 })
        .to(split.words, { opacity: 1, y: 0, duration: 0.7, stagger: 0.05 }, "-=0.2")
        .to(paraRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.35")
        .to(statsRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .to(graphicRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.7 }, "-=0.6");

      return () => {
        split.revert();
      };
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-ink-950 text-white">
      <CinematicBackgroundVideo placement="home-hero-background" overlay="strong" priority />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_0%,rgba(224,32,43,0.25),transparent),radial-gradient(ellipse_50%_40%_at_10%_100%,rgba(242,148,28,0.15),transparent)]"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pt-10 pb-10 sm:px-6 sm:pb-16 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:pt-20 lg:pb-24">
        <div>
          <span
            ref={badgeRef}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/80"
          >
            <Radio className="h-3.5 w-3.5 animate-pulse text-amber-400" aria-hidden="true" />
            24/7 Dispatch Available
          </span>

          <h1
            ref={headlineRef}
            className="mt-6 font-display text-[2.6rem] font-bold uppercase leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-[3.4rem]"
          >
            Stranded? Help Is Already
            <span className="text-red-500"> Closer</span> Than You Think.
          </h1>

          <p ref={paraRef} className="mt-5 max-w-lg text-lg text-white/70">
            Fast 24/7 roadside assistance across Dallas–Fort Worth, with live driver
            tracking from the moment help is on the way.
          </p>

          <div ref={ctaRef} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <MagneticButton>
              <Button href="/request" size="xl" icon={<LifeBuoy className="h-5 w-5" aria-hidden="true" />}>
                Request Roadside Help
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                href={BUSINESS.phoneHref}
                variant="outline"
                size="xl"
                className="border-white/25 text-white hover:bg-white/10"
                icon={<Phone className="h-5 w-5" aria-hidden="true" />}
              >
                Call Now
              </Button>
            </MagneticButton>
          </div>

          <dl ref={statsRef} className="mt-10 grid max-w-md grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-white/50">Average arrival</dt>
              <dd className="mt-0.5 font-display text-xl font-semibold">~30 minutes</dd>
            </div>
            <div>
              <dt className="text-white/50">Coverage</dt>
              <dd className="mt-0.5 font-display text-xl font-semibold">27 DFW cities</dd>
            </div>
          </dl>

          {/* Phones: the live-tracking idea as one small circle and a line of
              text, instead of the full route card, which cost ~350px of
              scroll before the services. */}
          <div className="mt-6 flex items-center gap-3 lg:hidden">
            <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-red-600/15 ring-1 ring-red-500/40">
              <span className="absolute inset-0 animate-ping rounded-full ring-1 ring-red-500/25 motion-reduce:animate-none" aria-hidden="true" />
              <MapPin className="h-5 w-5 text-amber-400" aria-hidden="true" />
            </span>
            <p className="text-sm text-white/75">
              <span className="font-semibold text-white">Live tracking link</span> with every request
            </p>
          </div>
        </div>

        <div ref={graphicRef} className="relative mx-auto hidden w-full max-w-md lg:block lg:max-w-none">
          <RouteGraphic />
        </div>
      </div>
    </section>
  );
}
