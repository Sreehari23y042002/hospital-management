import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { seo } from "@/lib/seo";
import { hospitalConfig } from "@/data/config";

export const Route = createFileRoute("/insurance")({
  head: () => seo("Insurance & Billing", "Cashless insurance partners, TPA desk support and transparent billing."),
  component: Page,
});

const partners = ["Star Health", "HDFC ERGO", "ICICI Lombard", "Niva Bupa", "Care Health", "Bajaj Allianz", "New India Assurance", "Aditya Birla Health", "CGHS", "ECHS"];
const steps = ["Share your insurance card and ID at the TPA desk", "We send the pre-authorisation request to your insurer", "Approval is usually received within 2–6 hours", "Pay only non-covered items at discharge"];

function Page() {
  return (
    <>
      <PageHero title="Insurance & Billing" description="Cashless treatment with leading insurers and clear, upfront billing." crumbs={[{ label: "Insurance" }]} />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-2xl font-semibold text-foreground">Empanelled partners</h2>
           <p className="mt-2 text-sm text-muted-foreground">Illustrative list only. Insurance networks and cashless eligibility change; please verify your policy and coverage before treatment.</p>
           <a href={`tel:${hospitalConfig.phone}`} className="mt-4 inline-flex font-semibold text-primary underline underline-offset-4">Call to check coverage</a>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {partners.map((p) => (
              <div key={p} className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground">{p}</div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <h2 className="font-display text-2xl font-semibold text-foreground">Cashless process</h2>
          <ol className="mt-6 space-y-4">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground"><strong>Step {i + 1}.</strong> {s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
