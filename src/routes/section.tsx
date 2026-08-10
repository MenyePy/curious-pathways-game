import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { AvatarSpeech } from "@/components/AvatarSpeech";
import { LearningPath } from "@/components/LearningPath";
import { Panel, Chip, ProgressBar, PlayButton, ScreenTitle } from "@/components/kit";
import { sections } from "@/data/curriculum";

export const Route = createFileRoute("/section")({
  head: () => ({
    meta: [
      { title: "Section 1: Number Basics — Questly" },
      { name: "description", content: "Work through the Number Basics section: lessons, videos, quiz and a boss level." },
      { property: "og:title", content: "Section 1: Number Basics — Questly" },
      { property: "og:description", content: "Lessons, videos, a quiz and a boss level." },
    ],
  }),
  component: SectionPage,
});

function SectionPage() {
  const s = sections[0]!;
  return (
    <AppShell title="Section 1">
      <div className="mx-auto max-w-md space-y-6 lg:max-w-2xl">
        <ScreenTitle title={s.title} subtitle={s.subtitle} />
        <Panel tone="muted" className="space-y-2">
          <div className="flex items-center justify-between">
            <Chip tone="primary">{s.progress}% complete</Chip>
            <span className="text-xs font-bold text-muted-foreground">3 of 6 steps</span>
          </div>
          <ProgressBar value={s.progress} />
        </Panel>

        <AvatarSpeech contextKey="section" />

        <Panel className="pt-8 pb-10">
          <LearningPath nodes={s.nodes} />
        </Panel>

        <Link to="/lesson">
          <PlayButton size="block">Jump to next step</PlayButton>
        </Link>
      </div>
    </AppShell>
  );
}