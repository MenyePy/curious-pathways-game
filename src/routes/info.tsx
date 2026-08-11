import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { AvatarSpeech } from "@/components/AvatarSpeech";
import { Panel, Chip, PlayButton, ScreenTitle } from "@/components/kit";
import { plans } from "@/data/plans";

export const Route = createFileRoute("/info")({
  head: () => ({
    meta: [
      { title: "Get access & contact us — Hivision Academy" },
      {
        name: "description",
        content: "Contact Hivision Academy for access to the system and see our daily, weekly, monthly and 3-month plans.",
      },
      { property: "og:title", content: "Get access & contact us — Hivision Academy" },
      { property: "og:description", content: "Contact details for access plus our payment plans." },
    ],
  }),
  component: InfoPage,
});

const contacts = [
  { emoji: "✉️", label: "Email", value: "access@hivisionacademy.com", detail: "Replies within 1 working day" },
  { emoji: "💬", label: "WhatsApp", value: "+44 7700 900 123", detail: "Mon–Fri, 09:00–17:00" },
  { emoji: "📞", label: "Phone", value: "+44 20 7946 0123", detail: "Support line for parents & schools" },
  { emoji: "🏫", label: "Schools", value: "schools@hivisionacademy.com", detail: "Classroom licences & bulk pricing" },
];

const steps = [
  "Send us a message with the learner's name and age group.",
  "We create your account and send login details.",
  "Choose a plan below and start the first lesson.",
];

function InfoPage() {
  return (
    <AppShell title="Get access" showStats={false}>
      <div className="mx-auto max-w-3xl space-y-6">
        <ScreenTitle
          title="Get access to Hivision Academy"
          subtitle="Accounts are activated by our team so every learner starts on the right path."
        />
        <AvatarSpeech characterId="mila" expression="wave" text="Say hello and we'll set your account up — it usually takes less than a day." />

        <Panel tone="hero" className="space-y-3">
          <Chip className="bg-white/25 text-white">How it works</Chip>
          <ol className="space-y-2 text-sm">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/25 font-display text-xs font-extrabold">
                  {i + 1}
                </span>
                <span className="min-w-0">{s}</span>
              </li>
            ))}
          </ol>
        </Panel>

        <div className="grid gap-3 sm:grid-cols-2">
          {contacts.map((c) => (
            <Panel key={c.label} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-muted text-xl">{c.emoji}</span>
              <div className="min-w-0">
                <p className="text-xs font-bold text-muted-foreground uppercase">{c.label}</p>
                <p className="truncate font-display font-extrabold">{c.value}</p>
                <p className="truncate text-xs text-muted-foreground">{c.detail}</p>
              </div>
            </Panel>
          ))}
        </div>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-extrabold">Our payment plans</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((p) => (
              <Panel key={p.id} tone={p.tone} className="space-y-1.5">
                <span className="text-2xl">{p.emoji}</span>
                <p className="font-display font-extrabold">{p.name}</p>
                <p className="font-display text-2xl font-extrabold">{p.price}</p>
                <p className="text-xs opacity-80">{p.perDay}</p>
                {p.badge ? <Chip className="bg-white/25 text-current">{p.badge}</Chip> : null}
              </Panel>
            ))}
          </div>
          <Link to="/plans" className="block">
            <PlayButton size="block">See full plan details</PlayButton>
          </Link>
        </section>

        <p className="text-center text-xs text-muted-foreground">
          <Link to="/terms" className="underline">Terms &amp; Conditions</Link> ·{" "}
          <Link to="/privacy" className="underline">Privacy Policy</Link>
        </p>
      </div>
    </AppShell>
  );
}