import type { ReactNode } from "react";
import { AvatarSpeech } from "@/components/AvatarSpeech";

export function AuthLayout({
  title,
  subtitle,
  avatarText,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  avatarText: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background lg:grid lg:grid-cols-2">
      <div className="hidden flex-col justify-center gap-6 px-12 text-primary-foreground lg:flex [background:var(--gradient-hero)]">
        <span className="float-soft text-7xl">🚀</span>
        <h2 className="text-4xl">Hivision Academy</h2>
        <p className="max-w-sm text-sm opacity-90">
          Lessons that feel like levels. Streaks, gems, badges and a guide who cheers you on.
        </p>
      </div>
      <div className="flex min-h-screen flex-col justify-center px-4 py-10">
        <div className="mx-auto w-full max-w-sm space-y-5">
          <AvatarSpeech characterId="mila" expression="wave" text={avatarText} />
          <div>
            <h1 className="text-2xl">{title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          </div>
          {children}
          <div className="text-center text-xs text-muted-foreground">{footer}</div>
        </div>
      </div>
    </div>
  );
}

export function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-display text-xs font-bold text-muted-foreground uppercase">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-13 w-full rounded-2xl border-2 border-border bg-card px-4 py-3 text-sm font-semibold outline-none focus:border-primary focus:ring-4 focus:ring-primary/20"
      />
    </label>
  );
}