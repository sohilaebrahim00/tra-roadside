import Link from "next/link";
import { Route, Map as MapIcon, MapPin, ArrowUpRight } from "lucide-react";
import type { ServiceContent } from "@/lib/content/services";
import type { ServiceArea } from "@/lib/content/business";
import type { LocalArea } from "@/lib/content/local-data";

/**
 * The local section: the approved localContext paragraph, then the verified
 * geography from local-data.ts as scannable chips and cards.
 *
 * Every block here is conditional on the data actually existing, because the
 * dataset is deliberately uneven and must be allowed to be:
 *
 *   - corridors  : 2 (Bedford) to 7 (Dallas, Grand Prairie)
 *   - districts  : 11 (Dallas) down to none at all (18 of the 27 cities)
 *   - neighbors  : 3 for Dallas, exactly 1 for Arlington / Wylie / NRH /
 *                  Rockwall, and none for Denton
 *
 * So a city with no verified districts renders no "Areas" heading, and a city
 * with one adjacent served city shows one card rather than padding to a grid.
 * Nothing is invented and no count is forced.
 */
export function LocalSection({
  city,
  svc,
  local,
  localContext,
  nearby,
}: {
  city: ServiceArea;
  svc: ServiceContent;
  local: LocalArea;
  localContext: string;
  nearby: readonly ServiceArea[];
}) {
  const hasCorridors = local.corridors.length > 0;
  const hasDistricts = local.districts.length > 0;
  const hasNearby = nearby.length > 0;

  return (
    <section>
      <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-[1.75rem]">
        {svc.shortName} across {city.name}
      </h2>

      <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-600">{localContext}</p>

      {/* items-start so each card sizes to its own content. The two sides are
          routinely lopsided — Irving has 4 corridors against 2 districts,
          Dallas has 7 against 11 — and a stretched grid leaves the shorter card
          with a block of dead space. */}
      {(hasCorridors || hasDistricts) && (
        <div className="mt-7 grid items-start gap-4 sm:grid-cols-2">
          {hasCorridors && (
            <div className="rounded-2xl border border-ink-950/8 bg-white p-5">
              <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-ink-950">
                <Route className="h-4 w-4 text-red-600" aria-hidden="true" />
                Roads we cover
              </h3>
              <ul className="mt-3.5 flex flex-wrap gap-2">
                {local.corridors.map((c) => (
                  <li
                    key={c}
                    className="rounded-lg border border-ink-950/8 bg-paper-50 px-2.5 py-1.5 text-[0.8rem] font-medium text-ink-700"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Rendered only where local-data has verified districts. */}
          {hasDistricts && (
            <div className="rounded-2xl border border-ink-950/8 bg-white p-5">
              <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-ink-950">
                <MapIcon className="h-4 w-4 text-red-600" aria-hidden="true" />
                Areas
              </h3>
              <ul className="mt-3.5 flex flex-wrap gap-2">
                {local.districts.map((d) => (
                  <li
                    key={d}
                    className="rounded-lg border border-ink-950/8 bg-paper-50 px-2.5 py-1.5 text-[0.8rem] font-medium text-ink-700"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Nearby served cities, from verified adjacency only. */}
      {hasNearby && (
        <div className="mt-7">
          <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-ink-950">
            <MapPin className="h-4 w-4 text-red-600" aria-hidden="true" />
            Nearby service areas
          </h3>
          <ul className="mt-3.5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {nearby.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/service-areas/${c.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-ink-950/8 bg-white px-4 py-3.5 transition-colors hover:border-red-600/25"
                >
                  <span className="min-w-0 truncate text-[0.95rem] font-semibold text-ink-800 group-hover:text-red-600">
                    {c.name}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-ink-400 group-hover:text-red-600"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
