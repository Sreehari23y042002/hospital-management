import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { serviceCategories } from "@/data/services";
import { PageHero } from "@/components/common/PageHero";
import { Icon } from "@/components/common/icons";
import { CtaBand } from "@/components/common/Cards";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => seo("Medical Services", "Diagnostics, treatment and critical care services under one roof."),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero title="Our Services" description="Diagnostics, specialist treatment and critical care — coordinated around you." crumbs={[{ label: "Services" }]} />
      {serviceCategories.map((c, i) => (
        <section key={c.id} className={i % 2 ? "bg-muted/50 py-16" : "py-16"}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground"><Icon name={c.icon} className="h-6 w-6" /></span>
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{c.name}</h2>
            </div>
            <p className="mt-3 max-w-3xl text-muted-foreground">{c.description}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.services.map((s) => (
                <div key={s.id} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                  <h3 className="font-display text-lg font-semibold text-foreground">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                  <ul className="mt-4 space-y-1.5">{s.features.map((f) => <li key={f} className="flex gap-2 text-sm text-foreground"><Check className="h-4 w-4 text-primary" />{f}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      <div className="pt-4"><CtaBand /></div>
    </>
  );
}
