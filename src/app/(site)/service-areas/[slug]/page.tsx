import type { Metadata } from "next";
import { pageUrls } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, LifeBuoy, MapPin, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { SERVICE_AREAS, BUSINESS, getServiceArea, nearbyAreas } from "@/lib/content/business";
import { SERVICES } from "@/lib/content/services";
import { SERVICE_ICONS } from "@/lib/content/service-icons";
import { getCityServicePage } from "@/lib/content/city-service-pages";
import { locationHubsForCity } from "@/lib/content/location-hubs";
import { env } from "@/lib/env";
import { Icon3D } from "@/components/ui/icon-3d";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";

export function generateStaticParams() {
  return SERVICE_AREAS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getServiceArea(slug);
  if (!city) return {};
  return {
    title: `Roadside Assistance in ${city.name}, TX`,
    description: `24/7 roadside assistance in ${city.name}, Texas — towing, jump starts, flat tires, fuel delivery, and more. Request help online with live driver tracking.`,
    ...pageUrls(`/service-areas/${city.slug}`),
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getServiceArea(slug);
  if (!city) notFound();

  const nearby = nearbyAreas(city.slug, 5);
  const hubs = locationHubsForCity(city.slug);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: env.siteUrl },
          { name: "Service Areas", url: `${env.siteUrl}/service-areas` },
          { name: city.name, url: `${env.siteUrl}/service-areas/${city.slug}` },
        ]}
      />
      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-16 text-white sm:py-20">
        <HeroBackdrop />
        <Container>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-400">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Service Area
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Roadside Assistance in {city.name}, TX
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            TRA dispatches 24/7 roadside assistance to {city.name} and the surrounding area —
            towing, jump starts, flat tires, fuel delivery, lockouts, and more, with live driver
            tracking once help is on the way.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/request" size="lg" icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}>
              Request Help in {city.name}
            </Button>
            <Button href={BUSINESS.phoneHref} variant="outline" size="lg" className="border-white/25 text-white hover:bg-white/10" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
              Call Now
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">
              Services available in {city.name}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SERVICES.map((service) => {
                const Icon = SERVICE_ICONS[service.slug];
                // Where a city-specific page has been written for this service,
                // point at it — that page answers the local intent directly.
                // Otherwise fall back to the general service page.
                const localPage = getCityServicePage(city.slug, service.slug);
                const href = localPage
                  ? `/service-areas/${city.slug}/${service.slug}`
                  : `/services/${service.slug}`;
                return (
                  <Link
                    key={service.slug}
                    href={href}
                    className="flex items-center gap-3 rounded-xl border border-ink-950/8 bg-white p-4 hover:border-red-600/30 dark:border-white/10 dark:bg-ink-900"
                  >
                    <Icon3D icon={Icon} size="xs" />
                    <span className="text-sm font-medium text-ink-800 dark:text-ink-100">
                      {localPage ? `${service.shortName} in ${city.name}` : service.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            {/*
              Location hubs inside this city's limits, from LOCATION_HUBS. Data
              driven, so no city is special-cased here: a city with no hub
              renders nothing.
            */}
            {hubs.length > 0 && (
              <div className="rounded-2xl border border-ink-950/8 bg-white p-6 dark:border-white/10 dark:bg-ink-900">
                <h3 className="font-display text-base font-semibold text-ink-950 dark:text-white">
                  Locations in {city.name}
                </h3>
                <ul className="mt-3 space-y-4">
                  {hubs.map((h) => (
                    <li key={h.path}>
                      <Link
                        href={h.path}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-700"
                      >
                        {h.name} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                      <p className="mt-1 text-sm text-ink-600 dark:text-ink-200">{h.summary}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/*
              Only rendered when the city genuinely has adjacent served cities.
              Denton has none — nothing TRA covers borders it — so the block is
              omitted rather than showing an empty "Nearby areas" heading.
            */}
            {nearby.length > 0 && (
              <div className="rounded-2xl border border-ink-950/8 bg-paper-50 p-6 dark:border-white/10 dark:bg-ink-900">
                <h3 className="font-display text-base font-semibold text-ink-950 dark:text-white">Nearby areas</h3>
                <ul className="mt-3 space-y-2">
                  {nearby.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/service-areas/${c.slug}`} className="text-sm text-ink-600 hover:text-red-600 dark:text-ink-200">
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="rounded-2xl bg-red-600 p-6 text-white">
              <h3 className="font-display text-base font-semibold">Stranded in {city.name}?</h3>
              <p className="mt-2 text-sm text-white/85">Share your exact location and we&apos;ll dispatch the nearest driver.</p>
              <Button href="/request" variant="dark" size="md" fullWidth className="mt-4">
                Request Help
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
