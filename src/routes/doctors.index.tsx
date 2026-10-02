import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { doctors } from "@/data/doctors";
import { departments } from "@/data/departments";
import { PageHero } from "@/components/common/PageHero";
import { DoctorCard } from "@/components/common/Cards";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/doctors/")({
  head: () => seo("Our Doctors", "Find experienced specialists by name or department and book a consultation."),
  component: Doctors,
});

function Doctors() {
  const [q, setQ] = useState("");
  const [dept, setDept] = useState("all");
  const list = doctors.filter(
    (d) => (dept === "all" || d.departmentId === dept) && (d.name + d.specialty).toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <>
      <PageHero title="Find a Doctor" description="Search our specialists by name, specialty or department." crumbs={[{ label: "Doctors" }]}>
        <div className="flex max-w-2xl flex-col gap-3 sm:flex-row">
          <label className="flex flex-1 items-center gap-2 rounded-full border border-border bg-card px-4 py-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search doctors…" className="w-full bg-transparent text-foreground outline-none" />
          </label>
          <select value={dept} onChange={(e) => setDept(e.target.value)} className="rounded-full border border-border bg-card px-4 py-3 text-foreground">
            <option value="all">All departments</option>
            {departments.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
          </select>
        </div>
      </PageHero>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {list.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{list.map((d) => <DoctorCard key={d.id} d={d} />)}</div>
        ) : (
          <p className="text-center text-muted-foreground">No doctors match your search.</p>
        )}
      </section>
    </>
  );
}
