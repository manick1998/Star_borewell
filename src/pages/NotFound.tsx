import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { CallButton } from "../components/ui/CtaButtons";

export default function NotFound() {
  usePageMeta("பக்கம் கிடைக்கவில்லை — Star Borewell");

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-navy-950 px-5 pt-24 text-center text-white">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400">404 பிழை</p>
      <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">பக்கம் கிடைக்கவில்லை</h1>
      <p className="mt-4 max-w-md text-white/70">நீங்கள் தேடும் பக்கம் இல்லை. உங்களை மீண்டும் சரியான இடத்திற்கு அழைத்துச் செல்கிறோம்.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to="/" className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-navy-900 transition-transform hover:-translate-y-0.5">
          முகப்புக்குத் திரும்பு
        </Link>
        <CallButton />
      </div>
    </div>
  );
}
