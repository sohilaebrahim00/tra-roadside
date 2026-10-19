import { NextRequest, NextResponse } from "next/server";
import { searchAddress } from "@/lib/geo/reverse-geocode";

/**
 * Server-side forward geocoding (address text -> lat/lng) for the request
 * form's address search: Google when keyed, OpenStreetMap otherwise. Returns
 * `{ demo: true }` only when neither provider answers.
 */
export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");
  if (!q || q.trim().length < 3) {
    return NextResponse.json({ error: "q must be at least 3 characters" }, { status: 400 });
  }

  const found = await searchAddress(q);
  if (found === null) return NextResponse.json({ demo: true, results: [] });
  return NextResponse.json({ demo: false, results: found.results, provider: found.provider });
}
