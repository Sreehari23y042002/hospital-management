import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { departments } from "@/data/departments";
import { PageHero } from "@/components/common/PageHero";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/departments/")({
  head: () => seo("Departments", "Explore our specialist departments — cardiology, neurology, orthopedics, oncology and more."),
  component: Departments,
});

function Departments() {
  return (
    <>
      <PageHero title="Departments" description="Specialist centres staffed by experienced consultants." crumbs={[{ label: "Departments" }]} />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {departments.map((d) => (
          <Link key={d.id} to="/departments/$id" params={{ id: d.id }} className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary"><d.icon className="h-6 w-6" /></span>
            <h2 className="mt-5 font-display text-xl font-semibold text-foreground">{d.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{d.tagline}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
          </Link>
        ))}
      </section>
    </>
  );
}
