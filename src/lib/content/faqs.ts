export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

/**
 * Fallback FAQ content used when Supabase isn't configured (demo mode) or a
 * query fails. Mirrors supabase/seed.sql — the admin FAQ manager is the
 * source of truth once the database is connected.
 */
export const FAQS_FALLBACK: FaqItem[] = [
  { id: "areas", category: "General", question: "What areas do you serve?", answer: "We serve the Dallas–Fort Worth Metroplex, including Dallas, Arlington, Plano, Frisco, and 23 other nearby cities. See the full Service Areas page for the complete list." },
  { id: "hours", category: "General", question: "Are you available 24/7?", answer: "Yes — TRA dispatches roadside assistance 24 hours a day, 365 days a year." },
  { id: "how-to-request", category: "Service Requests", question: "How do I request help?", answer: "Use the \"Request Help\" button to share your location, pick a service, and submit — most requests take under two minutes. You can also call us directly." },
  { id: "account", category: "Service Requests", question: "Do I need to create an account?", answer: "No. You can submit a request and track it with a secure link sent to your phone or email — no account required." },
  { id: "arrival-time", category: "Arrival Time", question: "How long until a driver arrives?", answer: "TRA's stated average is a 30-minute arrival window; actual time depends on your location, traffic, and current demand." },
  { id: "pricing", category: "Pricing", question: "How much does a service cost?", answer: "TRA advertises upfront pricing with no surprise fees. Exact pricing is confirmed by dispatch based on your service and location before a driver is sent." },
  { id: "tracking", category: "Tracking", question: "How do I track my driver?", answer: "Once a driver is assigned and starts the trip, a live tracking link is sent by SMS and email. No login is required." },
  { id: "tracking-expiry", category: "Tracking", question: "Does the tracking link expire?", answer: "Yes, tracking links are scoped to a single request and stop working after the job is completed, canceled, or the link expires." },
  { id: "cancel", category: "Cancellations", question: "Can I cancel my request?", answer: "Yes, contact dispatch by phone or through your tracking page as soon as possible if you no longer need assistance." },
  { id: "safety", category: "Safety", question: "What should I do while waiting?", answer: "Stay in a safe, visible location away from moving traffic whenever possible, and keep your hazard lights on." },
];

export function faqsByCategory(items: FaqItem[]) {
  const map = new Map<string, FaqItem[]>();
  for (const item of items) {
    const list = map.get(item.category) ?? [];
    list.push(item);
    map.set(item.category, list);
  }
  return map;
}
