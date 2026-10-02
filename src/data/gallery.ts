import theatreImg from "@/assets/facility-theatre.jpg";
import icuImg from "@/assets/facility-icu.jpg";
import heroImg from "@/assets/hero-hospital.jpg";
import teamImg from "@/assets/about-team.jpg";
import receptionImg from "@/assets/hospital-reception.jpg";
import diagnosticsImg from "@/assets/facility-diagnostics.jpg";

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: "Hospital" | "Facilities" | "Doctors" | "Events" | "Community";
  image?: string;
}

/**
 * SAMPLE gallery. Only a few photos are used for the demo; replace with
 * real hospital photography before production.
 */
export const galleryItems: GalleryItem[] = [
  { id: "g0", title: "Reception & Waiting Lounge", caption: "A welcoming space for patients and families.", category: "Hospital", image: receptionImg },
  {
    id: "g1",
    title: "Hospital Atrium",
    caption: "The main atrium — designed to feel calm, bright and welcoming.",
    category: "Hospital",
    image: heroImg,
  },
  {
    id: "g2",
    title: "Clinical Team Meeting",
    caption: "Our consultants review complex cases together in weekly multidisciplinary meetings.",
    category: "Doctors",
    image: teamImg,
  },
  {
    id: "g3",
    title: "Modular Operating Theatre",
    caption: "Laminar-flow modular OT with advanced surgical lighting.",
    category: "Facilities",
    image: theatreImg,
  },
  {
    id: "g4",
    title: "Intensive Care Unit",
    caption: "Our ICU bays feature continuous monitoring and 1:1 nursing.",
    category: "Facilities",
    image: icuImg,
  },
  { id: "g5", title: "Diagnostic Imaging", caption: "Imaging facilities designed around patient comfort.", category: "Facilities", image: diagnosticsImg },
];
