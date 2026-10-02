/**
 * Hospital configuration — the single place to customise the site for a real
 * hospital. All contact details below are SAMPLE values for the demo; replace
 * them with the hospital's real information before going live.
 */
export const hospitalConfig = {
  name: "Aarogya Multispeciality Hospital",
  shortName: "Aarogya",
  tagline: "Compassionate Care. Advanced Medicine. Better Outcomes.",
  description:
    "Providing comprehensive, patient-centered healthcare with experienced specialists, advanced technology, and compassionate care.",
  phone: "+91 98200 12345",
  ambulance: "+91 98200 99911",
  emergency: "+91 22 4000 1234",
  email: "care@aarogyahospital.example",
  addressLine: "24 Wellness Avenue, Andheri West",
  city: "Mumbai",
  region: "Maharashtra 400053",
  country: "India",
  hours: "OPD: Mon–Sat, 8:00 AM – 8:00 PM · Emergency: Open 24/7",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Andheri+West+Mumbai",
} as const;

export const sampleNotice =
  "This is a demonstration website with sample content. Contact details, doctors, and statistics are illustrative and should be replaced with real hospital information.";
