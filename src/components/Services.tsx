import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal, TealLabel } from "./Section";
import { Wave } from "./Wave";
import s1 from "@/assets/svc-checkup.jpg";
import s2 from "@/assets/svc-whitening.jpg";
import s3 from "@/assets/svc-aligners.jpg";
import s4 from "@/assets/svc-implants.jpg";
import s5 from "@/assets/svc-veneers.jpg";
import s6 from "@/assets/svc-crowns.jpg";
import s7 from "@/assets/svc-bonding.jpg";
import s8 from "@/assets/svc-ortho.jpg";
import s9 from "@/assets/svc-rootcanal.jpg";

const services = [
  { img: s1, title: "Dental Check-up" },
  { img: s2, title: "Teeth Whitening" },
  { img: s3, title: "Invisible Aligners" },
  { img: s4, title: "Dental Implants" },
  { img: s5, title: "Porcelain Veneers" },
  { img: s6, title: "Crowns & Bridges" },
  { img: s7, title: "Composite Bonding" },
  { img: s8, title: "Orthodontics" },
  { img: s9, title: "Root Canal Treatment" },
];

export function Services() {
  return (
    <>
      <Wave color="#F0F9F9" />
      <section className="bg-soft py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-[1fr_1.4fr] md:px-12">
          <div className="md:sticky md:top-32 md:self-start">
            <Reveal>
              <TealLabel>
                From Implants to Aesthetic Dentistry — Comprehensive Solutions for Every Smile
              </TealLabel>
              <h2 className="mt-4 font-serif text-4xl text-navy md:text-5xl">
                Our Range of Services
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                At PearlDent, our GDC-registered team provides the full
                spectrum of dental care — from general check-ups and emergency
                dentistry to smile makeovers, Invisalign, and facial
                aesthetics. Every treatment is tailored to your individual
                needs and goals.
              </p>
              <a className="mt-6 inline-flex items-center gap-2 font-medium text-teal hover:gap-3 transition-all" href="#">
                View All Services <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {services.map((s, i) => (
              <motion.a
                href="#"
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="group relative aspect-square overflow-hidden rounded-xl shadow-soft"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-teal/95 via-teal/60 to-transparent px-3 py-3">
                  <div className="text-sm font-semibold text-white md:text-base">
                    {s.title}
                  </div>
                </div>
                <div className="absolute inset-0 flex items-end justify-end bg-teal/0 p-4 opacity-0 transition-opacity duration-300 group-hover:bg-teal/30 group-hover:opacity-100">
                  <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-teal">
                    Learn More →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        <div className="mt-14 text-center">
          <button className="rounded-full bg-teal px-8 py-3.5 font-medium text-white shadow-pearl hover:bg-navy transition">
            View All Services
          </button>
        </div>
      </section>
      <Wave color="#F0F9F9" flip />
    </>
  );
}
