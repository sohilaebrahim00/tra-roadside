import type { Metadata } from "next";
import { pageUrls } from "@/lib/seo";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { SERVICE_AREAS } from "@/lib/content/business";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  title: "Service Areas — Dallas–Fort Worth Metroplex",
  description:
    "TRA provides 24/7 roadside assistance across 27 cities in the Dallas–Fort Worth Metroplex, including Dallas, Arlington, Plano, Frisco, and McKinney.",
  ...pageUrls("/service-areas"),
};

export default function ServiceAreasPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: env.siteUrl },
          { name: "Service Areas", url: `${env.siteUrl}/service-areas` },
        ]}
      />
      <section className="border-b border-ink-950/8 bg-ink-950 py-16 text-white sm:py-20">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Coverage"
            title="27 cities across the DFW Metroplex"
            description="Dispatch will always confirm exact coverage for your location when you request help — this list reflects our currently confirmed service area."
            tone="light"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {SERVICE_AREAS.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="group flex items-center gap-2 rounded-xl border border-ink-950/8 bg-white px-4 py-3 text-sm font-medium text-ink-700 hover:border-red-600/30 hover:text-red-600 dark:border-white/10 dark:bg-ink-900 dark:text-ink-200"
              >
                <MapPin className="h-4 w-4 shrink-0 text-ink-400 group-hover:text-red-600" aria-hidden="true" />
                {city.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
