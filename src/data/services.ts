export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: Service[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  departmentId?: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "diagnostics",
    name: "Diagnostic Services",
    description:
      "Fast, accurate diagnostics reviewed by consultant radiologists and pathologists — with digital reports available the same day.",
    icon: "scan",
    services: [
      {
        id: "mri",
        name: "MRI (1.5T)",
        description: "High-resolution magnetic resonance imaging for brain, spine, joints and whole-body screening.",
        features: ["Wide-bore scanner for comfort", "Same-day radiologist review", "Digital reports online"],
        departmentId: "radiology",
      },
      {
        id: "ct-scan",
        name: "CT Scan",
        description: "Low-dose multi-slice CT for rapid, detailed imaging in emergencies and routine diagnostics.",
        features: ["Low-dose protocols", "Cardiac & chest CT", "24/7 emergency availability"],
        departmentId: "radiology",
      },
      {
        id: "x-ray",
        name: "Digital X-Ray",
        description: "Instant digital radiography with immediate image preview and reduced radiation exposure.",
        features: ["Walk-in, no appointment needed", "Instant processing", "Low radiation dose"],
        departmentId: "radiology",
      },
      {
        id: "ultrasound",
        name: "Ultrasound",
        description: "Obstetric, abdominal and musculoskeletal ultrasound performed by experienced sonographers.",
        features: ["Obstetric scans", "Colour Doppler", "Guided procedures"],
        departmentId: "radiology",
      },
      {
        id: "laboratory",
        name: "Laboratory",
        description: "NABL-standard pathology laboratory covering biochemistry, haematology, microbiology and histopathology.",
        features: ["Same-day routine reports", "Home sample collection", "Preventive health packages"],
        departmentId: "radiology",
      },
      {
        id: "ecg-echo",
        name: "ECG & Echocardiogram",
        description: "Cardiac electrical and structural testing for arrhythmia, heart failure and ischaemia work-ups.",
        features: ["Stress ECG / TMT", "2D Echo & Colour Doppler", "Holter monitoring"],
        departmentId: "cardiology",
      },
    ],
  },
  {
    id: "treatment",
    name: "Treatment Services",
    description:
      "Specialist treatment across medical and surgical disciplines, coordinated through multidisciplinary tumour boards and care teams.",
    icon: "stethoscope",
    services: [
      {
        id: "surgery",
        name: "Minimally Invasive Surgery",
        description: "Laparoscopic and endoscopic procedures across general surgery, gynaecology and urology.",
        features: ["Smaller incisions", "Shorter hospital stay", "Faster recovery"],
        departmentId: "general-surgery",
      },
      {
        id: "cardiac-care",
        name: "Cardiac Care",
        description: "Preventive, interventional and rehabilitative heart care in a dedicated cardiac ICU with a cath lab.",
        features: ["24/7 cardiac emergency", "Angioplasty & stenting", "Cardiac rehabilitation"],
        departmentId: "cardiology",
      },
      {
        id: "cancer-care",
        name: "Cancer Care",
        description: "Chemotherapy day-care, tumour board reviews and coordinated surgical and radiation referrals.",
        features: ["Multidisciplinary tumour board", "Day-care chemotherapy", "Palliative support"],
        departmentId: "oncology",
      },
      {
        id: "orthopedic-care",
        name: "Orthopedic Care",
        description: "Joint replacement, arthroscopy, spine care and trauma surgery with in-house rehabilitation.",
        features: ["Enhanced-recovery protocols", "Dedicated physiotherapy", "Day-care procedures"],
        departmentId: "orthopedics",
      },
      {
        id: "womens-health",
        name: "Women's Health",
        description: "Antenatal care, painless delivery, minimally invasive gynaecology and wellness screening.",
        features: ["Birthing suites", "High-risk pregnancy unit", "Fertility counselling"],
        departmentId: "obstetrics-gynaecology",
      },
      {
        id: "child-care",
        name: "Child Care",
        description: "Pediatric OPD, immunisation, growth monitoring and dedicated PICU/NICU support.",
        features: ["Child-friendly wards", "Vaccination clinic", "Pediatric intensivists"],
        departmentId: "pediatrics",
      },
      {
        id: "physiotherapy",
        name: "Physiotherapy",
        description: "Personalised rehabilitation programmes in a fully equipped rehab gym.",
        features: ["Post-surgical rehab", "Sports injury care", "Neuro rehabilitation"],
        departmentId: "physiotherapy",
      },
      {
        id: "rehabilitation",
        name: "Rehabilitation",
        description: "Multidisciplinary recovery programmes for stroke, trauma and post-operative patients.",
        features: ["Stroke rehab", "Occupational therapy", "Home exercise plans"],
        departmentId: "physiotherapy",
      },
    ],
  },
  {
    id: "critical-care",
    name: "Critical Care",
    description:
      "Round-the-clock intensive care backed by intensivists, advanced monitoring and rapid-response teams.",
    icon: "activity",
    services: [
      {
        id: "icu",
        name: "ICU",
        description: "Multidisciplinary intensive care with 1:1 nursing ratios and continuous monitoring.",
        features: ["Intensivist-led care", "Invasive & non-invasive ventilation", "24/7 monitoring"],
      },
      {
        id: "nicu",
        name: "NICU",
        description: "Level-III neonatal intensive care for premature and critically ill newborns.",
        features: ["Neonatologists on call", "Ventilation & phototherapy", "Kangaroo mother care"],
        departmentId: "pediatrics",
      },
      {
        id: "picu",
        name: "PICU",
        description: "Pediatric intensive care designed around children, with family-centred visiting.",
        features: ["Pediatric intensivists", "Child-specific equipment", "Parent accommodation nearby"],
        departmentId: "pediatrics",
      },
      {
        id: "emergency-care",
        name: "Emergency Care",
        description: "24/7 emergency department with triage within minutes of arrival and direct admission pathways.",
        features: ["Open 24/7, all days", "Golden-hour stroke & cardiac protocol", "Dedicated resuscitation bay"],
      },
      {
        id: "trauma-care",
        name: "Trauma Care",
        description: "Multidisciplinary trauma response with surgeons, orthopedicians and blood bank on standby.",
        features: ["Rapid trauma team", "On-site blood bank", "24/7 operating theatres"],
      },
    ],
  },
];

export function findService(id: string): { service: Service; category: ServiceCategory } | undefined {
  for (const category of serviceCategories) {
    const service = category.services.find((s) => s.id === id);
    if (service) return { service, category };
  }
  return undefined;
}
