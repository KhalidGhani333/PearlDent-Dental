import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Reveal, TealLabel, slideInLeft, slideInRight } from "./Section";
import { Wave } from "./Wave";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";

function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(2, Math.min(98, x)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl shadow-pearl"
      onMouseMove={(e) => dragging.current && update(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => update(e.touches[0].clientX)}
    >
      <img src={after} alt="After" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt="Before"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${10000 / pos}%` }}
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-3 left-3 rounded-full bg-navy/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
        Before
      </div>
      <div className="absolute bottom-3 right-3 rounded-full bg-teal/90 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
        After
      </div>
      <div className="absolute top-0 bottom-0 w-[2px] bg-white shadow-pearl" style={{ left: `${pos}%` }} />
      <button
        aria-label="Drag to compare"
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
        className="absolute top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-teal text-white shadow-pearl ring-4 ring-white"
        style={{ left: `${pos}%` }}
      >
        <span className="text-sm font-bold">◀▶</span>
      </button>
    </div>
  );
}

export function SmileGallery() {
  return (
    <>
      <Wave color="#0D2137" />
      <section className="bg-navy py-24 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-2 md:px-12">
          <Reveal variant={slideInLeft}>
            <TealLabel>Smile Gallery</TealLabel>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              A Beautiful Smile is Just a Visit Away
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              These real patient transformations show our commitment to
              excellence. Every smile is crafted with precision, care, and
              the highest quality materials available.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              From composite bonding and Invisalign to dental implants and
              full smile makeovers — our patients' results speak for
              themselves. Explore what's possible for your smile.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              We are proud that our patients consistently rate us 4.9 stars
              on Google. Their confidence and happiness is the true measure
              of our work.
            </p>
            <button className="mt-7 rounded-full border-2 border-teal-light px-7 py-3 font-medium text-teal-light transition hover:bg-teal-light hover:text-navy">
              Visit Our Gallery
            </button>
          </Reveal>

          <Reveal variant={slideInRight}>
            <BeforeAfter />
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[before, after, before].map((src, i) => (
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  key={i}
                  className="aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-white/15"
                >
                  <img src={src} alt="thumbnail" loading="lazy" className="h-full w-full object-cover" />
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <Wave color="#0D2137" flip />
    </>
  );
}
