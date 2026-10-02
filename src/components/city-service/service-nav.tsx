import Link from "next/link";
import { ArrowUpRight, MapPin, FileText } from "lucide-react";
import { getService } from "@/lib/content/services";
import { SERVICE_ICONS } from "@/lib/content/service-icons";
import type { ServiceContent } from "@/lib/content/services";
import type { ServiceArea } from "@/lib/content/business";

/**
 * Internal navigation out of a City x Service page.
 *
 * Same destinations as before the UI pass — sibling services in this city, the
 * full service page, and the city hub — presented as deliberate navigation
 * instead of three stacked lists of plain links. No destination was added or
 * removed; the sibling set still comes from servicesForCity(), so a city with
 * two authored services shows two cards and Dallas shows five.
 */
export function ServiceNav({
  city,
  svc,
  siblings,
}: {
  city: ServiceArea;
  svc: ServiceContent;
  siblings: readonly { city: string; service: string }[];
}) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-[1.75rem]">
        Other services in {city.name}
      </h2>

      {siblings.length > 0 && (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {siblings.map((s) => {
            const sv = getService(s.service);
            if (!sv) return null;
            const Icon = SERVICE_ICONS[sv.slug];
            return (
              <li key={s.service}>
                <Link
                  href={`/service-areas/${city.slug}/${s.service}`}
                  className="group flex h-full items-center gap-3.5 rounded-2xl border border-ink-950/8 bg-white p-4 transition-colors hover:border-red-600/25"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600/10 text-red-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.95rem] font-semibold leading-snug text-ink-800 group-hover:text-red-600">
                      {sv.shortName}
                    </span>
                    <span className="block truncate text-xs text-ink-400">in {city.name}</span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-ink-400 group-hover:text-red-600"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      {/* Parent links: the service in full, and the city hub. */}
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        <li>
          <Link
            href={`/services/${svc.slug}`}
            className="group flex items-center gap-3 rounded-xl border border-ink-950/8 bg-paper-50 px-4 py-3.5 transition-colors hover:border-red-600/25"
          >
            <FileText className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
            <span className="min-w-0 flex-1 text-[0.9rem] text-ink-700 group-hover:text-red-600">
              {svc.name} — full service details
            </span>
          </Link>
        </li>
        <li>
          <Link
            href={`/service-areas/${city.slug}`}
            className="group flex items-center gap-3 rounded-xl border border-ink-950/8 bg-paper-50 px-4 py-3.5 transition-colors hover:border-red-600/25"
          >
            <MapPin className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
            <span className="min-w-0 flex-1 text-[0.9rem] text-ink-700 group-hover:text-red-600">
              All services in {city.name}
            </span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
