/**
 * Central place to read environment variables. Every integration in this app
 * goes through here so the rest of the codebase never has to guess whether a
 * given key is configured — `integrationStatus()` is what powers the "demo
 * mode" banners in the admin dashboard and the setup checklist.
 */
import { toE164 } from "@/lib/utils/phone";

function readPublic(name: string): string {
  return process.env[name] ?? "";
}

function readServer(name: string): string {
  return process.env[name] ?? "";
}

const isProd = process.env.NODE_ENV === "production";

/** Strips whitespace, ensures a protocol, and removes trailing slashes so callers never have to think about it. */
function normalizeBaseUrl(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "";
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  return withProtocol.replace(/\/+$/, "");
}

// APP_URL / NEXT_PUBLIC_APP_URL is the one true source for the public site
// origin. NEXT_PUBLIC_SITE_URL is kept as a legacy alias so an existing
// deploy's env vars don't silently stop working. Localhost is used ONLY in
// non-production runs (dev server, local build/test) — a production run
// with no app URL configured falls back to the business's real published
// domain rather than ever leaking a localhost link to a customer.
const configuredAppUrl =
  readPublic("NEXT_PUBLIC_APP_URL") || readServer("APP_URL") || readPublic("NEXT_PUBLIC_SITE_URL");
const PRODUCTION_FALLBACK_URL = "https://texas-roadside-assistance.com";
const DEV_FALLBACK_URL = "http://localhost:3000";

export const env = {
  supabaseUrl: readPublic("NEXT_PUBLIC_SUPABASE_URL"),
  supabaseAnonKey: readPublic("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
  supabaseServiceRoleKey: readServer("SUPABASE_SERVICE_ROLE_KEY"),

  googleMapsApiKey: readPublic("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"),
  googleMapsServerApiKey: readServer("GOOGLE_MAPS_SERVER_API_KEY"),

  twilioAccountSid: readServer("TWILIO_ACCOUNT_SID"),
  twilioAuthToken: readServer("TWILIO_AUTH_TOKEN"),
  twilioFromNumber: readServer("TWILIO_FROM_NUMBER"),

  resendApiKey: readServer("RESEND_API_KEY"),
  resendFromEmail: readServer("RESEND_FROM_EMAIL") || "TRA Dispatch <dispatch@texas-roadside-assistance.com>",

  /** Was NEXT_PUBLIC_APP_URL/APP_URL explicitly set, as opposed to falling back? Used for config validation, not for building links. */
  appUrlExplicitlyConfigured: Boolean(configuredAppUrl),
  siteUrl: normalizeBaseUrl(configuredAppUrl) || (isProd ? PRODUCTION_FALLBACK_URL : DEV_FALLBACK_URL),

  // Business's own published contact info is the default so dispatch
  // notifications work out of the box; DISPATCH_EMAIL/DISPATCH_PHONE let a
  // real deployment route internal alerts elsewhere without touching code.
  dispatchEmail: readServer("DISPATCH_EMAIL") || "support@texas-roadside-assistance.com",
  dispatchPhoneRaw: readServer("DISPATCH_PHONE") || "+19454121215",

  gaMeasurementId: readPublic("NEXT_PUBLIC_GA_MEASUREMENT_ID"),
  gtmContainerId: readPublic("NEXT_PUBLIC_GTM_CONTAINER_ID"),
  metaPixelId: readPublic("NEXT_PUBLIC_META_PIXEL_ID"),

  hcaptchaSiteKey: readPublic("NEXT_PUBLIC_HCAPTCHA_SITE_KEY"),
  hcaptchaSecret: readServer("HCAPTCHA_SECRET"),
};

/** Validated E.164 dispatch phone — null if DISPATCH_PHONE is set but malformed. */
export const dispatchPhoneE164 = toE164(env.dispatchPhoneRaw);

/** Joins a path onto the site's base URL without producing a double slash. */
export function buildUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${env.siteUrl}${cleanPath}`;
}

export interface IntegrationStatus {
  key: string;
  label: string;
  configured: boolean;
  envVars: string[];
  docsHint: string;
}

/** Used by the admin "Integrations" panel and the setup checklist in the README. */
export function integrationStatus(): IntegrationStatus[] {
  return [
    {
      key: "app-url",
      label: "Production app URL",
      configured: env.appUrlExplicitlyConfigured,
      envVars: ["NEXT_PUBLIC_APP_URL"],
      docsHint: "Set this to your real deployed domain (e.g. https://texas-roadside-assistance.com) so tracking links and notifications never reference localhost.",
    },
    {
      key: "supabase",
      label: "Supabase (database, auth, storage, realtime)",
      configured: Boolean(env.supabaseUrl && env.supabaseAnonKey && env.supabaseServiceRoleKey),
      envVars: [
        "NEXT_PUBLIC_SUPABASE_URL",
        "NEXT_PUBLIC_SUPABASE_ANON_KEY",
        "SUPABASE_SERVICE_ROLE_KEY",
      ],
      docsHint: "Create a Supabase project, run supabase/migrations, then copy the project URL and keys.",
    },
    {
      key: "google-maps",
      label: "Google Maps / Places / Routes",
      configured: Boolean(env.googleMapsApiKey),
      envVars: ["NEXT_PUBLIC_GOOGLE_MAPS_API_KEY", "GOOGLE_MAPS_SERVER_API_KEY"],
      docsHint: "Enable Maps JavaScript API, Places API, and Routes API in Google Cloud Console.",
    },
    {
      key: "twilio",
      label: "Twilio SMS",
      configured: Boolean(env.twilioAccountSid && env.twilioAuthToken && env.twilioFromNumber),
      envVars: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_FROM_NUMBER"],
      docsHint: "Create a Twilio account, buy a number capable of SMS, and copy the Account SID/Auth Token.",
    },
    {
      key: "resend",
      label: "Resend transactional email",
      configured: Boolean(env.resendApiKey),
      envVars: ["RESEND_API_KEY", "RESEND_FROM_EMAIL"],
      docsHint: "Create a Resend account, verify a sending domain, and generate an API key.",
    },
  ];
}

export function isDemoMode(): boolean {
  return !env.supabaseUrl || !env.supabaseAnonKey;
}

export interface ProductionReadiness {
  ready: boolean;
  database: boolean;
  email: boolean;
  sms: boolean;
  appUrl: boolean;
  missing: string[];
}

/**
 * A stricter check than isDemoMode(): a site can have Supabase connected
 * (so it persists real requests) while Resend/Twilio are still missing, in
 * which case notifications are still only logged, not delivered. Anything
 * customer-facing that claims "this was really sent" should check this,
 * not just isDemoMode().
 */
export function getProductionReadiness(): ProductionReadiness {
  const database = Boolean(env.supabaseUrl && env.supabaseAnonKey && env.supabaseServiceRoleKey);
  const email = Boolean(env.resendApiKey);
  const sms = Boolean(env.twilioAccountSid && env.twilioAuthToken && env.twilioFromNumber);
  const appUrl = env.appUrlExplicitlyConfigured;

  const missing: string[] = [];
  if (!database) missing.push("NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY / SUPABASE_SERVICE_ROLE_KEY");
  if (!email) missing.push("RESEND_API_KEY");
  if (!sms) missing.push("TWILIO_ACCOUNT_SID / TWILIO_AUTH_TOKEN / TWILIO_FROM_NUMBER");
  if (!appUrl) missing.push("NEXT_PUBLIC_APP_URL");

  return { ready: database && email && sms && appUrl, database, email, sms, appUrl, missing };
}

/**
 * Logs a one-time, secret-free warning at server startup when running in
 * production without full configuration — never prints values, only which
 * variable names are absent.
 */
export function validateEnvOnBoot(): void {
  if (!isProd) return;
  const readiness = getProductionReadiness();
  if (!readiness.ready) {
    console.warn(
      `[env] Running in production without full configuration. Missing: ${readiness.missing.join(", ")}. ` +
        "Demo/fallback behavior will be used for the corresponding features until these are set."
    );
  }
}
