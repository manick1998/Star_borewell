import type { PropsWithChildren } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PropsWithChildren<{ eyebrow: string; title: string; description?: string }>) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-36 text-white sm:pt-40">
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-navy-700/40 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent-600/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent-400">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
          {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        {description && <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{description}</p>}
        {children}
      </div>
    </section>
  );
}
