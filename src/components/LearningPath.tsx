import { Link } from "@tanstack/react-router";
import { Check, Lock, Play, Star, Gift, Crown } from "lucide-react";
import type { PathNodeItem } from "@/data/curriculum";
import { cn } from "@/lib/utils";

const kindIcon = {
  lesson: Star,
  video: Play,
  quiz: Check,
  chest: Gift,
  boss: Crown,
};

function nodeLink(node: PathNodeItem) {
  if (node.kind === "video") return "/lesson-video";
  if (node.kind === "quiz") return "/quiz";
  return "/lesson";
}

export function PathNode({ node, offset }: { node: PathNodeItem; offset: number }) {
  const Icon = kindIcon[node.kind];
  const locked = node.state === "locked";
  return (
    <li className="flex flex-col items-center" style={{ transform: `translateX(${offset}px)` }}>
      <Link
        to={locked ? "/section" : nodeLink(node)}
        aria-label={node.title}
        className={cn(
          "chunky grid h-18 w-18 place-items-center rounded-full border-4 border-card",
          node.state === "done" && "bg-primary text-primary-foreground [--chunky-shade:var(--primary-deep)]",
          node.state === "current" &&
            "bg-secondary text-secondary-foreground ring-6 ring-secondary/25 [--chunky-shade:var(--secondary-deep)]",
          locked && "bg-locked text-locked-foreground [--chunky-shade:var(--border)]",
        )}
        style={{ height: 72, width: 72 }}
      >
        {locked ? <Lock className="h-7 w-7" /> : <Icon className="h-8 w-8" />}
      </Link>
      <span
        className={cn(
          "mt-2 max-w-32 text-center font-display text-xs font-bold",
          locked ? "text-locked-foreground" : "text-foreground",
        )}
      >
        {node.title}
      </span>
    </li>
  );
}

const offsets = [0, 56, 84, 40, -32, -72, -40, 24];

export function LearningPath({ nodes }: { nodes: PathNodeItem[] }) {
  return (
    <ol className="flex flex-col items-center gap-2">
      {nodes.map((node, i) => (
        <PathNode key={node.id} node={node} offset={offsets[i % offsets.length] ?? 0} />
      ))}
    </ol>
  );
}