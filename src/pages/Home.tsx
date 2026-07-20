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
    "Star Borewell | சிவகாசி, விருதுநகர் & கோவில்பட்டியில் தொழில்முறை போர்வெல் துளையிடல்",
    "Star Borewell — நவீன உபகரணங்களுடன் சிவகாசி, விருதுநகர் & கோவில்பட்டியில் நிபுணத்துவ போர்வெல் துளையிடல், பம்ப் பொருத்துதல் & பழுது. 20+ வருட அனுபவம், 5000+ போர்வெல்கள். 098433 46773 ஐ அழைக்கவும்.",
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
                20+ வருடங்களாக நம்பகம்
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                தொழில்முறை <span className="text-gradient-accent">போர்வெல் துளையிடல்</span> சேவைகள்
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                நவீன உபகரணங்கள் மற்றும் அனுபவம் வாய்ந்த குழுவுடன் நம்பகமான போர்வெல் தீர்வுகள் — <strong className="text-white">சிவகாசி, விருதுநகர் &amp; கோவில்பட்டி</strong> முழுவதும் வீட்டு உரிமையாளர்கள், விவசாயிகள், கட்டிடக்காரர்கள் மற்றும் தொழில்களுக்கு சேவை செய்கிறோம்.
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
                  218+ கூகுள் மதிப்புரைகளிலிருந்து 4.9/5
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
            eyebrow="எங்கள் சேவைகள்"
            title="ஒரே கூரையின் கீழ் முழு போர்வெல் தீர்வுகள்"
            description="துளையிடல் முதல் பம்ப் பொருத்துதல், பழுது மற்றும் பராமரிப்பு வரை — ஒவ்வொரு தேவைக்கும் இறுதி-இறுதி போர்வெல் பொறியியல் சேவைகளை வழங்குகிறோம்."
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
                அனைத்து 11 சேவைகளையும் காண்க
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
            eyebrow="ஏன் எங்களை தேர்வு செய்ய வேண்டும்"
            title="நீங்கள் நம்பக்கூடிய பொறியியல் சிறப்பு"
            description="இரண்டு தசாப்தங்களாக நேரடி துளையிடல் நிபுணத்துவம், நவீன இயந்திரங்கள் மற்றும் நேர்மையான சேவையுடன், இப்பகுதியின் மிகவும் நம்பகமான போர்வெல் கூட்டாளியாக இருக்கிறோம்."
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
            eyebrow="வாடிக்கையாளர் அன்பு"
            title="எங்கள் வாடிக்கையாளர்கள் என்ன சொல்கிறார்கள்"
            description="தங்கள் நீர் தேவைகளுக்கு Star Borewell-ஐ நம்பிய வீட்டு உரிமையாளர்கள், விவசாயிகள், தொழில்கள் மற்றும் நிறுவனங்களின் உண்மையான கருத்துகள்."
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
                மேலும் கருத்துகள் படிக்க <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="எங்கள் வேலை"
            title="சமீபத்திய திட்டங்கள் & இயந்திரங்கள்"
            description="நமது கள செயல்பாடுகளின் ஒரு பார்வை — குடியிருப்பு துளையிடல் முதல் பெரிய அளவிலான தொழில்துறை போர்வெல் நிறுவல்கள் வரை."
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
                முழு படத்தொகுப்பை காண்க
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
            eyebrow="கேள்விகள்"
            title="அடிக்கடி கேட்கப்படும் கேள்விகள்"
            description="எங்கள் போர்வெல் துளையிடல் சேவைகள் பற்றிய பொதுவான கேள்விகளுக்கான விரைவு பதில்கள்."
          />
          <div className="mt-14">
            <FaqAccordion />
          </div>
          <Reveal delay={150}>
            <div className="mt-10 text-center">
              <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-accent-600">
                அனைத்து 20 கேள்விகளையும் காண்க <ArrowRight className="h-4 w-4" />
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
              eyebrow="தொடர்பு கொள்ள"
              title="இலவச தள வருகை & மேற்கோளுக்கு விண்ணப்பிக்கவும்"
              description="கீழே உங்கள் விவரங்களை நிரப்புங்கள் அல்லது நேரடியாக அழைப்பு / WhatsApp மூலம் எங்களை தொடர்புகொள்ளுங்கள். சில மணிநேரங்களில் எங்கள் குழு பதிலளிக்கும்."
              align="left"
              light
            />
            <div className="mt-8 space-y-4">
              {[
                "இலவச தள ஆய்வு & ஆலோசனை",
                "வெளிப்படையான, மறைக்கப்படாத விலை",
                "அவசர விசாரனைகளுக்கு அன்றே பதில்",
                `${company.areasServed} பகுதிகளுக்கு சேவை`,
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
