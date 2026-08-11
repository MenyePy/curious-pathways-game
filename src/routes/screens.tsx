import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Panel, ScreenTitle, Chip } from "@/components/kit";

export const Route = createFileRoute("/screens")({
  head: () => ({
    meta: [
      { title: "Screen index — Hivision Academy design system" },
      { name: "description", content: "Every design template in the Hivision Academy system: onboarding, lessons, quizzes, social and admin." },
      { property: "og:title", content: "Screen index — Hivision Academy design system" },
      { property: "og:description", content: "Every design template in the Hivision Academy system." },
    ],
  }),
  component: ScreensPage,
});

const groups: { name: string; items: { to: string; label: string; emoji: string }[] }[] = [
  {
    name: "Entry",
    items: [
      { to: "/splash", label: "Splash / loading", emoji: "🚀" },
      { to: "/onboarding", label: "Onboarding", emoji: "🧭" },
      { to: "/login", label: "Login", emoji: "🔑" },
      { to: "/register", label: "Register", emoji: "🆕" },
    ],
  },
  {
    name: "Learning",
    items: [
      { to: "/", label: "Home / learning path", emoji: "🗺️" },
      { to: "/course", label: "Course", emoji: "📘" },
      { to: "/section", label: "Section", emoji: "🧩" },
      { to: "/lesson", label: "Lesson", emoji: "✏️" },
      { to: "/lesson-video", label: "Video lesson", emoji: "🎬" },
      { to: "/quiz", label: "Quiz", emoji: "❓" },
      { to: "/quiz-result", label: "Quiz result", emoji: "🏅" },
    ],
  },
  {
    name: "Motivation",
    items: [
      { to: "/daily-goal", label: "Daily goal", emoji: "🎯" },
      { to: "/streak", label: "Streak", emoji: "🔥" },
      { to: "/badges", label: "Badges", emoji: "🎖️" },
      { to: "/rewards", label: "Points / rewards", emoji: "💎" },
      { to: "/events", label: "Events", emoji: "🎪" },
    ],
  },
  {
    name: "Social & account",
    items: [
      { to: "/profile", label: "Profile", emoji: "🙂" },
      { to: "/friends", label: "Friends", emoji: "👥" },
      { to: "/leaderboard", label: "Leaderboard", emoji: "🏆" },
      { to: "/settings", label: "Settings", emoji: "⚙️" },
    ],
  },
  {
    name: "Admin",
    items: [
      { to: "/admin", label: "Admin dashboard", emoji: "📊" },
      { to: "/admin/editor", label: "Content editor", emoji: "🛠️" },
    ],
  },
];

function ScreensPage() {
  return (
    <AppShell title="Screen index" showStats={false}>
      <div className="mx-auto max-w-3xl space-y-6">
        <ScreenTitle title="Design templates" subtitle="21 screens sharing one component and token system." />
        {groups.map((g) => (
          <section key={g.name} className="space-y-3">
            <Chip tone="primary">{g.name}</Chip>
            <div className="grid gap-3 sm:grid-cols-2">
              {g.items.map((i) => (
                <Link key={i.to} to={i.to}>
                  <Panel className="flex items-center gap-3 transition-transform hover:-translate-y-0.5">
                    <span className="text-2xl">{i.emoji}</span>
                    <span className="truncate font-display font-bold">{i.label}</span>
                  </Panel>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </AppShell>
  );
}