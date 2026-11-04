import { MessageSquareText, Navigation, ReceiptText, Wrench } from "lucide-react";
import { DISPATCH_FEE_USD } from "@/lib/content/pricing";

const STEPS = [
  {
    icon: MessageSquareText,
    title: "Send a request or call",
    text: "Share your location, the vehicle and what happened. No account and no membership.",
  },
  {
    icon: ReceiptText,
    title: "Hear the price first",
    text: `Dispatch confirms the service price and the ${DISPATCH_FEE_USD} dispatch fee for your vehicle before a driver is sent.`,
  },
  {
    icon: Navigation,
    title: "Hear when they're on the way",
    text: "We text or call you when your driver is heading to you. Average arrival is 30 minutes; actual time depends on location and traffic.",
  },
  {
    icon: Wrench,
    title: "Fixed where the car sits",
    text: "Driveway, parking lot, garage or shoulder: there's no shop to get to.",
  },
];

/** What happens after someone asks for help, for the pages where a driver is deciding on price. */
export function ServiceCallSteps({ title }: { title: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-[1.75rem]">{title}</h2>
      <ol className="mt-5 grid gap-3 sm:grid-cols-2">
        {STEPS.map(({ icon: Icon, title: stepTitle, text }, i) => (
          <li key={stepTitle} className="flex gap-3 rounded-2xl border border-ink-950/10 bg-white p-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-red-600/10 text-red-600">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-base font-semibold text-ink-950">
                {i + 1}. {stepTitle}
              </span>
              <span className="mt-0.5 block text-sm leading-relaxed text-ink-600">{text}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
