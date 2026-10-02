export interface Job {
  id: string;
  position: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

/** SAMPLE job listings for demonstration — replace with real openings. */
export const jobs: Job[] = [
  {
    id: "j1",
    position: "Consultant — Cardiology",
    department: "Cardiology",
    location: "Mumbai (Andheri West)",
    type: "Full-time",
    experience: "5+ years post-DM/DNB",
    description:
      "Join our interventional cardiology team for OPD, cath-lab and ICU responsibilities, with academic and research opportunities.",
    requirements: ["DM/DNB in Cardiology", "Cath-lab experience preferred", "Valid medical council registration"],
  },
  {
    id: "j2",
    position: "Staff Nurse — ICU",
    department: "Critical Care",
    location: "Mumbai (Andheri West)",
    type: "Full-time (rotational shifts)",
    experience: "1–3 years",
    description:
      "Provide 1:1 critical nursing care in our multidisciplinary ICU, with structured orientation and upskilling support.",
    requirements: ["GNM / B.Sc Nursing", "ICU experience preferred", "Current nursing council registration"],
  },
  {
    id: "j3",
    position: "Radiologist",
    department: "Radiology & Imaging",
    location: "Mumbai (Andheri West)",
    type: "Full-time / Part-time",
    experience: "2+ years",
    description:
      "Report MRI, CT, X-ray and ultrasound studies on a modern PACS workflow with a supportive multidisciplinary team.",
    requirements: ["MD/DNB Radiology", "Cross-sectional imaging experience", "Maharashtra council registration"],
  },
  {
    id: "j4",
    position: "Physiotherapist",
    department: "Physiotherapy & Rehab",
    location: "Mumbai (Andheri West)",
    type: "Full-time",
    experience: "1+ year",
    description:
      "Deliver post-surgical, neurological and sports rehabilitation programmes in our fully equipped rehab gym.",
    requirements: ["BPT / MPT", "Hospital or clinical experience", "Good documentation skills"],
  },
  {
    id: "j5",
    position: "Lab Technician",
    department: "Laboratory",
    location: "Mumbai (Andheri West)",
    type: "Full-time (day shifts)",
    experience: "2+ years",
    description:
      "Run and maintain automated analysers across biochemistry and haematology with strict quality-control discipline.",
    requirements: ["DMLT / BMLT", "Analyser operation experience", "Attention to QC protocols"],
  },
  {
    id: "j6",
    position: "Front Office Executive",
    department: "Administration",
    location: "Mumbai (Andheri West)",
    type: "Full-time",
    experience: "1–2 years",
    description:
      "Be the first friendly face patients see — handle registrations, appointment desks and patient queries with warmth.",
    requirements: ["Graduate degree", "Excellent communication in English & Hindi", "Hospital experience a plus"],
  },
];
