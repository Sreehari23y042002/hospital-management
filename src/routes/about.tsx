import { createFileRoute } from "@tanstack/react-router";
import { Eye, HeartHandshake, Target } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";
import { PageHero, SectionHeading } from "@/components/common/PageHero";
import { CtaBand } from "@/components/common/Cards";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("About Us", "Our story, mission and values — 25 years of compassionate multispeciality care in Mumbai."),
  component: About,
});

function About() {
  return (
    <>
      <PageHero title="About Aarogya" description="Twenty-five years of healing, built on trust, expertise and compassion." crumbs={[{ label: "About" }]} />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <img src={teamImg} alt="Aarogya clinical team" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]" />
        <div className="space-y-4 text-muted-foreground">
          <SectionHeading align="left" eyebrow="Our Story" title="From a 40-bed clinic to a leading multispeciality hospital" />
          <p>Founded in 2001 by a group of physicians who believed quality care should be accessible, Aarogya has grown into a 350-bed tertiary hospital serving over a million patients.</p>
          <p>Today our 120+ specialists work across 18 departments, supported by modern operating theatres, advanced imaging and round-the-clock critical care.</p>
        </div>
      </section>
      <section className="bg-muted/50 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            [Target, "Mission", "To deliver safe, evidence-based and affordable care with dignity for every patient."],
            [Eye, "Vision", "To be the most trusted name in healthcare for the communities we serve."],
            [HeartHandshake, "Values", "Compassion, integrity, excellence, teamwork and respect."],
          ].map(([I, t, d]) => {
            const C = I as typeof Target;
            return (
              <div key={t as string} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                <C className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{t as string}</h3>
                <p className="mt-2 text-muted-foreground">{d as string}</p>
              </div>
            );
          })}
        </div>
      </section>
      <div className="pt-16"><CtaBand /></div>
    </>
  );
}
