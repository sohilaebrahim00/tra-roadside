/**
 * Demo-mode tracking token: when Supabase isn't connected there's nowhere to
 * persist a request server-side between calls (serverless, stateless), so
 * the submitted request data is round-tripped through the token itself. This
 * is NOT the production security model — see customer_tracking_tokens in
 * supabase/migrations for the real unguessable, database-backed, expiring
 * token used once Supabase is connected. Demo tokens are prefixed `demo.` so
 * both the API and the tracking page can tell which path to use.
 */

export interface DemoTrackingPayload {
  requestNumber: string;
  serviceSlug: string;
  serviceName: string;
  pickupAddress: string;
  pickupLat: number;
  pickupLng: number;
  destinationAddress?: string;
  customerName: string;
  createdAt: string;
}

export function encodeDemoToken(payload: DemoTrackingPayload): string {
  const json = JSON.stringify(payload);
  const base64 = Buffer.from(json, "utf-8").toString("base64url");
  return `demo.${base64}`;
}

export function decodeDemoToken(token: string): DemoTrackingPayload | null {
  if (!token.startsWith("demo.")) return null;
  try {
    const json = Buffer.from(token.slice(5), "base64url").toString("utf-8");
    return JSON.parse(json) as DemoTrackingPayload;
  } catch {
    return null;
  }
}
