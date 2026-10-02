import { createFileRoute } from "@tanstack/react-router";
import { facilities } from "@/data/facilities";
import { PageHero } from "@/components/common/PageHero";
import { Icon } from "@/components/common/icons";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/facilities")({
  head: () => seo("Facilities", "Modern operation theatres, ICU, NICU, diagnostics, 24/7 pharmacy and more."),
  component: Facilities,
});

function Facilities() {
  const featured = facilities.filter((f) => f.image);
  const rest = facilities.filter((f) => !f.image);
  return (
    <>
       <PageHero title="Facilities & Infrastructure" description="Advanced technology in a calm, comfortable environment. Images are illustrative." crumbs={[{ label: "Facilities" }]} />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pt-16 sm:px-6 md:grid-cols-2 lg:px-8">
        {featured.map((f) => (
           <div key={f.id} className="group relative overflow-hidden rounded-lg shadow-[var(--shadow-lift)]">
             <img src={f.image} alt={`Illustration: ${f.name}`} loading="lazy" width={1536} height={1024} className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
            <div className="absolute bottom-0 p-8 text-navy-foreground">
              <h2 className="font-display text-2xl font-semibold">{f.name}</h2>
              <p className="mt-1 text-sm opacity-85">{f.description}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {rest.map((f) => (
          <div key={f.id} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary"><Icon name={f.icon} className="h-5 w-5" /></span>
            <h3 className="mt-4 font-display font-semibold text-foreground">{f.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}
