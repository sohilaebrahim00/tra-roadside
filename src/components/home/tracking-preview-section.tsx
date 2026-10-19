import { Phone, Navigation2, Clock3 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { STATUS_META } from "@/lib/types/domain";

const TIMELINE_PREVIEW = [
  STATUS_META.driver_assigned.customerLabel,
  STATUS_META.driver_en_route.customerLabel,
  STATUS_META.driver_nearby.customerLabel,
  STATUS_META.arrived.customerLabel,
];

export function TrackingPreviewSection() {
  return (
    <section className="py-12 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Live Driver Tracking"
            title="Watch help arrive, in real time"
            description="Once a driver is assigned and starts the trip, you'll get a secure tracking link by text and email — no account needed. Watch their location, ETA, and status update automatically."
          />
          <ul className="mt-8 space-y-4">
            {TIMELINE_PREVIEW.map((label, i) => (
              <li key={label} className="flex items-center gap-3">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    i === 1 ? "bg-red-600 text-white" : "bg-ink-950/8 text-ink-500 dark:bg-white/10 dark:text-ink-200"
                  }`}
                >
                  {i + 1}
                </span>
                <span className={i === 1 ? "font-semibold text-ink-950 dark:text-white" : "text-ink-600 dark:text-ink-200"}>
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 mx-auto w-full max-w-[22rem] lg:order-2">
          {/* Phone-frame preview of the real tracking UI — not a screenshot,
              built from the same components that power /track/[token]. */}
          <div className="rounded-[2.25rem] border-[10px] border-ink-950 bg-ink-950 shadow-2xl">
            <div className="overflow-hidden rounded-[1.5rem] bg-white dark:bg-ink-900">
              <div className="relative h-48 bg-gradient-to-br from-ink-800 to-ink-950">
                <svg viewBox="0 0 300 200" className="absolute inset-0 h-full w-full opacity-70">
                  {/* The dashes flow toward the destination, so the route reads
                      as a driver on the move (off for reduced motion). */}
                  <path
                    d="M20 170 C 80 140, 60 90, 130 80 S 220 60, 260 30"
                    fill="none"
                    stroke="#f2840c"
                    strokeWidth="3"
                    strokeDasharray="8 8"
                    className="route-flow"
                  />
                  <circle cx="20" cy="170" r="6" fill="#e0131c" />
                  <circle cx="260" cy="30" r="6" fill="#f2840c" />
                </svg>
                <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-success-600/90 px-2.5 py-1 text-[0.65rem] font-semibold text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" /> Live
                </span>
              </div>
              <div className="space-y-3 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-ink-400">Status</p>
                    <p className="font-display text-base font-semibold text-ink-950 dark:text-white">Driver en route</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-red-600/10 px-2.5 py-1 text-xs font-bold text-red-600">
                    <Clock3 className="h-3.5 w-3.5" aria-hidden="true" /> ETA 12m
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-paper-50 p-3 dark:bg-white/5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-950 text-white">
                    <Navigation2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-ink-950 dark:text-white">Driver: Marcus</p>
                    <p className="text-xs text-ink-500 dark:text-ink-200">2.4 mi away · Tow Truck #04</p>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success-600 text-white">
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
