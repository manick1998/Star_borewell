import { whyChooseUs } from "../data/site";
import { iconMap } from "./ui/ServiceIcon";
import Reveal from "./ui/Reveal";

export default function WhyChooseUs() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {whyChooseUs.map((item, i) => {
        const Icon = iconMap[item.icon];
        return (
          <Reveal key={item.title} delay={i * 70}>
            <div className="group flex h-full gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                {Icon && <Icon className="h-6 w-6" />}
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{item.text}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
