export type NodeState = "done" | "current" | "locked";

export type PathNodeItem = {
  id: string;
  title: string;
  kind: "lesson" | "video" | "quiz" | "chest" | "boss";
  state: NodeState;
};

export type Section = {
  id: string;
  title: string;
  subtitle: string;
  color: "primary" | "secondary" | "accent" | "grape";
  progress: number;
  nodes: PathNodeItem[];
};

export const sections: Section[] = [
  {
    id: "s1",
    title: "Number Basics",
    subtitle: "Counting, comparing, place value",
    color: "primary",
    progress: 62,
    nodes: [
      { id: "n1", title: "Counting to 20", kind: "lesson", state: "done" },
      { id: "n2", title: "Bigger or smaller", kind: "video", state: "done" },
      { id: "n3", title: "Place value", kind: "lesson", state: "done" },
      { id: "n4", title: "Practice run", kind: "quiz", state: "current" },
      { id: "n5", title: "Treasure chest", kind: "chest", state: "locked" },
      { id: "n6", title: "Section boss", kind: "boss", state: "locked" },
    ],
  },
  {
    id: "s2",
    title: "Adding & Taking Away",
    subtitle: "Sums, differences, word problems",
    color: "secondary",
    progress: 0,
    nodes: [
      { id: "n7", title: "Adding to 10", kind: "lesson", state: "locked" },
      { id: "n8", title: "Story sums", kind: "video", state: "locked" },
      { id: "n9", title: "Quick quiz", kind: "quiz", state: "locked" },
    ],
  },
  {
    id: "s3",
    title: "Shapes & Space",
    subtitle: "Patterns, symmetry, measuring",
    color: "grape",
    progress: 0,
    nodes: [
      { id: "n10", title: "Meet the shapes", kind: "lesson", state: "locked" },
      { id: "n11", title: "Pattern hunt", kind: "quiz", state: "locked" },
    ],
  },
];

export const leaderboard = [
  { rank: 1, name: "Zara", points: 3120, avatar: "🦊" },
  { rank: 2, name: "Kabelo", points: 2890, avatar: "🐨" },
  { rank: 3, name: "You", points: 2740, avatar: "🙂", me: true },
  { rank: 4, name: "Ama", points: 2510, avatar: "🤖" },
  { rank: 5, name: "Nikhil", points: 2380, avatar: "🐼" },
  { rank: 6, name: "Lerato", points: 2110, avatar: "🐧" },
  { rank: 7, name: "Sam", points: 1980, avatar: "🐤" },
];

export const badges = [
  { id: "b1", name: "First Steps", emoji: "👣", earned: true, hint: "Finish your first lesson" },
  { id: "b2", name: "Week Warrior", emoji: "🔥", earned: true, hint: "7 day streak" },
  { id: "b3", name: "Sharp Shooter", emoji: "🎯", earned: true, hint: "Perfect quiz" },
  { id: "b4", name: "Night Owl", emoji: "🦉", earned: false, hint: "Study after 8pm" },
  { id: "b5", name: "Marathon", emoji: "🏃", earned: false, hint: "30 day streak" },
  { id: "b6", name: "Gem Hoarder", emoji: "💎", earned: false, hint: "Collect 5,000 gems" },
];