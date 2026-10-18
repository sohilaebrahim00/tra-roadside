import { getService } from "./services";

/**
 * Replaces {{price:<service-slug>}} with that service's published starting
 * price from SERVICES. Editorial content uses the token instead of typing a
 * figure, so a price change cannot leave a stale number in an article.
 *
 * Throws on an unknown slug or a service without a single starting price, so
 * a bad token fails the build instead of rendering "{{price:…}}" to customers.
 */
export function fillPrices(text: string): string {
  return text.replace(/\{\{price:([a-z-]+)\}\}/g, (_, slug: string) => {
    const price = getService(slug)?.priceFrom;
    if (!price) throw new Error(`fillPrices: no priceFrom for "${slug}"`);
    return `$${price}`;
  });
}
