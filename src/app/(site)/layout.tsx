import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { BatteryStrip } from "@/components/layout/battery-strip";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-ink-950 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <BatteryStrip />
      <SiteHeader />
      {/*
        No bottom padding here on purpose. The space the fixed MobileActionBar
        occupies is reserved by a spacer the bar itself renders after the footer,
        so the footer's last row clears it too. Padding <main> instead only
        protected <main>, and left a gap between the last section and the footer.
      */}
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  );
}
