import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Panel, Chip, ProgressBar, PlayButton, ScreenTitle } from "@/components/kit";
import { sections } from "@/data/curriculum";

export const Route = createFileRoute("/course")({
  head: () => ({
    meta: [
      { title: "Course map — Hivision Academy" },
      { name: "description", content: "See every section of the course and track how far you've travelled." },
      { property: "og:title", content: "Course map — Hivision Academy" },
      { property: "og:description", content: "See every section and track your progress." },
    ],
  }),
  component: CoursePage,
});

const tone = { primary: "primary", secondary: "secondary", accent: "accent", grape: "grape" } as const;

function CoursePage() {
  return (
    <AppShell title="Course">
      <div className="mx-auto max-w-2xl">
        <ScreenTitle title="Maths Adventure" subtitle="3 sections · 11 lessons · Ages 8–10" />
        <Panel tone="gold" className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-lg font-extrabold">21% complete</p>
            <p className="text-xs opacity-80">Keep going to unlock Section 2</p>
          </div>
          <span className="text-4xl">🗺️</span>
        </Panel>

        <div className="space-y-4">
          {sections.map((s, i) => (
            <Panel key={s.id} className="space-y-3">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <div className="min-w-0">
                  <Chip tone={tone[s.color]}>Section {i + 1}</Chip>
                  <h3 className="mt-2 truncate text-lg">{s.title}</h3>
                  <p className="truncate text-xs text-muted-foreground">{s.subtitle}</p>
                </div>
                <span className="text-3xl">{i === 0 ? "🔢" : i === 1 ? "➕" : "🔷"}</span>
              </div>
              <ProgressBar value={s.progress} tone={s.color === "grape" ? "secondary" : s.color} />
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-muted-foreground">
                  {s.nodes.length} steps · {s.progress}%
                </span>
                <Link to="/section">
                  <PlayButton size="sm" variant={s.progress > 0 ? "primary" : "ghost"}>
                    {s.progress > 0 ? "Continue" : "Locked"}
                  </PlayButton>
                </Link>
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </AppShell>
  );
}