import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AvatarSpeech } from "@/components/AvatarSpeech";
import { Panel, PlayButton, ProgressBar, Chip } from "@/components/kit";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Get started — Questly" },
      { name: "description", content: "Pick your goal, meet your guide and start your first quest." },
      { property: "og:title", content: "Get started — Questly" },
      { property: "og:description", content: "Pick your goal, meet your guide and start your first quest." },
    ],
  }),
  component: Onboarding,
});

const steps = [
  {
    title: "What do you want to learn?",
    options: ["Maths", "Reading", "Science", "Coding"],
  },
  {
    title: "How much time each day?",
    options: ["5 min · Casual", "10 min · Regular", "20 min · Serious", "30 min · Intense"],
  },
  {
    title: "How old is the learner?",
    options: ["5–7", "8–10", "11–13", "14+"],
  },
];

function Onboarding() {
  const [step, setStep] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);
  const current = steps[step]!;

  return (
    <div className="min-h-screen bg-background px-4 py-6">
      <div className="mx-auto flex max-w-md flex-col gap-5">
        <div className="flex items-center gap-3">
          <Chip>{step + 1}/3</Chip>
          <ProgressBar value={((step + 1) / steps.length) * 100} />
        </div>

        <AvatarSpeech contextKey="onboarding" size="lg" />

        <h1 className="text-2xl">{current.title}</h1>

        <div className="grid gap-3">
          {current.options.map((opt) => (
            <button
              key={opt}
              onClick={() => setChoice(opt)}
              className={cn(
                "chunky rounded-2xl border-2 bg-card px-5 py-4 text-left font-display font-bold",
                choice === opt ? "border-primary bg-primary/10 text-primary-deep" : "border-border",
              )}
            >
              {opt}
            </button>
          ))}
        </div>

        {step < steps.length - 1 ? (
          <PlayButton
            size="block"
            disabled={!choice}
            onClick={() => {
              setStep((s) => s + 1);
              setChoice(null);
            }}
          >
            Continue
          </PlayButton>
        ) : (
          <Link to="/register">
            <PlayButton size="block" disabled={!choice}>
              Create my profile
            </PlayButton>
          </Link>
        )}

        <Panel tone="muted" className="text-center text-xs text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-primary-deep underline">
            Log in
          </Link>
        </Panel>
      </div>
    </div>
  );
}