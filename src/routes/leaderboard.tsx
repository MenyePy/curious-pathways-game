import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Panel, Chip, ScreenTitle } from "@/components/kit";
import { leaderboard } from "@/data/curriculum";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Leaderboard — Hivision Academy" },
      { name: "description", content: "Weekly league standings — climb the ranks and reach the next league." },
      { property: "og:title", content: "Leaderboard — Hivision Academy" },
      { property: "og:description", content: "Weekly league standings — climb the ranks." },
    ],
  }),
  component: LeaderboardPage,
});

const medal = ["🥇", "🥈", "🥉"];

function LeaderboardPage() {
  return (
    <AppShell title="Leaderboard">
      <div className="mx-auto max-w-xl space-y-5">
        <ScreenTitle title="Emerald League" subtitle="Top 3 move up · 4 days left" />

        <div className="grid grid-cols-3 items-end gap-3">
          {[1, 0, 2].map((i) => {
            const p = leaderboard[i]!;
            const heights = ["h-24", "h-32", "h-20"];
            return (
              <div key={p.name} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{p.avatar}</span>
                <p className="max-w-full truncate font-display text-sm font-bold">{p.name}</p>
                <div
                  className={cn(
                    "grid w-full place-items-center rounded-t-2xl text-2xl",
                    heights[i === 0 ? 1 : i === 1 ? 0 : 2],
                    i === 0 ? "[background:var(--gradient-gold)]" : "bg-muted",
                  )}
                >
                  {medal[p.rank - 1]}
                </div>
              </div>
            );
          })}
        </div>

        <Panel className="divide-y-2 divide-border p-0">
          {leaderboard.map((p) => (
            <div
              key={p.name}
              className={cn(
                "grid grid-cols-[auto_auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3",
                p.me && "rounded-3xl bg-primary/10",
              )}
            >
              <span className="w-6 text-center font-display font-extrabold text-muted-foreground">{p.rank}</span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-muted text-xl">{p.avatar}</span>
              <p className={cn("truncate font-display font-bold", p.me && "text-primary-deep")}>{p.name}</p>
              <Chip tone={p.me ? "primary" : "muted"}>💎 {p.points.toLocaleString()}</Chip>
            </div>
          ))}
        </Panel>
      </div>
    </AppShell>
  );
}