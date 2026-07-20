import { Target, Eye, HeartHandshake, Award, Users, ShieldCheck } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { CallButton, WhatsAppButton } from "../components/ui/CtaButtons";

const values = [
  { icon: ShieldCheck, title: "நேர்மை", text: "வெளிப்படையான விலை மற்றும் நேர்மையான பரிந்துரைகள் — தேவையில்லாத துளையிடல் இல்லை, மறைக்கப்பட்ட கட்டணம் இல்லை." },
  { icon: Award, title: "சிறப்பு", text: "தள ஆய்வு முதல் இறுதி வரத்து சோதனை வரை ஒவ்வொரு கட்டத்திலும் துல்லியமான பொறியியல்." },
  { icon: HeartHandshake, title: "வாடிக்கையாளர் முதல்", text: "ஒவ்வொரு வீடு, விவசாயம் மற்றும் தொழிலையும் ஒரே கவனத்துடனும் அவசரத்துடனும் கையாள்கிறோம்." },
  { icon: Users, title: "குழுப்பணி", text: "சிறப்பான செயல்பாட்டிற்காக ஒருங்கிணைந்து பணியும், பாதுகாப்பு பயிற்சி பெற்ற ஒழுக்கமான குழு." },
];

const team = [
  { name: "ஆர். முத்துசாமி", role: "நிறுவனர் & தலைமை துளையிடல் பொறியாளர்" },
  { name: "கே. சிவகுமார்", role: "தள செயல்பாடுகள் மேலாளர்" },
  { name: "பி. கணேசன்", role: "மூத்த ரிக் இயக்குநர்" },
  { name: "எஸ். விஜய்", role: "பம்ப் & மோட்டார் நிபுணர்" },
];

export default function About() {
  usePageMeta(
    "Star Borewell பற்றி | 20+ வருட நம்பகமான போர்வெல் துளையிடல் நிபுணத்துவம்",
    "ஸ்டார் போர்வெல்லின் பயணம், பணி, குறிக்கோள் மற்றும் சிவகாசி, விருதுநகர், கோவில்பட்டி முழுவதும் 5000+ வெற்றிகரமான போர்வெல் திட்டங்களுக்குப் பின்னால் உள்ள அனுபவம் வாய்ந்த குழுவை அறியவும்.",
  );

  return (
    <>
      <PageHero
        eyebrow="Star Borewell பற்றி"
        title="உங்கள் நீர் தேவைக்காக இரண்டு தசாப்தங்களாக ஆழமாக துளையிடுகிறோம்"
        description="ஒரு துளையிடல் ரிக் முதல் முழு அளவிலான போர்வெல் பொறியியல் நிறுவனம் வரை — நமது கதை நம்பிக்கை, துல்லியம் மற்றும் தொடர்ச்சியான வாடிக்கையாளர் கவனிப்பின் மீது கட்டப்பட்டது."
      />

      {/* Story */}
      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img src="/images/about-team.jpg" alt="Star Borewell expert field team" className="w-full rounded-2xl object-cover shadow-premium" loading="lazy" />
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-accent-500 px-8 py-5 text-white shadow-accent sm:block">
                <p className="text-3xl font-extrabold">20+</p>
                <p className="text-xs font-semibold uppercase tracking-wider">வருடங்கள்</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="நமது கதை" title="கடின உழைப்பு, நம்பிக்கை & நவீன பொறியியல்" align="left" />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-500 sm:text-base">
              <p>
                ஸ்டார் போர்வெல் இரண்டு தசாப்தங்களுக்கு முன்பு சிவகாசியில் ஒரு துளையிடல் ரிக் மற்றும் ஒரு எளிய வாக்குறுதியுடன் தொடங்கியது —
                நேர்மை மற்றும் துல்லியத்துடன் நம்பகமான நீர் தீர்வுகளை வழங்குவது. ஒரு சிறிய குடும்பம் நடத்தும் துளையிடல் சேவையாக
                தொடங்கியது, இன்று சிவகாசி, விருதுநகர் மற்றும் கோவில்பட்டிக்கு சேவை செய்யும் மிகவும் நம்பகமான போர்வெல் நிறுவனங்களில்
                ஒன்றாக வளர்ந்துள்ளது.
              </p>
              <p>
                இன்று, நவீன DTH ரோட்டரி துளையிடல் ரிக்குகள், அதிக அழுத்த கம்ப்ரஸர்கள் மற்றும் பம்ப் பொருத்துதல் உபகரணங்களின் தொகுப்பை
                இயக்குகிறோம், அனுபவம் வாய்ந்த பொறியாளர்கள் மற்றும் தொழில்நுட்ப வல்லுநர்களின் குழுவுடன். வீட்டு உரிமையாளர்கள், விவசாயிகள்,
                கட்டிடக்காரர்கள், தொழில்கள், பள்ளிகள் மற்றும் மருத்துவமனைகளுக்கு 5,000-க்கும் மேற்பட்ட போர்வெல் திட்டங்களை முடித்துள்ளோம் —
                ஒவ்வொன்றும் நமது முதல் திட்டத்தைப் போலவே அர்ப்பணிப்புடன் கையாளப்பட்டது.
              </p>
              <p>
                நமது வளர்ச்சி எப்போதும் ஒரு கொள்கையால் வழிநடத்தப்பட்டது: <strong className="text-navy-900">வாடிக்கையாளர் நம்பிக்கை தொடர்ச்சியான, தரமான வேலை மூலம் மட்டுமே சம்பாதிக்கப்படுகிறது</strong> — குறுக்குவழிகள் அல்ல.
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
              <h3 className="mt-5 text-xl font-bold text-navy-900">நமது பணி</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                நவீன துளையிடல் தொழில்நுட்பம், நிபுணத்துவ கைவினைத்திறன் மற்றும் நேர்மையான, வெளிப்படையான சேவை மூலம் நமது பகுதியில் உள்ள
                ஒவ்வொரு குடும்பம், விவசாயம் மற்றும் தொழிலுக்கும் நிலத்தடி நீருக்கான நம்பகமான அணுகலை வழங்குவது.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-navy-900/10 bg-white p-8 shadow-[0_2px_20px_rgba(10,23,48,0.06)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-accent-400">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy-900">நமது குறிக்கோள்</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                தமிழ்நாட்டின் மிகவும் நம்பகமான போர்வெல் பொறியியல் பிராண்டாக அங்கீகரிக்கப்படுவது — சிறந்த இயந்திரங்கள், திறமையான
                மனித வளம் மற்றும் வாடிக்கையாளர் திருப்திக்கான அசையாத அர்ப்பணிப்புக்காக அறியப்படுவது.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="மைய மதிப்புகள்" title="எங்களை ஒவ்வொரு நாளும் இயக்குவது" />
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
          <SectionHeading eyebrow="நமது குழு" title="ஒவ்வொரு போர்வெல்லுக்கும் பின்னால் உள்ள நிபுணர்களை சந்திக்கவும்" description="துல்லியமான துளையிடல் மற்றும் நம்பகமான சேவைக்கு அர்ப்பணிக்கப்பட்ட, பாதுகாப்பு பயிற்சி பெற்ற திறமையான குழு." />
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
          eyebrow="வாடிக்கையாளர்கள் ஏன் எங்களை நம்புகிறார்கள்"
          title="சீரான தன்மை, வெளிப்படைத்தன்மை & முடிவுகள் — ஒவ்வொரு முறையும்"
          description="20+ வருட அனுபவம், 5000+ முடிக்கப்பட்ட போர்வெல்கள், நவீன இயந்திரங்கள் மற்றும் 24/7 பதிலளிக்கும் குழு ஆகியவற்றுடன், பகுதி முழுவதும் விருப்பத்தேர்வாக இருக்கிறோம்."
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
