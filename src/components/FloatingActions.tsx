import { useEffect, useState } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { company } from "../data/site";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const message = encodeURIComponent("Hello Star Borewell, I would like to enquire about borewell drilling services.");

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3.5">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 text-white shadow-lg transition-all duration-300 hover:bg-navy-700 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <a
        href={`tel:${company.phoneRaw}`}
        aria-label="Call Star Borewell"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500 text-white shadow-accent transition-transform hover:scale-105 active:scale-95"
      >
        <Phone className="h-6 w-6" fill="currentColor" />
      </a>

      <a
        href={`https://wa.me/${company.whatsappRaw}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 animate-pulse-ring items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
          <path d="M16.001 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.44 1.73 6.37L3.2 28.8l6.62-1.7a12.75 12.75 0 0 0 6.18 1.58h.01c7.07 0 12.8-5.73 12.8-12.8s-5.73-12.68-12.81-12.68zm7.47 18.15c-.32.9-1.6 1.65-2.6 1.86-.7.15-1.6.27-4.66-.99-3.91-1.62-6.43-5.58-6.63-5.84-.19-.27-1.58-2.1-1.58-4.01 0-1.9.99-2.84 1.35-3.23.32-.35.7-.44.93-.44.23 0 .47 0 .67.01.22.01.5-.08.78.6.32.77 1.08 2.67 1.17 2.86.1.19.16.42.03.68-.13.27-.2.43-.4.66-.19.23-.41.51-.58.68-.19.19-.4.4-.17.79.23.4 1.02 1.68 2.19 2.72 1.5 1.34 2.77 1.75 3.16 1.95.4.19.63.16.86-.1.24-.27 1-1.16 1.27-1.56.27-.4.54-.33.9-.2.37.13 2.35 1.11 2.75 1.31.4.19.66.29.76.46.1.16.1.94-.22 1.85z" />
        </svg>
      </a>
    </div>
  );
}
