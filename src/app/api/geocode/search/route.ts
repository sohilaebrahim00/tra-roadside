import { NextRequest, NextResponse } from "next/server";
import { env } from "@/lib/env";

/** Server-side forward geocoding proxy (address text -> lat/lng) for the manual-entry fallback. */
export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");
  if (!q || q.trim().length < 3) {
    return NextResponse.json({ error: "q must be at least 3 characters" }, { status: 400 });
  }

  const key = env.googleMapsServerApiKey || env.googleMapsApiKey;
  if (!key) {
    return NextResponse.json({ demo: true, results: [] });
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(q)}&components=administrative_area:TX|country:US&key=${key}`
    );
    const data = await res.json();
    const results = (data?.results ?? []).slice(0, 5).map((r: { formatted_address: string; geometry: { location: { lat: number; lng: number } } }) => ({
      address: r.formatted_address,
      lat: r.geometry.location.lat,
      lng: r.geometry.location.lng,
    }));
    return NextResponse.json({ demo: false, results });
  } catch {
    return NextResponse.json({ demo: true, results: [] });
  }
}
