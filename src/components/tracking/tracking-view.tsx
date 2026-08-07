"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Clock3, CheckCircle2, XCircle, AlertTriangle, Wifi, WifiOff } from "lucide-react";
import { TrackingMap } from "./tracking-map";
import { BUSINESS } from "@/lib/content/business";
import { cn } from "@/lib/utils/cn";
import type { TrackingResponse } from "@/lib/tracking/types";
import { VideoPosterCard } from "@/components/media/video-poster-card";
import { VideoLightbox } from "@/components/media/video-lightbox";
import { getVideoForPlacement } from "@/data/media-registry";

const POLL_INTERVAL_MS = 6000;

export function TrackingView({ token }: { token: string }) {
  const [data, setData] = useState<TrackingResponse | null>(null);
  const [connectionOk, setConnectionOk] = useState(true);
  const [lastFetchedAt, setLastFetchedAt] = useState<Date | null>(null);
  const [infoVideoOpen, setInfoVideoOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const infoVideo = getVideoForPlacement("tracking-info");

  useEffect(() => {
    let active = true;

    async function poll() {
      try {
        const res = await fetch(`/api/track/${token}`, { cache: "no-store" });
        const json: TrackingResponse = await res.json();
        if (!active) return;
        setData(json);
        setConnectionOk(true);
        setLastFetchedAt(new Date());
      } catch {
        if (active) setConnectionOk(false);
      }
    }

    poll();
    timerRef.current = setInterval(poll, POLL_INTERVAL_MS);
    return () => {
      active = false;
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [token]);

  if (!data) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-red-600 border-t-transparent" />
      </div>
    );
  }

  if (!data.found) {
    return <TrackingErrorState reason={data.reason} />;
  }

  const isTerminal = data.status === "completed" || data.status === "canceled" || data.status === "unable_to_complete";

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">Request {data.requestNumber} · {data.serviceName}</p>
          <h1 className="mt-1 font-display text-2xl font-semibold text-ink-950 dark:text-white sm:text-3xl">
            {data.statusLabel}
          </h1>
        </div>
        <span
          className={cn(
            "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold",
            connectionOk ? "bg-success-600/10 text-success-600" : "bg-amber-500/10 text-amber-600"
          )}
        >
          {connectionOk ? <Wifi className="h-3.5 w-3.5" aria-hidden="true" /> : <WifiOff className="h-3.5 w-3.5" aria-hidden="true" />}
          {connectionOk ? "Live" : "Reconnecting…"}
        </span>
      </div>
      <p className="mt-2 text-ink-600 dark:text-ink-200">{data.statusDescription}</p>

      {data.demo && (
        <p className="mt-3 rounded-lg bg-amber-500/10 px-3 py-2 text-xs text-amber-700 dark:text-amber-400">
          Demo simulation — this status and driver position update automatically as a preview.
          Connect Supabase, the driver app, and Google Maps for real live tracking.
        </p>
      )}

      {!isTerminal && data.isLive && (
        <div className="mt-6 h-64 overflow-hidden rounded-2xl border border-ink-950/10 sm:h-80">
          <TrackingMap pickup={{ lat: data.pickupLat, lng: data.pickupLng }} driver={data.driverPosition} />
        </div>
      )}

      {/* Informational only — never replaces the live map/data once tracking is actually live. */}
      {!isTerminal && !data.isLive && infoVideo && (
        <div className="mt-6">
          <VideoPosterCard
            title={infoVideo.title}
            poster={infoVideo.poster}
            durationSeconds={infoVideo.durationSeconds}
            onPlay={() => setInfoVideoOpen(true)}
            className="aspect-[16/9]"
          />
          <p className="mt-1.5 text-xs text-ink-400">What to expect while you wait.</p>
        </div>
      )}
      {infoVideoOpen && infoVideo && (
        <VideoLightbox title={infoVideo.title} src={infoVideo.source} onClose={() => setInfoVideoOpen(false)} />
      )}

      {data.driver && (
        <div className="mt-5 flex items-center gap-4 rounded-2xl border border-ink-950/8 bg-paper-50 p-4 dark:border-white/10 dark:bg-ink-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-950 font-display text-lg font-semibold text-white">
            {data.driver.firstName[0]}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-ink-950 dark:text-white">{data.driver.firstName}</p>
            <p className="text-sm text-ink-500 dark:text-ink-300">{data.driver.vehicleDescription ?? "En route to you"}</p>
          </div>
          {data.etaMinutes !== null && (
            <div className="flex items-center gap-1.5 rounded-full bg-red-600/10 px-3 py-1.5 text-sm font-bold text-red-600">
              <Clock3 className="h-4 w-4" aria-hidden="true" /> ETA {data.etaMinutes}m
            </div>
          )}
          {data.driver.phone && (
            <a href={`tel:${data.driver.phone}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-success-600 text-white" aria-label="Call driver">
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      )}

      <div className="mt-8">
        <h2 className="font-display text-lg font-semibold text-ink-950 dark:text-white">Status timeline</h2>
        <ol className="mt-4 space-y-4 border-l-2 border-ink-950/10 pl-5 dark:border-white/10">
          {data.timeline.map((entry, i) => (
            <li key={`${entry.status}-${i}`} className="relative">
              <span className="absolute -left-[1.65rem] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-600" />
              <p className="text-sm font-semibold text-ink-900 dark:text-white">{entry.label}</p>
              <p className="text-xs text-ink-400">{new Date(entry.at).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={BUSINESS.phoneHref}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-ink-950 text-sm font-bold uppercase text-ink-950 dark:border-white dark:text-white"
        >
          <Phone className="h-4 w-4" aria-hidden="true" /> Call Dispatch
        </a>
      </div>

      {lastFetchedAt && (
        <p className="mt-4 text-center text-xs text-ink-400">
          Last updated {lastFetchedAt.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", second: "2-digit" })}
        </p>
      )}
    </div>
  );
}

function TrackingErrorState({ reason }: { reason: "invalid" | "expired" | "revoked" }) {
  const copy = {
    invalid: { icon: AlertTriangle, title: "Tracking link not found", body: "This link doesn't match an active request. Double-check the link or call dispatch for help." },
    expired: { icon: XCircle, title: "This tracking link has expired", body: "Tracking links are only active for a limited time after a request is completed." },
    revoked: { icon: CheckCircle2, title: "This request is closed", body: "This request has been completed or canceled, so live tracking is no longer available." },
  }[reason];

  const Icon = copy.icon;

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-20 text-center">
      <Icon className="h-10 w-10 text-ink-400" aria-hidden="true" />
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink-950 dark:text-white">{copy.title}</h1>
      <p className="mt-2 text-ink-600 dark:text-ink-200">{copy.body}</p>
      <a
        href={BUSINESS.phoneHref}
        className="mt-6 flex h-12 items-center justify-center gap-2 rounded-full bg-red-600 px-6 text-sm font-bold uppercase text-white"
      >
        <Phone className="h-4 w-4" aria-hidden="true" /> Call {BUSINESS.phoneDisplay}
      </a>
    </div>
  );
}
