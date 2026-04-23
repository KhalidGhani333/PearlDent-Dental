import { motion } from "framer-motion";
import heroImg from "@/assets/hero-family.jpg";
import { Wave } from "./Wave";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Smiling family at PearlDent"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-teal/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pt-32 pb-32 md:px-12">
        <div className="max-w-2xl text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.0, duration: 0.6 }}
            className="font-serif italic text-lg md:text-xl"
          >
            Excellence in Dental Care
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-[4.5rem]"
          >
            PEARLDENT CARE &amp; AESTHETICS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 max-w-xl text-base font-light md:text-lg text-white/90"
          >
            Award-winning private dentistry in the heart of Marylebone, London.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8"
          >
            <button className="rounded-full bg-white px-8 py-4 font-medium text-teal shadow-pearl transition hover:bg-soft animate-pulse-cta">
              Book Your First Visit
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <Wave color="#FFFFFF" />
      </div>
    </section>
  );
}
