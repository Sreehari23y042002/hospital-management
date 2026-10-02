import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { articles, articleCategories } from "@/data/articles";
import { PageHero } from "@/components/common/PageHero";
import { Icon } from "@/components/common/icons";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/health-library/")({
  head: () => seo("Health Library", "Doctor-written articles on heart health, diabetes, child care, wellness and more."),
  component: Library,
});

function Library() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? articles : articles.filter((a) => a.category === cat);
  return (
    <>
      <PageHero title="Health Library" description="Trusted health information written by our doctors." crumbs={[{ label: "Health Library" }]} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {["All", ...articleCategories].map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm font-medium ${cat === c ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((a) => (
            <Link key={a.slug} to="/health-library/$slug" params={{ slug: a.slug }} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1">
              <div className={`flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${a.cover}`}><Icon name={a.coverIcon} className="h-14 w-14 text-primary-foreground opacity-90" /></div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{a.category}</span>
                <h2 className="mt-2 font-display text-lg font-semibold text-foreground group-hover:text-primary">{a.title}</h2>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{a.excerpt}</p>
                <p className="mt-4 text-xs text-muted-foreground">{a.author} · {a.readingTime} min read</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
