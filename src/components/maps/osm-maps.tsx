"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap, Marker, Polyline, LeafletMouseEvent } from "leaflet";
import "leaflet/dist/leaflet.css";

/**
 * Free maps for the request form and the tracking page: Leaflet with
 * OpenStreetMap's standard tiles, no API key. Used whenever no Google Maps key
 * is configured (the live site as of 2026-10-19). OpenStreetMap's tile policy
 * asks for visible attribution, which Leaflet's attribution control shows, and
 * for light use, which a few map views per request is.
 *
 * Leaflet touches `window` at import, so it is loaded inside effects only.
 * Markers are plain HTML (divIcon) in the brand colors, so no image assets
 * have to be resolved by the bundler.
 *
 * Containers are `isolate`, so Leaflet's own z-indexes (400 to 1000) stay
 * inside the map and never cover the sticky site header.
 */

interface Point {
  lat: number;
  lng: number;
}

const TILES = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const PIN_HTML = `<svg width="34" height="44" viewBox="0 0 34 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17 43s15-14.6 15-26A15 15 0 0 0 2 17c0 11.4 15 26 15 26Z" fill="#e0131c" stroke="#fff" stroke-width="2.5"/><circle cx="17" cy="17" r="5.5" fill="#fff"/></svg>`;
const PICKUP_DOT = `<span style="display:block;width:18px;height:18px;border-radius:9999px;background:#e0131c;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.45)"></span>`;
const DRIVER_DOT = `<span style="display:grid;place-items:center;width:30px;height:30px;border-radius:9999px;background:#f2840c;border:3px solid #fff;box-shadow:0 4px 12px rgba(0,0,0,.45)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg></span>`;

async function loadLeaflet() {
  return (await import("leaflet")).default;
}

/**
 * The request form's map: a draggable pin. Dragging it, or tapping the map,
 * reports the new point so the form can look up its address. The pin follows
 * `value` when the location changes from GPS or an address search.
 */
export function OsmPickerMap({
  value,
  fallbackCenter,
  onPinMoved,
}: {
  value: Point | null;
  fallbackCenter: Point;
  onPinMoved: (lat: number, lng: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markerRef = useRef<Marker | null>(null);
  // Latest callback without re-creating the map.
  const moved = useRef(onPinMoved);
  useEffect(() => {
    moved.current = onPinMoved;
  }, [onPinMoved]);

  useEffect(() => {
    let stale = false;
    (async () => {
      const L = await loadLeaflet();
      if (stale || !ref.current || mapRef.current) return;
      const start = value ?? fallbackCenter;
      const map = L.map(ref.current, { zoomControl: true, attributionControl: true }).setView([start.lat, start.lng], value ? 16 : 11);
      L.tileLayer(TILES, { maxZoom: 19, attribution: ATTRIBUTION }).addTo(map);

      const icon = L.divIcon({ html: PIN_HTML, className: "", iconSize: [34, 44], iconAnchor: [17, 43] });
      const place = (lat: number, lng: number) => {
        if (markerRef.current) {
          markerRef.current.setLatLng([lat, lng]);
        } else {
          const marker = L.marker([lat, lng], { draggable: true, icon, title: "Your location", alt: "Your location" }).addTo(map);
          marker.on("dragend", () => {
            const p = marker.getLatLng();
            moved.current(p.lat, p.lng);
          });
          markerRef.current = marker;
        }
      };
      if (value) place(value.lat, value.lng);
      map.on("click", (e: LeafletMouseEvent) => {
        place(e.latlng.lat, e.latlng.lng);
        moved.current(e.latlng.lat, e.latlng.lng);
      });
      mapRef.current = map;
      // The map may mount inside an animating step; measure once it settles.
      setTimeout(() => map.invalidateSize(), 250);
    })();
    return () => {
      stale = true;
      mapRef.current?.remove();
      mapRef.current = null;
      markerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Follow location changes made outside the map (GPS, address search).
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !value) return;
    (async () => {
      const L = await loadLeaflet();
      if (markerRef.current) {
        markerRef.current.setLatLng([value.lat, value.lng]);
      } else {
        const icon = L.divIcon({ html: PIN_HTML, className: "", iconSize: [34, 44], iconAnchor: [17, 43] });
        const marker = L.marker([value.lat, value.lng], { draggable: true, icon, title: "Your location", alt: "Your location" }).addTo(map);
        marker.on("dragend", () => {
          const p = marker.getLatLng();
          moved.current(p.lat, p.lng);
        });
        markerRef.current = marker;
      }
      map.setView([value.lat, value.lng], Math.max(map.getZoom(), 16));
    })();
  }, [value?.lat, value?.lng]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative isolate z-0 h-64 w-full overflow-hidden rounded-xl border border-ink-950/10 dark:border-white/10">
      <div ref={ref} className="h-full w-full" role="region" aria-label="Map: drag the pin or tap to set your exact location" />
    </div>
  );
}

/**
 * The tracking page's map: the customer's spot, the driver's live position
 * (moved as updates arrive) and a dashed line between them, framed to show
 * both.
 */
export function OsmTrackingMap({ pickup, driver }: { pickup: Point; driver: Point | null }) {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const driverRef = useRef<Marker | null>(null);
  const lineRef = useRef<Polyline | null>(null);
  const framed = useRef(false);

  useEffect(() => {
    let stale = false;
    (async () => {
      const L = await loadLeaflet();
      if (stale || !ref.current || mapRef.current) return;
      const map = L.map(ref.current, { zoomControl: true, attributionControl: true }).setView([pickup.lat, pickup.lng], 14);
      L.tileLayer(TILES, { maxZoom: 19, attribution: ATTRIBUTION }).addTo(map);
      L.marker([pickup.lat, pickup.lng], {
        icon: L.divIcon({ html: PICKUP_DOT, className: "", iconSize: [18, 18], iconAnchor: [9, 9] }),
        title: "Your location",
        alt: "Your location",
        keyboard: false,
      }).addTo(map);
      mapRef.current = map;
      setTimeout(() => map.invalidateSize(), 250);
    })();
    return () => {
      stale = true;
      mapRef.current?.remove();
      mapRef.current = null;
      driverRef.current = null;
      lineRef.current = null;
      framed.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!driver) return;
    let stale = false;
    const tick = async () => {
      const L = await loadLeaflet();
      const map = mapRef.current;
      if (stale) return;
      // The map may still be loading on the first driver update; try again shortly.
      if (!map) {
        setTimeout(tick, 300);
        return;
      }
      if (driverRef.current) {
        driverRef.current.setLatLng([driver.lat, driver.lng]);
      } else {
        driverRef.current = L.marker([driver.lat, driver.lng], {
          icon: L.divIcon({ html: DRIVER_DOT, className: "", iconSize: [30, 30], iconAnchor: [15, 15] }),
          title: "Your driver",
          alt: "Your driver",
          keyboard: false,
        }).addTo(map);
      }
      const path: [number, number][] = [
        [driver.lat, driver.lng],
        [pickup.lat, pickup.lng],
      ];
      if (lineRef.current) lineRef.current.setLatLngs(path);
      else lineRef.current = L.polyline(path, { color: "#f2840c", weight: 3, dashArray: "6 8", opacity: 0.9 }).addTo(map);
      // Frame both points once; after that the customer can pan freely.
      if (!framed.current) {
        map.fitBounds(L.latLngBounds(path), { padding: [48, 48], maxZoom: 16 });
        framed.current = true;
      }
    };
    tick();
    return () => {
      stale = true;
    };
  }, [driver?.lat, driver?.lng]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative isolate z-0 h-full w-full">
      <div ref={ref} className="h-full w-full" role="region" aria-label="Map of your location and your driver's location" />
    </div>
  );
}
