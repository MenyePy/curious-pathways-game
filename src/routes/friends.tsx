import { createFileRoute } from "@tanstack/react-router";
import { UserPlus, Search } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { AvatarSpeech } from "@/components/AvatarSpeech";
import { Panel, Chip, PlayButton, ScreenTitle } from "@/components/kit";

export const Route = createFileRoute("/friends")({
  head: () => ({
    meta: [
      { title: "Friends — Hivision Academy" },
      { name: "description", content: "Follow friends, compare streaks and cheer each other on." },
      { property: "og:title", content: "Friends — Hivision Academy" },
      { property: "og:description", content: "Follow friends, compare streaks and cheer each other on." },
    ],
  }),
  component: FriendsPage,
});

const friends = [
  { name: "Zara", avatar: "🦊", streak: 21, status: "Studying now" },
  { name: "Kabelo", avatar: "🐨", streak: 14, status: "Finished today" },
  { name: "Ama", avatar: "🤖", streak: 3, status: "Needs a nudge" },
];

const requests = [{ name: "Nikhil", avatar: "🐼" }];

function FriendsPage() {
  return (
    <AppShell title="Friends">
      <div className="mx-auto max-w-xl space-y-5">
        <ScreenTitle title="Your crew" subtitle="3 friends · 1 request" />

        <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-2">
          <div className="flex items-center gap-2 rounded-2xl border-2 border-border bg-card px-4">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              placeholder="Find friends by username"
              className="h-12 w-full bg-transparent text-sm font-semibold outline-none"
            />
          </div>
          <PlayButton size="md">
            <UserPlus className="h-4 w-4" /> Add
          </PlayButton>
        </div>

        <AvatarSpeech contextKey="friends" />

        <Panel className="space-y-3">
          <p className="font-display font-bold">Requests</p>
          {requests.map((r) => (
            <div key={r.name} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-muted text-xl">{r.avatar}</span>
              <p className="truncate font-display font-bold">{r.name}</p>
              <PlayButton size="sm">Accept</PlayButton>
            </div>
          ))}
        </Panel>

        <div className="space-y-3">
          {friends.map((f) => (
            <Panel key={f.name} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary/15 text-2xl">
                {f.avatar}
              </span>
              <div className="min-w-0">
                <p className="truncate font-display font-extrabold">{f.name}</p>
                <p className="truncate text-xs text-muted-foreground">{f.status}</p>
              </div>
              <Chip tone="accent">🔥 {f.streak}</Chip>
            </Panel>
          ))}
        </div>
      </div>
    </AppShell>
  );
}