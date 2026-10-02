import { createFileRoute } from "@tanstack/react-router";
import { Clock, FileText, Utensils, ShieldCheck, Car, Users, Phone } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { seo } from "@/lib/seo";
import { hospitalConfig } from "@/data/config";

export const Route = createFileRoute("/patients-visitors")({
  head: () => seo("Patients & Visitors", "Admission, visiting hours, what to bring, parking and discharge guidance."),
  component: Page,
});

const items = [
  [Clock, "Visiting hours", "General wards: 11 AM – 1 PM and 5 PM – 8 PM. ICU: 2 visitors at a time, 5–6 PM only."],
  [FileText, "What to bring", "Photo ID, previous reports and prescriptions, insurance card and a list of current medicines."],
  [Users, "Admission", "Report to the admission desk on the ground floor 30 minutes before your scheduled time."],
  [Utensils, "Food & cafeteria", "Diet plans are set by our nutritionists. The cafeteria is open 7 AM – 10 PM for visitors."],
  [Car, "Parking", "Visitor parking is available in the basement. Drop-off is free for 10 minutes at the main entrance."],
  [ShieldCheck, "Discharge", "Discharge summaries and bills are shared before noon. Pharmacy counters help with take-home medicines."],
] as const;

function Page() {
  return (
    <>
       <PageHero title="Patients & Visitors" description="Everything you need for a smooth, comfortable stay." crumbs={[{ label: "Patients & Visitors" }]} />
       <div className="border-y border-border bg-accent/60"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8"><div><p className="font-semibold text-foreground">Planning a visit?</p><p className="text-sm text-muted-foreground">{hospitalConfig.hours} · Please confirm visiting hours before travelling.</p></div><a href={`tel:${hospitalConfig.phone}`} className="inline-flex items-center gap-2 font-semibold text-primary"><Phone className="h-4 w-4" /> Call reception</a></div></div>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {items.map(([I, t, d]) => (
          <div key={t} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary"><I className="h-5 w-5" /></span>
            <h2 className="mt-4 font-display text-lg font-semibold text-foreground">{t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
