import { createFileRoute, Link } from "@tanstack/react-router";
import { PlayButton } from "@/components/kit";

export const Route = createFileRoute("/splash")({
  head: () => ({
    meta: [
      { title: "Welcome to Questly" },
      { name: "description", content: "Questly is loading your learning journey." },
      { property: "og:title", content: "Welcome to Questly" },
      { property: "og:description", content: "Questly is loading your learning journey." },
    ],
  }),
  component: Splash,
});

function Splash() {
  return (
    <div className="grid min-h-screen place-items-center px-6 text-primary-foreground [background:var(--gradient-hero)]">
      <div className="bounce-in flex flex-col items-center text-center">
        <span className="float-soft grid h-28 w-28 place-items-center rounded-[2rem] bg-white/20 text-6xl">🚀</span>
        <h1 className="mt-6 text-4xl">Questly</h1>
        <p className="mt-2 text-sm opacity-90">Play your way through learning</p>
        <div className="mt-8 h-2.5 w-56 overflow-hidden rounded-full bg-white/25">
          <div className="h-full w-2/3 animate-pulse rounded-full bg-white" />
        </div>
        <p className="mt-3 text-xs opacity-80">Loading your path…</p>
        <Link to="/onboarding" className="mt-10">
          <PlayButton variant="gold">Skip intro</PlayButton>
        </Link>
      </div>
    </div>
  );
}