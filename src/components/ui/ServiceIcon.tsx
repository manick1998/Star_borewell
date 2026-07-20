import {
  Drill,
  Wheat,
  Home,
  Factory,
  Wind,
  Cog,
  Waves,
  Wrench,
  FlaskConical,
  ShieldCheck,
  Truck,
  HardHat,
  IndianRupee,
  Zap,
  BadgeCheck,
  Users,
  type LucideProps,
} from "lucide-react";

function PipeGlyph(props: LucideProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4v6a4 4 0 0 0 4 4h8a4 4 0 0 1 4 4v2" />
      <circle cx="4" cy="4" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Drill,
  Wheat,
  Home,
  Factory,
  Wind,
  Cog,
  Waves,
  Wrench,
  FlaskConical,
  ShieldCheck,
  Truck,
  HardHat,
  IndianRupee,
  Zap,
  BadgeCheck,
  Users,
  PipeIcon: PipeGlyph,
};

export default function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Drill;
  return <Icon className={className} strokeWidth={2} />;
}
