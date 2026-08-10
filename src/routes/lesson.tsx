import { createFileRoute, Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { AvatarSpeech } from "@/components/AvatarSpeech";
import { Panel, PlayButton, ProgressBar, Chip } from "@/components/kit";

export const Route = createFileRoute("/lesson")({
  head: () => ({
    meta: [
      { title: "Lesson: Place value — Questly" },
      { name: "description", content: "A short, guided lesson step with worked examples and your guide avatar." },
      { property: "og:title", content: "Lesson: Place value — Questly" },
      { property: "og:description", content: "A short, guided lesson step with worked examples." },
    ],
  }),
  component: LessonPage,
});

function LessonPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-4">
        <Link to="/section" aria-label="Exit lesson" className="text-muted-foreground">
          <X className="h-6 w-6" />
        </Link>
        <ProgressBar value={40} />
        <Chip tone="accent">❤️ 5</Chip>
      </header>

      <main className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-4">
        <Chip tone="primary">Step 2 of 5</Chip>
        <h1 className="text-2xl">What does each digit mean?</h1>

        <AvatarSpeech contextKey="lesson" />

        <Panel className="space-y-4">
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { d: "3", l: "Hundreds", v: "300" },
              { d: "4", l: "Tens", v: "40" },
              { d: "7", l: "Ones", v: "7" },
            ].map((c) => (
              <div key={c.l} className="rounded-2xl bg-muted p-4">
                <p className="font-display text-4xl font-extrabold text-primary-deep">{c.d}</p>
                <p className="mt-1 text-xs font-bold text-muted-foreground">{c.l}</p>
                <p className="font-display text-sm font-bold">{c.v}</p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            In <strong className="text-foreground">347</strong>, every digit has a job. Add the values together and you
            get the whole number back: 300 + 40 + 7.
          </p>
        </Panel>

        <Panel tone="muted">
          <p className="font-display font-bold">Try it</p>
          <p className="mt-1 text-sm text-muted-foreground">What is the value of the 5 in 852?</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["5", "50", "500"].map((o) => (
              <button
                key={o}
                className="chunky rounded-2xl border-2 border-border bg-card py-3 font-display font-bold"
              >
                {o}
              </button>
            ))}
          </div>
        </Panel>
      </main>

      <footer className="sticky bottom-0 border-t-2 border-border bg-card px-4 py-4">
        <div className="mx-auto flex max-w-xl gap-3">
          <PlayButton variant="ghost" size="md">
            Hint
          </PlayButton>
          <Link to="/quiz" className="flex-1">
            <PlayButton size="block">Continue</PlayButton>
          </Link>
        </div>
      </footer>
    </div>
  );
}