import type { Metadata } from "next";
import { pageUrls } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, LifeBuoy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { SERVICES } from "@/lib/content/services";
import { SERVICE_ICONS } from "@/lib/content/service-icons";
import { SERVICE_PROBLEM } from "@/lib/content/service-problems";
import { BUSINESS } from "@/lib/content/business";
import { env } from "@/lib/env";
import { CinematicBackgroundVideo } from "@/components/media/cinematic-background-video";
import { PricingDisclaimer } from "@/components/ui/pricing-disclaimer";
import { Icon3D } from "@/components/ui/icon-3d";
import { ServiceSearch } from "@/components/search/service-search";

export const metadata: Metadata = {
  title: "Roadside Assistance Services",
  description:
    "Towing, jump starts, flat tire changes, fuel delivery, lockouts, winching, and more — 24/7 roadside assistance across the Dallas–Fort Worth Metroplex.",
  ...pageUrls("/services"),
};

/** Battery first, the main service; the rest in their SERVICES order. */
const ORDERED = [
  ...SERVICES.filter((s) => s.slug === "battery-replacement"),
  ...SERVICES.filter((s) => s.slug !== "battery-replacement"),
];

/**
 * Every service as a photo card. On phones each is a compact row (photo,
 * problem, name, price) so all ten fit in a few swipes; from sm up it is a
 * full card with the price on the photo, a 3D icon, the summary and its own
 * Request button. The search at the top finds a service from the problem in
 * the driver's own words.
 */
export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: env.siteUrl },
          { name: "Services", url: `${env.siteUrl}/services` },
        ]}
      />
      <section className="relative overflow-hidden border-b border-ink-950/8 bg-ink-950 py-12 text-white sm:py-20">
        <CinematicBackgroundVideo placement="services-header" overlay="strong" />
        <Container className="relative z-10">
          <SectionHeading
            as="h1"
            eyebrow="What We Do"
            title="Every roadside service, one call away"
            description="Tell us what happened and we'll show you the right service, with its price, in a tap."
            tone="light"
          />
          <ServiceSearch tone="dark" className="mt-6 max-w-2xl sm:mt-8" />
          <p className="mt-5 flex flex-wrap items-center gap-x-2 text-sm text-white/70">
            Rather talk to someone?
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-amber-400">
              <Phone className="h-4 w-4" aria-hidden="true" /> {BUSINESS.phoneDisplay}
            </a>
          </p>
        </Container>
      </section>

      <section className="bg-paper-50 py-8 sm:py-20 dark:bg-ink-950">
        <Container>
          <ul className="grid gap-2.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {ORDERED.map((service, i) => {
              const Icon = SERVICE_ICONS[service.slug];
              const photo = service.photos?.[0];
              return (
                <li
                  key={service.slug}
                  className="group flex overflow-hidden rounded-2xl border border-ink-950/8 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-0.5 hover:border-red-600/25 hover:shadow-lg sm:flex-col dark:border-white/10 dark:bg-ink-900"
                >
                  <Link href={`/services/${service.slug}`} className="flex min-w-0 flex-1 sm:flex-col">
                    <div className="relative w-28 shrink-0 overflow-hidden bg-ink-900 sm:aspect-[16/10] sm:w-full">
                      {photo ? (
                        <Image
                          src={photo.src}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 112px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          priority={i < 3}
                        />
                      ) : (
                        <div className="grid h-full w-full place-items-center">
                          <Icon3D icon={Icon} size="md" />
                        </div>
                      )}
                      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 hidden h-1/2 bg-gradient-to-t from-ink-950/85 to-transparent sm:block" />
                      {service.priceBadge && (
                        <span className="absolute bottom-3 left-4 hidden font-display text-xl font-bold text-white drop-shadow sm:block">
                          {service.priceBadge}
                        </span>
                      )}
                      {photo && <Icon3D icon={Icon} size="sm" className="absolute right-3 top-3 hidden sm:inline-grid" />}
                    </div>
                    <div className="min-w-0 flex-1 px-3.5 py-3 sm:p-5">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-red-600">
                        {SERVICE_PROBLEM[service.slug]}
                      </p>
                      <h2 className="mt-0.5 font-display text-base font-semibold leading-snug text-ink-950 group-hover:text-red-600 sm:mt-1 sm:text-xl dark:text-white">
                        {service.name}
                      </h2>
                      <p className="mt-1 text-sm font-bold text-ink-950 sm:hidden dark:text-white">{service.priceBadge}</p>
                      <p className="mt-1.5 hidden text-sm leading-relaxed text-ink-600 sm:block dark:text-ink-200">{service.summary}</p>
                    </div>
                  </Link>
                  <div className="hidden items-center justify-between gap-3 border-t border-ink-950/8 px-5 py-3.5 sm:flex dark:border-white/10">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-ink-700 hover:text-red-600 dark:text-ink-200"
                    >
                      Details <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                    <Link
                      href={`/request?service=${service.slug}`}
                      aria-label={`Request ${service.name}`}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-red-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-red-700"
                    >
                      <LifeBuoy className="h-4 w-4" aria-hidden="true" /> Request
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>

          <PricingDisclaimer className="mt-8 text-center sm:mt-10" />
        </Container>
      </section>
    </>
  );
}
