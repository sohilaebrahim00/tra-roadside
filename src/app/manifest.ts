import type { MetadataRoute } from "next";

/**
 * Web app manifest, so "Add to Home Screen" shows the TRA logo and name
 * instead of a screenshot of the page. The icons are the emblem from the
 * owner's logo (tire, wrenches and road) on a white tile, the same artwork as
 * the browser tab icon (src/app/favicon.ico, icon.png, apple-icon.png).
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
