import { cn } from "@/lib/utils/cn";
import type { ServiceContent } from "@/lib/content/services";

/**
 * A service's price figure, styled by the caller.
 *
 * For battery replacement, whose dispatch fee is not printed beside the price
 * (owner, 2026-11-07), the figure is a button: a click, Enter or Space opens
 * the battery total (components/request/battery-total.tsx). It keeps the
 * text's own look, so nothing moves. Every other price is plain text.
 *
 * Set `inLink` where the figure sits inside a link or a button, which cannot
 * hold another button: the figure is marked instead, and a click on it still
 * shows the total before the link goes ahead.
 */
export function PriceFigure({
  svc,
  inLink = false,
  className,
  children,
}: {
  svc: Pick<ServiceContent, "feeAtBooking">;
  inLink?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  if (!svc.feeAtBooking) return <span className={className}>{children}</span>;
  if (inLink) {
    return (
      <span data-battery-total="" className={className}>
        {children}
      </span>
    );
  }
  return (
    <button
      type="button"
      data-battery-total=""
      aria-haspopup="dialog"
      className={cn("cursor-pointer text-left decoration-dotted decoration-2 underline-offset-4 hover:underline", className)}
    >
      {children}
    </button>
  );
}
