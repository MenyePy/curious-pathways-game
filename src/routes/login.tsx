import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout, Field } from "@/components/AuthLayout";
import { PlayButton } from "@/components/kit";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — Hivision Academy" },
      { name: "description", content: "Log back in to continue your Hivision Academy learning streak." },
      { property: "og:title", content: "Log in — Hivision Academy" },
      { property: "og:description", content: "Log back in to continue your learning streak." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back!"
      subtitle="Your streak is waiting for you."
      avatarText="You're back! Your 7 day streak is still safe."
      footer={
        <>
          New here?{" "}
          <Link to="/register" className="font-bold text-primary-deep underline">
            Create an account
          </Link>
        </>
      }
    >
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <Field label="Email or username" placeholder="you@example.com" />
        <Field label="Password" type="password" placeholder="••••••••" />
        <Link to="/" className="block">
          <PlayButton size="block" type="button">
            Log in
          </PlayButton>
        </Link>
        <PlayButton variant="ghost" size="block" type="button">
          Continue with Google
        </PlayButton>
      </form>
    </AuthLayout>
  );
}