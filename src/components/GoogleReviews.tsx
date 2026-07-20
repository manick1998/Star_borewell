import { Star } from "lucide-react";
import Reveal from "./ui/Reveal";

export default function GoogleReviews() {
  return (
    <Reveal>
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-2xl border border-navy-900/10 bg-white px-8 py-8 text-center shadow-[0_2px_20px_rgba(10,23,48,0.06)] sm:flex-row sm:text-left">
        <svg viewBox="0 0 48 48" className="h-14 w-14 shrink-0">
          <path
            fill="#FFC107"
            d="M43.6 20.5H42V20.4H24v7.2h11.3c-1.6 4.6-6 7.9-11.3 7.9-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.7 5.5 29.6 3.5 24 3.5 12.7 3.5 3.5 12.7 3.5 24S12.7 44.5 24 44.5 44.5 35.3 44.5 24c0-1.2-.1-2.4-.3-3.5z"
          />
          <path fill="#FF3D00" d="m6.3 14.7 5.9 4.3C13.9 15.4 18.6 12.5 24 12.5c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.7 6.5 29.6 4.5 24 4.5c-7.5 0-14 4.2-17.7 10.2z" />
          <path fill="#4CAF50" d="M24 44.5c5.5 0 10.5-1.9 14.3-5.1l-6.6-5.4c-2 1.4-4.6 2.3-7.7 2.3-5.3 0-9.7-3.3-11.3-7.9l-6.5 5C9.9 40.2 16.4 44.5 24 44.5z" />
          <path fill="#1976D2" d="M43.6 20.5H42V20.4H24v7.2h11.3c-.8 2.2-2.2 4.1-4.1 5.4l6.6 5.4c-.5.4 6.7-4.9 6.7-14.4 0-1.2-.1-2.4-.3-3.5z" />
        </svg>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-ink-500">கூகுள் மதிப்பீடு</p>
          <div className="mt-1 flex items-center justify-center gap-2 sm:justify-start">
            <span className="text-3xl font-extrabold text-navy-900">4.9</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent-500 text-accent-500" />
              ))}
            </div>
          </div>
          <p className="mt-1 text-sm text-ink-500">218+ சரிபார்க்கப்பட்ட கூகுள் மதிப்புரைகளின் அடிப்படையில்</p>
        </div>
      </div>
    </Reveal>
  );
}
