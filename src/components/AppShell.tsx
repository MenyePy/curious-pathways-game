import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
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
  ShoppingBag,
  Menu,
  Bell,
  CreditCard,
  Info,
  FileText,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
  { to: "/shop", label: "Shop", icon: ShoppingBag },
  { to: "/events", label: "Events", icon: CalendarDays },
  { to: "/notifications", label: "Notifications", icon: Bell },
  { to: "/plans", label: "Plans", icon: CreditCard },
  { to: "/info", label: "Info & contact", icon: Info },
  { to: "/terms", label: "Terms", icon: FileText },
  { to: "/settings", label: "Settings", icon: Settings },
  { to: "/admin", label: "Admin", icon: Shield },
  { to: "/screens", label: "Screen index", icon: Sparkles },
];

const allNav = primaryNav.concat(secondaryNav);

const navLinkClass =
  "flex items-center gap-3 rounded-2xl px-3 py-2.5 font-display text-sm font-bold text-muted-foreground transition-colors hover:bg-muted data-[status=active]:bg-primary/12 data-[status=active]:text-primary-deep";

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className={cn(
        "mb-6 flex items-center gap-2 px-2",
        compact && "justify-center px-0 lg:justify-start lg:px-2",
      )}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-xl [background:var(--gradient-hero)]">
        🚀
      </span>
      <span className={cn("font-display text-lg font-extrabold", compact && "hidden lg:inline")}>
        Hivision Academy
      </span>
    </Link>
  );
}

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
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="mx-auto flex w-full max-w-6xl">
        {/* Desktop sidebar */}
        <aside className="sticky top-0 hidden h-screen w-20 shrink-0 flex-col gap-1 border-r-2 border-border bg-card px-2 py-6 md:flex lg:w-64 lg:px-4">
          <BrandMark compact />
          <div className="min-h-0 flex-1 overflow-y-auto">
          {allNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              title={item.label}
              className={cn(navLinkClass, "justify-center lg:justify-start")}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <span className="hidden truncate lg:inline">{item.label}</span>
            </Link>
          ))}
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          {/* Mobile top bar */}
          <header
            className={cn(
              "sticky top-0 z-20 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b-2 border-border bg-card/95 px-4 py-3 backdrop-blur md:grid-cols-[minmax(0,1fr)_auto] md:px-6",
            )}
          >
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                aria-label="Open menu"
                className="grid h-10 w-10 place-items-center rounded-2xl border-2 border-border bg-card md:hidden"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="left" className="w-72 overflow-y-auto bg-card px-4 py-6">
                <BrandMark />
                <nav className="flex flex-col gap-1">
                  {allNav.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      activeOptions={{ exact: item.to === "/" }}
                      onClick={() => setOpen(false)}
                      className={navLinkClass}
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <h2 className="truncate font-display text-lg font-extrabold md:text-xl">{title ?? "Hivision Academy"}</h2>
            <div className="flex items-center gap-2">
              {showStats ? <StatBar /> : null}
              <Link
                to="/notifications"
                aria-label="Notifications"
                className="relative grid h-10 w-10 place-items-center rounded-2xl border-2 border-border bg-card"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-destructive font-display text-[10px] font-extrabold text-destructive-foreground">
                  3
                </span>
              </Link>
            </div>
          </header>

          <main className="px-4 pt-5 pb-28 sm:px-6 md:px-8 md:pb-10">{children}</main>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-30 border-t-2 border-border bg-card md:hidden">
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