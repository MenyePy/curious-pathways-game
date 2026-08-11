import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Panel, Chip, ProgressBar, PlayButton, ScreenTitle } from "@/components/kit";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & challenges — Hivision Academy" },
      { name: "description", content: "Limited-time challenges, weekend quests and seasonal events." },
      { property: "og:title", content: "Events & challenges — Hivision Academy" },
      { property: "og:description", content: "Limited-time challenges and seasonal quests." },
    ],
  }),
  component: EventsPage,
});

const events = [
  { name: "Weekend Sprint", emoji: "⚡", desc: "Finish 6 lessons before Sunday", progress: 50, ends: "2 days left" },
  { name: "Number Festival", emoji: "🎪", desc: "Double gems on all maths lessons", progress: 20, ends: "5 days left" },
  { name: "Friend Duel", emoji: "⚔️", desc: "Out-learn Zara this week", progress: 80, ends: "4 days left" },
];

function EventsPage() {
  return (
    <AppShell title="Events">
      <div className="mx-auto max-w-xl space-y-5">
        <ScreenTitle title="Live events" subtitle="Limited-time quests with bonus rewards." />

        <Panel tone="hero" className="flex items-center gap-4">
          <span className="float-soft text-5xl">🎪</span>
          <div>
            <p className="font-display text-xl font-extrabold">Number Festival</p>
            <p className="text-xs opacity-90">Double gems all week long</p>
          </div>
        </Panel>

        <div className="space-y-3">
          {events.map((e) => (
            <Panel key={e.name} className="space-y-3">
              <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
                <span className="text-3xl">{e.emoji}</span>
                <div className="min-w-0">
                  <p className="truncate font-display font-extrabold">{e.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{e.desc}</p>
                </div>
                <Chip tone="accent">{e.ends}</Chip>
              </div>
              <ProgressBar value={e.progress} tone="secondary" />
              <PlayButton size="sm" variant="secondary">
                Join event
              </PlayButton>
            </Panel>
          ))}
        </div>
      </div>
    </AppShell>
  );
}