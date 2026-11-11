import { SERVICE_AREAS, type ServiceArea } from "./business";
import { realNeighbors } from "./local-data";

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
 *
 * Kept out of business.ts on purpose: business.ts is imported by client
 * components on every page (header, menu, call bar), and importing
 * local-data.ts from there put every city's freeways and landmarks into the
 * JavaScript of every page (about 20 KB compressed, 2026-11-12).
 */
export function nearbyAreas(slug: string, count = 4): ServiceArea[] {
  return realNeighbors(slug, SERVICE_AREAS, count);
}
