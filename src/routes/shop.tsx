import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Panel, Chip, PlayButton, ScreenTitle } from "@/components/kit";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Points & rewards — Hivision Academy" },
      { name: "description", content: "Spend gems on streak freezes, avatar outfits and power-ups." },
      { property: "og:title", content: "Points & rewards — Hivision Academy" },
      { property: "og:description", content: "Spend gems on freezes, outfits and power-ups." },
    ],
  }),
  component: ShopPage,
});

const shop = [
  { name: "Streak freeze", emoji: "🧊", cost: 200, desc: "Skip a day without losing your streak" },
  { name: "Double gems", emoji: "✨", cost: 350, desc: "2× gems for 15 minutes" },
  { name: "Extra heart", emoji: "❤️", cost: 120, desc: "One more try in a lesson" },
  { name: "Guide outfit", emoji: "🎩", cost: 500, desc: "Dress up your avatar companion" },
];

function ShopPage() {
  return (
    <AppShell title="Rewards">
      <div className="mx-auto max-w-xl space-y-5">
        <ScreenTitle title="Gem shop" subtitle="Earn gems by finishing lessons and quizzes." />

        <Panel tone="gold" className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold opacity-80">Your balance</p>
            <p className="font-display text-3xl font-extrabold">💎 1,240</p>
          </div>
          <span className="text-4xl">🛍️</span>
        </Panel>

        <div className="grid gap-3 sm:grid-cols-2">
          {shop.map((item) => (
            <Panel key={item.name} className="space-y-2">
              <span className="text-3xl">{item.emoji}</span>
              <p className="font-display font-extrabold">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
              <div className="flex items-center justify-between pt-1">
                <Chip tone="secondary">💎 {item.cost}</Chip>
                <PlayButton size="sm" variant={item.cost <= 1240 ? "primary" : "ghost"}>
                  Buy
                </PlayButton>
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </AppShell>
  );
}