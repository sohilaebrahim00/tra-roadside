"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { SERVICE_AREAS } from "@/lib/content/business";
import { CITY_COORDS } from "@/lib/content/city-coords";

const TILES = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

/**
 * Every served city as a dot on one map; tapping a dot opens a link to that
 * city's page. Same free Leaflet and OpenStreetMap setup as the request form.
 * The list of cities under it stays plain links for crawlers and screen readers.
 */
export function CoverageMap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    let stale = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (stale || !ref.current) return;
      map = L.map(ref.current, { scrollWheelZoom: false });
      L.tileLayer(TILES, { maxZoom: 18, attribution: ATTRIBUTION }).addTo(map);
      const points: [number, number][] = [];
      for (const city of SERVICE_AREAS) {
        const at = CITY_COORDS[city.slug];
        if (!at) continue;
        points.push([at.lat, at.lng]);
        const link = document.createElement("a");
        link.href = `/service-areas/${city.slug}`;
        link.textContent = `Roadside help in ${city.name}`;
        L.circleMarker([at.lat, at.lng], { radius: 7, color: "#ffffff", weight: 2, fillColor: "#e0131c", fillOpacity: 1 }).addTo(map).bindPopup(link);
      }
      map.fitBounds(points, { padding: [24, 24] });
    })();
    return () => {
      stale = true;
      map?.remove();
    };
  }, []);

  return <div ref={ref} role="img" aria-label="Map of the Dallas–Fort Worth cities TRA serves" className="isolate h-[26rem] w-full overflow-hidden rounded-2xl border border-ink-950/10 sm:h-[32rem]" />;
}
