"use client";

import { useMemo, useState } from "react";
import { BatteryFull, MessageSquareText, Phone, Search } from "lucide-react";
import fitment from "@/data/battery-fitment.json";
import { BUSINESS } from "@/lib/content/business";
import { getService } from "@/lib/content/services";
import { DISPATCH_FEE_TAG, priceSummary } from "@/lib/content/pricing";
import { openQuickRequest } from "@/lib/quick-request";
import { VIN_LENGTH, VIN_PATTERN, cleanVin } from "@/lib/validation/request";

interface EngineRule {
  liters?: string;
  cylinders?: number;
  fuel?: string;
  groups: string[];
}

interface FitmentRow {
  make: string;
  models: string[];
  from: number;
  to: number;
  groups: string[];
  agm?: string;
  engines?: EngineRule[];
  note?: string;
}

interface Engine {
  liters?: string;
  cylinders?: number;
  fuel?: string;
}

const ROWS = fitment as FitmentRow[];
const VPIC = "https://vpic.nhtsa.dot.gov/api/vehicles";
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

const MAKES = [...new Set(ROWS.map((r) => r.make))].sort();

function modelsFor(make: string): string[] {
  return [...new Set(ROWS.filter((r) => r.make === make).flatMap((r) => r.models))].sort();
}

function yearsFor(make: string, model: string): number[] {
  const years = new Set<number>();
  for (const r of ROWS) {
    if (r.make !== make || !r.models.includes(model)) continue;
    for (let y = r.from; y <= r.to; y++) years.add(y);
  }
  return [...years].sort((a, b) => b - a);
}

/** Which battery size a vehicle takes. When the engine is known, the row's engine rules narrow it down. */
function findRow(make: string, model: string, year: number, engine?: Engine): (FitmentRow & { likely: string[] }) | undefined {
  const row = ROWS.find((r) => norm(r.make) === norm(make) && r.models.some((m) => norm(m) === norm(model)) && year >= r.from && year <= r.to);
  if (!row) return undefined;
  let likely = row.groups;
  if (engine && row.engines) {
    const matched = row.engines.filter(
      (e) =>
        (!e.liters || Number(e.liters).toFixed(1) === Number(engine.liters ?? 0).toFixed(1)) &&
        (!e.cylinders || e.cylinders === engine.cylinders) &&
        (!e.fuel || e.fuel === engine.fuel)
    );
    if (matched.length > 0) likely = matched.flatMap((e) => e.groups);
  }
  return { ...row, likely };
}

/**
 * Which battery a vehicle takes: pick it from the lists, or enter the VIN and
 * the free NHTSA decoder fills them in. The table is the battery site's, checked
 * against OEM and battery-maker sources; dispatch still confirms the battery for
 * the exact vehicle. The VIN goes only to NHTSA, from the customer's browser.
 */
export function BatteryFinder() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [chosenYear, setYear] = useState("");
  const [engine, setEngine] = useState<Engine | undefined>();
  const [vin, setVin] = useState("");
  const [vinStatus, setVinStatus] = useState<string | null>(null);
  const [looking, setLooking] = useState(false);

  const service = getService("battery-replacement");
  const models = useMemo(() => (make ? modelsFor(make) : []), [make]);
  const years = useMemo(() => (make && model ? yearsFor(make, model) : []), [make, model]);
  // A year chosen for one model may not exist for the next one picked.
  const year = years.includes(Number(chosenYear)) ? chosenYear : "";
  const row = make && model && year ? findRow(make, model, Number(year), engine) : undefined;

  async function decodeVin() {
    const value = cleanVin(vin);
    if (!VIN_PATTERN.test(value)) {
      setVinStatus(`That's ${value.length} characters. A VIN has 17 letters and numbers.`);
      return;
    }
    setLooking(true);
    setVinStatus(null);
    try {
      const res = await fetch(`${VPIC}/DecodeVinValues/${value}?format=json`);
      const decoded = (await res.json())?.Results?.[0];
      if (!decoded?.ModelYear || !decoded?.Make || !decoded?.Model) throw new Error("no match");
      const foundMake = MAKES.find((m) => norm(m) === norm(decoded.Make));
      const foundModel = foundMake && modelsFor(foundMake).find((m) => norm(m) === norm(decoded.Model));
      const label = `${decoded.ModelYear} ${decoded.Make} ${decoded.Model}`;
      if (!foundMake || !foundModel || !yearsFor(foundMake, foundModel).includes(Number(decoded.ModelYear))) {
        setVinStatus(`That's a ${label}. It isn't in our list yet, so call us and dispatch will look it up.`);
        return;
      }
      setMake(foundMake);
      setModel(foundModel);
      setYear(String(decoded.ModelYear));
      setEngine({
        liters: decoded.DisplacementL || undefined,
        cylinders: Number(decoded.EngineCylinders) || undefined,
        fuel: /diesel/i.test(decoded.FuelTypePrimary ?? "") ? "diesel" : /hybrid/i.test(decoded.ElectrificationLevel ?? "") ? "hybrid" : "gas",
      });
      setVinStatus(`Found a ${label}.`);
    } catch {
      setVinStatus("We couldn't read that VIN right now. Pick your vehicle from the lists instead.");
    } finally {
      setLooking(false);
    }
  }

  const selectClass = "mt-1 w-full rounded-xl border border-ink-950/15 bg-white px-3.5 py-3 text-base text-ink-950 focus:border-red-600 focus:outline-none disabled:bg-paper-50 disabled:text-ink-400";
  const others = row ? row.groups.filter((g) => !row.likely.includes(g)) : [];

  return (
    <div className="rounded-3xl border border-ink-950/10 bg-white p-5 sm:p-7">
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="block text-sm font-semibold text-ink-900">
          Make
          <select
            value={make}
            onChange={(e) => {
              setMake(e.target.value);
              setModel("");
              setYear("");
              setEngine(undefined);
            }}
            className={selectClass}
          >
            <option value="">Choose a make</option>
            {MAKES.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-ink-900">
          Model
          <select
            value={model}
            disabled={!make}
            onChange={(e) => {
              setModel(e.target.value);
              setEngine(undefined);
            }}
            className={selectClass}
          >
            <option value="">Choose a model</option>
            {models.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-ink-900">
          Year
          <select value={year} disabled={!model} onChange={(e) => setYear(e.target.value)} className={selectClass}>
            <option value="">Choose a year</option>
            {years.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        </label>
      </div>

      <form
        className="mt-4 border-t border-ink-950/8 pt-4"
        onSubmit={(e) => {
          e.preventDefault();
          decodeVin();
        }}
      >
        <label htmlFor="finder-vin" className="block text-sm font-semibold text-ink-900">
          Or enter your VIN <span className="font-normal text-ink-500">(on the dash at the windshield, or the door sticker)</span>
        </label>
        <div className="mt-1 flex gap-2">
          <input
            id="finder-vin"
            value={vin}
            onChange={(e) => setVin(cleanVin(e.target.value))}
            maxLength={VIN_LENGTH}
            autoCapitalize="characters"
            autoComplete="off"
            placeholder="17 characters"
            className="min-w-0 flex-1 rounded-xl border border-ink-950/15 bg-white px-3.5 py-3 font-mono text-base text-ink-950 focus:border-red-600 focus:outline-none"
          />
          <button type="submit" disabled={looking} className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-ink-950 px-4 text-sm font-bold text-white hover:bg-ink-800 disabled:opacity-70">
            <Search className="h-4 w-4" aria-hidden="true" />
            {looking ? "Looking…" : "Look up"}
          </button>
        </div>
        {vinStatus && <p className="mt-2 text-sm text-ink-700">{vinStatus}</p>}
        <p className="mt-2 text-xs text-ink-500">Your VIN goes only to NHTSA&apos;s free decoder, to read the year, make and model. We don&apos;t save it unless you send a request.</p>
      </form>

      <div aria-live="polite">
        {row && (
          <div className="mt-5 rounded-2xl bg-ink-950 p-5 text-white">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <BatteryFull className="h-4 w-4" aria-hidden="true" />
              {year} {make} {model}
            </p>
            <p className="mt-2 font-display text-3xl font-bold">Battery group {row.likely.join(" or ")}</p>
            {others.length > 0 && <p className="mt-1 text-sm text-white/80">Some versions take group {others.join(" or ")}.</p>}
            {row.agm === "required" && <p className="mt-2 text-sm text-white/90">This vehicle needs an AGM battery.</p>}
            {row.agm === "some" && <p className="mt-2 text-sm text-white/90">Some versions of this vehicle need an AGM battery.</p>}
            {row.note && <p className="mt-2 text-sm text-white/75">{row.note}</p>}
            {service && (
              <p className="mt-3 font-display text-lg font-bold">
                New battery, installed: {priceSummary(service) ?? DISPATCH_FEE_TAG}
              </p>
            )}
            <p className="mt-1 text-xs text-white/65">Dispatch confirms the battery and the price for your exact vehicle before a driver is sent.</p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => openQuickRequest("battery-replacement", { year, make, model })}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700"
              >
                <MessageSquareText className="h-4 w-4" aria-hidden="true" />
                Request this battery
              </button>
              <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        )}
        {make && model && year && !row && (
          <p className="mt-5 rounded-2xl bg-paper-50 p-4 text-sm text-ink-700">
            We don&apos;t have that one listed yet. Call {BUSINESS.phoneDisplay} and dispatch will look it up.
          </p>
        )}
      </div>
    </div>
  );
}
