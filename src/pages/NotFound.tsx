import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { CallButton } from "../components/ui/CtaButtons";

export default function NotFound() {
  usePageMeta("Page Not Found — Star Borewell");

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-navy-950 px-5 pt-24 text-center text-white">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-400">404 Error</p>
      <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Page Not Found</h1>
      <p className="mt-4 max-w-md text-white/70">The page you're looking for doesn't exist. Let's get you back on track.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to="/" className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-navy-900 transition-transform hover:-translate-y-0.5">
          Back to Home
        </Link>
        <CallButton />
      </div>
    </div>
  );
}
