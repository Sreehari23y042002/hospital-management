import {
  Activity,
  Baby,
  Bone,
  Brain,
  Droplet,
  Droplets,
  Ear,
  Eye,
  HeartPulse,
  PersonStanding,
  Radar,
  Ribbon,
  ScanLine,
  Smile,
  Stethoscope,
  Syringe,
  Wind,
  Dumbbell,
  type LucideIcon,
} from "lucide-react";

export interface Department {
  id: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  services: string[];
}

export const departments: Department[] = [
  {
    id: "cardiology",
    name: "Cardiology",
    icon: HeartPulse,
    tagline: "Advanced heart care, from prevention to intervention",
    description:
      "Our Cardiology department offers comprehensive heart care — preventive screening, non-invasive diagnostics, interventional procedures, and long-term cardiac rehabilitation, supported by a dedicated cath lab and cardiac ICU.",
    services: ["Angiography & Angioplasty", "Echocardiography", "Cardiac Rehabilitation", "Heart Failure Clinic", "24/7 Cardiac Emergency"],
  },
  {
    id: "neurology",
    name: "Neurology",
    icon: Brain,
    tagline: "Expert diagnosis and care for the brain and nervous system",
    description:
      "From stroke care to epilepsy and movement disorders, our neurologists combine advanced neuroimaging, EEG and EMG diagnostics with personalised treatment plans for conditions of the brain, spine and nervous system.",
    services: ["Stroke Unit", "Epilepsy Care", "Movement Disorder Clinic", "Neurophysiology (EEG/EMG)", "Headache & Migraine Clinic"],
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    icon: Bone,
    tagline: "Restoring movement, rebuilding strength",
    description:
      "Our orthopedic team treats everything from sports injuries to complex joint replacements, with dedicated physiotherapy support to get you moving again — safely and confidently.",
    services: ["Joint Replacement", "Sports Medicine", "Spine Care", "Arthroscopy", "Fracture & Trauma Care"],
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    icon: Baby,
    tagline: "Gentle, expert care for your little ones",
    description:
      "From newborn check-ups to adolescent care, our pediatricians provide vaccinations, growth monitoring, and treatment of childhood illnesses in a warm, child-friendly environment — backed by a dedicated PICU and NICU.",
    services: ["Well-Baby Clinic", "Vaccination", "Pediatric ICU (PICU)", "Childhood Nutrition", "Pediatric Emergencies"],
  },
  {
    id: "obstetrics-gynaecology",
    name: "Obstetrics & Gynaecology",
    icon: PersonStanding,
    tagline: "Care for women, at every stage of life",
    description:
      "We support women through pregnancy, childbirth and beyond — with antenatal care, painless delivery options, minimally invasive gynaecological surgery, and dedicated fertility and wellness services.",
    services: ["Antenatal & Postnatal Care", "Painless Delivery", "Laparoscopic Surgery", "Fertility Clinic", "Menopause Clinic"],
  },
  {
    id: "general-medicine",
    name: "General Medicine",
    icon: Stethoscope,
    tagline: "Your first point of care for everyday health",
    description:
      "Our internal medicine specialists diagnose and manage a wide range of conditions — fever, infections, diabetes, hypertension and lifestyle disorders — coordinating specialist care when you need it.",
    services: ["Diabetes Management", "Hypertension Clinic", "Fever & Infection Care", "Preventive Health Checks", "Geriatric Care"],
  },
  {
    id: "general-surgery",
    name: "General Surgery",
    icon: Syringe,
    tagline: "Safe, precise surgery with faster recovery",
    description:
      "From routine procedures to complex operations, our surgeons use minimally invasive laparoscopic techniques wherever possible — meaning smaller incisions, less pain and quicker discharge.",
    services: ["Laparoscopic Surgery", "Hernia Repair", "Appendectomy", "Gallbladder Surgery", "Day-Care Procedures"],
  },
  {
    id: "dermatology",
    name: "Dermatology",
    icon: Smile,
    tagline: "Healthy skin, hair and nails",
    description:
      "Our dermatologists treat medical skin conditions such as acne, eczema, psoriasis and hair loss, and offer cosmetic dermatology services with evidence-based, skin-safe protocols.",
    services: ["Acne & Eczema Care", "Hair & Scalp Clinic", "Allergy Testing", "Cosmetic Dermatology", "Skin Cancer Screening"],
  },
  {
    id: "ent",
    name: "ENT",
    icon: Ear,
    tagline: "Ear, nose and throat specialist care",
    description:
      "Our ENT specialists manage hearing loss, sinusitis, tonsillitis, voice disorders and sleep apnoea — with an on-site audiology lab and minimally invasive endoscopic procedures.",
    services: ["Audiology & Hearing Aids", "Sinus Surgery", "Tonsillectomy", "Vertigo Clinic", "Sleep Apnoea Care"],
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    icon: Eye,
    tagline: "Protecting and preserving your vision",
    description:
      "Complete eye care under one roof — from routine vision testing and cataract surgery to glaucoma management and diabetic retinopathy screening, using advanced diagnostic imaging.",
    services: ["Cataract Surgery", "LASIK & Refractive Surgery", "Glaucoma Care", "Retina Services", "Pediatric Ophthalmology"],
  },
  {
    id: "pulmonology",
    name: "Pulmonology",
    icon: Wind,
    tagline: "Helping you breathe easier",
    description:
      "Our chest physicians treat asthma, COPD, tuberculosis, sleep-disordered breathing and interstitial lung disease, supported by pulmonary function testing and bronchoscopy.",
    services: ["Asthma & COPD Clinic", "Pulmonary Function Tests", "Bronchoscopy", "Sleep Study", "Tuberculosis Care"],
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    icon: Activity,
    tagline: "Digestive health, diagnosed precisely",
    description:
      "From acid reflux to complex liver disease, our gastroenterologists use advanced endoscopy and colonoscopy to diagnose and treat disorders of the digestive tract, liver and pancreas.",
    services: ["Endoscopy & Colonoscopy", "Liver Clinic", "IBD Care", "Pancreas Clinic", "Endoscopic Procedures"],
  },
  {
    id: "urology",
    name: "Urology",
    icon: Droplets,
    tagline: "Specialist care for urinary and kidney health",
    description:
      "Our urologists treat kidney stones, prostate conditions, urinary incontinence and male infertility — with laser and minimally invasive options for faster, more comfortable recovery.",
    services: ["Kidney Stone Treatment", "Prostate Care", "Laser Urology", "Incontinence Clinic", "Male Infertility"],
  },
  {
    id: "nephrology",
    name: "Nephrology",
    icon: Droplet,
    tagline: "Kidney care and dialysis you can rely on",
    description:
      "We provide complete kidney care — chronic kidney disease management, dialysis, and kidney transplant work-up — in a dedicated, hygienic dialysis unit staffed by experienced technicians.",
    services: ["Dialysis Unit", "CKD Management", "Kidney Transplant Work-up", "Hypertension & Kidney Clinic", "Pediatric Nephrology"],
  },
  {
    id: "oncology",
    name: "Oncology",
    icon: Ribbon,
    tagline: "Fighting cancer with expertise and empathy",
    description:
      "Our oncology team offers chemotherapy, day-care cancer treatment, and coordinated surgical and radiation referrals — with counselling and palliative support for patients and families.",
    services: ["Chemotherapy Day-Care", "Cancer Screening", "Tumour Board Reviews", "Palliative Care", "Cancer Counselling"],
  },
  {
    id: "radiology",
    name: "Radiology & Imaging",
    icon: ScanLine,
    tagline: "Clear answers, advanced imaging",
    description:
      "Our digital imaging suite includes MRI, CT, digital X-ray, ultrasound and mammography — with fast turnaround of reports and radiologist-reviewed results.",
    services: ["1.5T MRI", "CT Scan", "Digital X-Ray", "Ultrasound", "Mammography"],
  },
  {
    id: "dentistry",
    name: "Dentistry",
    icon: Smile,
    tagline: "Complete dental care for the whole family",
    description:
      "From routine cleanings and fillings to root canals, implants and orthodontics, our dental suite delivers comfortable, modern care in a calm, sterile environment.",
    services: ["Root Canal Treatment", "Dental Implants", "Orthodontics", "Teeth Whitening", "Pediatric Dentistry"],
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy & Rehab",
    icon: Dumbbell,
    tagline: "Regain strength, motion and independence",
    description:
      "Our physiotherapists design personalised rehabilitation programmes for post-surgical recovery, sports injuries, neurological conditions and chronic pain — in a fully equipped rehab gym.",
    services: ["Post-Surgical Rehab", "Sports Injury Rehab", "Neuro Rehabilitation", "Chronic Pain Therapy", "Home Exercise Plans"],
  },
];

export function getDepartment(id: string) {
  return departments.find((d) => d.id === id);
}
