import theatreImg from "@/assets/facility-theatre.jpg";
import icuImg from "@/assets/facility-icu.jpg";
import diagnosticsImg from "@/assets/facility-diagnostics.jpg";

export interface Facility {
  id: string;
  name: string;
  description: string;
  icon: string;
  image?: string;
}

export const facilities: Facility[] = [
  {
    id: "operation-theatres",
    name: "Modern Operation Theatres",
    description: "Laminar-flow modular operating theatres with HEPA filtration and 24/7 surgical teams.",
    icon: "syringe",
    image: theatreImg,
  },
  {
    id: "icu",
    name: "Intensive Care Unit",
    description: "Intensivist-led multidisciplinary ICU with 1:1 nursing and continuous monitoring.",
    icon: "activity",
    image: icuImg,
  },
  {
    id: "nicu",
    name: "NICU",
    description: "Level-III neonatal intensive care with neonatologists, ventilators and family-centred care.",
    icon: "baby",
  },
  {
    id: "picu",
    name: "PICU",
    description: "Pediatric intensive care designed around children, with parents welcome at the bedside.",
    icon: "heart",
  },
  {
    id: "diagnostic-center",
    name: "Diagnostic Center",
    description: "MRI, CT, digital X-ray, ultrasound and mammography under one roof with same-day reports.",
    icon: "scan",
    image: diagnosticsImg,
  },
  {
    id: "pharmacy",
    name: "24/7 Pharmacy",
    description: "Round-the-clock in-house pharmacy with genuine medicines at controlled prices.",
    icon: "pill",
  },
  {
    id: "blood-bank",
    name: "Blood Bank",
    description: "Licensed blood bank with component separation and emergency availability.",
    icon: "droplet",
  },
  {
    id: "laboratory",
    name: "Laboratory",
    description: "NABL-standard pathology lab for biochemistry, haematology, microbiology and histopathology.",
    icon: "flask",
  },
  {
    id: "cafeteria",
    name: "Cafeteria",
    description: "Hygienic cafeteria serving nutritious meals, beverages and diet-conscious options.",
    icon: "coffee",
  },
  {
    id: "waiting-areas",
    name: "Waiting Areas",
    description: "Comfortable, air-conditioned lounges with seating, water and clear display boards.",
    icon: "armchair",
  },
  {
    id: "private-rooms",
    name: "Private Rooms",
    description: "Single and deluxe rooms with attendant beds, TV and private washrooms.",
    icon: "bed",
  },
  {
    id: "general-wards",
    name: "General Wards",
    description: "Bright, well-ventilated wards with attentive nursing and daily doctor rounds.",
    icon: "beddouble",
  },
  {
    id: "parking",
    name: "Parking",
    description: "Ample covered parking for cars and two-wheelers with valet assistance at peak hours.",
    icon: "car",
  },
  {
    id: "ambulance",
    name: "Ambulance Services",
    description: "GPS-tracked advanced and basic life-support ambulances, available 24/7.",
    icon: "ambulance",
  },
  {
    id: "accessibility",
    name: "Accessibility Facilities",
    description: "Wheelchair access, ramps, accessible washrooms and assistance at every floor.",
    icon: "accessibility",
  },
];
