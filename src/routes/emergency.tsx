import { createFileRoute } from "@tanstack/react-router";
import { Ambulance, HeartPulse, Phone, Siren } from "lucide-react";
import { hospitalConfig } from "@/data/config";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/emergency")({
  head: () => seo("24/7 Emergency", "Round-the-clock emergency, trauma and ambulance services. Call now."),
  component: Emergency,
});

function Emergency() {
  return (
    <>
      <section className="bg-emergency text-emergency-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Siren className="mx-auto h-14 w-14" />
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">24/7 Emergency Care</h1>
          <p className="mx-auto mt-3 max-w-xl opacity-90">If this is a life-threatening emergency, call immediately. Our team is ready around the clock.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`tel:${hospitalConfig.emergency}`} className="inline-flex items-center gap-2 rounded-full bg-card px-8 py-4 text-lg font-bold text-emergency"><Phone /> {hospitalConfig.emergency}</a>
            <a href={`tel:${hospitalConfig.ambulance}`} className="inline-flex items-center gap-2 rounded-full border-2 border-emergency-foreground px-8 py-4 text-lg font-bold"><Ambulance /> Ambulance</a>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          ["Triage in minutes", "Patients are assessed immediately on arrival and prioritised by severity."],
          ["Golden-hour protocols", "Dedicated stroke, cardiac and trauma pathways with rapid-response teams."],
          ["Direct ICU access", "Seamless transfer to ICU, cath lab or operation theatres when needed."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
            <HeartPulse className="h-8 w-8 text-emergency" />
            <h2 className="mt-4 font-display text-lg font-semibold text-foreground">{t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
