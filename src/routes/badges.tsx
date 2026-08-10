import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Panel, Chip, ProgressBar, ScreenTitle } from "@/components/kit";
import { badges } from "@/data/curriculum";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/badges")({
  head: () => ({
    meta: [
      { title: "Badges — Questly" },
      { name: "description", content: "Collect badges for streaks, perfect quizzes and learning milestones." },
      { property: "og:title", content: "Badges — Questly" },
      { property: "og:description", content: "Collect badges for streaks, quizzes and milestones." },
    ],
  }),
  component: BadgesPage,
});

function BadgesPage() {
  const earned = badges.filter((b) => b.earned).length;
  return (
    <AppShell title="Badges">
      <div className="mx-auto max-w-xl space-y-5">
        <ScreenTitle title="Badge case" subtitle={`${earned} of ${badges.length} collected`} />
        <ProgressBar value={(earned / badges.length) * 100} tone="accent" />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {badges.map((b) => (
            <Panel key={b.id} className={cn("text-center", !b.earned && "bg-muted opacity-70")}>
              <span className={cn("inline-block text-4xl", !b.earned && "grayscale")}>{b.emoji}</span>
              <p className="mt-2 font-display text-sm font-extrabold">{b.name}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{b.hint}</p>
              <Chip tone={b.earned ? "primary" : "muted"} className="mt-2">
                {b.earned ? "Earned" : "Locked"}
              </Chip>
            </Panel>
          ))}
        </div>
      </div>
    </AppShell>
  );
}