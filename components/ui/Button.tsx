import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
  secondary:
    "bg-surface text-text-primary border border-border hover:border-text-secondary/50",
  ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface",
  danger: "bg-error/10 text-error border border-error/30 hover:bg-error/15",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-8 px-3 text-caption gap-1.5",
  md: "h-11 px-4 text-body font-medium gap-2",
  lg: "h-[52px] px-5 text-h2 gap-2",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-button transition-colors disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}
