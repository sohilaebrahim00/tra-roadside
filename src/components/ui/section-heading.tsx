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
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow tone={tone === "light" ? "light" : "red"}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-3 font-display text-3xl font-semibold uppercase tracking-tight text-balance sm:text-4xl",
          tone === "dark" ? "text-ink-950 dark:text-white" : "text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", tone === "dark" ? "text-ink-600 dark:text-ink-200" : "text-white/75")}>
          {description}
        </p>
      )}
    </div>
  );
}
