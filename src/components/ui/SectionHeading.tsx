import { cn } from "../../utils/cn";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, align = "center", light = false }: Props) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]",
            light ? "border-white/20 bg-white/5 text-accent-400" : "border-navy-800/10 bg-navy-800/5 text-accent-600",
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={100}>
        <h2
          className={cn(
            "mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem]",
            light ? "text-white" : "text-navy-900",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={200}>
          <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", light ? "text-white/70" : "text-ink-500")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
