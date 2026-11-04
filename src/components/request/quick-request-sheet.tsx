"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertTriangle, LocateFixed, Send, X } from "lucide-react";
import { SERVICES, getService } from "@/lib/content/services";
import { SERVICE_ICONS } from "@/lib/content/service-icons";
import { DISPATCH_FEE_TAG, expectedTotal, lineForVehicle, priceBadge, servicePrice } from "@/lib/content/pricing";
import { useGeolocation } from "@/lib/hooks/use-geolocation";
import { quickRequestSchema, VIN_LENGTH } from "@/lib/validation/request";
import { VEHICLE_TYPES, VEHICLE_TYPE_LABELS, type LocationSource, type VehicleType } from "@/lib/types/domain";
import { cn } from "@/lib/utils/cn";
import { SmsConsentText } from "./sms-consent-text";

/** Where the pin goes when a typed address can't be found; dispatch is told it was typed, and confirms by phone. */
const DALLAS_CENTER = { lat: 32.7767, lng: -96.797 };

const URGENCY = [
  { value: "Emergency", hint: "Now" },
  { value: "Within 1 hour", hint: "Soon" },
  { value: "Scheduled", hint: "Flexible" },
];
const SPOTS = ["Driveway", "Parking lot", "Street", "Highway shoulder", "Garage"];

interface AddressMatch {
  address: string;
  lat: number;
  lng: number;
}

type Errors = Partial<Record<string, string>>;

const inputClass =
  "mt-1 w-full rounded-xl border border-ink-950/15 bg-white px-3.5 py-3 text-base text-ink-950 placeholder:text-ink-400 focus:border-red-600 focus:outline-none";
const labelClass = "block text-sm font-semibold text-ink-900";

/**
 * The short request form: everything on one screen, a request away from a real
 * dispatcher. It sends to the same /api/requests as the full form, so dispatch
 * gets the same text and email, and the customer lands on the same confirmation
 * page.
 *
 * Urgency, the kind of spot and the safety flag have no database columns; they
 * travel in the request notes, which dispatch already reads.
 *
 * A native <dialog>, for its built-in focus trap, Esc to close and top-layer
 * stacking. Forced to the light scheme, like the rest of the public site.
 */
export function QuickRequestSheet({ initialService, onClose }: { initialService?: string; onClose: () => void }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const clientRequestId = useRef(crypto.randomUUID()).current;
  const { status: geoStatus, coords: gpsCoords, request: requestGps } = useGeolocation();

  const [serviceSlug, setServiceSlug] = useState(getService(initialService ?? "") ? initialService! : "");
  const [urgency, setUrgency] = useState(URGENCY[0].value);
  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [locationSource, setLocationSource] = useState<LocationSource>("typed");
  const [matches, setMatches] = useState<AddressMatch[]>([]);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleVin, setVehicleVin] = useState("");
  const [vehicleType, setVehicleType] = useState<VehicleType>("sedan");
  const [spot, setSpot] = useState("");
  const [unsafe, setUnsafe] = useState(false);
  const [method, setMethod] = useState<"sms" | "call">("sms");
  const [smsConsent, setSmsConsent] = useState(false);
  const [details, setDetails] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const service = getService(serviceSlug);
  const line = service && lineForVehicle(service, vehicleType);
  const isBattery = serviceSlug === "battery-replacement";

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    const { overflow } = document.documentElement.style;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = overflow;
    };
  }, []);

  // The GPS fix becomes a street address, so dispatch and the customer read the same thing.
  useEffect(() => {
    if (!gpsCoords) return;
    let stale = false;
    (async () => {
      let found = `Near ${gpsCoords.lat.toFixed(4)}, ${gpsCoords.lng.toFixed(4)} (confirm exact address)`;
      try {
        const res = await fetch(`/api/geocode/reverse?lat=${gpsCoords.lat}&lng=${gpsCoords.lng}`);
        const data = await res.json();
        if (data.address) found = data.address;
      } catch {
        // The coordinates are enough to send the request; the API retries the address.
      }
      if (stale) return;
      setCoords(gpsCoords);
      setLocationSource("gps");
      setAddress(found);
      setMatches([]);
      setErrors((e) => ({ ...e, pickupAddress: undefined }));
    })();
    return () => {
      stale = true;
    };
  }, [gpsCoords]);

  async function searchAddress(q: string): Promise<AddressMatch[]> {
    if (q.trim().length < 5) return [];
    try {
      const res = await fetch(`/api/geocode/search?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      return (data.results ?? []) as AddressMatch[];
    } catch {
      return [];
    }
  }

  async function suggestAddresses() {
    if (coords) return;
    setMatches((await searchAddress(address)).slice(0, 3));
  }

  function chooseMatch(match: AddressMatch) {
    setAddress(match.address);
    setCoords({ lat: match.lat, lng: match.lng });
    setLocationSource("address_selected");
    setMatches([]);
  }

  async function submit() {
    if (submitting) return;
    setSubmitError(null);

    const notes = [
      `Urgency: ${urgency}.`,
      spot && `Where: ${spot}.`,
      unsafe && "UNSAFE SPOT or traffic nearby.",
      details.trim(),
    ]
      .filter(Boolean)
      .join(" ");

    const payload = {
      pickupLat: coords?.lat ?? DALLAS_CENTER.lat,
      pickupLng: coords?.lng ?? DALLAS_CENTER.lng,
      pickupAddress: address.trim(),
      locationSource,
      serviceSlug,
      vehicleYear: vehicleYear.trim(),
      vehicleMake: vehicleMake.trim(),
      vehicleModel: vehicleModel.trim(),
      vehicleColor: "",
      vehicleLicensePlate: "",
      vehicleVin: isBattery ? vehicleVin.trim() : "",
      vehicleType,
      isDrivable: null,
      notes,
      destinationAddress: "",
      destinationLat: null,
      destinationLng: null,
      destinationNotes: "",
      photos: [],
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      // Texting needs the customer's consent; without it, dispatch calls.
      preferredContactMethod: method === "sms" && smsConsent ? "sms" : "call",
      smsConsent: method === "sms" && smsConsent,
      termsAccepted: true,
      companyWebsite,
      clientRequestId,
      quick: true,
    };

    const parsed = quickRequestSchema.safeParse(payload);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      dialogRef.current?.querySelector("[data-error]")?.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      if (!coords) {
        const [match] = await searchAddress(address);
        if (match) {
          payload.pickupLat = match.lat;
          payload.pickupLng = match.lng;
        }
      }
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error ?? "Something went wrong. Please try again.");
      }
      const data = await res.json();
      const params = new URLSearchParams({ token: data.trackingToken, quick: "1" });
      if (data.demo) params.set("demo", "1");
      if (data.channelsLive?.sms === false) params.set("smsLive", "0");
      if (data.customerName) params.set("name", data.customerName);
      if (data.serviceName) params.set("service", data.serviceName);
      if (data.pickupAddress) params.set("pickup", data.pickupAddress);
      router.push(`/request/confirmation/${data.requestNumber}?${params.toString()}`);
      onClose();
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-labelledby="quick-request-title"
      style={{ colorScheme: "light" }}
      className="fixed inset-x-0 bottom-0 top-auto m-0 w-full max-w-none overflow-hidden rounded-t-3xl bg-paper-50 p-0 text-ink-950 shadow-2xl backdrop:bg-ink-950/60 sm:inset-0 sm:m-auto sm:max-w-xl sm:rounded-3xl"
    >
      <div className="flex max-h-[92dvh] flex-col sm:max-h-[88dvh]">
        <header className="flex items-start justify-between gap-3 bg-ink-950 px-5 py-4 text-white">
          <div>
            <h2 id="quick-request-title" className="font-display text-2xl font-bold uppercase leading-tight">
              Text a Request
            </h2>
            <p className="mt-0.5 flex items-center gap-2 text-sm text-white/75">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-500 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success-500" />
              </span>
              Dispatch open 24/7 · a real person replies
            </p>
          </div>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close the request form"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 hover:bg-white/20"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </header>

        <div className="flex-1 space-y-5 overflow-y-auto overscroll-contain px-5 py-5">
          <fieldset>
            <legend className={labelClass}>What do you need?</legend>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {SERVICES.map((svc) => {
                const Icon = SERVICE_ICONS[svc.slug];
                const selected = svc.slug === serviceSlug;
                return (
                  <button
                    key={svc.slug}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => {
                      setServiceSlug(svc.slug);
                      setErrors((e) => ({ ...e, serviceSlug: undefined }));
                    }}
                    className={cn(
                      "flex items-center gap-2.5 rounded-2xl border bg-white p-3 text-left transition-colors",
                      selected ? "border-red-600 ring-1 ring-red-600" : "border-ink-950/10 hover:border-ink-950/25"
                    )}
                  >
                    <Icon className={cn("h-5 w-5 shrink-0", selected ? "text-red-600" : "text-ink-500")} aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold leading-snug">{svc.shortName}</span>
                      <span className="block text-xs text-ink-500">{priceBadge(svc)}</span>
                    </span>
                  </button>
                );
              })}
            </div>
            {errors.serviceSlug && <FieldError>Choose what you need.</FieldError>}
            {service && line && (
              <div className="mt-2 rounded-xl bg-white px-3.5 py-2.5 text-sm">
                <p className="font-semibold">
                  {line.label ?? service.name}: {servicePrice(line)} {DISPATCH_FEE_TAG} = {expectedTotal(line)}
                </p>
                <p className="mt-0.5 text-xs text-ink-500">
                  {service.priceNote ?? "Dispatch confirms the price for your vehicle before a driver is sent."}
                </p>
              </div>
            )}
          </fieldset>

          <fieldset>
            <legend className={labelClass}>How soon?</legend>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {URGENCY.map((u) => (
                <button
                  key={u.value}
                  type="button"
                  aria-pressed={urgency === u.value}
                  onClick={() => setUrgency(u.value)}
                  className={cn(
                    "rounded-xl border bg-white px-2 py-2 text-center text-sm font-semibold leading-tight",
                    urgency === u.value ? "border-red-600 text-red-600 ring-1 ring-red-600" : "border-ink-950/10 text-ink-800"
                  )}
                >
                  {u.value}
                  <span className="block text-xs font-normal text-ink-500">{u.hint}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="qr-address" className={labelClass}>
              Where is the vehicle?
            </label>
            <button
              type="button"
              onClick={requestGps}
              disabled={geoStatus === "requesting"}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-ink-950 px-4 py-3 text-sm font-semibold text-white hover:bg-ink-800 disabled:opacity-70"
            >
              <LocateFixed className="h-4.5 w-4.5" aria-hidden="true" />
              {geoStatus === "requesting" ? "Locating…" : "Use my current location"}
            </button>
            {geoStatus === "denied" && <p className="mt-1.5 text-xs text-amber-700">Location access was denied. Type the address below instead.</p>}
            <input
              id="qr-address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                setCoords(null);
                setLocationSource("typed");
              }}
              onBlur={suggestAddresses}
              autoComplete="street-address"
              placeholder="Address or cross streets, city"
              className={inputClass}
            />
            {matches.length > 0 && (
              <ul className="mt-1.5 overflow-hidden rounded-xl border border-ink-950/10 bg-white">
                {matches.map((m) => (
                  <li key={`${m.lat},${m.lng}`}>
                    <button type="button" onClick={() => chooseMatch(m)} className="w-full px-3.5 py-2.5 text-left text-sm hover:bg-paper-50">
                      {m.address}
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {errors.pickupAddress && <FieldError>Enter where the vehicle is, or tap Use my current location.</FieldError>}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="qr-name" className={labelClass}>
                Your name
              </label>
              <input id="qr-name" value={fullName} onChange={(e) => setFullName(e.target.value)} autoComplete="name" className={inputClass} />
              {errors.fullName && <FieldError>{errors.fullName}</FieldError>}
            </div>
            <div>
              <label htmlFor="qr-phone" className={labelClass}>
                Mobile number
              </label>
              <input
                id="qr-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="(555) 123-4567"
                className={inputClass}
              />
              {errors.phone && <FieldError>{errors.phone}</FieldError>}
            </div>
          </div>

          <fieldset>
            <legend className={labelClass}>Vehicle {isBattery ? "" : <span className="font-normal text-ink-500">(optional)</span>}</legend>
            <div className="grid grid-cols-[5rem_1fr_1fr] gap-2">
              <input aria-label="Year" value={vehicleYear} onChange={(e) => setVehicleYear(e.target.value)} maxLength={4} inputMode="numeric" placeholder="Year" className={inputClass} />
              <input aria-label="Make" value={vehicleMake} onChange={(e) => setVehicleMake(e.target.value)} maxLength={60} placeholder="Make" className={inputClass} />
              <input aria-label="Model" value={vehicleModel} onChange={(e) => setVehicleModel(e.target.value)} maxLength={60} placeholder="Model" className={inputClass} />
            </div>
            {(errors.vehicleYear || errors.vehicleMake || errors.vehicleModel) && <FieldError>Enter the year, make and model so we bring a battery that fits.</FieldError>}
            <select
              aria-label="Vehicle type"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value as VehicleType)}
              className={inputClass}
            >
              {VEHICLE_TYPES.map((type) => (
                <option key={type} value={type}>
                  {VEHICLE_TYPE_LABELS[type]}
                </option>
              ))}
            </select>
            {isBattery && (
              <>
                <input
                  aria-label="VIN, optional"
                  value={vehicleVin}
                  onChange={(e) => setVehicleVin(e.target.value.toUpperCase())}
                  maxLength={VIN_LENGTH}
                  autoCapitalize="characters"
                  placeholder="VIN (optional, helps us bring the right battery)"
                  className={inputClass}
                />
                {errors.vehicleVin && <FieldError>{errors.vehicleVin}</FieldError>}
              </>
            )}
          </fieldset>

          <fieldset>
            <legend className={labelClass}>
              What kind of spot is it? <span className="font-normal text-ink-500">(optional)</span>
            </legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {SPOTS.map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={spot === s}
                  onClick={() => setSpot(spot === s ? "" : s)}
                  className={cn(
                    "rounded-full border bg-white px-3.5 py-2 text-sm font-medium",
                    spot === s ? "border-red-600 text-red-600 ring-1 ring-red-600" : "border-ink-950/10 text-ink-700"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-pressed={unsafe}
              onClick={() => setUnsafe(!unsafe)}
              className={cn(
                "mt-2 flex w-full items-start gap-2.5 rounded-xl border p-3 text-left text-sm",
                unsafe ? "border-red-600 bg-red-600/5 ring-1 ring-red-600" : "border-ink-950/10 bg-white"
              )}
            >
              <AlertTriangle className={cn("mt-0.5 h-4.5 w-4.5 shrink-0", unsafe ? "text-red-600" : "text-amber-600")} aria-hidden="true" />
              <span>
                <span className="block font-semibold">Unsafe spot or traffic nearby</span>
                <span className="block text-xs text-ink-500">Tap this and dispatch will see it first. In immediate danger, call 911.</span>
              </span>
            </button>
          </fieldset>

          <fieldset>
            <legend className={labelClass}>How should we reach you?</legend>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {(["sms", "call"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  aria-pressed={method === m}
                  onClick={() => setMethod(m)}
                  className={cn(
                    "rounded-xl border bg-white px-3 py-2.5 text-sm font-semibold",
                    method === m ? "border-red-600 text-red-600 ring-1 ring-red-600" : "border-ink-950/10 text-ink-800"
                  )}
                >
                  {m === "sms" ? "Text (recommended)" : "Voice call"}
                </button>
              ))}
            </div>
            {method === "sms" && (
              <label className="mt-2 flex items-start gap-2.5 text-xs leading-relaxed text-ink-600">
                <input
                  type="checkbox"
                  checked={smsConsent}
                  onChange={(e) => setSmsConsent(e.target.checked)}
                  className="mt-0.5 h-5 w-5 shrink-0 rounded border-ink-950/25 text-red-600 focus:ring-red-600"
                />
                <SmsConsentText />
              </label>
            )}
            {method === "sms" && !smsConsent && <p className="mt-1.5 text-xs font-medium text-amber-700">Tick the box so we can text you. Without it, we&apos;ll call.</p>}
          </fieldset>

          <div>
            <label htmlFor="qr-email" className={labelClass}>
              Email <span className="font-normal text-ink-500">(optional, for your confirmation)</span>
            </label>
            <input id="qr-email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" inputMode="email" autoComplete="email" className={inputClass} />
            {errors.email && <FieldError>{errors.email}</FieldError>}
          </div>

          <div>
            <label htmlFor="qr-details" className={labelClass}>
              Anything else? <span className="font-normal text-ink-500">(optional)</span>
            </label>
            <textarea
              id="qr-details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={2}
              maxLength={500}
              placeholder="What you see or hear, a landmark, tire size"
              className={inputClass}
            />
          </div>

          {/* Honeypot, hidden from real users; the API ignores requests that fill it. */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label>
              Company website
              <input value={companyWebsite} onChange={(e) => setCompanyWebsite(e.target.value)} tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <p className="text-center text-sm">
            <Link href={serviceSlug ? `/request?service=${serviceSlug}` : "/request"} data-full-request className="font-medium text-ink-600 underline hover:text-red-600" onClick={onClose}>
              Want to add photos or set a pin on a map? Use the full form
            </Link>
          </p>
        </div>

        <footer className="border-t border-ink-950/10 bg-white px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3">
          {submitError && (
            <p role="alert" className="mb-2 text-sm font-medium text-red-600">
              {submitError}
            </p>
          )}
          <button
            type="button"
            onClick={submit}
            disabled={submitting}
            className="flex h-13 w-full items-center justify-center gap-2 rounded-full bg-red-600 text-base font-bold text-white hover:bg-red-700 disabled:opacity-70"
          >
            <Send className="h-4.5 w-4.5" aria-hidden="true" />
            {submitting ? "Sending…" : "Send to Dispatch"}
          </button>
          <p className="mt-2 text-center text-xs text-ink-500">
            No spam. By sending, you agree to the{" "}
            <Link href="/terms" className="underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>
            .
          </p>
        </footer>
      </div>
    </dialog>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return (
    <p data-error className="mt-1.5 text-sm font-medium text-red-600">
      {children}
    </p>
  );
}
