import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout, Field } from "@/components/AuthLayout";
import { PlayButton } from "@/components/kit";
import { characters } from "@/data/avatars";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create your account — Questly" },
      { name: "description", content: "Create a Questly profile, choose your guide and start learning." },
      { property: "og:title", content: "Create your account — Questly" },
      { property: "og:description", content: "Create a profile, choose your guide and start learning." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <AuthLayout
      title="Create your profile"
      subtitle="Pick a guide who'll travel with you."
      avatarText="Choose a guide — you can change them any time."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-primary-deep underline">
            Log in
          </Link>
        </>
      }
    >
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <Field label="Display name" placeholder="Space Cadet" />
        <Field label="Email" type="email" placeholder="you@example.com" />
        <Field label="Password" type="password" placeholder="At least 8 characters" />

        <div>
          <span className="mb-2 block font-display text-xs font-bold text-muted-foreground uppercase">
            Choose your guide
          </span>
          <div className="grid grid-cols-4 gap-2">
            {characters.map((c, i) => (
              <button
                key={c.id}
                type="button"
                className={`chunky grid place-items-center rounded-2xl border-2 py-3 ${
                  i === 0 ? "border-primary bg-primary/10" : "border-border bg-card"
                }`}
              >
                <span className="text-2xl">{c.emoji.happy}</span>
                <span className="mt-1 font-display text-[11px] font-bold">{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        <Link to="/" className="block">
          <PlayButton size="block" type="button">
            Start learning
          </PlayButton>
        </Link>
      </form>
    </AuthLayout>
  );
}