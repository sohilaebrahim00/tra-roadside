"use client";

import { useEffect, useRef, useState } from "react";
import { LocateFixed, MapPin, Search, AlertTriangle } from "lucide-react";
import { loadGoogleMaps } from "@/lib/maps/load-google-maps";
import { useGeolocation } from "@/lib/hooks/use-geolocation";
import { cn } from "@/lib/utils/cn";

export interface LocationValue {
  lat: number;
  lng: number;
  address: string;
}

const DALLAS_CENTER = { lat: 32.7767, lng: -96.797 };
const MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

export function MapPicker({
  value,
  onChange,
}: {
  value: LocationValue | null;
  onChange: (value: LocationValue) => void;
}) {
  const { status, coords, request } = useGeolocation();
  const mapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const mapObjRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);
  const [mapsReady, setMapsReady] = useState(false);
  const [manualAddress, setManualAddress] = useState(value?.address ?? "");
  const [searchResults, setSearchResults] = useState<{ address: string; lat: number; lng: number }[]>([]);
  const [searching, setSearching] = useState(false);
  const [demoNotice, setDemoNotice] = useState(false);

  // Load Google Maps once.
  useEffect(() => {
    let active = true;
    loadGoogleMaps(MAPS_KEY).then((g) => {
      if (active && g) setMapsReady(true);
    });
    return () => {
      active = false;
    };
  }, []);

  // When we get GPS coords, reverse-geocode and center the map / pin.
  useEffect(() => {
    if (!coords) return;
    reverseGeocodeAndSet(coords.lat, coords.lng);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords]);

  async function reverseGeocodeAndSet(lat: number, lng: number) {
    if (mapsReady && window.google) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, geoStatus) => {
        const address = geoStatus === "OK" && results?.[0] ? results[0].formatted_address : `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
        applyLocation(lat, lng, address);
      });
      return;
    }

    try {
      const res = await fetch(`/api/geocode/reverse?lat=${lat}&lng=${lng}`);
      const data = await res.json();
      if (data.demo) {
        setDemoNotice(true);
        applyLocation(lat, lng, `Near ${lat.toFixed(4)}, ${lng.toFixed(4)} (confirm exact address)`);
      } else {
        applyLocation(lat, lng, data.address ?? `${lat.toFixed(5)}, ${lng.toFixed(5)}`);
      }
    } catch {
      applyLocation(lat, lng, `${lat.toFixed(5)}, ${lng.toFixed(5)}`);
    }
  }

  function applyLocation(lat: number, lng: number, address: string) {
    setManualAddress(address);
    onChange({ lat, lng, address });
  }

  // Initialize the interactive map once ready + we have a starting point.
  useEffect(() => {
    if (!mapsReady || !mapRef.current || mapObjRef.current) return;
    const center = value ?? coords ?? DALLAS_CENTER;
    const map = new window.google!.maps.Map(mapRef.current, {
      center,
      zoom: 15,
      disableDefaultUI: true,
      zoomControl: true,
      mapId: "TRA_REQUEST_MAP",
    });
    const marker = new window.google!.maps.Marker({
      position: center,
      map,
      draggable: true,
    });
    marker.addListener("dragend", () => {
      const pos = marker.getPosition();
      if (pos) reverseGeocodeAndSet(pos.lat(), pos.lng());
    });
    mapObjRef.current = map;
    markerRef.current = marker;

    if (inputRef.current) {
      const autocomplete = new window.google!.maps.places.Autocomplete(inputRef.current, {
        componentRestrictions: { country: "us" },
        fields: ["formatted_address", "geometry"],
      });
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        const loc = place.geometry?.location;
        if (loc) {
          map.panTo(loc);
          marker.setPosition(loc);
          applyLocation(loc.lat(), loc.lng(), place.formatted_address ?? manualAddress);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapsReady]);

  // Keep marker/map in sync with external value changes.
  useEffect(() => {
    if (mapObjRef.current && markerRef.current && value) {
      markerRef.current.setPosition(value);
      mapObjRef.current.panTo(value);
    }
  }, [value]);

  async function handleManualSearch() {
    if (manualAddress.trim().length < 3) return;
    setSearching(true);
    try {
      const res = await fetch(`/api/geocode/search?q=${encodeURIComponent(manualAddress)}`);
      const data = await res.json();
      if (data.demo) {
        setDemoNotice(true);
        const fallback = coords ?? DALLAS_CENTER;
        applyLocation(fallback.lat, fallback.lng, manualAddress);
      } else {
        setSearchResults(data.results ?? []);
      }
    } finally {
      setSearching(false);
    }
  }

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={request}
        disabled={status === "requesting"}
        className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-ink-950 bg-ink-950 px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-white disabled:opacity-60"
      >
        <LocateFixed className="h-4.5 w-4.5" aria-hidden="true" />
        {status === "requesting" ? "Locating…" : "Use My Current Location"}
      </button>

      {status === "denied" && (
        <p className="flex items-start gap-2 rounded-lg bg-amber-500/10 px-3 py-2.5 text-sm text-amber-700 dark:text-amber-400">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          Location access was denied. Enter your address manually below instead.
        </p>
      )}
      {status === "unavailable" && (
        <p className="flex items-start gap-2 rounded-lg bg-amber-500/10 px-3 py-2.5 text-sm text-amber-700 dark:text-amber-400">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          GPS isn&apos;t available on this device. Enter your address manually below.
        </p>
      )}

      {mapsReady ? (
        <div ref={mapRef} className="h-64 w-full overflow-hidden rounded-xl border border-ink-950/10" />
      ) : (
        <div className="flex h-40 w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-ink-950/15 text-ink-400">
          <MapPin className="h-6 w-6" aria-hidden="true" />
          <p className="text-xs">
            {MAPS_KEY ? "Loading map…" : "Map preview unavailable (Google Maps not configured) — use the address field below."}
          </p>
        </div>
      )}

      <div>
        <label htmlFor="pickup-address" className="text-sm font-medium text-ink-800 dark:text-ink-100">
          Address
        </label>
        <div className="mt-1.5 flex gap-2">
          <input
            ref={inputRef}
            id="pickup-address"
            type="text"
            value={manualAddress}
            onChange={(e) => setManualAddress(e.target.value)}
            placeholder="Street address, cross streets, or highway mile marker"
            className="h-12 w-full rounded-xl border border-ink-950/15 px-3.5 text-base focus:border-red-600 focus:outline-none dark:border-white/15 dark:bg-ink-900"
          />
          {!mapsReady && (
            <button
              type="button"
              onClick={handleManualSearch}
              disabled={searching}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink-950 text-white disabled:opacity-60"
              aria-label="Search address"
            >
              <Search className="h-4.5 w-4.5" aria-hidden="true" />
            </button>
          )}
        </div>

        {searchResults.length > 0 && (
          <ul className="mt-2 divide-y divide-ink-950/8 rounded-xl border border-ink-950/10 dark:divide-white/10 dark:border-white/10">
            {searchResults.map((r) => (
              <li key={r.address}>
                <button
                  type="button"
                  onClick={() => {
                    applyLocation(r.lat, r.lng, r.address);
                    setSearchResults([]);
                  }}
                  className="w-full px-3.5 py-2.5 text-left text-sm hover:bg-ink-950/5 dark:hover:bg-white/5"
                >
                  {r.address}
                </button>
              </li>
            ))}
          </ul>
        )}

        {!mapsReady && !searchResults.length && (
          <button
            type="button"
            onClick={() => manualAddress.trim().length >= 3 && applyLocation(coords?.lat ?? DALLAS_CENTER.lat, coords?.lng ?? DALLAS_CENTER.lng, manualAddress)}
            className={cn("mt-2 text-xs font-medium text-red-600 hover:underline", manualAddress.trim().length < 3 && "hidden")}
          >
            Use this address as typed
          </button>
        )}

        {demoNotice && (
          <p className="mt-2 text-xs text-ink-500 dark:text-ink-300">
            Demo mode: address lookup isn&apos;t connected to Google Maps yet — dispatch will confirm your exact location by phone.
          </p>
        )}
      </div>
    </div>
  );
}
