import { createFileRoute, Link } from "@tanstack/react-router";
import { X, Play, Volume2, Captions } from "lucide-react";
import { AvatarSpeech } from "@/components/AvatarSpeech";
import { Panel, PlayButton, ProgressBar, Chip } from "@/components/kit";

export const Route = createFileRoute("/lesson-video")({
  head: () => ({
    meta: [
      { title: "Video lesson — Hivision Academy" },
      { name: "description", content: "Watch a short video lesson with captions, transcript and guide commentary." },
      { property: "og:title", content: "Video lesson — Hivision Academy" },
      { property: "og:description", content: "Short video lessons with captions and transcript." },
    ],
  }),
  component: VideoLesson,
});

function VideoLesson() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-4">
        <Link to="/section" aria-label="Exit lesson" className="text-muted-foreground">
          <X className="h-6 w-6" />
        </Link>
        <ProgressBar value={25} tone="secondary" />
        <Chip tone="secondary">2:14</Chip>
      </header>

      <main className="mx-auto w-full max-w-xl flex-1 space-y-5 px-4 py-2">
        <div className="relative aspect-video overflow-hidden rounded-3xl [background:var(--gradient-hero)]">
          <div className="absolute inset-0 grid place-items-center">
            <button
              aria-label="Play video"
              className="chunky grid h-20 w-20 place-items-center rounded-full bg-card text-primary-deep"
            >
              <Play className="h-9 w-9" />
            </button>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-black/25 px-4 py-3 text-primary-foreground">
            <Volume2 className="h-5 w-5 shrink-0" />
            <div className="h-1.5 flex-1 rounded-full bg-white/30">
              <div className="h-full w-1/3 rounded-full bg-white" />
            </div>
            <Captions className="h-5 w-5 shrink-0" />
          </div>
        </div>

        <h1 className="text-2xl">Bigger or smaller?</h1>
        <AvatarSpeech characterId="nova" expression="think" text="Watch how the numbers line up — then pause and guess." />

        <Panel tone="muted" className="space-y-2">
          <p className="font-display font-bold">Transcript</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            "When we compare two numbers, we start from the left. The first digit that differs tells us which number is
            bigger…"
          </p>
        </Panel>
      </main>

      <footer className="sticky bottom-0 border-t-2 border-border bg-card px-4 py-4">
        <div className="mx-auto max-w-xl">
          <Link to="/quiz">
            <PlayButton variant="secondary" size="block">
              I've watched it
            </PlayButton>
          </Link>
        </div>
      </footer>
    </div>
  );
}