import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { AvatarSpeech } from "@/components/AvatarSpeech";
import { Field } from "@/components/AuthLayout";
import { Panel, Chip, PlayButton, ScreenTitle } from "@/components/kit";
import { characters, type Expression } from "@/data/avatars";

export const Route = createFileRoute("/admin/editor")({
  head: () => ({
    meta: [
      { title: "Content editor — Hivision Academy Admin" },
      { name: "description", content: "Author lesson steps and configure avatar dialogue, expressions and characters." },
      { property: "og:title", content: "Content editor — Hivision Academy Admin" },
      { property: "og:description", content: "Author lesson steps and configure avatar dialogue." },
    ],
  }),
  component: ContentEditor,
});

const expressions: Expression[] = ["happy", "cheer", "think", "oops", "wave", "sleepy"];

const blocks = [
  { type: "Text", label: "Intro paragraph", emoji: "📝" },
  { type: "Video", label: "Bigger or smaller (2:14)", emoji: "🎬" },
  { type: "Avatar", label: "Encouragement line", emoji: "💬" },
  { type: "Quiz", label: "Multiple choice · 4 options", emoji: "❓" },
];

function ContentEditor() {
  const [characterId, setCharacterId] = useState("bolt");
  const [expression, setExpression] = useState<Expression>("cheer");
  const [text, setText] = useState("Great job! Let's keep going!");

  return (
    <AppShell title="Content editor" showStats={false}>
      <div className="mx-auto max-w-5xl space-y-5">
        <ScreenTitle title="Lesson editor" subtitle="Section 1 · Step 4 · Practice run" />

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-4">
            <Panel className="space-y-3">
              <Field label="Lesson title" placeholder="Place value" />
              <div className="flex flex-wrap gap-2">
                <Chip tone="primary">Maths</Chip>
                <Chip tone="secondary">Ages 8–10</Chip>
                <Chip tone="accent">Draft</Chip>
              </div>
            </Panel>

            <Panel className="space-y-3">
              <p className="font-display font-bold">Blocks</p>
              {blocks.map((b) => (
                <div
                  key={b.label}
                  className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl bg-muted p-4"
                >
                  <span className="text-2xl">{b.emoji}</span>
                  <div className="min-w-0">
                    <p className="truncate font-display font-bold">{b.type}</p>
                    <p className="truncate text-xs text-muted-foreground">{b.label}</p>
                  </div>
                  <Chip>Edit</Chip>
                </div>
              ))}
              <PlayButton size="sm" variant="ghost">
                + Add block
              </PlayButton>
            </Panel>
          </div>

          <div className="space-y-4">
            <Panel className="space-y-4">
              <p className="font-display font-bold">Avatar block</p>

              <div>
                <span className="mb-2 block font-display text-xs font-bold text-muted-foreground uppercase">
                  Character
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {characters.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setCharacterId(c.id)}
                      className={`chunky grid place-items-center rounded-2xl border-2 py-2 ${c.id === characterId ? "border-primary bg-primary/10" : "border-border bg-card"}`}
                    >
                      <span className="text-xl">{c.emoji.happy}</span>
                      <span className="mt-0.5 font-display text-[10px] font-bold">{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="mb-2 block font-display text-xs font-bold text-muted-foreground uppercase">
                  Expression
                </span>
                <div className="flex flex-wrap gap-2">
                  {expressions.map((e) => (
                    <button
                      key={e}
                      onClick={() => setExpression(e)}
                      className={`rounded-full px-3 py-1.5 font-display text-xs font-bold ${e === expression ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>

              <label className="block">
                <span className="mb-1.5 block font-display text-xs font-bold text-muted-foreground uppercase">
                  Dialogue
                </span>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={3}
                  className="w-full rounded-2xl border-2 border-border bg-card px-4 py-3 text-sm font-semibold outline-none focus:border-primary focus:ring-4 focus:ring-primary/20"
                />
              </label>
            </Panel>

            <Panel tone="muted" className="space-y-3">
              <p className="font-display font-bold">Live preview</p>
              <AvatarSpeech characterId={characterId} expression={expression} text={text} size="sm" />
            </Panel>

            <div className="flex gap-3">
              <PlayButton variant="ghost" size="md">
                Save draft
              </PlayButton>
              <PlayButton size="md">Publish</PlayButton>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}