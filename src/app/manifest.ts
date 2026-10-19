import type { MetadataRoute } from "next";

/**
 * Web app manifest, so "Add to Home Screen" shows the TRA logo and name
 * instead of a screenshot of the page. The icons are drawn from the logo glyph
 * in src/components/brand/logo-mark.tsx, the same mark as the browser tab icon
 * (src/app/icon.svg, favicon.ico, apple-icon.png).
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TRA — Texas Roadside Assistance",
    short_name: "TRA Roadside",
    description: "24/7 roadside assistance across Dallas–Fort Worth, with live driver tracking.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0b",
    theme_color: "#0a0a0b",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
