import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, HeartPulse, Siren } from "lucide-react";
import { hospitalConfig } from "@/data/config";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/about", label: "About" },
  { to: "/departments", label: "Departments" },
  { to: "/doctors", label: "Doctors" },
  { to: "/services", label: "Services" },
  { to: "/facilities", label: "Facilities" },
  { to: "/health-library", label: "Health Library" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-shadow ${scrolled ? "shadow-[var(--shadow-soft)]" : ""}`}>
      <div className="bg-navy text-navy-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 lg:px-8">
           <span className="hidden sm:inline"><ClockIcon /> {hospitalConfig.hours}</span>
          <div className="flex items-center gap-4">
            <a href={`tel:${hospitalConfig.phone}`} className="flex items-center gap-1 hover:opacity-80">
              <Phone className="h-3.5 w-3.5" /> {hospitalConfig.phone}
            </a>
            <Link to="/emergency" className="flex items-center gap-1 font-semibold text-emergency-foreground">
              <span className="rounded-full bg-emergency px-2 py-0.5">24/7 Emergency</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)]">
              <HeartPulse className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold text-foreground">{hospitalConfig.shortName}</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Multispeciality</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-primary bg-accent" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/appointment" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:bg-primary/90 sm:inline-flex">
              Book Appointment
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-border px-4 pb-4 lg:hidden">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-medium text-foreground hover:bg-accent">
                {n.label}
              </Link>
            ))}
            <Link to="/emergency" onClick={() => setOpen(false)} className="mt-2 flex items-center gap-2 rounded-lg bg-emergency px-3 py-3 font-semibold text-emergency-foreground">
              <Siren className="h-4 w-4" /> Emergency
            </Link>
            <Link to="/appointment" onClick={() => setOpen(false)} className="mt-2 block rounded-lg bg-primary px-3 py-3 text-center font-semibold text-primary-foreground">
              Book Appointment
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

function ClockIcon() { return <span aria-hidden="true" className="mr-1 text-secondary">●</span>; }
