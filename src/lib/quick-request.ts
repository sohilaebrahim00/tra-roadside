/**
 * Opening the quick request form from anywhere on the site. The form itself is
 * loaded only when it is first opened (quick-request-host.tsx).
 */
const QUICK_REQUEST_EVENT = "tra:quick-request";

/** Routes that have no floating Call / Text / Ask actions. */
export const NO_FLOATING_ACTIONS = ["/admin", "/driver", "/request", "/track"];

export interface QuickRequestVehicle {
  year: string;
  make: string;
  model: string;
}

export interface QuickRequestOpen {
  service?: string;
  vehicle?: QuickRequestVehicle;
}

export function openQuickRequest(service?: string, vehicle?: QuickRequestVehicle) {
  window.dispatchEvent(new CustomEvent<QuickRequestOpen>(QUICK_REQUEST_EVENT, { detail: { service, vehicle } }));
}

export function onQuickRequest(listener: (open: QuickRequestOpen) => void): () => void {
  const handler = (e: Event) => listener((e as CustomEvent<QuickRequestOpen>).detail ?? {});
  window.addEventListener(QUICK_REQUEST_EVENT, handler);
  return () => window.removeEventListener(QUICK_REQUEST_EVENT, handler);
}
