import type { Metadata, Viewport } from "next";
import { Inter, Oswald, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { env } from "@/lib/env";
import { BUSINESS } from "@/lib/content/business";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import { ServiceWorkerRegister } from "@/components/pwa/sw-register";
import { GoogleAdsTag } from "@/components/analytics/google-ads";
import { OPEN_GRAPH_DEFAULTS } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-data",
  subsets: ["latin"],
  weight: ["500", "600"],
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
  // No `icons` here: favicon.ico, icon.svg and apple-icon.png in this folder
  // are picked up by file convention and drawn from the logo glyph.
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
