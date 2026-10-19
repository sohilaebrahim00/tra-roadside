"use client";

import { useRef } from "react";
import { Phone, LifeBuoy, Radio } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { BUSINESS, SERVICE_AREAS } from "@/lib/content/business";
import { getService } from "@/lib/content/services";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CinematicBackgroundVideo } from "@/components/media/cinematic-background-video";
import { RouteGraphic } from "./route-graphic";
import { gsap } from "@/lib/gsap/register";

/**
 * The home hero: what we do, where, roughly what it costs, and how to ask for
 * it, readable in a few seconds by someone standing next to a stopped car.
 *
 * The backdrop is the business's own footage as a background video (the
 * owner preferred it to a still photo), and on desktop the right column holds
 * the live-route card.
 *
 * The facts row reads its numbers from the content sources (SERVICE_AREAS,
 * SERVICES), so it cannot drift from the rest of the site, and adds no claim
 * the site does not already make.
 */
export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const factsRef = useRef<HTMLDListElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);

  const batteryFrom = getService("battery-replacement")?.priceFrom;

  useGSAP(
    () => {
      // CTAs are deliberately never animated: Request and Call must be visible
      // and clickable from the very first paint, not fade in after JS runs.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !headlineRef.current) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      gsap.set([badgeRef.current, headlineRef.current, paraRef.current, factsRef.current], { opacity: 0, y: 14 });
      tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.4 })
        .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.2")
        .to(paraRef.current, { opacity: 1, y: 0, duration: 0.45 }, "-=0.3")
        .to(factsRef.current, { opacity: 1, y: 0, duration: 0.45 }, "-=0.25");
      if (window.matchMedia("(min-width: 1024px)").matches) {
        tl.from(graphicRef.current, { opacity: 0, y: 24, scale: 0.97, duration: 0.8 }, 0.15);
      }
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} className="relative isolate overflow-hidden bg-ink-950 text-white">
      <CinematicBackgroundVideo placement="home-hero-background" overlay="strong" priority />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_0%,rgba(224,19,28,0.25),transparent),radial-gradient(ellipse_50%_40%_at_10%_100%,rgba(242,132,12,0.15),transparent)]"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pt-10 pb-10 sm:px-6 sm:pb-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14 lg:px-8 lg:pt-16 lg:pb-20">
        <div>
          <span
            ref={badgeRef}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/85"
          >
            <Radio className="h-3.5 w-3.5 animate-pulse text-amber-400 motion-reduce:animate-none" aria-hidden="true" />
            24/7 Roadside Assistance
          </span>

          <h1
            ref={headlineRef}
            className="mt-5 font-display text-[2.6rem] font-bold uppercase leading-[0.98] tracking-tight sm:text-7xl lg:text-[4.6rem]"
          >
            {/* The space keeps "Stranded? We'll" apart in the page text that
                search engines and screen readers read; the <br> only breaks the
                line visually. */}
            Stranded?{" "}
            <br />
            We&apos;ll get you{" "}
            <span className="bg-gradient-to-r from-red-500 via-amber-500 to-amber-400 bg-clip-text text-transparent">
              moving.
            </span>
          </h1>

          <p ref={paraRef} className="mt-4 max-w-lg text-base text-white/75 sm:mt-6 sm:text-lg">
            Local roadside assistance across Dallas–Fort Worth. Request help, share your location, and
            track your driver from the moment they&apos;re dispatched.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
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

          <dl
            ref={factsRef}
            className="mt-7 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-9 sm:grid-cols-4"
          >
            <Fact label="Dispatch" value="24/7" />
            <Fact label="DFW cities" value={String(SERVICE_AREAS.length)} />
            {batteryFrom && <Fact label="Batteries from" value={`$${batteryFrom}`} note="battery only" />}
            <Fact label="Driver tracking" value="Live" accent />
          </dl>
        </div>

        {/* Desktop: the live-route card, with the 24/7 badge floating on it. */}
        <div ref={graphicRef} className="relative mx-auto hidden w-full max-w-md lg:block lg:max-w-none">
          <div aria-hidden="true" className="absolute -inset-6 rounded-[2.5rem] bg-red-600/15 blur-3xl" />
          <div className="relative">
            <RouteGraphic />
          </div>
          <span className="absolute -left-4 top-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink-950/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            </span>
            24/7 Dispatch
          </span>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value, note, accent = false }: { label: string; value: string; note?: string; accent?: boolean }) {
  return (
    <div className="bg-ink-950/70 px-4 py-3 backdrop-blur-sm">
      <dt className="whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-white/55">{label}</dt>
      <dd className="mt-0.5 font-display text-2xl font-bold">
        <span className="flex items-center gap-1.5">
          {accent && <span className="h-2 w-2 shrink-0 rounded-full bg-success-500" aria-hidden="true" />}
          {value}
        </span>
        {note && <span className="block font-sans text-[0.68rem] font-medium text-white/55">{note}</span>}
      </dd>
    </div>
  );
}
