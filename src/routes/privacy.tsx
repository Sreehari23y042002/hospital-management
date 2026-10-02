import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => seo("Privacy Policy", "How we collect, use and protect your personal and health information."),
  component: Page,
});

const sections = [
  ["Information we collect", "Details you share through forms — name, phone, email and reason for visit — and basic website usage data."],
  ["How we use it", "To respond to enquiries, schedule appointments and improve our services. We never sell your data."],
  ["Medical confidentiality", "Clinical records are handled under applicable Indian law and accessed only by authorised care teams."],
  ["Your rights", "You may request access, correction or deletion of your personal data by writing to our care desk."],
];

function Page() {
  return (
    <>
      <PageHero title="Privacy Policy" description="Sample policy — to be reviewed by the hospital's legal team." crumbs={[{ label: "Privacy" }]} />
      <section className="mx-auto max-w-3xl space-y-8 px-4 py-16 sm:px-6">
        {sections.map(([t, d]) => (
          <div key={t}><h2 className="font-display text-xl font-semibold text-foreground">{t}</h2><p className="mt-2 text-muted-foreground">{d}</p></div>
        ))}
      </section>
    </>
  );
}
