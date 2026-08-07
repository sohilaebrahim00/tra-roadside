"use client";

import { useEffect, useRef, useState } from "react";
import { loadGoogleMaps } from "@/lib/maps/load-google-maps";
import { createClient } from "@/lib/supabase/client";

const MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";
const DALLAS_CENTER = { lat: 32.7767, lng: -96.797 };

export interface OpsDriver {
  driverId: string;
  name: string;
  status: string;
  lat: number | null;
  lng: number | null;
  recordedAt: string | null;
}

export function OpsMap({ initialDrivers }: { initialDrivers: OpsDriver[] }) {
  const [drivers, setDrivers] = useState(initialDrivers);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapObjRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<Map<string, google.maps.Marker>>(new Map());
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
    const supabase = createClient();
    const channel = supabase
      .channel("ops-map-locations")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "driver_locations" }, (payload) => {
        const row = payload.new as { driver_id: string; lat: number; lng: number; recorded_at: string };
        setDrivers((prev) =>
          prev.map((d) => (d.driverId === row.driver_id ? { ...d, lat: row.lat, lng: row.lng, recordedAt: row.recorded_at } : d))
        );
      })
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    if (!mapsReady || !mapRef.current || !window.google) return;
    if (!mapObjRef.current) {
      mapObjRef.current = new window.google.maps.Map(mapRef.current, {
        center: DALLAS_CENTER,
        zoom: 10,
        disableDefaultUI: true,
        zoomControl: true,
      });
    }
    const map = mapObjRef.current;

    for (const d of drivers) {
      if (d.lat === null || d.lng === null) continue;
      const existing = markersRef.current.get(d.driverId);
      if (existing) {
        existing.setPosition({ lat: d.lat, lng: d.lng });
      } else {
        const marker = new window.google.maps.Marker({
          position: { lat: d.lat, lng: d.lng },
          map,
          label: d.name[0],
        });
        markersRef.current.set(d.driverId, marker);
      }
    }
  }, [mapsReady, drivers]);

  const located = drivers.filter((d) => d.lat !== null && d.lng !== null);

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
      <div className="h-[28rem] overflow-hidden rounded-2xl border border-ink-950/8 dark:border-white/10">
        {mapsReady ? (
          <div ref={mapRef} className="h-full w-full" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 bg-paper-50 text-center text-ink-400 dark:bg-ink-900">
            <p className="text-sm">Map unavailable — Google Maps isn&apos;t configured.</p>
            <p className="text-xs">Driver positions are still listed to the right in real time.</p>
          </div>
        )}
      </div>
      <div className="rounded-2xl border border-ink-950/8 bg-white p-4 dark:border-white/10 dark:bg-ink-900">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-ink-400">
          {located.length} driver{located.length === 1 ? "" : "s"} reporting location
        </h2>
        <ul className="mt-3 space-y-3">
          {drivers.map((d) => (
            <li key={d.driverId} className="text-sm">
              <p className="font-medium text-ink-900 dark:text-white">{d.name}</p>
              <p className="text-xs text-ink-400">
                {d.status.replace("_", " ")}
                {d.recordedAt && ` · updated ${new Date(d.recordedAt).toLocaleTimeString()}`}
                {!d.lat && " · no location reported"}
              </p>
            </li>
          ))}
          {drivers.length === 0 && <p className="text-sm text-ink-400">No drivers on duty.</p>}
        </ul>
      </div>
    </div>
  );
}
