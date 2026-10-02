export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

/**
 * SAMPLE testimonials for demonstration only — these are illustrative
 * examples, not real patient statements. Replace with verified,
 * consented patient feedback before production use.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sample Patient — R. S.",
    location: "Andheri, Mumbai",
    rating: 5,
    text: "The cardiology team explained every step of my father's treatment in language we understood. The nurses checked on us constantly — we never once felt lost.",
    date: "2026-07-14",
  },
  {
    id: "t2",
    name: "Sample Patient — M. K.",
    location: "Bandra, Mumbai",
    rating: 5,
    text: "From the first scan to delivery day, the obstetrics team treated me like family. The painless delivery option made all the difference.",
    date: "2026-06-30",
  },
  {
    id: "t3",
    name: "Sample Patient — A. T.",
    location: "Powai, Mumbai",
    rating: 4,
    text: "Booked an appointment online in minutes and was seen on time. The diagnostic reports were ready the same evening.",
    date: "2026-06-18",
  },
  {
    id: "t4",
    name: "Sample Patient — S. D.",
    location: "Juhu, Mumbai",
    rating: 5,
    text: "After my knee replacement, the physiotherapy team had me walking within a day. Six weeks later I'm back to my morning walks.",
    date: "2026-05-27",
  },
  {
    id: "t5",
    name: "Sample Patient — V. P.",
    location: "Versova, Mumbai",
    rating: 5,
    text: "The pediatric ward is bright and calm — my daughter was actually sad to leave! The doctors were patient with a hundred questions.",
    date: "2026-05-09",
  },
  {
    id: "t6",
    name: "Sample Patient — N. B.",
    location: "Lokhandwala, Mumbai",
    rating: 4,
    text: "The emergency team acted within minutes when my husband had chest pain at 2 AM. Their golden-hour protocol saved him.",
    date: "2026-04-22",
  },
];
