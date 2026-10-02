import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { getDepartment } from "@/data/departments";
import { doctorsByDepartment } from "@/data/doctors";
import { PageHero } from "@/components/common/PageHero";
import { DoctorCard } from "@/components/common/Cards";

export const Route = createFileRoute("/departments/$id")({
  loader: ({ params }) => {
    const dept = getDepartment(params.id);
    if (!dept) throw notFound();
    return { id: dept.id, name: dept.name, tagline: dept.tagline };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Department not found" }, { name: "robots", content: "noindex" }] };
    const t = `${loaderData.name} | Aarogya Multispeciality Hospital`;
    return { meta: [{ title: t }, { name: "description", content: loaderData.tagline }, { property: "og:title", content: t }, { property: "og:description", content: loaderData.tagline }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] };
  },
  notFoundComponent: () => <p className="p-16 text-center text-muted-foreground">Department not found.</p>,
  component: DepartmentPage,
});

function DepartmentPage() {
  const { id } = Route.useLoaderData();
  const d = getDepartment(id)!;
  const docs = doctorsByDepartment(id);
  return (
    <>
      <PageHero title={d.name} description={d.tagline} crumbs={[{ label: "Departments", to: "/departments" }, { label: d.name }]} />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2">
          <p className="text-lg leading-relaxed text-muted-foreground">{d.description}</p>
          <Link to="/appointment" className="mt-5 inline-flex rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground lg:hidden">Book Appointment</Link>
          <h2 className="mt-10 font-display text-2xl font-semibold text-foreground">Services offered</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {d.services.map((s) => (
              <li key={s} className="flex items-center gap-2 rounded-xl border border-border bg-card p-4 text-foreground"><CheckCircle2 className="h-5 w-5 text-primary" />{s}</li>
            ))}
          </ul>
        </div>
        <aside className="h-fit rounded-2xl bg-[image:var(--gradient-primary)] p-8 text-primary-foreground shadow-[var(--shadow-lift)]">
          <d.icon className="h-10 w-10" />
          <h3 className="mt-4 font-display text-xl font-semibold">Consult a {d.name} specialist</h3>
          <Link to="/appointment" className="mt-6 inline-block rounded-full bg-card px-6 py-3 font-semibold text-primary">Book Appointment</Link>
        </aside>
      </section>
      {docs.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-foreground">Our specialists</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{docs.map((doc) => <DoctorCard key={doc.id} d={doc} />)}</div>
        </section>
      )}
    </>
  );
}
