import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, GraduationCap, Languages, IndianRupee } from "lucide-react";
import { getDoctor } from "@/data/doctors";
import { PageHero } from "@/components/common/PageHero";

export const Route = createFileRoute("/doctors/$id")({
  loader: ({ params }) => {
    const d = getDoctor(params.id);
    if (!d) throw notFound();
    return { id: d.id, name: d.name, specialty: d.specialty };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Doctor not found" }, { name: "robots", content: "noindex" }] };
    const t = `${loaderData.name} — ${loaderData.specialty} | Aarogya`;
    const desc = `Profile, expertise and availability of ${loaderData.name}, ${loaderData.specialty}.`;
    return { meta: [{ title: t }, { name: "description", content: desc }, { property: "og:title", content: t }, { property: "og:description", content: desc }, { property: "og:type", content: "profile" }, { name: "twitter:card", content: "summary" }] };
  },
  notFoundComponent: () => <p className="p-16 text-center text-muted-foreground">Doctor not found.</p>,
  component: DoctorPage,
});

function DoctorPage() {
  const d = getDoctor(Route.useLoaderData().id)!;
  const initials = d.name.replace("Dr. ", "").split(" ").map((p) => p[0]).join("");
  return (
    <>
      <PageHero title={d.name} description={`${d.specialty} · ${d.qualification}`} crumbs={[{ label: "Doctors", to: "/doctors" }, { label: d.name }]} />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <aside className="h-fit rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)]">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] font-display text-3xl font-bold text-primary-foreground">{initials}</div>
          <p className="mt-4 text-sm text-muted-foreground">{d.experience} years experience</p>
          <ul className="mt-6 space-y-3 text-left text-sm text-foreground">
            <li className="flex gap-2"><Clock className="h-4 w-4 text-primary" />{d.availability}</li>
            <li className="flex gap-2"><Languages className="h-4 w-4 text-primary" />{d.languages.join(", ")}</li>
            <li className="flex gap-2"><IndianRupee className="h-4 w-4 text-primary" />Consultation ₹{d.fee}</li>
          </ul>
          <Link to="/appointment" className="mt-6 block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Book with {d.name.split(" ")[1]}</Link>
        </aside>
        <div className="space-y-10 lg:col-span-2">
          <p className="text-lg leading-relaxed text-muted-foreground">{d.bio}</p>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">Areas of expertise</h2>
            <div className="mt-4 flex flex-wrap gap-2">{d.expertise.map((e) => <span key={e} className="rounded-full bg-accent px-4 py-1.5 text-sm text-accent-foreground">{e}</span>)}</div>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">Education</h2>
            <ul className="mt-4 space-y-2">{d.education.map((e) => <li key={e} className="flex gap-2 text-muted-foreground"><GraduationCap className="h-5 w-5 text-primary" />{e}</li>)}</ul>
          </div>
        </div>
      </section>
    </>
  );
}
