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
            className="mt-3 font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]"
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
            <br />
            <span className="text-white/75">GDC Registered · CQC Regulated</span>
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white"
          >
            <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden>
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.3-4.1 5.7l6.2 5.2C41.2 36.5 44 30.7 44 24c0-1.3-.1-2.4-.4-3.5z"/>
            </svg>
            <span className="font-semibold">4.9</span>
            <span className="text-gold tracking-wider">★★★★★</span>
            <span className="text-white/85">Based on 1,100+ verified reviews</span>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <Wave color="#FFFFFF" />
      </div>
    </section>
  );
}
