import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => seo("Terms of Use", "Terms governing use of this website and online appointment requests."),
  component: Page,
});

const sections = [
  ["Not medical advice", "Content on this site is for general information and does not replace a consultation with a doctor."],
  ["Appointments", "Online bookings are requests and are confirmed only after our team calls you."],
  ["Emergencies", "Do not use this website in an emergency. Call our 24/7 emergency line or visit the nearest emergency room."],
  ["Changes", "We may update these terms at any time. Continued use of the site means you accept the latest version."],
];

function Page() {
  return (
    <>
      <PageHero title="Terms of Use" description="Sample terms — to be reviewed by the hospital's legal team." crumbs={[{ label: "Terms" }]} />
      <section className="mx-auto max-w-3xl space-y-8 px-4 py-16 sm:px-6">
        {sections.map(([t, d]) => (
          <div key={t}><h2 className="font-display text-xl font-semibold text-foreground">{t}</h2><p className="mt-2 text-muted-foreground">{d}</p></div>
        ))}
      </section>
    </>
  );
}
