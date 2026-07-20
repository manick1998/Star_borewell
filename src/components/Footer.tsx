import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { company, services } from "../data/site";

const socialIcons: { label: string; path: string }[] = [
  {
    label: "Facebook",
    path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.78 8.44-4.94 8.44-9.94z",
  },
  {
    label: "Instagram",
    path: "M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 0 1 5.44 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-8.4a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34z",
  },
  {
    label: "YouTube",
    path: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.45 20.5 12 20.5 12 20.5s7.55 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4l6.34 3.6-6.34 3.6z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="/images/logo.jpeg"
                alt="Star Borewell logo"
                className="h-11 w-11 rounded-xl object-cover ring-1 ring-white/20"
              />
              <span className="text-lg font-extrabold tracking-tight">Star Borewell</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              ஸ்டார் போர்வெல் — சிவகாசி, விருதுநகர் மற்றும் கோவில்பட்டி முழுவதும் தொழில்முறை போர்வெல் துளையிடல், பம்ப் பொருத்துதல் மற்றும் பழுது சேவைகளுக்கான நம்பகமான பெயர். 20+ வருட அனுபவம் மற்றும் நவீன பொறியியல் உபகரணங்களுடன்.
            </p>
            <div className="mt-6 flex gap-3">
              {socialIcons.map((icon) => (
                <a
                  key={icon.label}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent-500 hover:bg-accent-500 hover:text-white"
                  aria-label={icon.label}
                >
                  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent-400">விரைவு இணைப்புகள்</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {[
                { to: "/about", label: "எங்களைப் பற்றி" },
                { to: "/services", label: "எங்கள் சேவைகள்" },
                { to: "/gallery", label: "படத்தொகுப்பு" },
                { to: "/testimonials", label: "கருத்துகள்" },
                { to: "/faq", label: "கேள்விகள்" },
                { to: "/contact", label: "தொடர்பு" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-accent-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent-400">எங்கள் சேவைகள்</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services#${s.slug}`} className="transition-colors hover:text-accent-400">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent-400">தொடர்பு</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-accent-400" />
                <span>{company.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent-400" />
                <a href={`tel:${company.phoneRaw}`} className="hover:text-accent-400">
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent-400" />
                <a href={`mailto:${company.email}`} className="hover:text-accent-400">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-accent-400" />
                <span>
                  {company.hoursWeekday}
                  <br />
                  {company.hoursSunday}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} Star Borewell. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</p>
          <p>{company.areasServed} பகுதிகளுக்கு சேவை செய்கிறோம்</p>
        </div>
      </div>
    </footer>
  );
}
