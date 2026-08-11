import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Panel, Chip, ProgressBar, PlayButton } from "@/components/kit";
import { badges } from "@/data/curriculum";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Your profile — Hivision Academy" },
      { name: "description", content: "Your level, gems, streak, badges and learning stats in one place." },
      { property: "og:title", content: "Your profile — Hivision Academy" },
      { property: "og:description", content: "Level, gems, streak, badges and learning stats." },
    ],
  }),
  component: ProfilePage,
});

const stats = [
  { label: "Day streak", value: "7", emoji: "🔥" },
  { label: "Total gems", value: "1,240", emoji: "💎" },
  { label: "Lessons", value: "34", emoji: "📚" },
  { label: "Accuracy", value: "88%", emoji: "🎯" },
];

function ProfilePage() {
  return (
    <AppShell title="Profile">
      <div className="mx-auto max-w-xl space-y-5">
        <Panel tone="hero" className="flex items-center gap-4">
          <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-white/25 text-4xl">🙂</span>
          <div className="min-w-0">
            <h1 className="truncate text-2xl">Space Cadet</h1>
            <p className="text-xs opacity-90">Joined March 2026 · Level 8</p>
            <div className="mt-2">
              <ProgressBar value={64} tone="accent" className="bg-white/25" />
              <p className="mt-1 text-[11px] opacity-90">360 / 560 XP to Level 9</p>
            </div>
          </div>
        </Panel>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <Panel key={s.label} className="text-center">
              <p className="text-2xl">{s.emoji}</p>
              <p className="mt-1 font-display text-xl font-extrabold">{s.value}</p>
              <p className="text-[11px] font-bold text-muted-foreground">{s.label}</p>
            </Panel>
          ))}
        </div>

        <Panel className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg">Badges</h2>
            <Link to="/badges" className="text-xs font-bold text-primary-deep underline">
              View all
            </Link>
          </div>
          <div className="flex gap-3">
            {badges.slice(0, 4).map((b) => (
              <div key={b.id} className="flex flex-col items-center gap-1">
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl text-2xl ${b.earned ? "bg-accent/25" : "bg-muted opacity-50"}`}
                >
                  {b.emoji}
                </span>
                <span className="text-[10px] font-bold text-muted-foreground">{b.name}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel tone="muted" className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="min-w-0">
            <p className="font-display font-extrabold">Guide: Mila</p>
            <p className="text-xs text-muted-foreground">Change your avatar companion any time.</p>
          </div>
          <Chip tone="primary">👩‍🏫 Active</Chip>
        </Panel>

        <Link to="/settings">
          <PlayButton variant="ghost" size="block">
            Edit profile
          </PlayButton>
        </Link>
      </div>
    </AppShell>
  );
}