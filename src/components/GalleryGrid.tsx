import { useState } from "react";
import { X } from "lucide-react";
import { gallery, type GalleryItem } from "../data/site";
import Reveal from "./ui/Reveal";
import { cn } from "../utils/cn";

const categories = ["All", "Projects", "Machinery", "Completed"] as const;

export default function GalleryGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const items = (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)).slice(0, limit);

  return (
    <div>
      {!limit && (
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-semibold transition-colors",
                filter === c
                  ? "border-accent-500 bg-accent-500 text-white"
                  : "border-navy-900/15 text-navy-800 hover:border-accent-500 hover:text-accent-600",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.image + item.title} delay={(i % 8) * 60}>
            <button
              onClick={() => setActive(item)}
              className="group relative block aspect-square w-full overflow-hidden rounded-xl bg-navy-900"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-bold uppercase tracking-wider text-accent-400">{item.category}</span>
                <span className="text-sm font-semibold text-white">{item.title}</span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/90 p-6 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img src={active.image} alt={active.title} className="max-h-[75vh] w-full rounded-xl object-contain" />
            <p className="mt-4 text-center text-lg font-semibold text-white">{active.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
