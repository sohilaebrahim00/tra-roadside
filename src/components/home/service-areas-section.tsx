import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICE_AREAS } from "@/lib/content/business";

export function ServiceAreasSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Where We Serve"
            title="27 cities across the DFW Metroplex"
            description="Confirmed service areas — dispatch will confirm coverage for your exact location when you request help."
          />
          <Link
            href="/service-areas"
            className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 sm:flex"
          >
            View service area map <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 rounded-2xl border border-ink-950/8 bg-paper-50 p-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 dark:border-white/10 dark:bg-ink-900">
          {SERVICE_AREAS.map((city) => (
            <Link
              key={city.slug}
              href={`/service-areas/${city.slug}`}
              className="group flex items-center gap-1.5 text-sm text-ink-700 hover:text-red-600 dark:text-ink-200"
            >
              <MapPin className="h-3.5 w-3.5 shrink-0 text-ink-400 group-hover:text-red-600" aria-hidden="true" />
              {city.name}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
