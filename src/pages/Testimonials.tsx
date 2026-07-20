import { usePageMeta } from "../hooks/usePageMeta";
import PageHero from "../components/PageHero";
import GoogleReviews from "../components/GoogleReviews";
import TestimonialCard from "../components/TestimonialCard";
import SectionHeading from "../components/ui/SectionHeading";
import { CallButton, WhatsAppButton } from "../components/ui/CtaButtons";
import { testimonials } from "../data/site";

export default function Testimonials() {
  usePageMeta(
    "வாடிக்கையாளர் கருத்துகள் & கூகுள் மதிப்புரைகள் — Star Borewell",
    "தொழில்முறை போர்வெல் துளையிடல் சேவைகளுக்கு Star Borewell-ஐ நம்பிய வீட்டு உரிமையாளர்கள், விவசாயிகள், தொழில்கள், பள்ளிகள் மற்றும் மருத்துவமனைகளின் உண்மையான மதிப்புரைகளைப் படியுங்கள்.",
  );

  return (
    <>
      <PageHero
        eyebrow="கருத்துகள்"
        title="பகுதி முழுவதும் ஆயிரக்கணக்கானோரால் நம்பப்படுகிறோம்"
        description="நமது வார்த்தையை மட்டும் நம்ப வேண்டாம் — நாங்கள் சேவை செய்த வீட்டு உரிமையாளர்கள், விவசாயிகள், கட்டிடக்காரர்கள் மற்றும் தொழில்களிடம் இருந்தே கேளுங்கள்."
      />

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <GoogleReviews />
          <div className="mt-6" />
          <SectionHeading eyebrow="வாடிக்கையாளர் கதைகள்" title="எங்களைப் பற்றி வாடிக்கையாளர்கள் என்ன சொல்கிறார்கள்" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} delay={(i % 6) * 60} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 px-5 py-20 text-center sm:px-8">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">நமது திருப்தி வாடிக்கையளர்களின் வளரும் பட்டியலில் சேருங்கள்</h2>
          <p className="mt-4 text-white/70">Star Borewell வித்தியாசத்தை அனுபவியுங்கள் — இன்றே எங்களை அழைக்கவும் அல்லது WhatsApp செய்யவும்.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CallButton />
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}
