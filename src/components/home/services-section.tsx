"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICES } from "@/lib/content/services";
import { SERVICE_ICONS } from "@/lib/content/service-icons";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap/register";
import { ServiceVideoCard } from "@/components/media/service-video-card";
import { getServiceVideo } from "@/data/media-registry";
import { PricingDisclaimer } from "@/components/ui/pricing-disclaimer";

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      registerGsap();
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length === 0) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      gsap.set(cards, { opacity: 0, y: 28 });

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to(cards, { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power3.out" });
        },
      });

      return () => trigger.kill();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-20 sm:py-28" id="services">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Roadside services built for every breakdown"
            description="Select a service when you request help — dispatch confirms the details before a driver is sent."
          />
          <Link
            href="/services"
            className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 sm:flex"
          >
            View all services <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.slug];
            const video = getServiceVideo(service.slug);
            return (
              <div
                key={service.slug}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
              >
                {video ? (
                  <ServiceVideoCard href={`/services/${service.slug}`} name={service.name} summary={service.summary} icon={Icon} video={video} />
                ) : (
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-950/8 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-red-600/30 hover:shadow-lg hover:shadow-red-600/5"
                  >
                    {service.priceBadge && (
                      <span className="absolute right-4 top-4 rounded-full bg-ink-950/[0.04] px-2.5 py-1 text-xs font-semibold text-ink-700">
                        {service.priceBadge}
                      </span>
                    )}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600/10 text-red-600 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-ink-950">
                      {service.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{service.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-red-600 opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <Link
          href="/services"
          className="mt-8 flex items-center justify-center gap-1.5 text-sm font-semibold text-red-600 sm:hidden"
        >
          View all services <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        <PricingDisclaimer className="mt-8 text-center" />
      </Container>
    </section>
  );
}
