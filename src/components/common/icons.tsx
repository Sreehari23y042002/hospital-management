import {
  Accessibility, Activity, Ambulance, Armchair, Baby, Bed, BedDouble, Brain, Car, Coffee, Droplet,
  FlaskConical, Heart, HeartPulse, Pill, Scan, Stethoscope, Syringe, Apple, Shield, Sun, Bone, Smile,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  accessibility: Accessibility, activity: Activity, ambulance: Ambulance, armchair: Armchair, baby: Baby,
  bed: Bed, beddouble: BedDouble, brain: Brain, car: Car, coffee: Coffee, droplet: Droplet, flask: FlaskConical,
  heart: Heart, heartpulse: HeartPulse, pill: Pill, scan: Scan, stethoscope: Stethoscope, syringe: Syringe,
  apple: Apple, shield: Shield, sun: Sun, bone: Bone, smile: Smile,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? Stethoscope;
  return <C className={className} aria-hidden="true" />;
}
