import { stats } from "../data/site";
import { useCountUp } from "../hooks/useCountUp";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div ref={ref} className="flex flex-col items-center gap-1 px-4 py-6 text-center sm:py-0">
      <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {current}
        <span className="text-accent-400">{suffix}</span>
      </span>
      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70 sm:text-sm">{label}</span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 divide-y divide-white/10 rounded-2xl border border-white/10 bg-navy-900/60 shadow-premium backdrop-blur-md sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
      {stats.map((s) => (
        <StatItem key={s.label} {...s} />
      ))}
    </div>
  );
}
