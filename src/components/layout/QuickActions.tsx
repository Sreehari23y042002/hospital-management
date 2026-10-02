import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUp, CalendarDays, PhoneCall } from "lucide-react";
import { hospitalConfig } from "@/data/config";
import { Button } from "@/components/ui/button";

export function QuickActions() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 450);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-border bg-background/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[var(--shadow-lift)] backdrop-blur-lg md:hidden">
        <a href={`tel:${hospitalConfig.emergency}`} aria-label="Call emergency" className="flex h-11 flex-1 items-center justify-center gap-2 rounded-md bg-emergency px-2 text-sm font-bold text-emergency-foreground"><PhoneCall className="h-4 w-4" /> Call Emergency</a>
        <Button asChild className="h-11 flex-1 px-2 text-sm font-bold" aria-current={pathname === "/appointment" ? "page" : undefined}>
          <Link to="/appointment"><CalendarDays className="h-4 w-4" /> Book Visit</Link>
        </Button>
      </nav>
      {scrolled && <Button size="icon" variant="outline" aria-label="Back to top" title="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-24 right-4 z-30 h-10 w-10 bg-background shadow-[var(--shadow-soft)] md:bottom-6 md:right-6"><ArrowUp /></Button>}
    </>
  );
}
