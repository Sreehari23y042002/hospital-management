import { Link } from "@tanstack/react-router";
import { HeartPulse, Mail, MapPin, Phone } from "lucide-react";
import { hospitalConfig, sampleNotice } from "@/data/config";

const cols = [
  { title: "Hospital", links: [["/about", "About Us"], ["/doctors", "Our Doctors"], ["/facilities", "Facilities"], ["/gallery", "Gallery"], ["/careers", "Careers"], ["/privacy", "Privacy Policy"], ["/terms", "Terms of Use"]] },
  { title: "Patients", links: [["/appointment", "Book Appointment"], ["/patients-visitors", "Patients & Visitors"], ["/insurance", "Insurance & Billing"], ["/departments", "Departments"], ["/health-library", "Health Library"], ["/faq", "FAQs"]] },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)]"><HeartPulse className="h-5 w-5" /></span>
            <span className="font-display text-lg font-bold">{hospitalConfig.shortName}</span>
          </div>
          <p className="mt-4 text-sm opacity-75">{hospitalConfig.description}</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="font-display font-semibold">{c.title}</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              {c.links.map(([to, label]) => (
                <li key={to}><Link to={to} className="hover:opacity-100 hover:underline">{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="font-display font-semibold">Contact</h3>
           <ul className="mt-4 space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0" />{hospitalConfig.addressLine}, {hospitalConfig.city}</li>
             <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0" /><a href={`tel:${hospitalConfig.phone}`} className="hover:underline">{hospitalConfig.phone}</a></li>
             <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0" /><a href={`mailto:${hospitalConfig.email}`} className="break-all hover:underline">{hospitalConfig.email}</a></li>
          </ul>
           <p className="mt-5 text-sm opacity-80">{hospitalConfig.hours}</p>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs opacity-60 sm:px-6 lg:px-8">
          © 2026 {hospitalConfig.name}. {sampleNotice}
        </div>
      </div>
    </footer>
  );
}
