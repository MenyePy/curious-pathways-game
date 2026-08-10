import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { AvatarSpeech } from "@/components/AvatarSpeech";
import { LearningPath } from "@/components/LearningPath";
import { Panel, Chip, ProgressBar, PlayButton } from "@/components/kit";
import { sections } from "@/data/curriculum";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Learning path — Questly" },
      { name: "description", content: "Follow your learning path, keep your streak alive and unlock the next lesson." },
      { property: "og:title", content: "Learning path — Questly" },
      { property: "og:description", content: "Follow your learning path and unlock the next lesson." },
    ],
  }),
  component: Home,
});

function Home() {
  const active = sections[0]!;
  return (
    <AppShell title="Learning path">
      <div className="mx-auto max-w-md space-y-6 lg:max-w-2xl">
        <Panel tone="hero" className="space-y-3">
          <Chip tone="accent" className="bg-white/25 text-white">
            Section 1 of 3
          </Chip>
          <h1 className="text-2xl">{active.title}</h1>
          <p className="text-sm opacity-90">{active.subtitle}</p>
          <ProgressBar value={active.progress} tone="accent" className="bg-white/25" />
          <Link to="/section">
            <PlayButton variant="gold" size="block" className="mt-2">
              Continue lesson
            </PlayButton>
          </Link>
        </Panel>

        <AvatarSpeech contextKey="home" />

        <Panel className="pt-8 pb-10">
          <LearningPath nodes={active.nodes} />
        </Panel>

        {sections.slice(1).map((s) => (
          <Panel key={s.id} tone="muted" className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <h3 className="truncate text-base">{s.title}</h3>
              <p className="truncate text-xs text-muted-foreground">{s.subtitle}</p>
            </div>
            <Chip>🔒 Locked</Chip>
          </Panel>
        ))}
      </div>
    </AppShell>
  );
}
