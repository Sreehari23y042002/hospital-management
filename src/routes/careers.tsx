import { useMemo, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Briefcase,
  ChevronDown,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  MapPin,
  Users,
} from "lucide-react";
import { jobs } from "@/data/jobs";
import { PageHero, SectionHeading } from "@/components/common/PageHero";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/careers")({
  head: () => seo("Careers", "Join our team of doctors, nurses and healthcare professionals."),
  component: Careers,
});

const perks = [
  {
    icon: HeartPulse,
    title: "Patient-first culture",
    text: "Work in a multidisciplinary team where every voice counts and care quality is the shared goal.",
  },
  {
    icon: GraduationCap,
    title: "Learning & growth",
    text: "Structured orientation, CME support and sponsored upskilling for clinical and non-clinical staff.",
  },
  {
    icon: Award,
    title: "Modern infrastructure",
    text: "Digitised workflows, modern cath labs, PACS reporting and a fully equipped rehab centre.",
  },
  {
    icon: Users,
    title: "Supportive benefits",
    text: "Competitive pay, health cover for you and your family, and balanced rosters that respect your time.",
  },
];

const field =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring";

type Job = (typeof jobs)[number];

function Careers() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", experience: "", note: "" });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const departments = useMemo(() => ["All", ...Array.from(new Set(jobs.map((j) => j.department)))], []);
  const visible = filter === "All" ? jobs : jobs.filter((j) => j.department === filter);

  const set = (k: keyof typeof form, v: string) => setForm((p) => ({ ...p, [k]: v }));
  const valid = !!(
    form.name.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    /^[+\d\s-]{8,}$/.test(form.phone)
  );

  const apply = (job: Job) => {
    setSelectedJob(job);
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", experience: "", note: "" });
    requestAnimationFrame(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  if (submitted && selectedJob) {
    return (
      <section className="mx-auto max-w-xl px-4 py-24 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
        <h1 className="mt-6 font-display text-3xl font-bold text-foreground">Application received</h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Thank you, {form.name}. Your application for{" "}
          <span className="font-semibold text-foreground">{selectedJob.position}</span> has been noted. Our HR team will
           review it when applications are enabled. This is a demonstration: your details were not sent or saved. Please contact the hospital for real openings.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              setSubmitted(false);
              setSelectedJob(null);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
          >
            View more openings
          </button>
          <Link to="/" className="rounded-full border border-border px-6 py-3 font-semibold text-foreground">
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero
        title="Careers at Aarogya"
        description="Build a meaningful career with a team that cares — from clinicians to front office, every role matters."
        crumbs={[{ label: "Careers" }]}
      />

      {/* Why join us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Aarogya"
          title="A workplace that cares for its people"
          description="We invest in the people who care for others — with growth, modern tools and a culture of respect."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open positions */}
      <section id="openings" className="scroll-mt-24 bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Open positions"
            title="Current openings"
             description="Explore illustrative roles and their requirements. Applications in this demo are not sent to HR."
          />

          <div className="mt-8 flex flex-wrap gap-2">
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  filter === d
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-foreground hover:border-primary/50"
                }`}
              >
                {d}
                <span className="ml-1.5 opacity-70">
                  {d === "All" ? jobs.length : jobs.filter((j) => j.department === d).length}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            {visible.map((j) => {
              const open = expanded === j.id;
              return (
                <div key={j.id} className="rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
                  <div className="flex flex-wrap items-start justify-between gap-4 p-6">
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-semibold text-foreground">{j.position}</h3>
                      <p className="mt-1 flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {j.department} · {j.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {j.location}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setExpanded(open ? null : j.id)}
                        aria-expanded={open}
                        className="flex items-center gap-1 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:border-primary/50"
                      >
                        Details
                        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                      </button>
                      <button
                        onClick={() => apply(j)}
                        className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                  {open ? (
                    <div className="border-t border-border px-6 pb-6 pt-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">{j.description}</p>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Requirements
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {j.requirements.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {r}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 text-xs text-muted-foreground">Experience: {j.experience}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
            {visible.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-border bg-card p-10 text-center text-muted-foreground">
                No openings in this department right now — check back soon.
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {/* Application form / confirmation */}
      <section ref={formRef} className="mx-auto max-w-3xl scroll-mt-24 px-4 py-16 sm:px-6">
        {selectedJob ? (
          submitted ? null : (
            <>
              <SectionHeading
                align="left"
                eyebrow="Apply now"
                title={`Apply — ${selectedJob.position}`}
                 description="Try the application flow. This demonstration does not send or save your details."
              />
              <form
                className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (valid) setSubmitted(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="app-name" className="mb-2 block text-sm font-semibold text-foreground">
                      Full name *
                    </label>
                    <input
                      id="app-name"
                      required
                      maxLength={80}
                      className={field}
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="app-phone" className="mb-2 block text-sm font-semibold text-foreground">
                      Phone *
                    </label>
                    <input
                      id="app-phone"
                      required
                      maxLength={20}
                      className={field}
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="app-email" className="mb-2 block text-sm font-semibold text-foreground">
                    Email *
                  </label>
                  <input
                    id="app-email"
                    required
                    type="email"
                    className={field}
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="app-exp" className="mb-2 block text-sm font-semibold text-foreground">
                    Relevant experience
                  </label>
                  <input
                    id="app-exp"
                    maxLength={120}
                    placeholder="e.g. 3 years ICU nursing at a tertiary hospital"
                    className={field}
                    value={form.experience}
                    onChange={(e) => set("experience", e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="app-note" className="mb-2 block text-sm font-semibold text-foreground">
                    Why Aarogya? (optional)
                  </label>
                  <textarea
                    id="app-note"
                    rows={4}
                    maxLength={800}
                    className={field}
                    value={form.note}
                    onChange={(e) => set("note", e.target.value)}
                  />
                </div>
                <button
                  disabled={!valid}
                  className="w-full rounded-full bg-primary py-3 font-semibold text-primary-foreground disabled:opacity-50"
                >
                   Preview application
                </button>
              </form>
            </>
          )
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
            <h2 className="font-display text-2xl font-semibold text-foreground">Ready to join us?</h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              Pick an opening above and hit Apply — a short form is all it takes. No account needed.
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("openings")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
            >
              Browse openings <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </section>
    </>
  );
}
