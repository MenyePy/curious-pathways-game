import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { AvatarSpeech } from "@/components/AvatarSpeech";
import { Panel, PlayButton, Chip, ScreenTitle } from "@/components/kit";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/streak")({
  head: () => ({
    meta: [
      { title: "Your streak — Hivision Academy" },
      { name: "description", content: "Track your daily streak, freezes and weekly consistency." },
      { property: "og:title", content: "Your streak — Hivision Academy" },
      { property: "og:description", content: "Track your daily streak and weekly consistency." },
    ],
  }),
  component: StreakPage,
});

const week = [
  { d: "M", done: true },
  { d: "T", done: true },
  { d: "W", done: true },
  { d: "T", done: true },
  { d: "F", done: true },
  { d: "S", done: true },
  { d: "S", done: false },
];

function StreakPage() {
  return (
    <AppShell title="Streak">
      <div className="mx-auto max-w-xl space-y-5">
        <ScreenTitle title="7 day streak" subtitle="Your longest yet is 12 days." />

        <Panel tone="gold" className="flex flex-col items-center py-8 text-center">
          <span className="float-soft text-7xl">🔥</span>
          <p className="mt-3 font-display text-5xl font-extrabold">7</p>
          <p className="text-sm opacity-80">days in a row</p>
        </Panel>

        <Panel className="space-y-3">
          <p className="font-display font-bold">This week</p>
          <div className="flex justify-between gap-2">
            {week.map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <span
                  className={cn(
                    "grid h-10 w-10 place-items-center rounded-full font-display text-sm font-extrabold",
                    d.done ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground",
                  )}
                >
                  {d.done ? "🔥" : d.d}
                </span>
                <span className="text-[11px] font-bold text-muted-foreground">{d.d}</span>
              </div>
            ))}
          </div>
        </Panel>

        <AvatarSpeech contextKey="streak" />

        <Panel tone="muted" className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="min-w-0">
            <p className="font-display font-extrabold">Streak freeze</p>
            <p className="text-xs text-muted-foreground">Protects your streak for one missed day.</p>
          </div>
          <Chip tone="secondary">2 owned</Chip>
        </Panel>

        <Link to="/">
          <PlayButton size="block">Keep it alive</PlayButton>
        </Link>
      </div>
    </AppShell>
  );
}