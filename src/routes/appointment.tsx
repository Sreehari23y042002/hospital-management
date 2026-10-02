import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import { PageHero } from "@/components/common/PageHero";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/appointment")({
  head: () => seo("Book an Appointment", "Book a consultation online — choose department, doctor, date and time."),
  component: Appointment,
});

const slots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];
const steps = ["Department", "Doctor & time", "Your details"];
const field = "w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring";

function Appointment() {
  const [step, setStep] = useState(0);
  const [f, setF] = useState({ dept: "", doctor: "", date: "", slot: "", name: "", phone: "", email: "", notes: "" });
  const [done, setDone] = useState(false);
  const set = (k: keyof typeof f, v: string) => setF((p) => ({ ...p, [k]: v }));
  const docs = doctors.filter((d) => d.departmentId === f.dept);
  const today = new Date().toISOString().slice(0, 10);
  const canNext = step === 0 ? !!f.dept : step === 1 ? !!(f.doctor && f.date && f.slot) : !!(f.name && /^[+\d\s-]{8,}$/.test(f.phone));

  if (done) {
    const doc = doctors.find((d) => d.id === f.doctor);
    return (
      <section className="mx-auto max-w-xl px-4 py-24 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
        <h1 className="mt-6 font-display text-3xl font-bold text-foreground">Request received</h1>
         <p className="mt-3 text-muted-foreground">Thank you, {f.name}. Your selection of {doc?.name ?? "a doctor"} on {f.date} at {f.slot} is shown here for this demo. No appointment has been sent or reserved. Please call the hospital to arrange a visit.</p>
        <Link to="/" className="mt-8 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Back to home</Link>
      </section>
    );
  }

  return (
    <>
       <PageHero title="Book an Appointment" description="Choose a department, doctor and time. This demonstration does not send appointment requests." crumbs={[{ label: "Appointment" }]} />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <ol className="mb-8 flex gap-2">
          {steps.map((s, i) => (
            <li key={s} className="flex-1">
              <div className={`h-1.5 rounded-full ${i <= step ? "bg-primary" : "bg-muted"}`} />
              <p className={`mt-2 text-xs font-semibold ${i <= step ? "text-primary" : "text-muted-foreground"}`}>{i + 1}. {s}</p>
            </li>
          ))}
        </ol>
        <form
          className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
          onSubmit={(e) => { e.preventDefault(); if (!canNext) return; step < 2 ? setStep(step + 1) : setDone(true); }}
        >
          {step === 0 && (
            <div className="grid gap-3 sm:grid-cols-2">
              {departments.map((d) => (
                <button type="button" key={d.id} onClick={() => { set("dept", d.id); set("doctor", ""); }}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${f.dept === d.id ? "border-primary bg-accent" : "border-border hover:border-primary/50"}`}>
                  <d.icon className="h-5 w-5 text-primary" /><span className="font-medium text-foreground">{d.name}</span>
                </button>
              ))}
            </div>
          )}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-foreground">Doctor</label>
                <select className={field} value={f.doctor} onChange={(e) => set("doctor", e.target.value)}>
                  <option value="">{docs.length ? "Select a doctor" : "Any available doctor"}</option>
                  {docs.length ? docs.map((d) => <option key={d.id} value={d.id}>{d.name} — {d.specialty}</option>) : <option value="any">Any available doctor</option>}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-foreground">Date</label>
                <input type="date" min={today} className={field} value={f.date} onChange={(e) => set("date", e.target.value)} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-foreground">Time slot</label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {slots.map((s) => (
                    <button type="button" key={s} onClick={() => set("slot", s)} className={`rounded-lg border py-2 text-sm ${f.slot === s ? "border-primary bg-primary text-primary-foreground" : "border-border text-foreground"}`}>{s}</button>
                  ))}
                </div>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <input className={field} placeholder="Full name *" value={f.name} onChange={(e) => set("name", e.target.value)} maxLength={80} />
              <input className={field} placeholder="Phone *" value={f.phone} onChange={(e) => set("phone", e.target.value)} maxLength={20} />
              <input className={`${field} sm:col-span-2`} type="email" placeholder="Email (optional)" value={f.email} onChange={(e) => set("email", e.target.value)} />
              <textarea className={`${field} sm:col-span-2`} rows={3} placeholder="Reason for visit (optional)" value={f.notes} onChange={(e) => set("notes", e.target.value)} maxLength={500} />
            </div>
          )}
          <div className="mt-8 flex justify-between">
            <button type="button" disabled={step === 0} onClick={() => setStep(step - 1)} className="rounded-full px-6 py-3 font-semibold text-muted-foreground disabled:opacity-40">Back</button>
             <button type="submit" disabled={!canNext} className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground disabled:opacity-50">{step < 2 ? "Continue" : "Review selection"}</button>
          </div>
        </form>
      </section>
    </>
  );
}
