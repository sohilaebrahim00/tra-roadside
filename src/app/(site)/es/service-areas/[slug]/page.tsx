import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, LifeBuoy, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";
import { PriceFigure } from "@/components/ui/price-figure";
import { Icon3D } from "@/components/ui/icon-3d";
import { BUSINESS, SERVICE_AREAS, getServiceArea } from "@/lib/content/business";
import { nearbyAreas } from "@/lib/content/nearby-areas";
import { SERVICES } from "@/lib/content/services";
import { SERVICE_ICONS } from "@/lib/content/service-icons";
import { DISPATCH_FEE_USD, headlineLine, pricedTitle, startingPrice } from "@/lib/content/pricing";
import { nombreServicio, precio, preciosCortos } from "@/lib/content/spanish";
import { getCiudadEs } from "@/lib/content/es/ciudades";
import { getServicioEs } from "@/lib/content/es/servicios";
import { bilingualUrls, fitDescription } from "@/lib/seo";
import { env } from "@/lib/env";

/**
 * A city page in Spanish (/es/service-areas/<city>), paired with the English
 * /service-areas/<city> through hreflang. The copy is the city's own,
 * translated in es/ciudades-*.ts, so no two city pages read alike.
 */

export function generateStaticParams() {
  return SERVICE_AREAS.filter((c) => getCiudadEs(c.slug)).map((c) => ({ slug: c.slug }));
}

const desde = startingPrice().replace(/^from /, "desde ");

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = getServiceArea(slug);
  if (!city || !getCiudadEs(slug)) return {};
  return {
    title: { absolute: pricedTitle(`Asistencia en Carretera ${city.name} TX`, desde) },
    description: fitDescription(`Asistencia en carretera 24 horas en ${city.name}, TX: ${preciosCortos()}.`, [
      "Sin membresía.",
      `Llame al ${BUSINESS.phoneDisplay}.`,
    ]),
    ...bilingualUrls({ en: `/service-areas/${city.slug}`, es: `/es/service-areas/${city.slug}` }, "es"),
  };
}

export default async function CiudadPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getServiceArea(slug);
  const hub = getCiudadEs(slug);
  if (!city || !hub) notFound();

  const cercanas = nearbyAreas(city.slug, 5).filter((c) => getCiudadEs(c.slug));
  const servicios = SERVICES.filter((s) => getServicioEs(s.slug));

  return (
    <div lang="es">
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: env.siteUrl },
          { name: "Español", url: `${env.siteUrl}/es` },
          { name: "Ciudades", url: `${env.siteUrl}/es/service-areas` },
          { name: city.name, url: `${env.siteUrl}/es/service-areas/${city.slug}` },
        ]}
      />
      {hub.faqs.length > 0 && <FaqJsonLd items={hub.faqs} />}

      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-14 text-white sm:py-20">
        <HeroBackdrop />
        <Container className="relative z-10">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-400">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Área de servicio
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl">
            Asistencia en carretera en {city.name}, TX
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Pasos de corriente, baterías, llantas ponchadas y carros cerrados en {city.name}, las 24 horas y sin membresía. Atendemos en español.
          </p>
          <p className="mt-4 font-display text-xl font-bold">
            {desde.charAt(0).toUpperCase() + desde.slice(1)} + {DISPATCH_FEE_USD} de envío
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={BUSINESS.phoneHref} size="lg" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
              Llame al {BUSINESS.phoneDisplay}
            </Button>
            <Button href="/request" variant="outline" size="lg" className="border-white/25 text-white hover:bg-white/10" icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}>
              Pedir ayuda en línea
            </Button>
          </div>
          <p className="mt-5 text-sm text-white/60">
            <Link href={`/service-areas/${city.slug}`} lang="en" hrefLang="en" className="underline hover:text-white">
              Read this page in English
            </Link>
          </p>
        </Container>
      </section>

      <section className="border-b border-ink-950/8 py-12 sm:py-16">
        <Container size="narrow" className="max-w-3xl space-y-4">
          <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-[1.75rem]">Ayuda en el camino en {city.name}</h2>
          <p className="text-base leading-relaxed text-ink-700">{hub.intro}</p>
          {hub.local.map((p) => (
            <p key={p} className="text-base leading-relaxed text-ink-700">
              {p}
            </p>
          ))}
          {hub.faqs.length > 0 && (
            <div className="pt-4">
              <h3 className="font-display text-xl font-semibold text-ink-950">Preguntas en {city.name}</h3>
              <div className="mt-4 rounded-2xl border border-ink-950/8 bg-white px-5 sm:px-6">
                <FaqAccordion items={hub.faqs.map((f, i) => ({ id: `${city.slug}-es-${i}`, category: city.name, question: f.q, answer: f.a }))} />
              </div>
            </div>
          )}
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink-950">Servicios en {city.name}</h2>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {servicios.map((s) => {
                const Icon = SERVICE_ICONS[s.slug];
                const line = headlineLine(s);
                return (
                  <Link
                    key={s.slug}
                    href={`/es/services/${s.slug}`}
                    className="flex items-center gap-3 rounded-xl border border-ink-950/8 bg-white p-4 hover:border-red-600/30"
                  >
                    <Icon3D icon={Icon} size="xs" />
                    <span className="text-sm font-medium text-ink-800">
                      {nombreServicio(s.slug)}
                      {line && (
                        <span className="block text-xs font-normal text-ink-500">
                          <PriceFigure svc={s} inLink>
                            {precio(line)}
                          </PriceFigure>
                        </span>
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            {cercanas.length > 0 && (
              <div className="rounded-2xl border border-ink-950/8 bg-paper-50 p-6">
                <h3 className="font-display text-base font-semibold text-ink-950">Ciudades cercanas</h3>
                <ul className="mt-3 space-y-2">
                  {cercanas.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/es/service-areas/${c.slug}`} className="text-sm text-ink-600 hover:text-red-600">
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="rounded-2xl bg-red-600 p-6 text-white">
              <h3 className="font-display text-base font-semibold">¿Se quedó varado en {city.name}?</h3>
              <p className="mt-2 text-sm text-white/85">Llámenos o mande su ubicación exacta y enviamos al técnico más cercano.</p>
              <Button href={BUSINESS.phoneHref} variant="dark" size="md" fullWidth className="mt-4">
                Llame al {BUSINESS.phoneDisplay}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
