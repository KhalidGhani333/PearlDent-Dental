import { motion } from "framer-motion";
import bg from "@/assets/cta-bg.jpg";
import { Wave } from "./Wave";

export function RoutineCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 z-10">
        <Wave color="#FFFFFF" />
      </div>
      <img src={bg} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-teal/55" />
      <div className="absolute inset-0 bg-gradient-to-l from-navy/50 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center justify-end px-6 py-32 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl text-white"
        >
          <h2 className="font-serif text-4xl md:text-5xl">Routine Dental Check-up</h2>
          <p className="mt-5 text-white/85 leading-relaxed">
            Regular dental examinations are the foundation of good oral health.
            Our thorough check-ups include digital X-rays, oral cancer
            screening, gum assessment, and personalised preventive advice.
          </p>
          <p className="mt-4 text-white/85 leading-relaxed">
            Don't wait until something hurts. Book your check-up today — new
            patient examinations from just £65, including digital X-rays.
          </p>
          <button className="mt-7 rounded-full bg-white px-8 py-4 font-medium text-teal shadow-pearl hover:bg-soft transition animate-pulse-cta">
            Book Your First Visit
          </button>
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10">
        <Wave color="#FFFFFF" flip />
      </div>
    </section>
  );
}
