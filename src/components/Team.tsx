import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Reveal, TealLabel } from "./Section";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";

const team = [
  { img: t1, name: "Dr. James Whitfield", creds: "BDS (Hons) King's College London", role: "Principal Dentist & Clinical Director", gdc: "245812", interest: "Cosmetic Dentistry & Implants" },
  { img: t2, name: "Dr. Priya Sharma", creds: "BDS, MSc Orthodontics", role: "Specialist Orthodontist", gdc: "267441", interest: "Invisalign & Clear Aligners" },
  { img: t3, name: "Dr. Fatima Al-Rashid", creds: "BDS, MFDS RCS", role: "Restorative & Aesthetic Dentist", gdc: "289034", interest: "Veneers & Composite Bonding" },
  { img: t4, name: "Ms. Sophie Drew", creds: "RDH", role: "Lead Dental Hygienist & Therapist", gdc: "301156", interest: "Gum Health & Periodontics" },
];

export function Team() {
  const [page, setPage] = useState(0);
  const perPage = 4;
  const totalPages = Math.ceil(team.length / perPage);

  return (
    <section className="bg-soft py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal className="text-center">
          <TealLabel>Our Dental Team</TealLabel>
          <h2 className="mx-auto mt-3 max-w-3xl font-serif text-4xl text-navy md:text-5xl">
            Meet Our Team of Dental Experts: Educated, Caring, and Devoted to Your Smile
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            At PearlDent, you will be cared for by a team of highly qualified
            professionals, each GDC-registered and committed to making your
            experience exceptional.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {team.slice(page * perPage, page * perPage + perPage).map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-transparent transition hover:ring-teal"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-teal">
                    <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="bg-navy p-4 text-white">
                    <div className="font-serif text-xl">{m.name}</div>
                    <div className="text-xs text-white/60">{m.creds}</div>
                    <div className="mt-2 text-sm font-medium text-teal-light">{m.role}</div>
                    <div className="mt-2 text-[11px] text-white/60">
                      GDC: {m.gdc} · {m.interest}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-teal text-teal transition hover:bg-teal hover:text-white"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === page ? "w-8 bg-teal" : "w-2.5 bg-teal/30"
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((p) => (p + 1) % totalPages)}
            className="grid h-10 w-10 place-items-center rounded-full border-2 border-teal text-teal transition hover:bg-teal hover:text-white"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3 font-medium text-white hover:bg-navy transition">
            Meet Our Full Team <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
