import type { Metadata } from "next";
import { LifeBuoy, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";
import { BUSINESS, SERVICE_AREAS } from "@/lib/content/business";
import { DISPATCH_FEE_USD, pricedTitle, startingPrice } from "@/lib/content/pricing";
import { listaDePrecios, preguntasFrecuentes } from "@/lib/content/spanish";
import { env } from "@/lib/env";
import { PriceFigure } from "@/components/ui/price-figure";
import { pageUrls } from "@/lib/seo";

/** The Spanish landing page. The request form itself is in English; the phone is the way in for Spanish speakers. */

const desde = startingPrice().replace(/^from /, "desde ");

export const metadata: Metadata = {
  title: { absolute: pricedTitle("Asistencia en Carretera Dallas 24 Horas", desde) },
  description: `Asistencia en carretera 24 horas en Dallas y Fort Worth, sin membresía: llantas, baterías y carros cerrados, ${desde} + ${DISPATCH_FEE_USD} de envío.`,
  ...pageUrls("/es"),
};

export default function SpanishPage() {
  const faqs = preguntasFrecuentes();
  return (
    <div lang="es">
      <BreadcrumbJsonLd items={[{ name: "Inicio", url: env.siteUrl }, { name: "Español", url: `${env.siteUrl}/es` }]} />
      <FaqJsonLd items={faqs} />

      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-14 text-white sm:py-20">
        <HeroBackdrop />
        <Container className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-400">En español</p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl">Asistencia en carretera 24 horas en Dallas y Fort Worth</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Llanta ponchada, batería muerta o las llaves adentro del carro: un técnico llega hasta donde usted está, a cualquier hora y sin membresía. Atendemos en español.
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
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container size="narrow" className="max-w-3xl space-y-12">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">Precios</h2>
            <dl className="mt-5 divide-y divide-ink-950/8 rounded-2xl border border-ink-950/10 bg-white">
              {listaDePrecios().map((row) => (
                <div key={row.nombre} className="flex items-baseline justify-between gap-4 px-5 py-3">
                  <dt className="text-sm font-medium text-ink-800">{row.nombre}</dt>
                  <dd className="whitespace-nowrap font-display text-base font-bold text-ink-950">
                    <PriceFigure svc={row.svc}>{row.precio}</PriceFigure>
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-4 bg-paper-50 px-5 py-3">
                <dt className="text-sm font-semibold text-ink-900">Envío del técnico, una sola vez por trabajo</dt>
                <dd className="whitespace-nowrap font-display text-base font-bold text-ink-950">+ {DISPATCH_FEE_USD}</dd>
              </div>
            </dl>
            <p className="mt-3 text-xs text-ink-500">Le confirmamos el precio para su carro antes de enviar al técnico.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">Preguntas frecuentes</h2>
            <div className="mt-5 rounded-2xl border border-ink-950/8 bg-white px-5 sm:px-6">
              <FaqAccordion items={faqs.map((f, i) => ({ id: `es-${i}`, category: "Español", question: f.q, answer: f.a }))} />
            </div>
          </div>

          <p className="text-sm leading-relaxed text-ink-600">
            Damos servicio en {SERVICE_AREAS.length} ciudades de Dallas–Fort Worth, entre ellas {SERVICE_AREAS.slice(0, 9).map((c) => c.name).join(", ")}.
          </p>
        </Container>
      </section>
    </div>
  );
}
