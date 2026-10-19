"use client";

import { useId, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, Phone } from "lucide-react";
import { searchServices, POPULAR_SEARCHES } from "@/lib/content/service-search";
import { SERVICE_ICONS } from "@/lib/content/service-icons";
import { SERVICE_PROBLEM } from "@/lib/content/service-problems";
import { BUSINESS } from "@/lib/content/business";
import { Icon3D } from "@/components/ui/icon-3d";
import { cn } from "@/lib/utils/cn";

/**
 * "What happened?" search: the driver types the problem in their own words
 * and gets the matching services instantly, each with its photo, price and a
 * one-tap Request button. Enter opens the request form for the top match.
 *
 * Matching (lib/content/service-search.ts) knows the words people use, such
 * as "dead battery", "keys inside", "no gas" or "accident", and partial
 * typing. When nothing matches, the phone number is right there.
 */
export function ServiceSearch({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const router = useRouter();
  const inputId = useId();
  const resultsId = useId();
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchServices(query), [query]);
  const hasQuery = query.trim().length > 0;
  const dark = tone === "dark";

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (results[0]) router.push(`/request?service=${results[0].slug}`);
  }

  return (
    <div className={cn("relative", className)}>
      <form role="search" aria-label="Find a roadside service" onSubmit={submit}>
        <label htmlFor={inputId} className="sr-only">
          What happened? Search roadside services
        </label>
        <div
          className={cn(
            "flex items-center gap-2 rounded-2xl border p-1.5 pl-4 shadow-lg transition-shadow focus-within:ring-4",
            dark
              ? "border-white/15 bg-white/10 shadow-black/20 backdrop-blur focus-within:ring-red-500/30"
              : "border-ink-950/10 bg-white shadow-ink-950/5 focus-within:border-red-600/50 focus-within:ring-red-600/15"
          )}
        >
          <Search className={cn("h-5 w-5 shrink-0", dark ? "text-white/60" : "text-red-600")} aria-hidden="true" />
          <input
            id={inputId}
            type="search"
            inputMode="search"
            autoComplete="off"
            enterKeyHint="go"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What happened? e.g. dead battery, flat tire"
            aria-controls={resultsId}
            className={cn(
              "h-11 min-w-0 flex-1 bg-transparent text-base outline-none [&::-webkit-search-cancel-button]:hidden",
              dark ? "text-white placeholder:text-white/50" : "text-ink-950 placeholder:text-ink-400"
            )}
          />
          {hasQuery && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-xl", dark ? "text-white/70 hover:bg-white/10" : "text-ink-500 hover:bg-ink-950/5")}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
          <button
            type="submit"
            className="hidden h-11 shrink-0 items-center gap-1.5 rounded-xl bg-red-600 px-4 text-sm font-bold text-white transition-colors hover:bg-red-700 sm:inline-flex"
          >
            Find help <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </form>

      {!hasQuery && (
        <div className="mt-3 flex flex-wrap gap-2" aria-label="Common problems">
          {POPULAR_SEARCHES.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => setQuery(term)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors sm:text-sm",
                dark
                  ? "border-white/15 bg-white/5 text-white/85 hover:border-white/40 hover:bg-white/10"
                  : "border-ink-950/10 bg-white text-ink-700 hover:border-red-600/40 hover:text-red-600"
              )}
            >
              {term}
            </button>
          ))}
        </div>
      )}

      <div id={resultsId} aria-live="polite">
        {hasQuery && (
          <div
            className={cn(
              "mt-3 overflow-hidden rounded-2xl border shadow-xl",
              dark ? "border-white/15 bg-ink-900/95 shadow-black/30 backdrop-blur" : "border-ink-950/10 bg-white shadow-ink-950/10"
            )}
          >
            <p className="sr-only">
              {results.length} {results.length === 1 ? "service" : "services"} found
            </p>
            {results.length > 0 ? (
              <ul className={cn("divide-y", dark ? "divide-white/10" : "divide-ink-950/8")}>
                {results.map((service) => {
                  const photo = service.photos?.[0];
                  const Icon = SERVICE_ICONS[service.slug];
                  return (
                    <li key={service.slug} className="flex items-center gap-3 p-3 sm:gap-4">
                      <Link href={`/services/${service.slug}`} className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                        <span className="relative h-14 w-16 shrink-0 overflow-hidden rounded-xl bg-ink-900 sm:w-20">
                          {photo ? (
                            <Image src={photo.src} alt="" fill sizes="80px" className="object-cover" />
                          ) : (
                            <span className="grid h-full w-full place-items-center">
                              <Icon3D icon={Icon} size="xs" />
                            </span>
                          )}
                        </span>
                        <span className="min-w-0">
                          <span className={cn("block truncate text-sm font-semibold sm:text-base", dark ? "text-white" : "text-ink-950")}>
                            {SERVICE_PROBLEM[service.slug]}
                          </span>
                          <span className={cn("block truncate text-xs", dark ? "text-white/60" : "text-ink-500")}>
                            {service.name} · {service.priceBadge}
                          </span>
                        </span>
                      </Link>
                      <Link
                        href={`/request?service=${service.slug}`}
                        className="shrink-0 rounded-xl bg-red-600 px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-red-700 sm:px-4 sm:text-sm"
                        aria-label={`Request ${service.name}`}
                      >
                        Request
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className={cn("p-4 text-sm", dark ? "text-white/80" : "text-ink-700")}>
                <p className="font-semibold">Not sure which service you need?</p>
                <p className="mt-1">Call dispatch and describe what happened. We&apos;ll work it out with you.</p>
                <a href={BUSINESS.phoneHref} className="mt-3 inline-flex items-center gap-2 font-bold text-red-600 hover:text-red-700">
                  <Phone className="h-4 w-4" aria-hidden="true" /> {BUSINESS.phoneDisplay}
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
