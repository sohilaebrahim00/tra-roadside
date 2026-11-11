import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, LifeBuoy, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";
import { PriceFigure } from "@/components/ui/price-figure";
import { BUSINESS, SERVICE_AREAS } from "@/lib/content/business";
import { SERVICES, getService } from "@/lib/content/services";
import { DISPATCH_FEE_USD, headlineLine, pricedTitle } from "@/lib/content/pricing";
import { etiquetaPrecio, nombreServicio, precio, tituloServicio } from "@/lib/content/spanish";
import { getServicioEs } from "@/lib/content/es/servicios";
import { bilingualUrls, fitDescription } from "@/lib/seo";
import { env } from "@/lib/env";

/**
 * A service page in Spanish (/es/services/<slug>), paired with the English
 * /services/<slug> through hreflang. The copy is in es/servicios.ts and the
 * prices come from SERVICES, so they always match the English page. The
 * request form is in English; the phone is the main way in.
 */

export function generateStaticParams() {
  return SERVICES.filter((s) => getServicioEs(s.slug)).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  const es = getServicioEs(slug);
  if (!svc || !es) return {};
  const line = headlineLine(svc);
  const desde = line ? precio(line) : undefined;
  return {
    title: { absolute: pricedTitle(tituloServicio(svc.slug, "Dallas"), desde) },
    description: fitDescription(`${nombreServicio(svc.slug)} a domicilio en Dallas–Fort Worth${desde ? `: ${desde}` : ""}${desde && !svc.feeAtBooking ? ` + ${DISPATCH_FEE_USD} de envío` : ""}.`, [
      es.resumen,
      "Las 24 horas, sin membresía.",
      `Llame al ${BUSINESS.phoneDisplay}.`,
    ]),
    ...bilingualUrls({ en: `/services/${svc.slug}`, es: `/es/services/${svc.slug}` }, "es"),
  };
}

export default async function ServicioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = getService(slug);
  const es = getServicioEs(slug);
  if (!svc || !es) notFound();

  const lines = svc.priceLines ?? [];
  const line = headlineLine(svc);
  const titulo = tituloServicio(svc.slug, "Dallas–Fort Worth");

  return (
    <div lang="es">
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: env.siteUrl },
          { name: "Español", url: `${env.siteUrl}/es` },
          { name: nombreServicio(svc.slug), url: `${env.siteUrl}/es/services/${svc.slug}` },
        ]}
      />
      {es.preguntas.length > 0 && <FaqJsonLd items={es.preguntas} />}

      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-14 text-white sm:py-20">
        <HeroBackdrop />
        <Container className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-400">
            <Link href="/es" className="hover:text-red-300">Asistencia en carretera</Link> · Servicio
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl">{titulo}</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{es.resumen}</p>
          {line && (
            <p className="mt-4 font-display text-xl font-bold">
              <PriceFigure svc={svc}>{precio(line)}</PriceFigure>
              {!svc.feeAtBooking && <span className="text-white/80"> + {DISPATCH_FEE_USD} de envío</span>}
            </p>
          )}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={BUSINESS.phoneHref} size="lg" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
              Llame al {BUSINESS.phoneDisplay}
            </Button>
            <Button
              href={`/request?service=${svc.slug}`}
              variant="outline"
              size="lg"
              className="border-white/25 text-white hover:bg-white/10"
              icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}
            >
              Pedir ayuda en línea
            </Button>
          </div>
          <p className="mt-5 text-sm text-white/60">
            Atendemos en español por teléfono y por mensaje.{" "}
            <Link href={`/services/${svc.slug}`} lang="en" hrefLang="en" className="underline hover:text-white">
              Read this page in English
            </Link>
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container size="narrow" className="max-w-3xl space-y-12">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">{es.lema}</h2>
            <p className="text-base leading-relaxed text-ink-700">{es.problema}</p>
          </div>

          {lines.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">Precio</h2>
              <dl className="mt-5 divide-y divide-ink-950/8 rounded-2xl border border-ink-950/10 bg-white">
                {lines.map((l, i) => (
                  <div key={l.label ?? i} className="flex items-baseline justify-between gap-4 px-5 py-3">
                    <dt className="text-sm font-medium text-ink-800">{l.label ? etiquetaPrecio(l.label) : nombreServicio(svc.slug)}</dt>
                    <dd className="whitespace-nowrap font-display text-base font-bold text-ink-950">
                      <PriceFigure svc={svc}>{precio(l)}</PriceFigure>
                    </dd>
                  </div>
                ))}
                {!svc.feeAtBooking && (
                  <div className="flex items-baseline justify-between gap-4 bg-paper-50 px-5 py-3">
                    <dt className="text-sm font-semibold text-ink-900">Envío del técnico, una sola vez por trabajo</dt>
                    <dd className="whitespace-nowrap font-display text-base font-bold text-ink-950">+ {DISPATCH_FEE_USD}</dd>
                  </div>
                )}
              </dl>
              {es.incluye && <p className="mt-3 text-sm text-ink-700">{es.incluye}</p>}
              {es.nota && <p className="mt-2 text-xs text-ink-500">{es.nota}</p>}
              <p className="mt-2 text-xs text-ink-500">Le confirmamos el precio para su carro antes de enviar al técnico. Se paga en efectivo.</p>
            </div>
          )}

          <div className="grid gap-8 sm:grid-cols-2">
            {es.mientrasEspera.length > 0 && (
              <div>
                <h2 className="font-display text-xl font-semibold text-ink-950">Mientras espera</h2>
                <ul className="mt-4 space-y-2">
                  {es.mientrasEspera.map((t) => (
                    <li key={t} className="flex gap-2 text-sm leading-relaxed text-ink-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {es.loQueNecesitamos.length > 0 && (
              <div>
                <h2 className="font-display text-xl font-semibold text-ink-950">Lo que necesitamos saber</h2>
                <ul className="mt-4 space-y-2">
                  {es.loQueNecesitamos.map((t) => (
                    <li key={t} className="flex gap-2 text-sm leading-relaxed text-ink-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {es.preguntas.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">Preguntas frecuentes</h2>
              <div className="mt-5 rounded-2xl border border-ink-950/8 bg-white px-5 sm:px-6">
                <FaqAccordion items={es.preguntas.map((f, i) => ({ id: `${svc.slug}-es-${i}`, category: nombreServicio(svc.slug), question: f.q, answer: f.a }))} />
              </div>
            </div>
          )}

          <div>
            <h2 className="font-display text-xl font-semibold text-ink-950">{nombreServicio(svc.slug)} en su ciudad</h2>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {SERVICE_AREAS.map((c) => (
                <li key={c.slug}>
                  <Link href={`/es/service-areas/${c.slug}`} className="text-sm text-ink-600 hover:text-red-600">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink-950">Otros servicios</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {SERVICES.filter((s) => s.slug !== svc.slug && getServicioEs(s.slug)).map((s) => (
                <li key={s.slug}>
                  <Link href={`/es/services/${s.slug}`} className="text-sm font-medium text-red-600 hover:text-red-700">
                    {nombreServicio(s.slug)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}
