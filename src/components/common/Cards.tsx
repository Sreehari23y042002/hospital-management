import { Link } from "@tanstack/react-router";
import type { Doctor } from "@/data/doctors";
export function DoctorCard({ d }: { d: Doctor }) {
  const initials = d.name.replace("Dr. ", "").split(" ").map((p) => p[0]).join("");
  return (
    <Link to="/doctors/$id" params={{ id: d.id }} className="group block rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] font-display text-2xl font-bold text-primary-foreground">{initials}</div>
      <h3 className="mt-4 font-display font-semibold text-foreground">{d.name}</h3>
      <p className="text-sm text-primary">{d.specialty}</p>
      <p className="mt-1 text-xs text-muted-foreground">{d.qualification} · {d.experience} yrs</p>
    </Link>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-[image:var(--gradient-primary)] p-10 text-primary-foreground shadow-[var(--shadow-lift)] md:flex-row md:p-14">
        <div>
          <h2 className="font-display text-3xl font-bold">Ready to see a specialist?</h2>
          <p className="mt-2 opacity-90">Book online in under two minutes — we'll confirm by phone.</p>
        </div>
        <Link to="/appointment" className="rounded-full bg-card px-7 py-3.5 font-semibold text-primary">Book Appointment</Link>
      </div>
    </section>
  );
}
