import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { company } from "../../data/site";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

export function CallButton({ className }: { className?: string }) {
  return (
    <a
      href={`tel:${company.phoneRaw}`}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 px-7 py-3.5 text-sm font-bold text-white shadow-accent transition-all duration-300 hover:-translate-y-0.5 hover:from-accent-500 hover:to-accent-700 hover:shadow-glow active:translate-y-0 shine",
        className,
      )}
    >
      <Phone className="h-4.5 w-4.5 transition-transform group-hover:rotate-12" strokeWidth={2.4} />
      Call Now
    </a>
  );
}

export function WhatsAppButton({ className, text = "WhatsApp Us" }: { className?: string; text?: string }) {
  const message = encodeURIComponent("Hello Star Borewell, I would like to enquire about borewell drilling services.");
  return (
    <a
      href={`https://wa.me/${company.whatsappRaw}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#25D366] active:translate-y-0",
        className,
      )}
    >
      <MessageCircle className="h-4.5 w-4.5" strokeWidth={2.4} />
      {text}
    </a>
  );
}

export function QuoteButton({ className }: { className?: string }) {
  return (
    <Link
      to="/contact"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-navy-900 shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-50 active:translate-y-0",
        className,
      )}
    >
      Get Free Quote
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
    </Link>
  );
}
