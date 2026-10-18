import "server-only";
import type { CreateRequestInput } from "@/lib/validation/request";
import type { ServiceContent } from "@/lib/content/services";
import { BUSINESS } from "@/lib/content/business";
import { LOCATION_SOURCE_LABELS, STATUS_META, type ContactMethod, type LocationSource, type VehicleType } from "@/lib/types/domain";
import type { EmailRow, EmailSection, RichEmail } from "./email-layout";

/**
 * The two emails a new request produces, built from the request itself:
 *
 *   - the customer's confirmation, laid out like a receipt, and
 *   - dispatch's alert, laid out so a dispatcher can understand the
 *     situation and act from a phone without opening anything else.
 *
 * The editable template text (Supabase notification_templates, or the
 * fallback in notification-templates.ts) becomes the intro paragraph; every
 * detail below it is generated here, so a detail can never be missing because
 * someone edited a template. Prices come from SERVICES. Nothing here promises
 * an arrival time.
 */

export interface RequestSnapshot {
  requestNumber: string;
  createdAt: Date;
  service: ServiceContent;
  fullName: string;
  phone: string;
  email: string;
  preferredContactMethod: ContactMethod;
  smsConsent: boolean;
  vehicle: {
    year: string;
    make: string;
    model: string;
    color: string;
    plate: string;
    vin: string;
    type: VehicleType;
    isDrivable: boolean | null;
  };
  notes: string;
  pickup: { address: string; lat: number; lng: number; source?: LocationSource };
  destination: { address: string; lat: number | null; lng: number | null; notes: string };
  photoCount: number;
  trackingUrl: string;
  dispatchUrl: string;
}

export function snapshotFromInput(
  input: CreateRequestInput,
  service: ServiceContent,
  ids: { requestNumber: string; trackingUrl: string; dispatchUrl: string }
): RequestSnapshot {
  const t = (v?: string | null) => (v ?? "").trim();
  return {
    ...ids,
    createdAt: new Date(),
    service,
    fullName: t(input.fullName),
    phone: t(input.phone),
    email: t(input.email),
    preferredContactMethod: input.preferredContactMethod,
    smsConsent: input.smsConsent,
    vehicle: {
      year: t(input.vehicleYear),
      make: t(input.vehicleMake),
      model: t(input.vehicleModel),
      color: t(input.vehicleColor),
      plate: t(input.vehicleLicensePlate).toUpperCase(),
      vin: t(input.vehicleVin).toUpperCase(),
      type: input.vehicleType,
      isDrivable: input.isDrivable,
    },
    notes: t(input.notes),
    pickup: { address: t(input.pickupAddress), lat: input.pickupLat, lng: input.pickupLng, source: input.locationSource },
    destination: {
      address: t(input.destinationAddress),
      lat: input.destinationLat ?? null,
      lng: input.destinationLng ?? null,
      notes: t(input.destinationNotes),
    },
    photoCount: input.photos.length,
  };
}

// ---------------------------------------------------------------- helpers

const VEHICLE_TYPE_LABELS: Record<VehicleType, string> = {
  sedan: "Car / sedan",
  suv: "SUV",
  pickup_truck: "Pickup truck",
  van: "Van",
  motorcycle: "Motorcycle",
  box_truck: "Box truck",
  semi_truck: "Semi truck",
  other: "Other",
};

const CONTACT_LABELS: Record<ContactMethod, string> = { call: "Phone call", sms: "Text message", email: "Email" };

/** How much to trust the pin, in dispatch's terms. */
const PIN_TRUST: Record<LocationSource, string> = {
  gps: "accurate to the spot",
  address_selected: "address chosen from the list",
  pin_adjusted: "pin moved by the customer",
  typed: "verify the exact spot by phone",
};

/**
 * What dispatch should confirm on the call for each service. Every item comes
 * from that service's "what we need" list or FAQ in SERVICES, rewritten as an
 * instruction to the dispatcher.
 */
const DISPATCH_CHECKS: Record<string, string[]> = {
  "jump-start": ["Confirm the battery is the likely problem (clicking, or a slow crank).", "If it is a hybrid or EV, note the model so the right equipment goes out."],
  "battery-replacement": ["Quote installation for this vehicle before a driver sets off.", "Confirm the battery fit from year, make and model, or the VIN."],
  lockout: ["Ask whether the keys are in the cabin or the trunk. The trunk is priced separately.", "Remind the customer to have ID to prove ownership on site."],
  "tire-repair-plug-patch": ["Ask where the damage is. Tread punctures can be repaired; sidewall damage cannot."],
  "flat-tire-change": ["Confirm there is a usable spare in the vehicle. Without one, offer tire replacement or a tow."],
  "tire-replacement": ["Get the wheel size off the tire sidewall. The price is set by wheel size."],
  "stuck-screw-in-tire": ["Ask which tire it is."],
  "rim-lock-removal": ["Ask whether the customer has the wheel lock key at all."],
  "fuel-delivery": ["Confirm gas or diesel before the driver leaves."],
  towing: ["Confirm the destination and whether the vehicle rolls or has to be loaded."],
};

function vehicleLine(s: RequestSnapshot): string {
  return [s.vehicle.year, s.vehicle.make, s.vehicle.model].filter(Boolean).join(" ");
}

function drivableLabel(v: boolean | null): string {
  return v === true ? "Yes" : v === false ? "No" : "Not sure";
}

function mapsSearch(lat: number, lng: number): string {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

function mapsDirections(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

function central(d: Date): string {
  return `${d.toLocaleString("en-US", { timeZone: "America/Chicago", weekday: "short", month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" })} (Central)`;
}

function priceText(service: ServiceContent): string {
  return (service.priceLines ?? [])
    .map((p) => `${p.label ? `${p.label}: ` : ""}${p.amount}${p.note ? ` (${p.note})` : ""}`)
    .join("\n");
}

function phoneDigits(phone: string): string {
  const d = phone.replace(/[^\d+]/g, "");
  return d.startsWith("+") ? d : d.length === 10 ? `+1${d}` : d;
}

/** Dispatch SMS link to the pin, kept ASCII so the text stays GSM-7. */
export function mapsUrlFor(s: RequestSnapshot): string {
  return mapsSearch(s.pickup.lat, s.pickup.lng);
}

// ---------------------------------------------------------------- customer

export function customerConfirmationEmail(s: RequestSnapshot, intro: string): RichEmail {
  const firstName = s.fullName.split(/\s+/)[0] || s.fullName;
  const vehicle = vehicleLine(s);
  const isTow = s.service.slug === "towing";

  const vehicleRows: EmailRow[] = [
    { label: "Vehicle", value: [vehicle || "Not provided", s.vehicle.color].filter(Boolean).join(", ") },
    { label: "Type", value: VEHICLE_TYPE_LABELS[s.vehicle.type] },
  ];
  if (s.vehicle.plate) vehicleRows.push({ label: "License plate", value: s.vehicle.plate });
  if (s.vehicle.vin) vehicleRows.push({ label: "VIN", value: s.vehicle.vin });
  if (isTow || s.vehicle.isDrivable !== null) vehicleRows.push({ label: "Drivable", value: drivableLabel(s.vehicle.isDrivable) });

  const locationRows: EmailRow[] = [{ label: "Pickup", value: s.pickup.address, href: mapsSearch(s.pickup.lat, s.pickup.lng) }];
  if (s.destination.address) locationRows.push({ label: "Destination", value: s.destination.address });

  const sections: EmailSection[] = [
    {
      title: "Your request",
      rows: [
        { label: "Request number", value: s.requestNumber },
        { label: "Submitted", value: central(s.createdAt) },
        { label: "Service", value: s.service.name },
        { label: "Published price", value: priceText(s.service) || "Confirmed by dispatch" },
        { label: "Final price", value: "Confirmed by dispatch for your vehicle and location" },
      ],
    },
    { title: "Your vehicle", rows: vehicleRows },
    { title: "Where we're coming", rows: locationRows },
    {
      title: "What happens next",
      bullets: [
        "A dispatcher reviews your request and assigns the nearest available driver.",
        "We'll message you when a driver is assigned and again when they're on the way.",
        "Follow your driver live from the tracking link. No account or login needed.",
      ],
    },
  ];
  if (s.service.whileYouWait.length) sections.push({ title: "While you wait", bullets: s.service.whileYouWait });

  return {
    preheader: `${s.requestNumber}: your ${s.service.name.toLowerCase()} request is in. Track it live from this email.`,
    eyebrow: "Request received",
    heading: `We've got your request, ${firstName}.`,
    badge: STATUS_META.new.customerLabel,
    intro,
    buttons: [
      { label: "Track your request live", href: s.trackingUrl },
      { label: `Call ${BUSINESS.phoneDisplay}`, href: BUSINESS.phoneHref, tone: "secondary" },
    ],
    sections,
    footer: [
      `Questions about your request? Call ${BUSINESS.phoneDisplay}, 24 hours a day.`,
      `${BUSINESS.legalName} · Dallas–Fort Worth, Texas`,
      "You're receiving this because you requested roadside help at txroadsideassistance.com.",
    ],
  };
}

// ---------------------------------------------------------------- dispatch

export function dispatchAlertEmail(s: RequestSnapshot, intro: string): RichEmail {
  const vehicle = vehicleLine(s);
  const isTow = s.service.slug === "towing";
  const isBattery = s.service.slug === "battery-replacement";
  const tel = `tel:${phoneDigits(s.phone)}`;

  // The situation in one line: what, which car, can it move, how good is the pin.
  const situation = [
    s.service.name,
    [vehicle || "Vehicle not given", s.vehicle.color].filter(Boolean).join(", "),
    VEHICLE_TYPE_LABELS[s.vehicle.type],
    `Drivable: ${drivableLabel(s.vehicle.isDrivable)}`,
    s.pickup.source ? `Pin: ${LOCATION_SOURCE_LABELS[s.pickup.source]}` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  // Gaps the dispatcher should close on the call, before anyone drives out.
  const missing: string[] = [];
  if (!vehicle) missing.push("Vehicle year, make and model were not given.");
  if (isBattery && !s.vehicle.vin) missing.push("No VIN: confirm the battery fit from year, make and model.");
  if (!s.vehicle.plate) missing.push("No license plate given. Ask for it, or for the color, to spot the car.");
  if (isTow && !s.destination.address) missing.push("No tow destination given.");
  if (s.pickup.source === "typed") missing.push("Pickup was typed by hand. Confirm the exact spot by phone.");

  const customerRows: EmailRow[] = [
    { label: "Name", value: s.fullName },
    { label: "Phone", value: s.phone, href: tel },
    { label: "Email", value: s.email, href: `mailto:${s.email}` },
    { label: "Prefers", value: CONTACT_LABELS[s.preferredContactMethod] },
    { label: "Texts allowed", value: s.smsConsent ? "Yes" : "No, call or email only", emphasis: !s.smsConsent },
  ];

  const locationRows: EmailRow[] = [
    { label: "Pickup", value: s.pickup.address, href: mapsSearch(s.pickup.lat, s.pickup.lng) },
    { label: "Coordinates", value: `${s.pickup.lat.toFixed(6)}, ${s.pickup.lng.toFixed(6)}`, href: mapsDirections(s.pickup.lat, s.pickup.lng) },
  ];
  if (s.pickup.source) locationRows.push({ label: "Pin source", value: `${LOCATION_SOURCE_LABELS[s.pickup.source]} (${PIN_TRUST[s.pickup.source]})`, emphasis: s.pickup.source === "typed" });
  if (s.destination.address || isTow) {
    locationRows.push({
      label: "Tow to",
      value: s.destination.address || "Not given",
      href: s.destination.lat != null && s.destination.lng != null ? mapsSearch(s.destination.lat, s.destination.lng) : undefined,
      emphasis: !s.destination.address,
    });
  }
  if (s.destination.notes) locationRows.push({ label: "Destination notes", value: s.destination.notes });

  const vehicleRows: EmailRow[] = [
    { label: "Vehicle", value: vehicle || "Not given", emphasis: !vehicle },
    { label: "Color", value: s.vehicle.color || "Not given" },
    { label: "Type", value: VEHICLE_TYPE_LABELS[s.vehicle.type] },
    { label: "License plate", value: s.vehicle.plate || "Not given" },
    { label: "Drivable", value: drivableLabel(s.vehicle.isDrivable), emphasis: s.vehicle.isDrivable === false },
  ];
  if (s.vehicle.vin || isBattery) vehicleRows.push({ label: "VIN", value: s.vehicle.vin || "Not given", emphasis: isBattery && !s.vehicle.vin });

  const sections: EmailSection[] = [
    {
      title: "Confirm before dispatching",
      bullets: [...(DISPATCH_CHECKS[s.service.slug] ?? []), ...missing],
    },
    { title: "Customer", rows: customerRows },
    { title: "Location", rows: locationRows },
    { title: "Vehicle", rows: vehicleRows },
    {
      title: "Job",
      rows: [
        { label: "Service", value: s.service.name },
        { label: "Published price", value: priceText(s.service) || "Quote by dispatch" },
        { label: "Customer notes", value: s.notes || "None", emphasis: Boolean(s.notes) },
        { label: "Photos", value: s.photoCount ? `${s.photoCount} uploaded, view in dispatch` : "None" },
        { label: "Customer tracking link", value: "Open the customer's view", href: s.trackingUrl },
      ],
    },
  ];

  return {
    preheader: situation,
    eyebrow: `New request · ${s.requestNumber}`,
    heading: s.service.name,
    intro,
    summary: situation,
    buttons: [
      { label: "Open in dispatch", href: s.dispatchUrl },
      { label: `Call ${s.fullName.split(/\s+/)[0] || "customer"}`, href: tel, tone: "secondary" },
      ...(s.smsConsent ? [{ label: "Text", href: `sms:${phoneDigits(s.phone)}`, tone: "secondary" as const }] : []),
      { label: "Navigate", href: mapsDirections(s.pickup.lat, s.pickup.lng), tone: "secondary" },
    ],
    sections,
    footer: [`Received ${central(s.createdAt)}`, `Request ${s.requestNumber} · ${s.service.name}`],
  };
}
