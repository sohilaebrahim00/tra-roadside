"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { MapPin, ClipboardList, UserCheck, Navigation, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap/register";

const STEPS = [
  { icon: MapPin, title: "Share your location", body: "Allow GPS access or drop a pin — takes seconds." },
  { icon: ClipboardList, title: "Pick your service", body: "Tell us what's wrong and add your vehicle details." },
  { icon: UserCheck, title: "Get matched", body: "Dispatch reviews and assigns the nearest available driver." },
  { icon: Navigation, title: "Track live", body: "Watch your driver's location and ETA update in real time." },
  { icon: CheckCircle2, title: "Back on the road", body: "Service is completed and your request is closed out." },
] as const;

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopTrackRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const desktopLineRef = useRef<HTMLDivElement>(null);
  const mobileLineRef = useRef<HTMLDivElement>(null);
  const desktopMarkers = useRef<(HTMLDivElement | null)[]>([]);
  const desktopIndices = useRef<(HTMLDivElement | null)[]>([]);
  const mobileMarkers = useRef<(HTMLDivElement | null)[]>([]);
  const mobileIndices = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      registerGsap();
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      function activateUpTo(
        index: number,
        markers: (HTMLDivElement | null)[],
        indices: (HTMLDivElement | null)[]
      ) {
        markers.forEach((el, i) => el?.classList.toggle("is-active", i <= index));
        indices.forEach((el, i) => el?.classList.toggle("is-active", i <= index));
      }

      if (reduceMotion) {
        // Static, fully-lit, fully-readable state — no scroll-linked motion.
        if (desktopLineRef.current) desktopLineRef.current.style.clipPath = "inset(0 0 0 0)";
        if (mobileLineRef.current) mobileLineRef.current.style.clipPath = "inset(0 0 0 0)";
        activateUpTo(STEPS.length - 1, desktopMarkers.current, desktopIndices.current);
        activateUpTo(STEPS.length - 1, mobileMarkers.current, mobileIndices.current);
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (!desktopTrackRef.current || !desktopLineRef.current) return;
        gsap.set(desktopLineRef.current, { clipPath: "inset(0 100% 0 0)" });

        const trigger = ScrollTrigger.create({
          trigger: desktopTrackRef.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 0.6,
          onUpdate: (self) => {
            gsap.set(desktopLineRef.current, { clipPath: `inset(0 ${(1 - self.progress) * 100}% 0 0)` });
            const activeIndex = Math.min(STEPS.length - 1, Math.floor(self.progress * STEPS.length));
            activateUpTo(activeIndex, desktopMarkers.current, desktopIndices.current);
          },
        });

        return () => trigger.kill();
      });

      mm.add("(max-width: 1023.98px)", () => {
        if (!mobileTrackRef.current || !mobileLineRef.current) return;
        gsap.set(mobileLineRef.current, { clipPath: "inset(0 0 100% 0)" });

        const trigger = ScrollTrigger.create({
          trigger: mobileTrackRef.current,
          start: "top 80%",
          end: "bottom 65%",
          scrub: 0.6,
          onUpdate: (self) => {
            gsap.set(mobileLineRef.current, { clipPath: `inset(0 0 ${(1 - self.progress) * 100}% 0)` });
            const activeIndex = Math.min(STEPS.length - 1, Math.floor(self.progress * STEPS.length));
            activateUpTo(activeIndex, mobileMarkers.current, mobileIndices.current);
          },
        });

        return () => trigger.kill();
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ink-950 py-12 text-white sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 38px, rgba(255,255,255,0.6) 38px, rgba(255,255,255,0.6) 40px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top,rgba(224,19,28,0.16),transparent_60%)]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="How It Works"
          title="From stranded to back on the road"
          description="Every request follows the same route — here's what happens between your tap and your driver's arrival."
          align="center"
          tone="light"
        />

        {/* Desktop: horizontal track */}
        <div ref={desktopTrackRef} className="relative mt-20 hidden lg:block">
          <div className="absolute left-[6.5rem] right-[6.5rem] top-8 h-[3px] rounded-full bg-white/10 sm:top-8">
            <div
              ref={desktopLineRef}
              className="road-lines h-full w-full rounded-full"
              style={{ clipPath: "inset(0 100% 0 0)" }}
            />
          </div>
          <ol className="grid grid-cols-5 gap-6">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex flex-col items-center text-center">
                <div
                  ref={(el) => {
                    desktopMarkers.current[i] = el;
                  }}
                  className="journey-marker"
                >
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p
                  ref={(el) => {
                    desktopIndices.current[i] = el;
                  }}
                  className="journey-index mt-4 text-xs font-bold uppercase tracking-[0.16em]"
                >
                  Step {i + 1}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 max-w-[13rem] text-sm leading-relaxed text-white/70">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile / tablet: vertical track */}
        <div ref={mobileTrackRef} className="relative mt-14 lg:hidden">
          <div className="absolute left-[27px] top-2 bottom-2 w-[3px] rounded-full bg-white/10">
            <div
              ref={mobileLineRef}
              className="h-full w-full rounded-full bg-gradient-to-b from-red-500 via-red-500 to-amber-500"
              style={{ clipPath: "inset(0 0 100% 0)" }}
            />
          </div>
          <ol className="space-y-10">
            {STEPS.map((step, i) => (
              <li key={step.title} className="relative flex gap-5 pl-0">
                <div
                  ref={(el) => {
                    mobileMarkers.current[i] = el;
                  }}
                  className="journey-marker !h-14 !w-14 shrink-0"
                >
                  <step.icon className="h-5.5 w-5.5" aria-hidden="true" />
                </div>
                <div className="pt-1.5">
                  <p
                    ref={(el) => {
                      mobileIndices.current[i] = el;
                    }}
                    className="journey-index text-xs font-bold uppercase tracking-[0.16em]"
                  >
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold text-white sm:text-lg">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
