import type { Metadata, Viewport } from "next";
import { Inter, Oswald, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { env } from "@/lib/env";
import { BUSINESS } from "@/lib/content/business";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import { ServiceWorkerRegister } from "@/components/pwa/sw-register";

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
  title: {
    default: "TRA — Texas Roadside Assistance | 24/7 Emergency Roadside Help",
    template: "%s | TRA — Texas Roadside Assistance",
  },
  description:
    "24/7 roadside assistance across the Dallas–Fort Worth Metroplex. Towing, jump starts, flat tires, fuel delivery, lockouts, and more — request help online with live driver tracking.",
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
  openGraph: {
    type: "website",
    siteName: "TRA — Texas Roadside Assistance",
    locale: "en_US",
    url: env.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
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
        {children}
      </body>
    </html>
  );
}
