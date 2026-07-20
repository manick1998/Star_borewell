import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import PageHero from "../components/PageHero";
import Reveal from "../components/ui/Reveal";
import ServiceIcon from "../components/ui/ServiceIcon";
import { CallButton, WhatsAppButton } from "../components/ui/CtaButtons";
import { services } from "../data/site";
import { cn } from "../utils/cn";

export default function Services() {
  usePageMeta(
    "Our Services | Borewell Drilling, Pump Installation & Repair — Star Borewell",
    "Explore Star Borewell's complete range of services: borewell drilling, agricultural & residential borewells, industrial drilling, pump installation, pipeline laying, repair and maintenance.",
  );

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete Borewell Engineering Solutions"
        description="From the first survey to final commissioning, we deliver every stage of borewell drilling, installation and maintenance with precision and care."
      />

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl space-y-16">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={0}>
              <div
                id={s.slug}
                className={cn(
                  "grid scroll-mt-28 items-center gap-10 lg:grid-cols-2",
                  i % 2 === 1 && "lg:[&>*:first-child]:order-2",
                )}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-premium">
                  <img src={s.image} alt={s.title} loading="lazy" className="h-72 w-full object-cover sm:h-96" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-500 text-white shadow-accent">
                    <ServiceIcon name={s.icon} className="h-7 w-7" />
                  </div>
                </div>

                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-navy-900/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
                    Service {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">{s.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">{s.description}</p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm font-medium text-ink-700">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
                          <Check className="h-3 w-3" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-4">
                    <CallButton />
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2 rounded-full border-2 border-navy-900 px-7 py-3.5 text-sm font-bold text-navy-900 transition-all hover:bg-navy-900 hover:text-white"
                    >
                      Get Free Quote
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 px-5 py-20 text-center sm:px-8">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Not Sure Which Service You Need?</h2>
          <p className="mt-4 text-white/70">
            Call our team for a free consultation — we'll recommend the right solution for your property, farm or
            business.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CallButton />
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}
