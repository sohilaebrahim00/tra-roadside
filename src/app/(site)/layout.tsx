import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-ink-950 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main
        id="main-content"
        className="flex-1 pb-[calc(var(--mobile-action-bar-height)+env(safe-area-inset-bottom))] md:pb-0"
      >
        {children}
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  );
}
