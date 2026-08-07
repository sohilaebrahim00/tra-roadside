"use client";

import { useEffect, useRef, useState } from "react";
import { loadGoogleMaps } from "@/lib/maps/load-google-maps";

const MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

interface Point {
  lat: number;
  lng: number;
}

export function TrackingMap({ pickup, driver }: { pickup: Point; driver: Point | null }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapObjRef = useRef<google.maps.Map | null>(null);
  const pickupMarkerRef = useRef<google.maps.Marker | null>(null);
  const driverMarkerRef = useRef<google.maps.Marker | null>(null);
  const [mapsReady, setMapsReady] = useState(false);

  useEffect(() => {
    let active = true;
    loadGoogleMaps(MAPS_KEY).then((g) => {
      if (active && g) setMapsReady(true);
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!mapsReady || !mapRef.current || mapObjRef.current || !window.google) return;
    const map = new window.google.maps.Map(mapRef.current, {
      center: pickup,
      zoom: 13,
      disableDefaultUI: true,
      zoomControl: true,
    });
    pickupMarkerRef.current = new window.google.maps.Marker({
      position: pickup,
      map,
      icon: { path: window.google.maps.SymbolPath.CIRCLE, scale: 8, fillColor: "#e0202b", fillOpacity: 1, strokeColor: "#fff", strokeWeight: 2 },
    });
    if (driver) {
      driverMarkerRef.current = new window.google.maps.Marker({ position: driver, map });
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(pickup);
      bounds.extend(driver);
      map.fitBounds(bounds, 60);
    }
    mapObjRef.current = map;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapsReady]);

  useEffect(() => {
    if (!mapObjRef.current || !window.google) return;
    if (driver && !driverMarkerRef.current) {
      driverMarkerRef.current = new window.google.maps.Marker({ position: driver, map: mapObjRef.current });
    } else if (driver && driverMarkerRef.current) {
      driverMarkerRef.current.setPosition(driver);
    }
  }, [driver]);

  if (!mapsReady) {
    return <AbstractRouteMap pickup={pickup} driver={driver} />;
  }

  return <div ref={mapRef} className="h-full w-full" />;
}

/** Fallback when Google Maps isn't configured — a to-scale-ish abstract
 * visualization (not a fake screenshot) built from the same coordinates. */
function AbstractRouteMap({ pickup, driver }: { pickup: Point; driver: Point | null }) {
  const points = driver ? [pickup, driver] : [pickup];
  const lats = points.map((p) => p.lat);
  const lngs = points.map((p) => p.lng);
  const pad = 0.01;
  const minLat = Math.min(...lats) - pad;
  const maxLat = Math.max(...lats) + pad;
  const minLng = Math.min(...lngs) - pad;
  const maxLng = Math.max(...lngs) + pad;

  function project(p: Point) {
    const x = ((p.lng - minLng) / (maxLng - minLng)) * 100;
    const y = 100 - ((p.lat - minLat) / (maxLat - minLat)) * 100;
    return { x, y };
  }

  const pickupPos = project(pickup);
  const driverPos = driver ? project(driver) : null;

  return (
    <div className="relative h-full w-full bg-gradient-to-br from-ink-900 to-ink-950">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-90">
        {driverPos && (
          <line
            x1={driverPos.x}
            y1={driverPos.y}
            x2={pickupPos.x}
            y2={pickupPos.y}
            stroke="#f2941c"
            strokeWidth="0.8"
            strokeDasharray="2 2"
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>
      <div
        className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-red-600"
        style={{ left: `${pickupPos.x}%`, top: `${pickupPos.y}%` }}
        aria-label="Your location"
      />
      {driverPos && (
        <div
          className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-amber-500 transition-all duration-1000 ease-linear animate-marker-bob"
          style={{ left: `${driverPos.x}%`, top: `${driverPos.y}%` }}
          aria-label="Driver location"
        />
      )}
    </div>
  );
}
