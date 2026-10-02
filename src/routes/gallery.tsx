import { createFileRoute } from "@tanstack/react-router";
import { galleryItems } from "@/data/gallery";
import { PageHero } from "@/components/common/PageHero";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => seo("Gallery", "A look inside our hospital, facilities and clinical teams."),
  component: Gallery,
});

function Gallery() {
  return (
    <>
       <PageHero title="Gallery" description="A glimpse of the spaces and people behind our care. Images are illustrative." crumbs={[{ label: "Gallery" }]} />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:px-8">
        {galleryItems.map((g) => (
          <figure key={g.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
             <img src={g.image} alt={`Illustration: ${g.title}`} loading="lazy" width={1536} height={1024} className="aspect-[16/10] w-full object-cover" />
            <figcaption className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{g.category}</span>
              <p className="mt-1 font-display font-semibold text-foreground">{g.title}</p>
              <p className="text-sm text-muted-foreground">{g.caption}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
