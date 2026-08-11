import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  Home,
  Trophy,
  Users,
  User,
  Flame,
  Gem,
  Target,
  Medal,
  CalendarDays,
  Settings,
  Shield,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const primaryNav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/leaderboard", label: "Rank", icon: Trophy },
  { to: "/friends", label: "Friends", icon: Users },
  { to: "/profile", label: "Profile", icon: User },
];

const secondaryNav = [
  { to: "/daily-goal", label: "Daily goal", icon: Target },
  { to: "/streak", label: "Streak", icon: Flame },
  { to: "/badges", label: "Badges", icon: Medal },
  { to: "/rewards", label: "Rewards", icon: Gem },
  { to: "/events", label: "Events", icon: CalendarDays },
  { to: "/settings", label: "Settings", icon: Settings },
  { to: "/admin", label: "Admin", icon: Shield },
  { to: "/screens", label: "Screen index", icon: Sparkles },
];

export function StatBar() {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/25 px-3 py-1.5 font-display text-sm font-extrabold text-accent-deep">
        <Flame className="h-4 w-4" /> 7
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/15 px-3 py-1.5 font-display text-sm font-extrabold text-secondary-deep">
        <Gem className="h-4 w-4" /> 1,240
      </span>
    </div>
  );
}

export function AppShell({
  children,
  title,
  showStats = true,
}: {
  children: ReactNode;
  title?: string;
  showStats?: boolean;
}) {
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="mx-auto flex w-full max-w-6xl">
        {/* Desktop sidebar */}
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col gap-1 border-r-2 border-border bg-card px-4 py-6 lg:flex">
          <Link to="/" className="mb-6 flex items-center gap-2 px-2">
            <span className="grid h-10 w-10 place-items-center rounded-2xl text-xl [background:var(--gradient-hero)]">
              🚀
            </span>
            <span className="font-display text-xl font-extrabold">Hivision Academy</span>
          </Link>
          {primaryNav.concat(secondaryNav).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="flex items-center gap-3 rounded-2xl px-3 py-2.5 font-display text-sm font-bold text-muted-foreground transition-colors hover:bg-muted data-[status=active]:bg-primary/12 data-[status=active]:text-primary-deep"
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <span className="truncate">{item.label}</span>
            </Link>
          ))}
        </aside>

        <div className="min-w-0 flex-1">
          {/* Mobile top bar */}
          <header
            className={cn(
              "sticky top-0 z-20 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b-2 border-border bg-card/95 px-4 py-3 backdrop-blur",
            )}
          >
            <h2 className="truncate font-display text-lg font-extrabold">{title ?? "Hivision Academy"}</h2>
            {showStats ? <StatBar /> : null}
          </header>

          <main className="px-4 pt-5 pb-28 sm:px-6 lg:pb-10">{children}</main>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-30 border-t-2 border-border bg-card lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-4">
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="flex flex-col items-center gap-1 py-2.5 text-muted-foreground data-[status=active]:text-primary-deep"
            >
              <item.icon className="h-6 w-6" />
              <span className="font-display text-[11px] font-bold">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}