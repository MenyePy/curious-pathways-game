import { getCharacter, dialogue, type Expression } from "@/data/avatars";
import { cn } from "@/lib/utils";

type Props = {
  /** Content key from the dialogue table (admin-authored later). */
  contextKey?: keyof typeof dialogue | string;
  /** Overrides, used by screens that preview specific states. */
  characterId?: string;
  expression?: Expression;
  text?: string;
  side?: "left" | "right";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const accentRing: Record<string, string> = {
  primary: "bg-primary/15 ring-primary/40",
  secondary: "bg-secondary/15 ring-secondary/40",
  accent: "bg-accent/25 ring-accent/50",
  grape: "bg-grape/15 ring-grape/40",
};

export function AvatarSpeech({
  contextKey,
  characterId,
  expression,
  text,
  side = "left",
  size = "md",
  className,
}: Props) {
  const line = contextKey ? dialogue[contextKey] : undefined;
  const character = getCharacter(characterId ?? line?.characterId ?? "mila");
  const face = character.emoji[expression ?? line?.expression ?? "happy"];
  const body = text ?? line?.text ?? "…";

  return (
    <div
      className={cn(
        "flex items-end gap-3 bounce-in",
        side === "right" && "flex-row-reverse",
        className,
      )}
    >
      <div
        className={cn(
          "float-soft grid shrink-0 place-items-center rounded-full ring-4",
          accentRing[character.accent],
          size === "sm" && "h-12 w-12 text-2xl",
          size === "md" && "h-16 w-16 text-3xl",
          size === "lg" && "h-24 w-24 text-5xl",
        )}
        aria-hidden
      >
        {face}
      </div>
      <div className="relative min-w-0 rounded-3xl border-2 border-border bg-card px-4 py-3">
        <p className="text-xs font-bold text-muted-foreground">
          {character.name} · {character.role}
        </p>
        <p className="mt-0.5 font-display text-base leading-snug font-bold">{body}</p>
        <span
          className={cn(
            "absolute bottom-3 h-3 w-3 rotate-45 border-border bg-card",
            side === "left" ? "-left-[7px] border-b-2 border-l-2" : "-right-[7px] border-t-2 border-r-2",
          )}
        />
      </div>
    </div>
  );
}