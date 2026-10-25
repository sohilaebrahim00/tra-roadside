import "server-only";
import { env } from "@/lib/env";

export interface ReverseGeocodeResult {
  /** A US-style street address, e.g. "1200 Main St, Dallas, TX 75202". */
  address: string;
  provider: "google" | "osm";
}

const STATE_CODES: Record<string, string> = { Texas: "TX", Oklahoma: "OK", Louisiana: "LA", Arkansas: "AR", "New Mexico": "NM" };

/**
 * Turns a GPS point into a street address, server side.
 *
 * Google first, when a Maps key is configured. Without one (the case on the
 * live site as of 2026-10-19), OpenStreetMap's Nominatim service, which is
 * free and needs no key. Its usage policy asks for an identifying User-Agent
 * and low volume, both true here: one lookup per GPS fix or dropped pin.
 *
 * Returns null when no provider answers; callers keep the coordinates then,
 * so a request is never blocked on a lookup.
 */
export async function reverseGeocode(lat: number, lng: number): Promise<ReverseGeocodeResult | null> {
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;

  const key = env.googleMapsServerApiKey || env.googleMapsApiKey;
  if (key) {
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`,
        { signal: AbortSignal.timeout(4000) }
      );
      const data = await res.json();
      const address: string | undefined = data?.results?.[0]?.formatted_address;
      if (address) return { address: address.replace(/, USA$/, ""), provider: "google" };
    } catch {
      // fall through to OpenStreetMap
    }
  }

  try {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`;
    const res = await fetch(url, { headers: OSM_HEADERS, signal: AbortSignal.timeout(4000) });
    if (!res.ok) return null;
    const data = await res.json();
    const address = formatOsmAddress(data?.address);
    return address ? { address, provider: "osm" } : null;
  } catch {
    return null;
  }
}

const OSM_HEADERS = {
  "User-Agent": "TRA Roadside website (https://www.txroadsideassistance.com; info@txroadsideassistance.com)",
  "Accept-Language": "en-US",
};

interface OsmAddress {
  house_number?: string;
  road?: string;
  city?: string;
  town?: string;
  village?: string;
  hamlet?: string;
  suburb?: string;
  county?: string;
  state?: string;
  postcode?: string;
}

/** "1200 Main St, Dallas, TX 75202", or "Near Main St, ..." when there is no house number. */
function formatOsmAddress(a: OsmAddress | undefined): string | null {
  if (!a) return null;
  const street = [a.house_number, a.road].filter(Boolean).join(" ");
  const city = a.city || a.town || a.village || a.hamlet || a.suburb || a.county;
  const state = a.state ? (STATE_CODES[a.state] ?? a.state) : undefined;
  const stateZip = [state, a.postcode].filter(Boolean).join(" ");
  const parts = [street, city, stateZip].filter(Boolean);
  if (parts.length === 0) return null;
  // Without a house number the point is between addresses: say so, so
  // dispatch knows to confirm the exact spot.
  return (a.house_number ? "" : "Near ") + parts.join(", ");
}

export interface AddressMatch {
  address: string;
  lat: number;
  lng: number;
}

/**
 * Typed address to map point, for the request form's address search. Google
 * first when keyed, otherwise OpenStreetMap, biased to the Dallas–Fort Worth
 * area. Called on an explicit search, never per keystroke, as Nominatim's
 * policy requires.
 */
export async function searchAddress(query: string): Promise<{ results: AddressMatch[]; provider: "google" | "osm" } | null> {
  const q = query.trim();
  if (q.length < 3) return { results: [], provider: "osm" };

  const key = env.googleMapsServerApiKey || env.googleMapsApiKey;
  if (key) {
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(q)}&components=administrative_area:TX|country:US&key=${key}`,
        { signal: AbortSignal.timeout(4000) }
      );
      const data = await res.json();
      const results: AddressMatch[] = (data?.results ?? [])
        .slice(0, 5)
        .map((r: { formatted_address: string; geometry: { location: { lat: number; lng: number } } }) => ({
          address: r.formatted_address.replace(/, USA$/, ""),
          lat: r.geometry.location.lat,
          lng: r.geometry.location.lng,
        }));
      if (results.length > 0) return { results, provider: "google" };
    } catch {
      // fall through to OpenStreetMap
    }
  }

  try {
    // viewbox: roughly the DFW Metroplex (lon/lat), preferred but not a hard limit.
    const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=5&countrycodes=us&viewbox=-97.9,33.5,-96.3,32.4&q=${encodeURIComponent(q)}`;
    const res = await fetch(url, { headers: OSM_HEADERS, signal: AbortSignal.timeout(4000) });
    if (!res.ok) return null;
    const data: { lat: string; lon: string; address?: OsmAddress; display_name?: string }[] = await res.json();
    const results = data
      .map((r) => ({
        address: formatOsmAddress(r.address) ?? r.display_name ?? "",
        lat: Number(r.lat),
        lng: Number(r.lon),
      }))
      .filter((r) => r.address && Number.isFinite(r.lat) && Number.isFinite(r.lng));
    return { results, provider: "osm" };
  } catch {
    return null;
  }
}

/**
 * True for the placeholder the request form writes when it could not look up
 * an address ("Near 33.1926, -97.1247 (confirm exact address)") or a bare
 * "33.19260, -97.12470" pair.
 */
export function isCoordinatePlaceholder(address: string | null | undefined): boolean {
  if (!address) return true;
  return /^(Near\s+)?-?\d{1,3}\.\d+,\s*-?\d{1,3}\.\d+/.test(address.trim());
}
