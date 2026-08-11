import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Panel, ScreenTitle } from "@/components/kit";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Hivision Academy" },
      { name: "description", content: "How Hivision Academy collects, uses and protects learner and family data." },
      { property: "og:title", content: "Privacy Policy — Hivision Academy" },
      { property: "og:description", content: "How we collect, use and protect learner data." },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "What we collect",
    body: "Account details (display name, email of the parent or school), learning progress such as lessons completed, streaks and quiz scores, and basic device information needed to run the app.",
  },
  {
    title: "Why we collect it",
    body: "To save progress across devices, personalise the learning path, show leaderboards and streaks, process subscriptions and keep the service secure.",
  },
  {
    title: "Children's data",
    body: "Learner profiles are designed to be created and managed by a parent, guardian or school. We do not show behavioural advertising to children and we keep profile data to the minimum needed for learning features.",
  },
  {
    title: "Sharing",
    body: "We do not sell personal data. We share only with processors that help us operate: payment processing, hosting and error monitoring, each under contract and limited to what they need.",
  },
  {
    title: "Retention",
    body: "Progress data is kept while the account is active. Delete an account from Settings and we remove personal data within 30 days, keeping only records required for accounting.",
  },
  {
    title: "Your choices",
    body: "You can request a copy of your data, correct it, or ask us to delete it. Notification, sound and leaderboard visibility can be turned off in Settings at any time.",
  },
  {
    title: "Contact",
    body: "Privacy questions can be sent to privacy@hivisionacademy.com and we aim to reply within 5 working days.",
  },
];

function PrivacyPage() {
  return (
    <AppShell title="Privacy" showStats={false}>
      <div className="mx-auto max-w-2xl space-y-5">
        <ScreenTitle title="Privacy Policy" subtitle="Last updated 11 August 2026" />
        {sections.map((s) => (
          <Panel key={s.title} className="space-y-2">
            <h2 className="font-display text-base font-extrabold">{s.title}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </Panel>
        ))}
        <Panel tone="muted" className="text-sm">
          Also see our{" "}
          <Link to="/terms" className="font-bold text-primary-deep underline">Terms &amp; Conditions</Link>.
        </Panel>
      </div>
    </AppShell>
  );
}