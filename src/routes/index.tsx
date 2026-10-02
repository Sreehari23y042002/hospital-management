import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, Clock, ShieldCheck, Siren, Star, Users } from "lucide-react";
import heroImg from "@/assets/hero-hospital-wide.jpg";
import teamImg from "@/assets/about-team.jpg";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import { testimonials } from "@/data/testimonials";
import { facilities } from "@/data/facilities";
import { hospitalConfig } from "@/data/config";
import { SectionHeading } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/icons";
import { DoctorCard, CtaBand } from "@/components/common/Cards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarogya Multispeciality Hospital — Compassionate Care, Advanced Medicine" },
      { name: "description", content: hospitalConfig.description },
      { property: "og:title", content: "Aarogya Multispeciality Hospital" },
      { property: "og:description", content: hospitalConfig.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const stats = [
  { v: "25+", l: "Years of care" },
  { v: "120+", l: "Specialists" },
  { v: "350", l: "Beds" },
  { v: "1M+", l: "Patients treated" },
];

function Home() {
  return (
    <>
      <section className="relative flex min-h-[500px] items-end overflow-hidden bg-navy text-navy-foreground md:min-h-[520px]">
        <img src={heroImg} alt="Illustration of a modern hospital entrance" className="absolute inset-0 h-full w-full object-cover object-center" width={1920} height={1088} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/20" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-24 sm:px-6 md:pb-20 lg:px-8">
          <p className="text-sm font-bold uppercase text-secondary">Multispeciality care · Mumbai</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.12] sm:text-5xl lg:text-6xl">Aarogya Multispeciality Hospital</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/90 sm:text-lg">Compassionate care, from your first consultation to recovery.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/appointment" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition hover:bg-primary/90"><CalendarCheck className="h-5 w-5" /> Book Appointment</Link>
            <Link to="/emergency" className="inline-flex items-center gap-2 rounded-md bg-emergency px-6 py-3 font-semibold text-emergency-foreground transition hover:bg-emergency/90"><Siren className="h-5 w-5" /> Emergency</Link>
          </div>
        </div>
      </section>
      <section aria-label="Hospital at a glance" className="border-b border-border bg-background">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-4 py-7 sm:grid-cols-4 sm:px-6 lg:px-8">
          {stats.map((s) => <div key={s.l}><dt className="font-display text-2xl font-bold text-foreground">{s.v}</dt><dd className="text-sm text-muted-foreground">{s.l}</dd></div>)}
        </dl>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Centres of Excellence" title="Specialist care across every discipline" description="Integrated departments led by experienced consultants and supported by modern technology." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {departments.slice(0, 8).map((d, i) => (
            <Reveal key={d.id} delay={i * 50}>
              <Link to="/departments/$id" params={{ id: d.id }} className="group block h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition group-hover:bg-primary group-hover:text-primary-foreground"><d.icon className="h-6 w-6" /></span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{d.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.tagline}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/departments" className="inline-flex items-center gap-2 font-semibold text-primary">View all departments <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="bg-muted/50 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <img src={teamImg} alt="Our clinical team" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]" />
          <div>
            <SectionHeading align="left" eyebrow="Why Aarogya" title="Care that puts you first" description="Every decision we make starts with one question: what is best for the patient?" />
            <ul className="mt-8 space-y-5">
              {[
                [ShieldCheck, "Accredited quality & safety", "Rigorous infection control and clinical protocols."],
                [Users, "Multidisciplinary teams", "Specialists collaborate on every complex case."],
                [Clock, "Round-the-clock care", "Emergency, ICU, pharmacy and diagnostics 24/7."],
              ].map(([I, t, d]) => {
                const IconC = I as typeof ShieldCheck;
                return (
                  <li key={t as string} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-teal)] text-primary-foreground"><IconC className="h-5 w-5" /></span>
                    <div><h3 className="font-semibold text-foreground">{t as string}</h3><p className="text-sm text-muted-foreground">{d as string}</p></div>
                  </li>
                );
              })}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">About us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Doctors" title="Meet our specialists" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.slice(0, 4).map((d) => <DoctorCard key={d.id} d={d} />)}
        </div>
      </section>

      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Facilities" title="Built for modern medicine" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.slice(0, 8).map((f) => (
              <div key={f.id} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <Icon name={f.icon} className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{f.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Patient Stories" title="Trusted by families" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <figure key={t.id} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex gap-1 text-primary">{[...Array(t.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</blockquote>
              <figcaption className="mt-4 font-semibold text-foreground">{t.name} <span className="font-normal text-muted-foreground">· {t.location}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

