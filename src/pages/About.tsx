import { Target, Eye, HeartHandshake, Award, Users, ShieldCheck } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { CallButton, WhatsAppButton } from "../components/ui/CtaButtons";

const values = [
  { icon: ShieldCheck, title: "Integrity", text: "Transparent pricing and honest recommendations — no unnecessary drilling, no hidden fees." },
  { icon: Award, title: "Excellence", text: "Precision engineering at every step, from site survey to final yield testing." },
  { icon: HeartHandshake, title: "Customer First", text: "We treat every home, farm and industry with the same level of care and urgency." },
  { icon: Users, title: "Teamwork", text: "A disciplined, safety-trained crew working in coordination for flawless execution." },
];

const team = [
  { name: "R. Muthusamy", role: "Founder & Chief Drilling Engineer" },
  { name: "K. Sivakumar", role: "Site Operations Manager" },
  { name: "P. Ganesan", role: "Senior Rig Operator" },
  { name: "S. Vijay", role: "Pump & Motor Specialist" },
];

export default function About() {
  usePageMeta(
    "About Star Borewell | 20+ Years of Trusted Borewell Drilling Expertise",
    "Learn about Star Borewell's journey, mission, vision and the experienced team behind 5000+ successful borewell projects across Sivakasi, Virudhunagar and Kovilpatti.",
  );

  return (
    <>
      <PageHero
        eyebrow="About Star Borewell"
        title="Two Decades of Digging Deeper for Your Water Needs"
        description="From a single drilling rig to a full-scale borewell engineering company — our story is built on trust, precision and relentless customer commitment."
      />

      {/* Story */}
      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img src="/images/about-team.jpg" alt="Star Borewell expert field team" className="w-full rounded-2xl object-cover shadow-premium" loading="lazy" />
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-accent-500 px-8 py-5 text-white shadow-accent sm:block">
                <p className="text-3xl font-extrabold">20+</p>
                <p className="text-xs font-semibold uppercase tracking-wider">Years in Business</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Our Story" title="Built on Hard Work, Trust & Modern Engineering" align="left" />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-500 sm:text-base">
              <p>
                Star Borewell began over two decades ago in Sivakasi with a single drilling rig and a simple promise —
                deliver reliable water solutions with honesty and precision. What started as a small family-run
                drilling service has grown into one of the most trusted borewell companies serving Sivakasi,
                Virudhunagar and Kovilpatti.
              </p>
              <p>
                Today, we operate a fleet of modern DTH rotary drilling rigs, high-pressure compressors and pump
                installation equipment, backed by a team of experienced engineers and technicians. We've completed
                over 5,000 borewell projects for house owners, farmers, builders, industries, schools and hospitals —
                each one handled with the same dedication as our very first project.
              </p>
              <p>
                Our growth has always been guided by one principle: <strong className="text-navy-900">customer trust is earned through consistent, quality work</strong> — not shortcuts.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <CallButton />
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-navy-50/40 px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-navy-900/10 bg-white p-8 shadow-[0_2px_20px_rgba(10,23,48,0.06)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-accent-400">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy-900">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                To provide every household, farm and industry in our region with dependable access to groundwater
                through modern drilling technology, expert craftsmanship and honest, transparent service.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-navy-900/10 bg-white p-8 shadow-[0_2px_20px_rgba(10,23,48,0.06)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-accent-400">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy-900">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                To be recognized as Tamil Nadu's most trusted borewell engineering brand — known for premium
                machinery, skilled manpower and an unwavering commitment to customer satisfaction.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Core Values" title="What Drives Us Every Day" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-navy-900/10 bg-white p-7 text-center shadow-[0_2px_20px_rgba(10,23,48,0.05)] transition-transform hover:-translate-y-1.5">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/10 text-accent-600">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-navy-50/40 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our Team" title="Meet the Experts Behind Every Borewell" description="A skilled, safety-trained crew committed to precision drilling and dependable service." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 80}>
                <div className="rounded-2xl border border-navy-900/10 bg-white p-7 text-center shadow-[0_2px_20px_rgba(10,23,48,0.05)]">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-navy-900 text-2xl font-extrabold text-accent-400">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy-900">{member.name}</h3>
                  <p className="mt-1 text-sm text-ink-500">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-navy-950 px-5 py-20 text-center sm:px-8">
        <SectionHeading
          eyebrow="Why Customers Trust Us"
          title="Consistency, Transparency & Results — Every Single Time"
          description="20+ years of experience, 5000+ completed borewells, modern machinery and a 24/7 responsive team make us the preferred choice across the region."
          light
        />
        <Reveal delay={150}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CallButton />
            <WhatsAppButton />
          </div>
        </Reveal>
      </section>
    </>
  );
}
