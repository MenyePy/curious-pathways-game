import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { AvatarSpeech } from "@/components/AvatarSpeech";
import { PlayButton, ProgressBar, Chip } from "@/components/kit";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Quiz — Hivision Academy" },
      { name: "description", content: "Answer quick questions and get instant feedback from your guide avatar." },
      { property: "og:title", content: "Quiz — Hivision Academy" },
      { property: "og:description", content: "Quick questions with instant avatar feedback." },
    ],
  }),
  component: QuizPage,
});

const options = ["4 tens", "4 hundreds", "4 ones", "40 hundreds"];
const correct = "4 tens";

function QuizPage() {
  const [picked, setPicked] = useState<string | null>(null);
  const checked = picked !== null;
  const isRight = picked === correct;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-4">
        <Link to="/section" aria-label="Exit quiz" className="text-muted-foreground">
          <X className="h-6 w-6" />
        </Link>
        <ProgressBar value={60} />
        <Chip tone="accent">❤️ 4</Chip>
      </header>

      <main className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-4">
        <Chip tone="primary">Question 3 of 5</Chip>
        <h1 className="text-2xl">What does the 4 mean in 347?</h1>

        <div className="grid gap-3">
          {options.map((o) => {
            const state = !checked ? "idle" : o === correct ? "right" : o === picked ? "wrong" : "idle";
            return (
              <button
                key={o}
                onClick={() => setPicked(o)}
                className={cn(
                  "chunky rounded-2xl border-2 bg-card px-5 py-4 text-left font-display font-bold",
                  state === "idle" && "border-border",
                  state === "right" && "border-primary bg-primary/12 text-primary-deep",
                  state === "wrong" && "border-destructive bg-destructive/10 text-destructive-deep",
                )}
              >
                {o}
              </button>
            );
          })}
        </div>
      </main>

      <footer
        className={cn(
          "sticky bottom-0 space-y-4 border-t-2 px-4 py-4",
          !checked && "border-border bg-card",
          checked && isRight && "border-primary/30 bg-primary/10",
          checked && !isRight && "border-destructive/30 bg-destructive/10",
        )}
      >
        <div className="mx-auto max-w-xl space-y-4">
          {checked ? <AvatarSpeech contextKey={isRight ? "quiz_correct" : "quiz_wrong"} size="sm" /> : null}
          {checked ? (
            <Link to="/quiz-result">
              <PlayButton size="block" variant={isRight ? "primary" : "danger"}>
                Continue
              </PlayButton>
            </Link>
          ) : (
            <PlayButton size="block" variant="ghost" disabled>
              Pick an answer
            </PlayButton>
          )}
        </div>
      </footer>
    </div>
  );
}