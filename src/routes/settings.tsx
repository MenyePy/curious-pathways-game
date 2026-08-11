import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Panel, Chip, PlayButton, ScreenTitle } from "@/components/kit";
import { characters } from "@/data/avatars";
import { playSound, setSoundEnabled, soundEnabled } from "@/lib/sound";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Hivision Academy" },
      { name: "description", content: "Manage notifications, sound, accessibility and your guide avatar." },
      { property: "og:title", content: "Settings — Hivision Academy" },
      { property: "og:description", content: "Notifications, sound, accessibility and avatar options." },
    ],
  }),
  component: SettingsPage,
});

const toggles = [
  { label: "Daily reminder", detail: "Nudge me at 17:00", on: true },
  { label: "Avatar speech", detail: "Guide talks during lessons", on: true },
  { label: "Reduced motion", detail: "Fewer animations", on: false },
];

function SettingsPage() {
  const [sound, setSound] = useState(true);
  useEffect(() => setSound(soundEnabled()), []);

  return (
    <AppShell title="Settings">
      <div className="mx-auto max-w-xl space-y-5">
        <ScreenTitle title="Settings" subtitle="Tune the experience to suit the learner." />

        <Panel className="space-y-3">
          <p className="font-display font-bold">Your guide</p>
          <div className="grid grid-cols-4 gap-2">
            {characters.map((c, i) => (
              <button
                key={c.id}
                className={`chunky grid place-items-center rounded-2xl border-2 py-3 ${i === 0 ? "border-primary bg-primary/10" : "border-border bg-card"}`}
              >
                <span className="text-2xl">{c.emoji.happy}</span>
                <span className="mt-1 font-display text-[11px] font-bold">{c.name}</span>
              </button>
            ))}
          </div>
        </Panel>

        <Panel className="divide-y-2 divide-border p-0">
          <button
            type="button"
            onClick={() => {
              const next = !sound;
              setSound(next);
              setSoundEnabled(next);
              if (next) playSound("correct");
            }}
            className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-4 text-left"
          >
            <span className="min-w-0">
              <span className="block truncate font-display font-bold">Sound effects</span>
              <span className="block truncate text-xs text-muted-foreground">Clicks, chimes and answer feedback</span>
            </span>
            <span
              className={`flex h-7 w-12 items-center rounded-full p-1 ${sound ? "justify-end bg-primary" : "justify-start bg-muted"}`}
            >
              <span className="h-5 w-5 rounded-full bg-card" />
            </span>
          </button>
          {toggles.map((t) => (
            <div key={t.label} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-4">
              <div className="min-w-0">
                <p className="truncate font-display font-bold">{t.label}</p>
                <p className="truncate text-xs text-muted-foreground">{t.detail}</p>
              </div>
              <span
                className={`flex h-7 w-12 items-center rounded-full p-1 ${t.on ? "justify-end bg-primary" : "justify-start bg-muted"}`}
              >
                <span className="h-5 w-5 rounded-full bg-card" />
              </span>
            </div>
          ))}
        </Panel>

        <Panel tone="muted" className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="min-w-0">
            <p className="font-display font-bold">Parent / admin area</p>
            <p className="text-xs text-muted-foreground">Manage content and learners</p>
          </div>
          <Link to="/admin">
            <Chip tone="grape">Open</Chip>
          </Link>
        </Panel>

        <PlayButton variant="danger" size="block">
          Log out
        </PlayButton>
      </div>
    </AppShell>
  );
}