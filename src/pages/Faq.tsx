import { usePageMeta } from "../hooks/usePageMeta";
import PageHero from "../components/PageHero";
import FaqAccordion from "../components/FaqAccordion";
import { CallButton, WhatsAppButton } from "../components/ui/CtaButtons";

export default function Faq() {
  usePageMeta(
    "Frequently Asked Questions | Borewell Drilling — Star Borewell",
    "Find answers to 20 common questions about borewell drilling cost, depth, timelines, repair, maintenance and more from Star Borewell experts.",
  );

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about borewell drilling, pricing, timelines and our services."
      />

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <FaqAccordion />
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 px-5 py-20 text-center sm:px-8">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Still Have Questions?</h2>
          <p className="mt-4 text-white/70">Our team is available 24/7 to answer your queries and provide a free quote.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CallButton />
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}
