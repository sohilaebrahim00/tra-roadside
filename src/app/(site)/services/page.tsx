import type { Metadata } from "next";
import { pageUrls } from "@/lib/seo";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { SERVICES } from "@/lib/content/services";
import { SERVICE_ICONS } from "@/lib/content/service-icons";
import { BUSINESS } from "@/lib/content/business";
import { env } from "@/lib/env";
import { CinematicBackgroundVideo } from "@/components/media/cinematic-background-video";
import { PricingDisclaimer } from "@/components/ui/pricing-disclaimer";

export const metadata: Metadata = {
  title: "Roadside Assistance Services",
  description:
    "Towing, jump starts, flat tire changes, fuel delivery, lockouts, winching, and more — 24/7 roadside assistance across the Dallas–Fort Worth Metroplex.",
  ...pageUrls("/services"),
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: env.siteUrl },
          { name: "Services", url: `${env.siteUrl}/services` },
        ]}
      />
      <section className="relative overflow-hidden border-b border-ink-950/8 bg-ink-950 py-16 text-white sm:py-20">
        <CinematicBackgroundVideo placement="services-header" overlay="strong" />
        <Container className="relative z-10">
          <SectionHeading
            as="h1"
            eyebrow="What We Do"
            title="Every roadside service, one call away"
            description="Select a service when you request help online, or call dispatch directly — either way, we'll confirm the details before a driver is sent."
            tone="light"
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/request" size="lg">Request Roadside Help</Button>
            <Button href={BUSINESS.phoneHref} variant="outline" size="lg" className="border-white/25 text-white hover:bg-white/10" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
              {BUSINESS.phoneDisplay}
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.slug];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col rounded-2xl border border-ink-950/8 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-red-600/30 hover:shadow-lg dark:border-white/10 dark:bg-ink-900"
                >
                  {service.priceBadge && (
                    <span className="absolute right-4 top-4 rounded-full bg-ink-950/[0.04] px-2.5 py-1 text-xs font-semibold text-ink-700 dark:bg-white/10 dark:text-ink-100">
                      {service.priceBadge}
                    </span>
                  )}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600/10 text-red-600">
                    <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </div>
                  <h2 className="mt-4 font-display text-lg font-semibold text-ink-950 dark:text-white">{service.name}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600 dark:text-ink-200">{service.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-red-600 opacity-0 transition-opacity group-hover:opacity-100">
                    Details <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>

          <PricingDisclaimer className="mt-10 text-center" />
        </Container>
      </section>
    </>
  );
}
