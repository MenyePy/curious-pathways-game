import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------- Button --------------------------------- */

export const playButton = cva(
  "chunky inline-flex items-center justify-center gap-2 rounded-2xl font-display font-extrabold uppercase tracking-wide select-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground [--chunky-shade:var(--primary-deep)]",
        secondary: "bg-secondary text-secondary-foreground [--chunky-shade:var(--secondary-deep)]",
        gold: "bg-accent text-accent-foreground [--chunky-shade:var(--accent-deep)]",
        grape: "bg-grape text-primary-foreground [--chunky-shade:var(--grape-deep)]",
        danger: "bg-destructive text-destructive-foreground [--chunky-shade:var(--destructive-deep)]",
        ghost: "bg-card text-foreground border-2 border-border [--chunky-shade:var(--border)]",
      },
      size: {
        sm: "h-10 px-4 text-xs",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-8 text-base w-full sm:w-auto",
        block: "h-14 px-8 text-base w-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function PlayButton({
  className,
  variant,
  size,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof playButton>) {
  return <button className={cn(playButton({ variant, size }), className)} {...props} />;
}

/* ---------------------------------- Panel ---------------------------------- */

export function Panel({
  children,
  className,
  tone = "card",
}: {
  children: ReactNode;
  className?: string;
  tone?: "card" | "muted" | "hero" | "gold";
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border-2 border-border p-5",
        tone === "card" && "bg-card",
        tone === "muted" && "bg-muted border-transparent",
        tone === "hero" && "border-transparent text-primary-foreground [background:var(--gradient-hero)]",
        tone === "gold" && "border-transparent text-accent-foreground [background:var(--gradient-gold)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* --------------------------------- Progress -------------------------------- */

export function ProgressBar({
  value,
  tone = "primary",
  className,
}: {
  value: number;
  tone?: "primary" | "accent" | "secondary";
  className?: string;
}) {
  return (
    <div className={cn("h-4 w-full overflow-hidden rounded-full bg-muted", className)}>
      <div
        className={cn(
          "h-full rounded-full transition-[width] duration-500",
          tone === "primary" && "bg-primary",
          tone === "accent" && "bg-accent",
          tone === "secondary" && "bg-secondary",
        )}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

/* ---------------------------------- Chip ----------------------------------- */

export function Chip({
  children,
  tone = "muted",
  className,
}: {
  children: ReactNode;
  tone?: "muted" | "primary" | "accent" | "grape" | "secondary";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold",
        tone === "muted" && "bg-muted text-muted-foreground",
        tone === "primary" && "bg-primary/15 text-primary-deep",
        tone === "accent" && "bg-accent/25 text-accent-deep",
        tone === "grape" && "bg-grape/15 text-grape-deep",
        tone === "secondary" && "bg-secondary/15 text-secondary-deep",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* --------------------------------- Headings -------------------------------- */

export function ScreenTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-5">
      <h1 className="text-2xl sm:text-3xl">{title}</h1>
      {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}