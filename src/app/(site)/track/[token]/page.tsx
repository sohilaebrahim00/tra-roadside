import type { Metadata } from "next";
import { TrackingView } from "@/components/tracking/tracking-view";

export const metadata: Metadata = {
  title: "Track Your Driver",
  robots: { index: false, follow: false },
};

export default async function TrackPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  return <TrackingView token={token} />;
}
