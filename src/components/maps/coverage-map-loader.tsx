"use client";

import dynamic from "next/dynamic";

// Leaflet touches `window` at import, so the map only ever loads in the browser.
export const CoverageMapLoader = dynamic(() => import("./coverage-map").then((m) => m.CoverageMap), {
  ssr: false,
  loading: () => <div className="h-[26rem] w-full rounded-2xl border border-ink-950/10 bg-paper-50 sm:h-[32rem]" aria-hidden="true" />,
});
