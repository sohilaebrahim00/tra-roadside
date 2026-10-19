"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/content/business";
import { NAV_LINKS } from "./nav-links";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-var(--header-height)-var(--battery-strip-height))] overflow-y-auto border-b border-ink-950/10 bg-white shadow-xl dark:border-white/10 dark:bg-ink-950"
          >
            <nav aria-label="Mobile" className="flex flex-col px-4 py-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-ink-950/5 py-3.5 text-base font-medium text-ink-900 dark:border-white/5 dark:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 py-4 text-base font-semibold text-red-600"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {BUSINESS.phoneDisplay}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
