/**
 * Single source of truth for real TRA business facts used across the site
 * (header, footer, structured data, contact page, legal pages).
 *
 * Sourced from an audit of the live site on
 * 2026-08-02. Do NOT invent numbers, prices, or claims beyond what's listed
 * here — anything not confirmed is marked as an editable placeholder.
 */
import { realNeighbors } from "./local-data";

export const BUSINESS = {
  legalName: "Texas Roadside Assistance LLC",
  shortName: "TRA",
  phoneDisplay: "(945) 412-1215",
  phoneHref: "tel:+19454121215",
  // The business mailbox on the site's own domain (Hostinger mail), from
  // 2026-10-25. Shown on the site, in the schema, and set as Reply-To on
  // every email the site sends.
  email: "info@txroadsideassistance.com",
  hours: "Open 24/7, 365 days a year",
  dispatchNote: "Local Dallas–Fort Worth dispatch — not an out-of-state call center",
  /**
   * The business address exactly as the Google Business Profile shows it. The
   * owner decided on 2026-10-19 to publish it in full, as plain text on every
   * page (footer), on the contact page and in the LocalBusiness schema, so
   * the name, address and phone on the site match Google's letter for letter.
   * Change it only together with the Google listing.
   */
  address: {
    street: "13907 Montfort Dr",
    city: "Dallas",
    region: "TX",
    postalCode: "75240",
    country: "US",
  },
  /**
   * The service-area center from the Google listing. No longer emitted in the
   * schema: it is about 12 km from the street address above, and two
   * different locations for one business would contradict each other. Kept
   * for reference only.
   */
  geo: { latitude: 32.869322, longitude: -96.711846 },
  googleListingUrl: "https://maps.app.goo.gl/jArUadnLNCMviYTTA",
  /**
   * Opens Google's write-a-review box directly.
   *
   * NOT the only copy of this URL. The same literal is hardcoded in two other
   * places, and all THREE must be changed together if the listing ever moves:
   *   1. here
   *   2. the notification_templates rows in Supabase (service_completed, both
   *      the sms and email channels) — the database is what the app reads
   *   3. NOTIFICATION_TEMPLATES_FALLBACK in
   *      src/lib/content/notification-templates.ts, used in demo mode and as
   *      the seed source of truth
   * Deliberately not refactored into a template variable for now: the
   * templates are edited in the admin CMS, and a variable there would be one
   * more thing to get wrong.
   */
  googleReviewUrl: "https://g.page/r/CejARc-2hFzlEAI/review",
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

/**
 * Cities that genuinely adjoin `slug`, from the verified data in local-data.ts.
 *
 * This used to be a deterministic pseudo-spread over the service-area array —
 * a way of giving each city a different-looking list, with no geography behind
 * it. It was telling visitors and Google that Denton is near Rockwall and that
 * Grapevine is near Wylie, which are opposite corners of the metroplex.
 *
 * May return fewer than `count`: an edge-of-coverage city like Denton or Wylie
 * has one served neighbor, and one true neighbor beats five invented ones.
 */
export function nearbyAreas(slug: string, count = 4): ServiceArea[] {
  return realNeighbors(slug, SERVICE_AREAS, count);
}

/** The address on one line, as it is written on the site: "13907 Montfort Dr, Dallas, TX 75240". */
export function addressLine(): string {
  const a = BUSINESS.address;
  return `${a.street}, ${a.city}, ${a.region} ${a.postalCode}`;
}
