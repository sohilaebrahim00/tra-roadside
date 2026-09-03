import Script from "next/script";
import { env } from "@/lib/env";

/**
 * Loads the Google Ads global site tag on every page.
 *
 * Deliberately a SERVER component. `next/script` renders fine from one, and
 * keeping it server-side means `@/lib/env` — which also reads server-only
 * secrets like the Twilio auth token — is never imported into a client
 * bundle. Only the resolved ID string crosses into the browser.
 *
 * Inert when NEXT_PUBLIC_GOOGLE_ADS_ID is unset: nothing is rendered at all,
 * so a local or preview deploy sends no traffic to Google.
 */
export function GoogleAdsTag() {
  const id = env.googleAdsId;
  if (!id) return null;

  return (
    <>
      <Script
        id="google-ads-gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ${JSON.stringify(id)});`}
      </Script>
    </>
  );
}
