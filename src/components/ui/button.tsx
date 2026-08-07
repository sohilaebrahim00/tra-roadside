import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

const VARIANT_CLASSES = {
  primary:
    "bg-red-600 text-white hover:bg-red-700 active:bg-red-700 shadow-[0_1px_0_0_rgba(0,0,0,0.15)]",
  dark: "bg-ink-950 text-white hover:bg-ink-800 active:bg-ink-800",
  outline:
    "border border-ink-950/15 text-ink-950 hover:border-ink-950/30 hover:bg-ink-950/[0.03] dark:border-white/20 dark:text-white dark:hover:bg-white/5",
  ghost: "text-ink-950 hover:bg-ink-950/[0.05] dark:text-white dark:hover:bg-white/10",
  amber: "bg-amber-500 text-ink-950 hover:bg-amber-600",
} as const;

const SIZE_CLASSES = {
  sm: "h-9 px-3.5 text-sm gap-1.5",
  md: "h-11 px-5 text-[0.95rem] gap-2",
  lg: "h-13 px-6 text-base gap-2.5",
  xl: "h-14 px-7 text-lg gap-2.5",
} as const;

type Variant = keyof typeof VARIANT_CLASSES;
type Size = keyof typeof SIZE_CLASSES;

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-[colors,transform] duration-150 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 disabled:opacity-50 disabled:pointer-events-none select-none motion-reduce:active:scale-100";

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    icon,
    iconPosition = "left",
    fullWidth,
    ...rest
  } = props;

  const classes = cn(
    base,
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" ? icon : null}
      <span>{children}</span>
      {icon && iconPosition === "right" ? icon : null}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const anchorRest = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={props.href} className={classes} {...anchorRest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
