import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { AvatarSpeech } from "@/components/AvatarSpeech";
import { Panel, PlayButton, ProgressBar, Chip, ScreenTitle } from "@/components/kit";

export const Route = createFileRoute("/daily-goal")({
  head: () => ({
    meta: [
      { title: "Daily goal — Questly" },
      { name: "description", content: "Set a daily learning goal you can keep and track today's progress." },
      { property: "og:title", content: "Daily goal — Questly" },
      { property: "og:description", content: "Set a daily goal and track today's progress." },
    ],
  }),
  component: DailyGoal,
});

const goals = [
  { label: "Casual", detail: "5 min a day", xp: 20 },
  { label: "Regular", detail: "10 min a day", xp: 40, active: true },
  { label: "Serious", detail: "20 min a day", xp: 80 },
  { label: "Intense", detail: "30 min a day", xp: 120 },
];

function DailyGoal() {
  return (
    <AppShell title="Daily goal">
      <div className="mx-auto max-w-xl space-y-5">
        <ScreenTitle title="Today's goal" subtitle="Small wins, every single day." />

        <Panel tone="hero" className="space-y-3">
          <div className="flex items-end justify-between">
            <p className="font-display text-3xl font-extrabold">28 / 40 XP</p>
            <span className="text-4xl">🎯</span>
          </div>
          <ProgressBar value={70} tone="accent" className="bg-white/25" />
          <p className="text-xs opacity-90">One more lesson finishes today's goal.</p>
        </Panel>

        <AvatarSpeech contextKey="goal" />

        <div className="grid gap-3">
          {goals.map((g) => (
            <Panel
              key={g.label}
              className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 ${g.active ? "border-primary bg-primary/8" : ""}`}
            >
              <div className="min-w-0">
                <p className="font-display font-extrabold">{g.label}</p>
                <p className="text-xs text-muted-foreground">{g.detail}</p>
              </div>
              <Chip tone={g.active ? "primary" : "muted"}>{g.active ? "Current" : `${g.xp} XP`}</Chip>
            </Panel>
          ))}
        </div>

        <Link to="/">
          <PlayButton size="block">Save goal</PlayButton>
        </Link>
      </div>
    </AppShell>
  );
}