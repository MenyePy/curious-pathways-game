// Avatar system modelled as CONTENT (admin-configurable later), never hardcoded
// into lesson components. Screens request a character + expression + context key.

export type Expression = "happy" | "cheer" | "think" | "oops" | "wave" | "sleepy";

export type AvatarCharacter = {
  id: string;
  name: string;
  role: string;
  emoji: Record<Expression, string>;
  accent: "primary" | "secondary" | "accent" | "grape";
};

export const characters: AvatarCharacter[] = [
  {
    id: "mila",
    name: "Mila",
    role: "Guide",
    accent: "primary",
    emoji: {
      happy: "👩‍🏫",
      cheer: "🙌",
      think: "🤔",
      oops: "😅",
      wave: "👋",
      sleepy: "😴",
    },
  },
  {
    id: "bolt",
    name: "Bolt",
    role: "Coach",
    accent: "accent",
    emoji: {
      happy: "🦊",
      cheer: "🎉",
      think: "🧐",
      oops: "🙃",
      wave: "🐾",
      sleepy: "💤",
    },
  },
  {
    id: "nova",
    name: "Nova",
    role: "Explorer",
    accent: "secondary",
    emoji: {
      happy: "🤖",
      cheer: "⚡",
      think: "🔍",
      oops: "🔧",
      wave: "🛸",
      sleepy: "🌙",
    },
  },
  {
    id: "pip",
    name: "Pip",
    role: "Buddy",
    accent: "grape",
    emoji: {
      happy: "🐨",
      cheer: "🌟",
      think: "📚",
      oops: "🍃",
      wave: "🎈",
      sleepy: "🛏️",
    },
  },
];

export type DialogueLine = {
  characterId: string;
  expression: Expression;
  text: string;
};

// Dialogue keyed by context — the shape an admin content editor would author.
export const dialogue: Record<string, DialogueLine> = {
  onboarding: { characterId: "mila", expression: "wave", text: "Hi! I'm Mila. I'll walk this journey with you." },
  home: { characterId: "mila", expression: "happy", text: "You're 2 lessons away from a new badge. Ready?" },
  section: { characterId: "nova", expression: "think", text: "This section unlocks the Number Galaxy. Let's map it out." },
  lesson: { characterId: "bolt", expression: "happy", text: "Watch closely — then you'll try it yourself." },
  quiz_correct: { characterId: "bolt", expression: "cheer", text: "Great job! Let's keep going!" },
  quiz_wrong: { characterId: "bolt", expression: "oops", text: "Not quite — look at the last step again." },
  quiz_result: { characterId: "mila", expression: "cheer", text: "4 out of 5! That's your best run yet." },
  streak: { characterId: "pip", expression: "cheer", text: "Seven days in a row. You're on fire!" },
  goal: { characterId: "pip", expression: "happy", text: "Pick a goal you can keep. Small wins stack up." },
  friends: { characterId: "nova", expression: "wave", text: "Learning is better with a crew." },
  empty: { characterId: "pip", expression: "sleepy", text: "Nothing here yet. Come back after your next lesson." },
};

export function getCharacter(id: string): AvatarCharacter {
  return characters.find((c) => c.id === id) ?? (characters[0] as AvatarCharacter);
}