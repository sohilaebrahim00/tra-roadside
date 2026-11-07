import { getService } from "./services";
import { DISPATCH_FEE_USD, expectedTotal, headlineLine } from "./pricing";
import { formatAmount } from "./price-format";

/**
 * Fills price tokens in editorial content from SERVICES, so a price change
 * cannot leave a stale number in an article:
 *
 *   {{price:<service-slug>}}  the service price, without the dispatch fee: "$49–$75", "$239", "from $129"
 *   {{total:<service-slug>}}  that price with the dispatch fee added once:
 *                             "$68–$94", "$258", "from $148"
 *   {{price2:<service-slug>}}  the service's second line: the semi truck jump
 *                             start, the trunk lockout: "from $90", "$120"
 *   {{total2:<service-slug>}}  that line with the dispatch fee added once
 *   {{dispatchFee}}           "$19"
 *
 * Throws on an unknown slug or a service without a published price, so a bad
 * token fails the build instead of rendering "{{price:…}}" to customers.
 */
export function fillPrices(text: string): string {
  return text
    .replace(/\{\{dispatchFee\}\}/g, DISPATCH_FEE_USD)
    .replace(/\{\{(price2?|total2?):([a-z-]+)\}\}/g, (_, token: string, slug: string) => {
      const svc = getService(slug);
      const second = token.endsWith("2");
      const kind = second ? token.slice(0, -1) : token;
      const line = svc && (second ? svc.priceLines?.[1] : headlineLine(svc));
      if (!line) throw new Error(`fillPrices: no published price for "${token}:${slug}"`);
      // Mid-sentence, an open-ended price reads "from $129", not "From $129".
      return kind === "price" ? formatAmount(line, "–", "from") : expectedTotal(line).replace(/^From /, "from ");
    });
}
