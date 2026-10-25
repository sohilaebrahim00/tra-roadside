import Script from "next/script";
import { env } from "@/lib/env";

/**
 * Google tag IDs added in code, on top of NEXT_PUBLIC_GOOGLE_ADS_ID.
 * AW-18377314187: the owner's Google Ads tag, added 2026-10-25. The env ID
 * (the original Ads account, which the conversion label belongs to) keeps
 * loading too, so existing conversion tracking is untouched.
 */
const EXTRA_TAG_IDS = ["AW-18377314187"];

/**
 * Loads the Google tag (gtag.js) on every page, configured for each Ads ID.
 * One gtag.js load serves them all; each ID gets its own `config` call.
 *
 * Deliberately a SERVER component. `next/script` renders fine from one, and
 * keeping it server-side means `@/lib/env` — which also reads server-only
 * secrets like the Twilio auth token — is never imported into a client
 * bundle. Only the resolved ID strings cross into the browser.
 *
 * The in-code IDs load only on Vercel's production deployment, so local runs
 * and preview deploys send no traffic to those accounts; the env ID follows
 * whatever each environment sets. Nothing renders when there is no ID.
 */
export function GoogleAdsTag() {
  const isProduction = process.env.VERCEL_ENV === "production";
  const ids = [...new Set([env.googleAdsId, ...(isProduction ? EXTRA_TAG_IDS : [])].filter((id): id is string => Boolean(id)))];
  if (ids.length === 0) return null;

  return (
    <>
      <Script
        id="google-ads-gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ids[0])}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${ids.map((id) => `gtag('config', ${JSON.stringify(id)});`).join("\n")}`}
      </Script>
    </>
  );
}
