/**
 * Opening the quick request form from anywhere on the site. The form itself is
 * loaded only when it is first opened (quick-request-host.tsx).
 */
const QUICK_REQUEST_EVENT = "tra:quick-request";

/** Routes that have no floating Call / Text / Ask actions. */
export const NO_FLOATING_ACTIONS = ["/admin", "/driver", "/request", "/track"];

export function openQuickRequest(service?: string) {
  window.dispatchEvent(new CustomEvent(QUICK_REQUEST_EVENT, { detail: { service } }));
}

export function onQuickRequest(listener: (service?: string) => void): () => void {
  const handler = (e: Event) => listener((e as CustomEvent<{ service?: string }>).detail?.service);
  window.addEventListener(QUICK_REQUEST_EVENT, handler);
  return () => window.removeEventListener(QUICK_REQUEST_EVENT, handler);
}
