import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { hospitalConfig } from "@/data/config";
import { PageHero } from "@/components/common/PageHero";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact Us", "Address, phone numbers, visiting hours and a quick enquiry form."),
  component: Contact,
});

const field = "w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const [sent, setSent] = useState(false);
  const items = [
    [MapPin, "Address", `${hospitalConfig.addressLine}, ${hospitalConfig.city}, ${hospitalConfig.region}`],
    [Phone, "Phone", hospitalConfig.phone],
    [Mail, "Email", hospitalConfig.email],
    [Clock, "Hours", hospitalConfig.hours],
  ] as const;
  return (
    <>
      <PageHero title="Contact Us" description="We're here to help — reach out any time." crumbs={[{ label: "Contact" }]} />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          {items.map(([I, t, v]) => (
            <div key={t} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary"><I className="h-5 w-5" /></span>
              <div><p className="font-semibold text-foreground">{t}</p><p className="text-sm text-muted-foreground">{v}</p></div>
            </div>
          ))}
          <a href={hospitalConfig.mapUrl} target="_blank" rel="noreferrer" className="inline-block font-semibold text-primary">Open in Google Maps →</a>
        </div>
        <form
           onSubmit={(e) => { e.preventDefault(); setSent(true); toast.info("Demo only — your message was not sent."); (e.target as HTMLFormElement).reset(); }}
          className="space-y-4 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
        >
          <h2 className="font-display text-2xl font-semibold text-foreground">Send an enquiry</h2>
           <p className="text-sm text-muted-foreground">This demonstration form does not send messages. Please call for assistance.</p>
          <input required maxLength={80} className={field} placeholder="Your name" />
          <input required type="email" className={field} placeholder="Email" />
          <input className={field} placeholder="Phone" maxLength={20} />
          <textarea required rows={4} maxLength={1000} className={field} placeholder="How can we help?" />
          <button className="w-full rounded-full bg-primary py-3 font-semibold text-primary-foreground">Send message</button>
           {sent && <p className="text-center text-sm text-primary">Demo complete. No message was sent.</p>}
        </form>
      </section>
    </>
  );
}
