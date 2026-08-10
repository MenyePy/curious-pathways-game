import { createFileRoute, Link } from "@tanstack/react-router";
import { AvatarSpeech } from "@/components/AvatarSpeech";
import { Panel, PlayButton, Chip } from "@/components/kit";

export const Route = createFileRoute("/quiz-result")({
  head: () => ({
    meta: [
      { title: "Quiz results — Questly" },
      { name: "description", content: "See your score, gems earned and accuracy after finishing a quiz." },
      { property: "og:title", content: "Quiz results — Questly" },
      { property: "og:description", content: "Score, gems earned and accuracy after every quiz." },
    ],
  }),
  component: QuizResult,
});

const stats = [
  { label: "Score", value: "4/5", emoji: "🎯" },
  { label: "Gems", value: "+35", emoji: "💎" },
  { label: "Time", value: "1:52", emoji: "⏱️" },
];

function QuizResult() {
  return (
    <div className="grid min-h-screen place-items-center px-4 py-10 [background:var(--gradient-hero)]">
      <div className="bounce-in w-full max-w-sm space-y-5">
        <div className="text-center text-primary-foreground">
          <span className="float-soft inline-block text-7xl">🏅</span>
          <h1 className="mt-3 text-3xl">Lesson complete!</h1>
          <p className="mt-1 text-sm opacity-90">Number Basics · Practice run</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <Panel key={s.label} className="text-center">
              <p className="text-2xl">{s.emoji}</p>
              <p className="mt-1 font-display text-lg font-extrabold">{s.value}</p>
              <p className="text-[11px] font-bold text-muted-foreground">{s.label}</p>
            </Panel>
          ))}
        </div>

        <AvatarSpeech contextKey="quiz_result" />

        <Panel tone="gold" className="flex items-center gap-3">
          <span className="text-3xl">🔥</span>
          <div>
            <p className="font-display font-extrabold">Streak extended to 8 days</p>
            <p className="text-xs opacity-80">Daily goal complete</p>
          </div>
        </Panel>

        <div className="flex flex-wrap gap-2">
          <Chip tone="primary">+1 badge progress</Chip>
          <Chip tone="secondary">Rank #3</Chip>
        </div>

        <Link to="/">
          <PlayButton variant="gold" size="block">
            Back to path
          </PlayButton>
        </Link>
      </div>
    </div>
  );
}