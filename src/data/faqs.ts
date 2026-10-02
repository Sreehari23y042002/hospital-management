export interface Faq {
  question: string;
  answer: string;
}

/** SAMPLE answers — align these with real hospital policy before production. */
export const faqs: Faq[] = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online through our Appointments page — choose a department, doctor, date and time slot, then submit your details. You can also call the hospital or visit the front desk. We will confirm your appointment by phone or email.",
  },
  {
    question: "How can I find a doctor?",
    answer:
      "Use our Doctors page to search by name and filter by specialty, department, experience and availability. Each doctor has a profile page with qualifications, expertise and consultation timings.",
  },
  {
    question: "What documents should I bring for my visit?",
    answer:
      "Please bring a photo ID (Aadhaar, PAN or passport), any previous prescriptions and medical reports, your insurance card or e-card if applicable, and a list of medications you currently take.",
  },
  {
    question: "What are the visiting hours?",
    answer:
      "General wards: 11:00 AM – 12:30 PM and 5:00 PM – 7:00 PM. ICU visits are limited and coordinated with the nursing station. Please check with the ward staff for current timings.",
  },
  {
    question: "Does the hospital provide emergency services?",
    answer:
      "Yes — our Emergency Department is open 24 hours a day, 7 days a week, with a dedicated resuscitation bay, on-site blood bank and 24/7 operating theatres. Call our emergency number or come directly to the emergency entrance.",
  },
  {
    question: "How can I contact the ambulance?",
    answer:
      "Call our 24/7 ambulance line. Provide your location, the patient's condition and a callback number. Our GPS-tracked ambulances are dispatched immediately and our team will guide you until it arrives.",
  },
  {
    question: "How can I access my medical reports?",
    answer:
      "Digital reports are shared on the email address registered at admission. For physical copies, visit the medical records desk with your hospital ID. Reports can usually be collected the same day they are finalised.",
  },
  {
    question: "Which insurance providers are accepted?",
    answer:
      "We work with a range of insurance providers and TPAs for cashless treatment. Because empanelments change, please confirm your insurer on our Insurance page or call the billing desk before admission.",
  },
  {
    question: "How can I cancel or reschedule an appointment?",
    answer:
      "Call the appointment desk with your appointment reference number. Please cancel or reschedule at least 4 hours in advance so the slot can be offered to another patient.",
  },
];
