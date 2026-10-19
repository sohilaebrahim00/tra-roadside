"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, LifeBuoy } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICES, type ServiceContent } from "@/lib/content/services";
import { SERVICE_ICONS } from "@/lib/content/service-icons";
import { SERVICE_PROBLEM } from "@/lib/content/service-problems";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap/register";
import { PricingDisclaimer } from "@/components/ui/pricing-disclaimer";
import { BrandPattern } from "@/components/brand/brand-pattern";
import { Icon3D } from "@/components/ui/icon-3d";


/**
 * The services, directly under the hero, as photo cards: what a customer came
 * for should be visible without scrolling past anything else. Two cards per
 * row on a phone so all ten fit in a few swipes; each card leads to the
 * service page and has its own Request button that opens the request form
 * with that service already chosen.
 *
 * Battery replacement goes first: it is the service the business earns most
 * from.
 *
 * Each card uses its service's first SERVICES photo. As of 2026-10-19 every
 * service has one; a service added later without a photo shows the dark
 * monogram tile until one is added to SERVICES.
 */

function cardPhoto(s: ServiceContent) {
  return s.photos?.[0];
}

const ORDERED = [
  ...SERVICES.filter((s) => s.slug === "battery-replacement"),
  ...SERVICES.filter((s) => s.slug !== "battery-replacement"),
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLLIElement | null)[]>([]);

  useGSAP(
    () => {
      registerGsap();
      const cards = cardsRef.current.filter(Boolean) as HTMLLIElement[];
      if (cards.length === 0) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.set(cards, { opacity: 0, y: 18 });
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(cards, { opacity: 1, y: 0, duration: 0.5, stagger: 0.04, ease: "power3.out" });
        },
      });
      return () => trigger.kill();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-paper-50 py-12 sm:py-20" id="services">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title="What do you need help with?"
            description="Roadside help across Dallas–Fort Worth, 24/7. Tap a service to see how it works and what it costs, or request it right away."
          />
          <Link
            href="/services"
            className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 sm:flex"
          >
            View all services <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-7 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {ORDERED.map((service, i) => {
            const Icon = SERVICE_ICONS[service.slug];
            const photo = cardPhoto(service);
            return (
              <li
                key={service.slug}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink-950/10 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-lg hover:shadow-ink-950/5"
              >
                <Link href={`/services/${service.slug}`} className="block">
                  <div className="relative aspect-[3/2] overflow-hidden bg-ink-950 sm:aspect-[4/3]">
                    {photo ? (
                      <Image
                        src={photo.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 240px, (min-width: 768px) 33vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={i < 2}
                      />
                    ) : (
                      // No photo yet: the dark tile with the logo monogram
                      // pattern, so the card reads as branded rather than empty.
                      <div className="absolute inset-0 isolate flex items-center justify-center bg-ink-950">
                        <BrandPattern fade="none" strength={0.14} />
                        <Icon3D icon={Icon} size="lg" />
                      </div>
                    )}
                    {/* The price is part of the picture: a dark fade along the
                        bottom edge and the figure in large type on top of it. */}
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent" />
                    {service.priceBadge && (
                      <span className="absolute bottom-2 left-2.5 font-display text-base font-bold leading-none text-white drop-shadow sm:bottom-3 sm:left-3.5 sm:text-xl">
                        {service.priceBadge}
                      </span>
                    )}
                    {photo && (
                      <Icon3D icon={Icon} size="xs" className="absolute right-2 top-2 sm:h-9 sm:w-9" />
                    )}
                  </div>
                  <div className="px-3 pt-3 sm:px-4 sm:pt-4">
                    {/* Problem first: a stressed driver knows "my car won't
                        start" before they know the name of the service. */}
                    <h3 className="leading-snug">
                      <span className="flex items-start justify-between gap-2 font-display text-[1.02rem] font-semibold text-ink-950 group-hover:text-red-600 sm:text-lg">
                        {SERVICE_PROBLEM[service.slug] ?? service.shortName}
                        <ArrowUpRight className="mt-1 hidden h-4 w-4 shrink-0 text-ink-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red-600 sm:block" aria-hidden="true" />
                      </span>
                      <span className="mt-0.5 block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-red-600 sm:text-xs">
                        <span className="sm:hidden">{service.shortName}</span>
                        <span className="hidden sm:inline">{service.name}</span>
                      </span>
                    </h3>
                    <p className="mt-1.5 hidden text-sm leading-relaxed text-ink-600 sm:block">{service.summary}</p>
                  </div>
                </Link>
                <div className="mt-auto px-3 pb-3 pt-3 sm:px-4 sm:pb-4">
                  <Link
                    href={`/request?service=${service.slug}`}
                    className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-red-600 px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-red-700 sm:text-sm"
                    aria-label={`Request ${service.name}`}
                  >
                    <LifeBuoy className="h-3.5 w-3.5" aria-hidden="true" />
                    Request
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        <Link
          href="/services"
          className="mt-6 flex items-center justify-center gap-1.5 text-sm font-semibold text-red-600 sm:hidden"
        >
          View all services <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        <PricingDisclaimer className="mt-6 text-center" />
      </Container>
    </section>
  );
}
