import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/site";
import Reveal from "./ui/Reveal";
import { cn } from "../utils/cn";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-navy-900/10 overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-[0_2px_20px_rgba(10,23,48,0.05)]">
      {faqs.map((f, i) => (
        <Reveal key={f.q} delay={Math.min(i, 6) * 40}>
          <div>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-navy-900/[0.02]"
              aria-expanded={open === i}
            >
              <span className="text-sm font-bold text-navy-900 sm:text-base">{f.q}</span>
              <ChevronDown
                className={cn("h-5 w-5 shrink-0 text-accent-500 transition-transform duration-300", open === i && "rotate-180")}
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-300 ease-in-out",
                open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden px-6">
                <p className="pb-5 text-sm leading-relaxed text-ink-500">{f.a}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
