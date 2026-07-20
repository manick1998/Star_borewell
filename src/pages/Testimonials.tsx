import { usePageMeta } from "../hooks/usePageMeta";
import PageHero from "../components/PageHero";
import GoogleReviews from "../components/GoogleReviews";
import TestimonialCard from "../components/TestimonialCard";
import SectionHeading from "../components/ui/SectionHeading";
import { CallButton, WhatsAppButton } from "../components/ui/CtaButtons";
import { testimonials } from "../data/site";

export default function Testimonials() {
  usePageMeta(
    "Customer Testimonials & Google Reviews — Star Borewell",
    "Read genuine reviews from house owners, farmers, industries, schools and hospitals who trusted Star Borewell for professional borewell drilling services.",
  );

  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Trusted by Thousands Across the Region"
        description="Don't just take our word for it — hear directly from the house owners, farmers, builders and industries we've served."
      />

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <GoogleReviews />
          <div className="mt-6" />
          <SectionHeading eyebrow="Client Stories" title="What Our Customers Say About Us" />
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
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Join Our Growing List of Happy Customers</h2>
          <p className="mt-4 text-white/70">Experience the Star Borewell difference — call or WhatsApp us today.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CallButton />
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}
