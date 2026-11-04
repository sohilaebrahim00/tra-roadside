import { getService } from "./services";
import { DISPATCH_FEE_USD, expectedTotal, headlineLine } from "./pricing";
import { formatAmount } from "./price-format";

/**
 * Fills price tokens in editorial content from SERVICES, so a price change
 * cannot leave a stale number in an article:
 *
 *   {{price:<service-slug>}}  the service price, before tax and without the
 *                             dispatch fee: "$239–$255", "$70", "from $129"
 *   {{total:<service-slug>}}  that price with the dispatch fee added once:
 *                             "$258–$274", "$89", "from $148"
 *   {{dispatchFee}}           "$19"
 *
 * Throws on an unknown slug or a service without a published price, so a bad
 * token fails the build instead of rendering "{{price:…}}" to customers.
 */
export function fillPrices(text: string): string {
  return text
    .replace(/\{\{dispatchFee\}\}/g, DISPATCH_FEE_USD)
    .replace(/\{\{(price|total):([a-z-]+)\}\}/g, (_, kind: string, slug: string) => {
      const svc = getService(slug);
      const line = svc && headlineLine(svc);
      if (!line) throw new Error(`fillPrices: no published price for "${slug}"`);
      // Mid-sentence, an open-ended price reads "from $129", not "From $129".
      return kind === "price" ? formatAmount(line, "–", "from") : expectedTotal(line).replace(/^From /, "from ");
    });
}
