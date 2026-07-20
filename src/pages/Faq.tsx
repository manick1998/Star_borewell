import { usePageMeta } from "../hooks/usePageMeta";
import PageHero from "../components/PageHero";
import FaqAccordion from "../components/FaqAccordion";
import { CallButton, WhatsAppButton } from "../components/ui/CtaButtons";

export default function Faq() {
  usePageMeta(
    "அடிக்கடி கேட்கப்படும் கேள்விகள் | போர்வெல் துளையிடல் — Star Borewell",
    "போர்வெல் துளையிடல் செலவு, ஆழம், காலக்கெடு, பழுது, பராமரிப்பு பற்றிய 20 பொதுவான கேள்விகளுக்கான பதில்களை Star Borewell நிபுணர்களிடம் இருந்து பெறுங்கள்.",
  );

  return (
    <>
      <PageHero
        eyebrow="கேள்விகள்"
        title="அடிக்கடி கேட்கப்படும் கேள்விகள்"
        description="போர்வெல் துளையிடல், விலை, காலக்கெடு மற்றும் எங்கள் சேவைகள் பற்றி தெரிந்துகொள்ள வேண்டிய அனைத்தும்."
      />

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <FaqAccordion />
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 px-5 py-20 text-center sm:px-8">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">இன்னும் கேள்விகள் இருக்கிறதா?</h2>
          <p className="mt-4 text-white/70">உங்கள் கேள்விகளுக்கு பதிலளிக்கவும், இலவச மேற்கோள் வழங்கவும் எங்கள் குழு 24/7 கிடைக்கிறது.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CallButton />
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}
