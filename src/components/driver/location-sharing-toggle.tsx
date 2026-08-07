"use client";

import { useEffect, useRef, useState } from "react";
import { Navigation, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { setLocationSharing } from "@/app/driver/(protected)/actions";
import { cn } from "@/lib/utils/cn";

export function LocationSharingToggle({
  driverId,
  requestId,
  initialActive,
}: {
  driverId: string;
  requestId: string;
  initialActive: boolean;
}) {
  const [active, setActive] = useState(initialActive);
  const [pending, setPending] = useState(false);
  const watchIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    if (!navigator.geolocation) return;

    const supabase = createClient();
    watchIdRef.current = navigator.geolocation.watchPosition(
      async (pos) => {
        await supabase.from("driver_locations").insert({
          driver_id: driverId,
          request_id: requestId,
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          heading: pos.coords.heading,
          speed: pos.coords.speed,
          accuracy: pos.coords.accuracy,
        });
      },
      () => {},
      { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 }
    );

    return () => {
      if (watchIdRef.current !== null) navigator.geolocation.clearWatch(watchIdRef.current);
    };
  }, [active, driverId, requestId]);

  async function toggle() {
    setPending(true);
    const next = !active;
    try {
      await setLocationSharing(next);
      setActive(next);
    } finally {
      setPending(false);
    }
  }

  return (
    <button
      onClick={toggle}
      disabled={pending}
      className={cn(
        "flex w-full items-center justify-between rounded-2xl border-2 px-4 py-3.5",
        active ? "border-success-600 bg-success-600/10" : "border-ink-950/15"
      )}
    >
      <span className="flex items-center gap-2 text-sm font-semibold">
        {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Navigation className={cn("h-4 w-4", active ? "text-success-600" : "text-ink-400")} />}
        Live location sharing
      </span>
      <span className={cn("text-xs font-bold uppercase", active ? "text-success-600" : "text-ink-400")}>
        {active ? "Active" : "Off"}
      </span>
    </button>
  );
}
