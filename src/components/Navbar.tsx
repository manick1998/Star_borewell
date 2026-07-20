import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { company } from "../data/site";
import { cn } from "../utils/cn";

const links = [
  { to: "/", label: "முகப்பு" },
  { to: "/about", label: "எங்களைப் பற்றி" },
  { to: "/services", label: "சேவைகள்" },
  { to: "/gallery", label: "படத்தொகுப்பு" },
  { to: "/testimonials", label: "கருத்துகள்" },
  { to: "/faq", label: "கேள்விகள்" },
  { to: "/contact", label: "தொடர்பு" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-navy-900/95 shadow-lg shadow-navy-950/20 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/images/logo.jpeg"
            alt="Star Borewell logo"
            className="h-11 w-11 rounded-xl object-cover shadow-md ring-1 ring-white/25"
          />
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-white">Star Borewell</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-400">துளையிடல் நிபுணர்கள்</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  isActive ? "bg-white/10 text-accent-400" : "text-white/85 hover:bg-white/5 hover:text-accent-400",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.phoneRaw}`}
            className="flex items-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-bold text-white shadow-accent transition-all hover:-translate-y-0.5 hover:bg-accent-600"
          >
            <Phone className="h-4 w-4" />
            {company.phoneDisplay}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden bg-navy-900/98 backdrop-blur-md transition-all duration-300 lg:hidden",
          open ? "max-h-[560px] border-t border-white/10" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-4 py-3 text-sm font-semibold transition-colors",
                  isActive ? "bg-white/10 text-accent-400" : "text-white/85 hover:bg-white/5",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={`tel:${company.phoneRaw}`}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-bold text-white shadow-accent"
          >
            <Phone className="h-4 w-4" />
            அழைக்க {company.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
