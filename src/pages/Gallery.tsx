import { usePageMeta } from "../hooks/usePageMeta";
import PageHero from "../components/PageHero";
import GalleryGrid from "../components/GalleryGrid";
import { CallButton, WhatsAppButton } from "../components/ui/CtaButtons";

export default function Gallery() {
  usePageMeta(
    "Gallery | Borewell Drilling Projects & Machinery — Star Borewell",
    "Browse photos of Star Borewell's completed projects, drilling machinery, and field operations across Sivakasi, Virudhunagar and Kovilpatti.",
  );

  return (
    <>
      <PageHero
        eyebrow="Our Gallery"
        title="Projects, Machinery & Completed Work"
        description="A visual showcase of our drilling rigs, on-site operations and successfully completed borewell projects across the region."
      />

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <GalleryGrid />
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 px-5 py-20 text-center sm:px-8">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Ready to Start Your Borewell Project?</h2>
          <p className="mt-4 text-white/70">Get a free site inspection and quotation from our expert team today.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CallButton />
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}
