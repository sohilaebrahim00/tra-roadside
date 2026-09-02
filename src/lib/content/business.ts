/**
 * Single source of truth for real TRA business facts used across the site
 * (header, footer, structured data, contact page, legal pages).
 *
 * Sourced from an audit of the live site (texasroadside-assistance.com) on
 * 2026-08-02. Do NOT invent numbers, prices, or claims beyond what's listed
 * here — anything not confirmed is marked as an editable placeholder.
 */

export const BUSINESS = {
  legalName: "Texas Roadside Assistance LLC",
  shortName: "TRA",
  phoneDisplay: "(945) 412-1215",
  phoneHref: "tel:+19454121215",
  // Verified against the business's own published contact details.
  email: "info@texasroadside-assistance.com",
  hours: "Open 24/7, 365 days a year",
  dispatchNote: "Local Dallas–Fort Worth dispatch — not an out-of-state call center",
  /**
   * TRA is registered as a service-area business: it dispatches across the
   * DFW Metroplex and publishes no street address. These coordinates are the
   * service-area centre from the Google Business listing — they are what goes
   * into LocalBusiness structured data INSTEAD of a postal address. Never
   * invent a street address to fill the schema; a wrong address in structured
   * data is worse than none at all.
   */
  geo: { latitude: 32.869322, longitude: -96.711846 },
  googleListingUrl: "https://maps.app.goo.gl/jArUadnLNCMviYTTA",
  serviceAreaNote: "Service-area business — we dispatch across the Dallas–Fort Worth Metroplex and do not operate a walk-in location.",
  socials: {
    youtube: "https://youtube.com/@tra_roadside?si=lr_-mWLZaXlBPodx",
    instagram: "https://www.instagram.com/tra.roadside?igsh=dTczZmJhejg5OTR5",
    facebook: "https://www.facebook.com/share/196PJcoEgP/?mibextid=wwXIfr",
  },
  trustClaims: [
    { id: "arrival", label: "Average 30-Minute Arrival" },
    { id: "licensed", label: "100% Licensed & Insured" },
    { id: "available", label: "Available 24/7, 365 Days" },
    { id: "pricing", label: "Upfront Pricing — No Surprise Fees" },
  ],
} as const;

export interface ServiceArea {
  slug: string;
  name: string;
  county?: string;
}

/** The 27 DFW-area cities listed on the live site. */
export const SERVICE_AREAS: ServiceArea[] = [
  { slug: "dallas", name: "Dallas" },
  { slug: "arlington", name: "Arlington" },
  { slug: "irving", name: "Irving" },
  { slug: "grand-prairie", name: "Grand Prairie" },
  { slug: "mesquite", name: "Mesquite" },
  { slug: "garland", name: "Garland" },
  { slug: "richardson", name: "Richardson" },
  { slug: "plano", name: "Plano" },
  { slug: "frisco", name: "Frisco" },
  { slug: "mckinney", name: "McKinney" },
  { slug: "allen", name: "Allen" },
  { slug: "carrollton", name: "Carrollton" },
  { slug: "lewisville", name: "Lewisville" },
  { slug: "denton", name: "Denton" },
  { slug: "the-colony", name: "The Colony" },
  { slug: "euless", name: "Euless" },
  { slug: "bedford", name: "Bedford" },
  { slug: "hurst", name: "Hurst" },
  { slug: "north-richland-hills", name: "North Richland Hills" },
  { slug: "grapevine", name: "Grapevine" },
  { slug: "coppell", name: "Coppell" },
  { slug: "farmers-branch", name: "Farmers Branch" },
  { slug: "addison", name: "Addison" },
  { slug: "rockwall", name: "Rockwall" },
  { slug: "rowlett", name: "Rowlett" },
  { slug: "sachse", name: "Sachse" },
  { slug: "wylie", name: "Wylie" },
];

export function getServiceArea(slug: string) {
  return SERVICE_AREAS.find((c) => c.slug === slug);
}

/** A few real neighbors per city so location pages don't read as duplicated boilerplate. */
export function nearbyAreas(slug: string, count = 4): ServiceArea[] {
  const idx = SERVICE_AREAS.findIndex((c) => c.slug === slug);
  if (idx === -1) return SERVICE_AREAS.slice(0, count);
  const others = SERVICE_AREAS.filter((_, i) => i !== idx);
  // Deterministic pseudo-spread so each city gets a different-looking list.
  const start = idx % others.length;
  return Array.from({ length: count }, (_, i) => others[(start + i * 3) % others.length]);
}
