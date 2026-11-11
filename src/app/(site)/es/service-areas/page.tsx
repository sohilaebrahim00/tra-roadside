import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";
import { BUSINESS, SERVICE_AREAS } from "@/lib/content/business";
import { getCiudadEs } from "@/lib/content/es/ciudades";
import { bilingualUrls, fitDescription } from "@/lib/seo";
import { env } from "@/lib/env";

const ciudades = SERVICE_AREAS.filter((c) => getCiudadEs(c.slug));

export const metadata: Metadata = {
  title: { absolute: `Asistencia en Carretera por Ciudad en DFW · ${BUSINESS.phoneDisplay}` },
  description: fitDescription(`Damos asistencia en carretera las 24 horas en ${ciudades.length} ciudades de Dallas–Fort Worth.`, [
    "Pasos de corriente, baterías, llantas y carros cerrados, sin membresía.",
    `Llame al ${BUSINESS.phoneDisplay}.`,
  ]),
  ...bilingualUrls({ en: "/service-areas", es: "/es/service-areas" }, "es"),
};

export default function CiudadesPage() {
  return (
    <div lang="es">
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: env.siteUrl },
          { name: "Español", url: `${env.siteUrl}/es` },
          { name: "Ciudades", url: `${env.siteUrl}/es/service-areas` },
        ]}
      />
      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-14 text-white sm:py-20">
        <HeroBackdrop />
        <Container className="relative z-10">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-400">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Áreas de servicio
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl">
            Ciudades donde damos servicio
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Llegamos a {ciudades.length} ciudades de Dallas–Fort Worth, las 24 horas. Elija su ciudad para ver cómo trabajamos ahí.
          </p>
        </Container>
      </section>
      <section className="py-14 sm:py-20">
        <Container>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {ciudades.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/es/service-areas/${c.slug}`}
                  className="flex items-center gap-2 rounded-xl border border-ink-950/8 bg-white p-4 text-sm font-medium text-ink-800 hover:border-red-600/30"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ink-600">
            <Link href="/service-areas" lang="en" hrefLang="en" className="underline hover:text-red-600">
              Service areas in English
            </Link>
          </p>
        </Container>
      </section>
    </div>
  );
}
