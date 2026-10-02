import { createFileRoute } from "@tanstack/react-router";
import { faqs } from "@/data/faqs";
import { PageHero } from "@/components/common/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => seo("FAQs", "Answers to common questions about appointments, visiting, insurance and more."),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" crumbs={[{ label: "FAQ" }]} />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6 shadow-[var(--shadow-card)]">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={String(i)}>
              <AccordionTrigger className="text-left font-semibold text-foreground">{f.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
