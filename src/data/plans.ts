export type Plan = {
  id: string;
  name: string;
  period: string;
  price: string;
  perDay: string;
  emoji: string;
  badge?: string;
  features: string[];
  tone: "card" | "hero" | "gold" | "muted";
};

export const plans: Plan[] = [
  {
    id: "daily",
    name: "Day pass",
    period: "1 day",
    price: "$1.99",
    perDay: "$1.99 / day",
    emoji: "☀️",
    features: ["Full access for 24 hours", "All lessons & quizzes", "Unlimited hearts for the day"],
    tone: "card",
  },
  {
    id: "weekly",
    name: "Weekly",
    period: "7 days",
    price: "$7.99",
    perDay: "$1.14 / day",
    emoji: "📅",
    features: ["Everything in Day pass", "1 streak freeze included", "Weekly progress report"],
    tone: "card",
  },
  {
    id: "monthly",
    name: "Monthly",
    period: "1 month",
    price: "$19.99",
    perDay: "$0.66 / day",
    emoji: "🚀",
    badge: "Most popular",
    features: ["Everything in Weekly", "4 streak freezes", "Guide avatar outfits", "Family progress dashboard"],
    tone: "hero",
  },
  {
    id: "quarterly",
    name: "3 months",
    period: "90 days",
    price: "$49.99",
    perDay: "$0.55 / day",
    emoji: "💎",
    badge: "Best value",
    features: ["Everything in Monthly", "Priority support", "Early access to new events", "Bonus 2,000 gems"],
    tone: "gold",
  },
];