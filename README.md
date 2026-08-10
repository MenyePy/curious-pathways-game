# Learning Journey Studio

Create a set of web pages that design the system described in this: The objective is to establish the visual language and interaction model so that every later feature feels like part of the same product. Design direction Think: Duolingo + modern kids' learning app + game UI Not: "A website with courses." The user should feel like they're playing through a learning journey. Core navigation Mobile-first navigation could be:




┌──────────────────────────┐
│ 🔥 7       💎 1,240      │
│                          │
│      Learning Path       │
│                          │
│       🟢 Lesson          │
│          │               │
│       🟢 Lesson          │
│          │               │
│       🔵 Lesson          │
│          │               │
│       🔒 Lesson          │
│                          │
├──────────────────────────┤
│ 🏠     🏆     👥     👤  │
│ Home   Rank  Friends Profile
└──────────────────────────┘


Desktop can then expand this into a sidebar/navigation layout. Design the following screens FIRST

Splash/loading screen

Onboarding

Login

Register

Home/learning path

Course/learning path

Section

Lesson

Video lesson

Quiz

Quiz result

Daily goal

Streak

Profile

Friends

Leaderboard

Badges

Points/rewards

Events

Settings

Admin dashboard

Admin content editor

Not all of these need working functionality yet. We're establishing components, spacing, typography, colors, cards, buttons, icons, animations and responsive behavior. Talking avatars Make avatars a core visual concept from the beginning. For example:

        ┌───────────────┐
        │   👩‍🏫        │
        │               │
        │ "Great job!   │
        │  Let's keep   │
        │  going!"      │
        └───────────────┘


The avatar system should eventually support:

Different characters

Expressions

Animations

Speech

Lesson-specific dialogue

Encouragement

Quiz feedback

Do not hardcode the avatar into lessons. Model it as content that can eventually be configured by admins.

For now, let's do the frontend design templates

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://curious-pathways-game.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e6df17f6-d411-489d-a6d4-c810323993d6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
