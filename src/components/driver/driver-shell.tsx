"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ClipboardList, History, LogOut } from "lucide-react";
import { LogoLockup } from "@/components/brand/logo-mark";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils/cn";

export function DriverShell({ fullName, children }: { fullName: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/driver/login");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen flex-col bg-paper-50">
      <header className="flex h-14 items-center justify-between border-b border-ink-950/8 bg-white px-4">
        <LogoLockup subline={false} />
        <button onClick={signOut} className="flex items-center gap-1.5 text-sm font-medium text-ink-500">
          <LogOut className="h-4 w-4" aria-hidden="true" /> Sign out
        </button>
      </header>

      <p className="bg-ink-950 px-4 py-1.5 text-center text-xs text-white/70">Signed in as {fullName}</p>

      <main className="flex-1 pb-20">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink-950/10 bg-white pb-[env(safe-area-inset-bottom)]">
        <NavLink href="/driver" icon={ClipboardList} label="Jobs" active={pathname === "/driver"} />
        <NavLink href="/driver/history" icon={History} label="History" active={pathname === "/driver/history"} />
      </nav>
    </div>
  );
}

function NavLink({ href, icon: Icon, label, active }: { href: string; icon: typeof ClipboardList; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center gap-1 py-3 text-xs font-semibold",
        active ? "text-red-600" : "text-ink-400"
      )}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
      {label}
    </Link>
  );
}
