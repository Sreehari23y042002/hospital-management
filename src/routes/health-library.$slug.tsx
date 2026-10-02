import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getArticle, relatedArticles } from "@/data/articles";
import { PageHero } from "@/components/common/PageHero";
import { Info } from "lucide-react";

export const Route = createFileRoute("/health-library/$slug")({
  loader: ({ params }) => {
    const a = getArticle(params.slug);
    if (!a) throw notFound();
    return { slug: a.slug, title: a.title, excerpt: a.excerpt };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    return { meta: [{ title: `${loaderData.title} | Aarogya Health Library` }, { name: "description", content: loaderData.excerpt }, { property: "og:title", content: loaderData.title }, { property: "og:description", content: loaderData.excerpt }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary" }] };
  },
  notFoundComponent: () => <p className="p-16 text-center text-muted-foreground">Article not found.</p>,
  component: ArticlePage,
});

function ArticlePage() {
  const a = getArticle(Route.useLoaderData().slug)!;
  return (
    <>
      <PageHero title={a.title} description={`${a.author}, ${a.authorRole} · ${new Date(a.date).toLocaleDateString("en-IN", { dateStyle: "long" })} · ${a.readingTime} min read`} crumbs={[{ label: "Health Library", to: "/health-library" }, { label: a.category }]} />
      <article className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-lg leading-relaxed text-foreground/85 sm:px-6">
        {a.content.map((p, i) => <p key={i}>{p}</p>)}
         <aside role="note" className="flex gap-3 border-l-4 border-primary bg-accent p-5 text-sm text-accent-foreground"><Info className="mt-0.5 h-5 w-5 shrink-0" /><p><strong>Medical information, not medical advice.</strong> This article is for general education only. For symptoms, diagnosis or treatment, speak with a qualified clinician.</p></aside>
      </article>
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <h2 className="font-display text-xl font-semibold text-foreground">Related reading</h2>
        <ul className="mt-4 space-y-2">
          {relatedArticles(a).map((r) => <li key={r.slug}><Link to="/health-library/$slug" params={{ slug: r.slug }} className="text-primary hover:underline">{r.title}</Link></li>)}
        </ul>
      </section>
    </>
  );
}
