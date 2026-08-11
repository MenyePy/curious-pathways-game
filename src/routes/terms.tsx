import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Panel, ScreenTitle } from "@/components/kit";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Hivision Academy" },
      { name: "description", content: "The terms that apply to accounts, subscriptions and use of Hivision Academy." },
      { property: "og:title", content: "Terms & Conditions — Hivision Academy" },
      { property: "og:description", content: "Terms for accounts, subscriptions and use of the platform." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. Using Hivision Academy",
    body: "Hivision Academy provides game-style learning content for children and their families. You agree to use the platform for personal, non-commercial learning unless you hold a school or classroom licence.",
  },
  {
    title: "2. Accounts",
    body: "An account may be created by a parent, guardian or school on behalf of a learner. You are responsible for keeping login details secure and for activity that happens on your account.",
  },
  {
    title: "3. Subscriptions and payment",
    body: "Access is sold as day, week, month and 3-month plans. Plans renew only if you choose a renewing option, and pricing shown at checkout is the price charged. Taxes may apply based on your location.",
  },
  {
    title: "4. Cancellations and refunds",
    body: "You can cancel at any time from Settings. Cancelling stops future charges; the current period stays active until it ends. Refund requests are reviewed case by case.",
  },
  {
    title: "5. Acceptable use",
    body: "Do not attempt to copy, resell or reverse engineer the content, disrupt the service, or use it to harass other learners. Accounts breaching these rules may be suspended.",
  },
  {
    title: "6. Content and ownership",
    body: "Lessons, quizzes, avatars, artwork and the learning path remain the property of Hivision Academy. Progress data belongs to the learner and can be exported on request.",
  },
  {
    title: "7. Changes to these terms",
    body: "We may update these terms as the product evolves. Material changes are announced in-app before they take effect.",
  },
];

function TermsPage() {
  return (
    <AppShell title="Terms" showStats={false}>
      <div className="mx-auto max-w-2xl space-y-5">
        <ScreenTitle title="Terms & Conditions" subtitle="Last updated 11 August 2026" />
        {sections.map((s) => (
          <Panel key={s.title} className="space-y-2">
            <h2 className="font-display text-base font-extrabold">{s.title}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </Panel>
        ))}
        <Panel tone="muted" className="text-sm">
          Questions about these terms? See our{" "}
          <Link to="/info" className="font-bold text-primary-deep underline">contact page</Link> or read the{" "}
          <Link to="/privacy" className="font-bold text-primary-deep underline">Privacy Policy</Link>.
        </Panel>
      </div>
    </AppShell>
  );
}