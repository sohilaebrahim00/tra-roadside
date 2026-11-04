"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { MessageCircleQuestion } from "lucide-react";
import { NO_FLOATING_ACTIONS } from "@/lib/quick-request";

// Loaded on first open, so the button adds almost nothing to the first load.
const AskPanel = dynamic(() => import("./ask-panel").then((m) => m.AskPanel), { ssr: false });

/**
 * The floating "Ask" button. On phones it sits above the Call / Text bar so it
 * never covers either of them.
 */
export function AskLauncher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  if (NO_FLOATING_ACTIONS.some((p) => pathname?.startsWith(p))) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-3 z-30 flex h-11 items-center gap-1.5 rounded-full bg-ink-950 pl-3 pr-4 text-sm font-bold text-white shadow-lg ring-1 ring-white/15 hover:bg-ink-800 bottom-[calc(var(--mobile-action-bar-height)+env(safe-area-inset-bottom)+0.75rem)] md:bottom-6 md:right-6"
      >
        <MessageCircleQuestion className="h-5 w-5" aria-hidden="true" />
        Ask
      </button>
      {open && <AskPanel onClose={() => setOpen(false)} />}
    </>
  );
}
