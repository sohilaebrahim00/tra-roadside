import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";
import { ServiceHero } from "@/components/city-service/service-hero";
import { ScenarioCards, WhatWeNeed } from "@/components/city-service/scenario-cards";
import { LocalSection } from "@/components/city-service/local-section";
import { ServiceNav } from "@/components/city-service/service-nav";
import { FinalCta } from "@/components/city-service/final-cta";
import { getServiceArea, nearbyAreas } from "@/lib/content/business";
import { getService } from "@/lib/content/services";
import { getLocalArea } from "@/lib/content/local-data";
import { cityServicePairs, getCityServicePage, servicesForCity } from "@/lib/content/city-service-pages";
import { env } from "@/lib/env";

/**
 * City x Service landing pages, nested under the existing city hubs so no
 * indexed URL changes and the hierarchy stays city -> service.
 *
 * Only pairs with authored content in city-service-pages.ts exist. There is no
 * automatic city x service expansion: a page with no written content would be
 * a doorway page, and generating 135 of them from a template is precisely what
 * this architecture is meant to avoid.
 *
 * Every geographic statement rendered here comes from local-data.ts. Prices
 * come from SERVICES. Neither is duplicated into the editorial content.
 *
 * Presentation lives in src/components/city-service/*. This file stays a thin
 * composition layer so a visual change is made once and inherited by all 97
 * pages — there are deliberately no per-city or per-service branches anywhere
 * in the template.
 */

export function generateStaticParams() {
  return cityServicePairs().map((p) => ({ slug: p.city, service: p.service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}): Promise<Metadata> {
  const { slug, service } = await params;
  const content = getCityServicePage(slug, service);
  if (!content) return {};
  const url = `/service-areas/${slug}/${service}`;
  return {
    title: content.title,
    description: content.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}) {
  const { slug, service } = await params;
  const content = getCityServicePage(slug, service);
  const city = getServiceArea(slug);
  const svc = getService(service);
  const local = getLocalArea(slug);
  if (!content || !city || !svc || !local) notFound();

  const nearby = nearbyAreas(city.slug, 4);
  const siblings = servicesForCity(city.slug).filter((p) => p.service !== service);
  const base = `${env.siteUrl}`;
  const faqItems = content.faqs.map((f, i) => ({
    id: `${city.slug}-${svc.slug}-${i}`,
    category: `${svc.name} — ${city.name}`,
    question: f.q,
    answer: f.a,
  }));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: base },
          { name: "Service Areas", url: `${base}/service-areas` },
          { name: city.name, url: `${base}/service-areas/${city.slug}` },
          { name: svc.name, url: `${base}/service-areas/${city.slug}/${svc.slug}` },
        ]}
      />
      <ServiceJsonLd
        name={`${svc.name} in ${city.name}, TX`}
        description={content.metaDescription}
        path={`/service-areas/${city.slug}/${svc.slug}`}
        areaServed={`${city.name}, TX`}
        priceFrom={svc.priceFrom}
      />
      <FaqJsonLd items={content.faqs} />

      <ServiceHero city={city} svc={svc} h1={content.h1} intro={content.intro} />

      {/* Single column at a readable measure. The old layout put a sidebar here,
          which on these pages meant the main copy ran at roughly 60% width on
          desktop while the sidebar repeated CTAs that the sticky mobile bar and
          the closing band already cover. */}
      <section className="bg-paper-50 py-14 sm:py-18">
        <Container size="narrow" className="max-w-4xl space-y-14 sm:space-y-18">
          <ScenarioCards city={city} scenarios={content.scenarios} />

          <LocalSection
            city={city}
            svc={svc}
            local={local}
            localContext={content.localContext}
            nearby={nearby}
          />

          <WhatWeNeed svc={svc} />

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-[1.75rem]">
              {svc.shortName} in {city.name} — common questions
            </h2>
            {/* The accordion itself is the shared /faq component, unchanged:
                semantic h3 + button, aria-expanded/controls, and a grid-rows
                transition that cannot shift the page when a panel opens. */}
            <div className="mt-5 rounded-2xl border border-ink-950/8 bg-white px-5 sm:px-6">
              <FaqAccordion items={faqItems} />
            </div>
          </section>

          <ServiceNav city={city} svc={svc} siblings={siblings} />
        </Container>
      </section>

      <FinalCta city={city} svc={svc} />
    </>
  );
}
