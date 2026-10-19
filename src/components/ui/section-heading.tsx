import { cn } from "@/lib/utils/cn";

export function Eyebrow({ children, tone = "red" }: { children: React.ReactNode; tone?: "red" | "amber" | "light" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]",
        tone === "red" && "text-red-600",
        tone === "amber" && "text-amber-600",
        tone === "light" && "text-white/70"
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "red" && "bg-red-600",
          tone === "amber" && "bg-amber-500",
          tone === "light" && "bg-amber-400"
        )}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  /**
   * Heading level. Sections default to h2; a page's opening hero passes "h1",
   * because several hub pages rendered their only title through this
   * component and so shipped with no H1 at all.
   */
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow tone={tone === "light" ? "light" : "red"}>{eyebrow}</Eyebrow>}
      <Heading
        className={cn(
          "mt-2.5 font-display text-[1.6rem] font-semibold uppercase leading-tight tracking-tight text-balance sm:mt-3 sm:text-4xl",
          tone === "dark" ? "text-ink-950 dark:text-white" : "text-white"
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className={cn("mt-3 text-[0.95rem] leading-relaxed sm:mt-4 sm:text-lg", tone === "dark" ? "text-ink-600 dark:text-ink-200" : "text-white/75")}>
          {description}
        </p>
      )}
    </div>
  );
}
