import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Panel, Chip, ProgressBar, PlayButton, ScreenTitle } from "@/components/kit";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Admin dashboard — Hivision Academy" },
      { name: "description", content: "Overview of learners, content health and engagement for course admins." },
      { property: "og:title", content: "Admin dashboard — Hivision Academy" },
      { property: "og:description", content: "Learners, content health and engagement at a glance." },
    ],
  }),
  component: AdminDashboard,
});

const kpis = [
  { label: "Active learners", value: "1,284", delta: "+8%" },
  { label: "Lessons completed", value: "9,410", delta: "+12%" },
  { label: "Avg. streak", value: "5.4 days", delta: "+0.3" },
  { label: "Quiz accuracy", value: "81%", delta: "-2%" },
];

const content = [
  { name: "Number Basics", status: "Published", steps: 6, done: 100 },
  { name: "Adding & Taking Away", status: "Draft", steps: 3, done: 40 },
  { name: "Shapes & Space", status: "Draft", steps: 2, done: 15 },
];

function AdminDashboard() {
  return (
    <AppShell title="Admin" showStats={false}>
      <div className="mx-auto max-w-4xl space-y-5">
        <ScreenTitle title="Admin dashboard" subtitle="Content, learners and engagement." />

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {kpis.map((k) => (
            <Panel key={k.label}>
              <p className="text-xs font-bold text-muted-foreground">{k.label}</p>
              <p className="mt-1 font-display text-2xl font-extrabold">{k.value}</p>
              <Chip tone={k.delta.startsWith("-") ? "muted" : "primary"} className="mt-2">
                {k.delta} this week
              </Chip>
            </Panel>
          ))}
        </div>

        <Panel className="space-y-4">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
            <h2 className="truncate text-lg">Course content</h2>
            <Link to="/admin/editor">
              <PlayButton size="sm" variant="grape">
                New lesson
              </PlayButton>
            </Link>
          </div>
          {content.map((c) => (
            <div key={c.name} className="space-y-2 rounded-2xl bg-muted p-4">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <p className="truncate font-display font-bold">{c.name}</p>
                <Chip tone={c.status === "Published" ? "primary" : "accent"}>{c.status}</Chip>
              </div>
              <ProgressBar value={c.done} />
              <p className="text-xs text-muted-foreground">{c.steps} steps · {c.done}% authored</p>
            </div>
          ))}
        </Panel>

        <Panel tone="muted" className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="min-w-0">
            <p className="font-display font-bold">Avatar dialogue library</p>
            <p className="text-xs text-muted-foreground">42 lines across 4 characters · configurable per lesson</p>
          </div>
          <Link to="/admin/editor">
            <PlayButton size="sm" variant="ghost">
              Manage
            </PlayButton>
          </Link>
        </Panel>
      </div>
    </AppShell>
  );
}