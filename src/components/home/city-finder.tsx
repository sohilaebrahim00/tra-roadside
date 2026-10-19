"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { MapPin, Search, Phone } from "lucide-react";
import { BUSINESS, SERVICE_AREAS } from "@/lib/content/business";

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

/**
 * Type-ahead over the served cities. Every city stays a plain link in the
 * server-rendered HTML (the filter only hides rows after typing), so crawlers
 * and no-JS visitors still get all of them as internal links.
 */
export function CityFinder() {
  const inputId = useId();
  const [query, setQuery] = useState("");
  const q = normalize(query);
  const matches = q ? SERVICE_AREAS.filter((c) => normalize(c.name).includes(q)) : SERVICE_AREAS;

  return (
    <div className="mt-8 rounded-3xl border border-ink-950/8 bg-paper-50 p-4 sm:mt-10 sm:p-6 dark:border-white/10 dark:bg-ink-900">
      <label htmlFor={inputId} className="sr-only">
        Search your city
      </label>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" aria-hidden="true" />
        <input
          id={inputId}
          type="search"
          inputMode="search"
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your city"
          className="h-13 w-full rounded-2xl border border-ink-950/10 bg-white pl-12 pr-4 text-base text-ink-950 shadow-sm outline-none placeholder:text-ink-400 focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
        />
      </div>

      <p className="sr-only" aria-live="polite">
        {q ? `${matches.length} ${matches.length === 1 ? "city" : "cities"} found` : ""}
      </p>

      {matches.length > 0 ? (
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {matches.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/service-areas/${city.slug}`}
                className="group flex items-center gap-2 rounded-xl border border-transparent px-3 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:border-red-600/20 hover:bg-white hover:text-red-600 dark:text-ink-200 dark:hover:bg-white/5"
              >
                <MapPin className="h-4 w-4 shrink-0 text-red-600/70 group-hover:text-red-600" aria-hidden="true" />
                {city.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 px-1 text-sm text-ink-600 dark:text-ink-200">
          Not on the list? Dispatch can confirm coverage for your exact location.
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-1 font-semibold text-red-600 hover:text-red-700">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
        </p>
      )}
    </div>
  );
}
