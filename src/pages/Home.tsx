import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { CallButton, QuoteButton, WhatsAppButton } from "../components/ui/CtaButtons";
import StatsBar from "../components/StatsBar";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import WhyChooseUs from "../components/WhyChooseUs";
import GoogleReviews from "../components/GoogleReviews";
import TestimonialCard from "../components/TestimonialCard";
import GalleryGrid from "../components/GalleryGrid";
import FaqAccordion from "../components/FaqAccordion";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/ui/Reveal";
import { services, testimonials, company } from "../data/site";

export default function Home() {
  usePageMeta(
    "Star Borewell | Professional Borewell Drilling Services in Sivakasi, Virudhunagar & Kovilpatti",
    "Star Borewell offers expert borewell drilling, pump installation & repair with modern equipment across Sivakasi, Virudhunagar & Kovilpatti. 20+ years experience, 5000+ borewells completed. Call 098433 46773.",
  );

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pt-24">
        <img
          src="/images/hero-rig.jpg"
          alt="Star Borewell heavy-duty drilling rig operating on site"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />

        {/* Ambient glow orbs */}
        <div className="orb -left-24 top-16 h-72 w-72 bg-accent-500/25 animate-float-slow" />
        <div className="orb right-0 top-1/4 h-96 w-96 bg-navy-500/25 animate-float" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent-400 backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-500" />
                Trusted Since 20+ Years
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Professional <span className="text-gradient-accent">Borewell Drilling</span> Services
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                Reliable borewell solutions with modern equipment and an experienced team — serving house owners,
                farmers, builders and industries across <strong className="text-white">Sivakasi, Virudhunagar &amp; Kovilpatti</strong>.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <CallButton />
                <QuoteButton />
                <WhatsAppButton />
              </div>
            </Reveal>
            <Reveal delay={420}>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex -space-x-2">
                  {["S", "M", "A", "P"].map((l) => (
                    <span key={l} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-navy-950 bg-navy-700 text-xs font-bold">
                      {l}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent-500 text-accent-500" />
                    ))}
                  </div>
                  4.9/5 from 218+ Google reviews
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats overlapping bottom */}
        <div className="absolute inset-x-0 -bottom-16 z-20 hidden px-5 sm:block sm:px-8">
          <StatsBar />
        </div>
      </section>

      {/* Mobile stats (non-overlap) */}
      <div className="bg-navy-950 px-5 pb-10 pt-6 sm:hidden">
        <StatsBar />
      </div>

      {/* SERVICES OVERVIEW */}
      <section className="bg-white px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete Borewell Solutions Under One Roof"
            description="From drilling to pump installation, repair and maintenance — we deliver end-to-end borewell engineering services for every requirement."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.slug} service={s} delay={i * 60} />
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-12 text-center">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-navy-900 px-8 py-3.5 text-sm font-bold text-navy-900 transition-all hover:bg-navy-900 hover:text-white"
              >
                View All 11 Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden bg-navy-950 px-5 py-24 sm:px-8">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Engineering Excellence You Can Trust"
            description="Two decades of hands-on drilling expertise, combined with modern machinery and honest service, make us the region's most trusted borewell partner."
            light
          />
          <div className="mt-14">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS + TESTIMONIALS */}
      <section className="bg-navy-50/40 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Customer Love"
            title="What Our Customers Say"
            description="Real feedback from house owners, farmers, industries and institutions who trusted Star Borewell for their water needs."
          />
          <div className="mt-10">
            <GoogleReviews />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard key={t.name} t={t} delay={i * 80} />
            ))}
          </div>
          <Reveal delay={150}>
            <div className="mt-10 text-center">
              <Link to="/testimonials" className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-accent-600">
                Read More Testimonials <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Work"
            title="Recent Projects & Machinery"
            description="A glimpse into our field operations — from residential drilling to large-scale industrial borewell installations."
          />
          <div className="mt-14">
            <GalleryGrid limit={8} />
          </div>
          <Reveal delay={150}>
            <div className="mt-10 text-center">
              <Link
                to="/gallery"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-navy-900 px-8 py-3.5 text-sm font-bold text-navy-900 transition-all hover:bg-navy-900 hover:text-white"
              >
                View Full Gallery
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-50/40 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers to the most common questions about our borewell drilling services."
          />
          <div className="mt-14">
            <FaqAccordion />
          </div>
          <Reveal delay={150}>
            <div className="mt-10 text-center">
              <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-accent-600">
                View All 20 FAQs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative overflow-hidden bg-navy-950 px-5 py-24 sm:px-8">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Request a Free Site Visit & Quotation"
              description="Fill in your details below or reach us directly via call / WhatsApp. Our team responds within hours."
              align="left"
              light
            />
            <div className="mt-8 space-y-4">
              {[
                "Free on-site inspection & consultation",
                "Transparent, no-hidden-charge pricing",
                "Same-day response for urgent enquiries",
                `Serving ${company.areasServed}`,
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-400" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <CallButton />
              <WhatsAppButton />
            </div>
          </div>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
