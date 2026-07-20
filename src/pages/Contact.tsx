import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/ui/Reveal";
import { company } from "../data/site";

const infoCards = [
  {
    icon: Phone,
    title: "அழைக்க",
    lines: [company.phoneDisplay],
    href: `tel:${company.phoneRaw}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: [company.phoneDisplay],
    href: `https://wa.me/${company.whatsappRaw}`,
  },
  {
    icon: Mail,
    title: "மின்னஞ்சல்",
    lines: [company.email],
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    title: "முகவரி",
    lines: [company.address],
  },
  {
    icon: Clock,
    title: "வேலை நேரம்",
    lines: [company.hoursWeekday, company.hoursSunday],
  },
];

export default function Contact() {
  usePageMeta(
    "Star Borewell ஐ தொடர்பு கொள்ள | சிவகாசியில் போர்வெல் துளையிடலுக்கு 098433 46773",
    "இலவச தள ஆய்வு மற்றும் மேற்கோளுக்கு Star Borewell-ஐ தொடர்பு கொள்ளுங்கள். அழைப்பு, WhatsApp அல்லது விசாரனை படிவம். சிவகாசி, விருதுநகர், கோவில்பட்டியில் 24/7 அவசர ஆதரவு.",
  );

  return (
    <>
      <PageHero
        eyebrow="தொடர்பு"
        title="இன்றே உங்கள் நீர் பிரச்சினையை தீர்ப்போம்"
        description="இலவச தள ஆய்வு, மேற்கோள் அல்லது அவசர போர்வெல் பழுதுக்கு எங்களை தொடர்பு கொள்ளுங்கள். எங்கள் குழு விரைவாக பதிலளிக்கும்."
      />

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-5">
            {infoCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="flex items-start gap-4 rounded-2xl border border-navy-900/10 bg-white p-6 shadow-[0_2px_20px_rgba(10,23,48,0.05)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-accent-400">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-ink-500">{c.title}</h3>
                    {c.lines.map((line) =>
                      c.href ? (
                        <a key={line} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="mt-1 block font-semibold text-navy-900 hover:text-accent-600">
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="mt-1 text-sm font-medium text-navy-900">
                          {line}
                        </p>
                      ),
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div>
              <h2 className="mb-6 text-2xl font-extrabold text-navy-900">உங்கள் விசாரனையை அனுப்புங்கள்</h2>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50/40 px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-navy-900/10 shadow-premium">
              <iframe
                title="Star Borewell Location Map"
                src="https://www.google.com/maps?q=Sivakasi,Virudhunagar,Tamil+Nadu&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
