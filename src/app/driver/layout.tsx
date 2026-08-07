import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { template: "%s | TRA Driver", default: "TRA Driver" },
  robots: { index: false, follow: false },
};

export default function DriverRootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
