import { Quote, Star } from "lucide-react";
import type { Testimonial } from "../data/site";
import Reveal from "./ui/Reveal";

export default function TestimonialCard({ t, delay = 0 }: { t: Testimonial; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-7 shadow-[0_2px_20px_rgba(10,23,48,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
        <div className="flex items-center justify-between">
          <Quote className="h-8 w-8 text-accent-500/30" fill="currentColor" />
          <div className="flex gap-0.5">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent-500 text-accent-500" />
            ))}
          </div>
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">"{t.text}"</p>
        <div className="mt-6 flex items-center gap-3 border-t border-navy-900/10 pt-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-accent-400">
            {t.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-bold text-navy-900">{t.name}</p>
            <p className="text-xs text-ink-500">{t.role}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
