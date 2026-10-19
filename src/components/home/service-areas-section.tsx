import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICE_AREAS } from "@/lib/content/business";
import { CityFinder } from "./city-finder";

export function ServiceAreasSection() {
  return (
    <section className="py-12 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Where We Serve"
            title={`${SERVICE_AREAS.length} cities. One local dispatch.`}
            description="Find your city for local details and services. Dispatch confirms coverage for your exact location when you request help."
          />
          <Link
            href="/service-areas"
            className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 sm:flex"
          >
            View service area map <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <CityFinder />
      </Container>
    </section>
  );
}
