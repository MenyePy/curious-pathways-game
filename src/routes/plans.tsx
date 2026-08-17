import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { AvatarSpeech } from "@/components/AvatarSpeech";
import { Panel, Chip, PlayButton, ScreenTitle } from "@/components/kit";
import { plans } from "@/data/plans";
import { playSound } from "@/lib/sound";

export const Route = createFileRoute("/plans")({
  head: () => ({
    meta: [
      { title: "Payment plans — Hivision Academy" },
      {
        name: "description",
        content: "Choose a daily, weekly, monthly or 3-month plan and unlock every lesson, quiz and reward.",
      },
      { property: "og:title", content: "Payment plans — Hivision Academy" },
      { property: "og:description", content: "Daily, weekly, monthly and 3-month access plans." },
    ],
  }),
  component: PlansPage,
});

function PlansPage() {
  return (
    <AppShell title="Plans">
      <div className="mx-auto max-w-3xl space-y-6">
        <ScreenTitle title="Payment plans" subtitle="Pick the pace that suits the learner. Cancel any time." />
        <AvatarSpeech characterId="nova" expression="happy" text="Longer plans cost less per day — the 3 month one is the sweet spot!" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <Panel key={p.id} tone={p.tone} className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <span className="text-3xl">{p.emoji}</span>
                {p.badge ? <Chip className="bg-white/25 text-current">{p.badge}</Chip> : null}
              </div>
              <div>
                <p className="font-display text-lg font-extrabold">{p.name}</p>
                <p className="text-xs opacity-80">{p.period} access</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold">{p.price}</p>
                <p className="text-xs opacity-80">{p.perDay}</p>
              </div>
              <ul className="space-y-1.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span aria-hidden>✅</span>
                    <span className="min-w-0">{f}</span>
                  </li>
                ))}
              </ul>
              <PlayButton
                size="block"
                variant={p.tone === "hero" ? "gold" : p.tone === "gold" ? "grape" : "primary"}
                className="mt-auto"
                onClick={() => playSound("reward")}
              >
                Choose {p.name}
              </PlayButton>
            </Panel>
          ))}
        </div>

        <Panel tone="muted" className="space-y-2 text-sm">
          <p className="font-display font-extrabold">Need an invoice or a school plan?</p>
          <p className="text-muted-foreground">
            We support classroom and family licences with bulk pricing.
          </p>
          <Link to="/info" className="font-bold text-primary-deep underline">
            Contact us for access
          </Link>
        </Panel>

        <p className="text-center text-xs text-muted-foreground">
          By subscribing you agree to our{" "}
          <Link to="/terms" className="underline">Terms &amp; Conditions</Link> and{" "}
          <Link to="/privacy" className="underline">Privacy Policy</Link>.
        </p>
      </div>
    </AppShell>
  );
}