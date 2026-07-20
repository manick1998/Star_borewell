import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import type { Service } from "../data/site";
import ServiceIcon from "./ui/ServiceIcon";
import Reveal from "./ui/Reveal";

export default function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div
        id={service.slug}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/8 bg-white p-7 shadow-[0_2px_20px_rgba(10,23,48,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(10,23,48,0.15)] scroll-mt-28"
      >
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent-500/5 transition-transform duration-500 group-hover:scale-150" />
        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-accent-400 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
          <ServiceIcon name={service.icon} className="h-7 w-7" />
        </div>
        <h3 className="relative z-10 mt-5 text-xl font-bold text-navy-900">{service.title}</h3>
        <p className="relative z-10 mt-3 text-sm leading-relaxed text-ink-500">{service.short}</p>

        <ul className="relative z-10 mt-5 space-y-2 border-t border-dashed border-navy-900/10 pt-5">
          {service.benefits.slice(0, 3).map((b) => (
            <li key={b} className="flex items-start gap-2 text-xs font-medium text-ink-700">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-500" />
              {b}
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="relative z-10 mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-navy-800 transition-colors group-hover:text-accent-600"
        >
          Get Free Quote
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </Reveal>
  );
}
