import { NextRequest, NextResponse } from "next/server";
import { reverseGeocode } from "@/lib/geo/reverse-geocode";

/**
 * Server-side reverse geocoding for the request form: Google when a Maps key
 * is configured, OpenStreetMap otherwise (see lib/geo/reverse-geocode.ts), so
 * no key ever reaches the browser. Returns `{ demo: true }` with no address
 * only when neither provider answers; the wizard then keeps the coordinates
 * and asks the customer to confirm the spot.
 */
export async function GET(req: NextRequest) {
  const lat = Number(req.nextUrl.searchParams.get("lat"));
  const lng = Number(req.nextUrl.searchParams.get("lng"));

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    return NextResponse.json({ error: "lat and lng are required" }, { status: 400 });
  }

  const result = await reverseGeocode(lat, lng);
  if (!result) return NextResponse.json({ demo: true, address: null });
  return NextResponse.json({ demo: false, address: result.address, provider: result.provider });
}
