import { usePageMeta } from "../hooks/usePageMeta";
import PageHero from "../components/PageHero";
import GalleryGrid from "../components/GalleryGrid";
import { CallButton, WhatsAppButton } from "../components/ui/CtaButtons";

export default function Gallery() {
  usePageMeta(
    "படத்தொகுப்பு | போர்வெல் துளையிடல் திட்டங்கள் & இயந்திரங்கள் — Star Borewell",
    "ஸ்டார் போர்வெல்லின் முடிக்கப்பட்ட திட்டங்கள், துளையிடல் இயந்திரங்கள் மற்றும் கள செயல்பாடுகளின் புகைப்படங்களை சிவகாசி, விருதுநகர், கோவில்பட்டி முழுவதும் பார்க்கவும்.",
  );

  return (
    <>
      <PageHero
        eyebrow="நமது படத்தொகுப்பு"
        title="திட்டங்கள், இயந்திரங்கள் & முடிக்கப்பட்ட வேலைகள்"
        description="நமது துளையிடல் ரிக்குகள், தள செயல்பாடுகள் மற்றும் பகுதி முழுவதும் வெற்றிகரமாக முடிக்கப்பட்ட போர்வெல் திட்டங்களின் காட்சி காட்சி."
      />

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <GalleryGrid />
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 px-5 py-20 text-center sm:px-8">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">உங்கள் போர்வெல் திட்டத்தை தொடங்கத் தயாரா?</h2>
          <p className="mt-4 text-white/70">இன்றே எங்கள் நிபுணர் குழவிடம் இருந்து இலவச தள ஆய்வு மற்றும் மேற்கோளைப் பெறுங்கள்.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CallButton />
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}
