import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { env } from "@/lib/env";
import { BUSINESS } from "@/lib/content/business";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import { ServiceWorkerRegister } from "@/components/pwa/sw-register";
import { GoogleAdsTag } from "@/components/analytics/google-ads";
import { OPEN_GRAPH_DEFAULTS } from "@/lib/seo";

/*
 * Self-hosted fonts (app/fonts/), so the build never fetches Google Fonts.
 * On 2026-10-25 Vercel's build failed fetching Oswald from Google Fonts
 * (Turbopack "Can't resolve @vercel/turbopack-next/internal/font/google/font")
 * while the same code built locally. These are the same Google Fonts files
 * (all SIL Open Font License), Latin subset only, as next/font/google served
 * them: Inter and Oswald variable, IBM Plex Mono at 500 and 600.
 */
const inter = localFont({
  src: "./fonts/inter-latin-var.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const oswald = localFont({
  src: "./fonts/oswald-latin-var.woff2",
  variable: "--font-oswald",
  weight: "200 700",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-latin-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-mono-latin-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-mono-data",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  // The suffix used to be " | TRA — Texas Roadside Assistance" (34 characters),
  // which pushed 134 of 154 titles past the ~60 characters Google shows. The
  // full business name still appears in og:site_name and the LocalBusiness
  // schema.
  title: {
    default: "24/7 Roadside Assistance in Dallas–Fort Worth | TRA Roadside",
    template: "%s | TRA Roadside",
  },
  description:
    "24/7 roadside help across Dallas–Fort Worth: car batteries, jump starts, flat tires, lockouts, fuel and towing. Request online with live driver tracking.",
  applicationName: "TRA — Texas Roadside Assistance",
  keywords: [
    "roadside assistance Dallas",
    "towing DFW",
    "flat tire change",
    "jump start service",
    "fuel delivery Texas",
    "emergency roadside help",
  ],
  authors: [{ name: BUSINESS.legalName }],
  // No `url` here: a page without its own openGraph inherits this object
  // whole, so a root-level url made every such page claim to be the homepage.
  // Pages set og:url alongside their canonical through pageUrls().
  openGraph: { ...OPEN_GRAPH_DEFAULTS },
  twitter: {
    card: "summary_large_image",
  },
  // No `icons` here: favicon.ico, icon.png and apple-icon.png in this folder
  // are picked up by file convention; all are cut from the owner's logo.
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <OrganizationJsonLd />
        <ServiceWorkerRegister />
        <GoogleAdsTag />
        {children}
      </body>
    </html>
  );
}
