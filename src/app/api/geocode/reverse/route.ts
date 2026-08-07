import { NextRequest, NextResponse } from "next/server";
import { env } from "@/lib/env";

/**
 * Server-side reverse geocoding proxy so the Google Maps server key never
 * reaches the browser. Returns `{ demo: true }` with no address when the key
 * isn't configured — the request wizard falls back to manual address entry.
 */
export async function GET(req: NextRequest) {
  const lat = req.nextUrl.searchParams.get("lat");
  const lng = req.nextUrl.searchParams.get("lng");

  if (!lat || !lng) {
    return NextResponse.json({ error: "lat and lng are required" }, { status: 400 });
  }

  const key = env.googleMapsServerApiKey || env.googleMapsApiKey;
  if (!key) {
    return NextResponse.json({ demo: true, address: null });
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${encodeURIComponent(lat)},${encodeURIComponent(lng)}&key=${key}`
    );
    const data = await res.json();
    const address = data?.results?.[0]?.formatted_address ?? null;
    return NextResponse.json({ demo: false, address });
  } catch {
    return NextResponse.json({ demo: true, address: null });
  }
}
