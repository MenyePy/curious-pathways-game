import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Panel, Chip, PlayButton, ScreenTitle } from "@/components/kit";
import { playSound } from "@/lib/sound";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications — Hivision Academy" },
      { name: "description", content: "Streak reminders, friend activity, event invites and reward alerts." },
      { property: "og:title", content: "Notifications — Hivision Academy" },
      { property: "og:description", content: "Streak reminders, friend activity and reward alerts." },
    ],
  }),
  component: NotificationsPage,
});

const initial = [
  { id: 1, emoji: "🔥", title: "Keep your 7 day streak!", body: "Finish one lesson before midnight.", time: "2m", unread: true, tone: "accent" as const },
  { id: 2, emoji: "🏆", title: "You moved up to #4", body: "Ruby Division ends in 2 days.", time: "1h", unread: true, tone: "primary" as const },
  { id: 3, emoji: "👥", title: "Sam sent you a challenge", body: "Beat 200 gems this week.", time: "3h", unread: true, tone: "grape" as const },
  { id: 4, emoji: "🎖️", title: "New badge unlocked", body: "Place Value Pro is now yours.", time: "Yesterday", unread: false, tone: "secondary" as const },
  { id: 5, emoji: "💎", title: "Shop restocked", body: "Guide outfits are back in the shop.", time: "2d", unread: false, tone: "muted" as const },
];

const prefs = [
  { label: "Streak reminders", detail: "Daily nudge at 17:00", on: true },
  { label: "Friend activity", detail: "Challenges and cheers", on: true },
  { label: "Event invites", detail: "Limited-time quests", on: true },
  { label: "Push sounds", detail: "Play a chime on arrival", on: true },
];

function NotificationsPage() {
  const [items, setItems] = useState(initial);

  return (
    <AppShell title="Notifications">
      <div className="mx-auto max-w-xl space-y-5">
        <ScreenTitle title="Notifications" subtitle="Everything that happened while you were away." />

        <div className="flex items-center justify-between">
          <Chip tone="primary">{items.filter((i) => i.unread).length} unread</Chip>
          <PlayButton
            size="sm"
            variant="ghost"
            onClick={() => {
              setItems((prev) => prev.map((i) => ({ ...i, unread: false })));
              playSound("tap");
            }}
          >
            Mark all read
          </PlayButton>
        </div>

        <div className="space-y-3">
          {items.map((n) => (
            <button
              key={n.id}
              onClick={() => {
                setItems((prev) => prev.map((i) => (i.id === n.id ? { ...i, unread: false } : i)));
                playSound("notify");
              }}
              className={cn(
                "chunky grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 rounded-3xl border-2 bg-card px-4 py-4 text-left",
                n.unread ? "border-primary/40 bg-primary/8" : "border-border",
              )}
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-muted text-xl">{n.emoji}</span>
              <span className="min-w-0">
                <span className="block truncate font-display font-extrabold">{n.title}</span>
                <span className="block truncate text-xs text-muted-foreground">{n.body}</span>
              </span>
              <span className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
                {n.time}
                {n.unread ? <span className="h-2.5 w-2.5 rounded-full bg-primary" /> : null}
              </span>
            </button>
          ))}
        </div>

        <Panel className="divide-y-2 divide-border p-0">
          <p className="px-5 py-3 font-display font-extrabold">Notification settings</p>
          {prefs.map((t) => (
            <div key={t.label} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-4">
              <div className="min-w-0">
                <p className="truncate font-display font-bold">{t.label}</p>
                <p className="truncate text-xs text-muted-foreground">{t.detail}</p>
              </div>
              <span className={cn("flex h-7 w-12 items-center rounded-full p-1", t.on ? "justify-end bg-primary" : "justify-start bg-muted")}>
                <span className="h-5 w-5 rounded-full bg-card" />
              </span>
            </div>
          ))}
        </Panel>
      </div>
    </AppShell>
  );
}