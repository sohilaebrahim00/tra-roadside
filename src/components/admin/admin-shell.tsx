"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard, ClipboardList, Users, Map, Image as ImageIcon, Film, Newspaper,
  HelpCircle, Bell, Settings, LogOut, Menu, X,
} from "lucide-react";
import { useState } from "react";
import { LogoLockup } from "@/components/brand/logo-mark";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils/cn";
import type { AppRole } from "@/lib/types/domain";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, roles: ["super_admin", "dispatcher", "content_editor"] },
  { href: "/admin/requests", label: "Requests", icon: ClipboardList, roles: ["super_admin", "dispatcher"] },
  { href: "/admin/drivers", label: "Drivers", icon: Users, roles: ["super_admin", "dispatcher"] },
  { href: "/admin/map", label: "Live Map", icon: Map, roles: ["super_admin", "dispatcher"] },
  { href: "/admin/gallery", label: "Gallery", icon: ImageIcon, roles: ["super_admin", "content_editor"] },
  { href: "/admin/videos", label: "Videos", icon: Film, roles: ["super_admin", "content_editor"] },
  { href: "/admin/blog", label: "Blog", icon: Newspaper, roles: ["super_admin", "content_editor"] },
  { href: "/admin/faqs", label: "FAQs", icon: HelpCircle, roles: ["super_admin", "content_editor"] },
  { href: "/admin/notifications", label: "Notifications", icon: Bell, roles: ["super_admin"] },
  { href: "/admin/settings", label: "Settings", icon: Settings, roles: ["super_admin"] },
] as const;

export function AdminShell({
  role,
  fullName,
  children,
}: {
  role: AppRole;
  fullName: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = NAV.filter((item) => (item.roles as readonly string[]).includes(role));

  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  const nav = (
    <nav className="flex flex-1 flex-col gap-1 px-3">
      {items.map((item) => {
        const active = pathname === item.href || (item.href !== "/admin" && pathname?.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium",
              active ? "bg-red-600 text-white" : "text-ink-200 hover:bg-white/5"
            )}
          >
            <item.icon className="h-4.5 w-4.5" aria-hidden="true" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-paper-50 dark:bg-ink-950">
      <div className="flex">
        <aside className="hidden w-64 shrink-0 flex-col bg-ink-950 py-6 text-white lg:flex">
          <div className="px-5 pb-6">
            <LogoLockup onDark />
          </div>
          {nav}
          <div className="mt-auto border-t border-white/10 px-5 pt-4">
            <p className="text-sm font-medium">{fullName}</p>
            <p className="text-xs capitalize text-white/50">{role.replace("_", " ")}</p>
            <button onClick={signOut} className="mt-3 flex items-center gap-2 text-sm text-white/70 hover:text-white">
              <LogOut className="h-4 w-4" aria-hidden="true" /> Sign out
            </button>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="flex h-16 items-center justify-between border-b border-ink-950/8 bg-white px-4 lg:hidden dark:border-white/10 dark:bg-ink-900">
            <LogoLockup />
            <button onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </header>
          {mobileOpen && (
            <div className="flex flex-col bg-ink-950 py-4 text-white lg:hidden">
              {nav}
              <button onClick={signOut} className="mt-3 flex items-center gap-2 px-6 py-2 text-sm text-white/70">
                <LogOut className="h-4 w-4" aria-hidden="true" /> Sign out
              </button>
            </div>
          )}
          <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
