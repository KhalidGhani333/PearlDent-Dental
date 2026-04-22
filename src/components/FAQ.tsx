import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, TealLabel } from "./Section";

const faqs = [
  { q: "Where is the best dentist in Marylebone?", a: "PearlDent on Harley Street offers award-winning private dental care with a 4.9-star Google rating and over 1,100 verified patient reviews. Same-week appointments available." },
  { q: "What services does PearlDent offer?", a: "We provide the full spectrum — from routine check-ups, hygiene appointments, and emergency care to Invisalign, composite bonding, dental implants, porcelain veneers, teeth whitening, and facial aesthetics." },
  { q: "Are you NHS or private?", a: "PearlDent is a fully private practice. We do not offer NHS treatment, but we offer competitive private fees, a monthly care plan from £14.99, and 0% finance on treatments over £500." },
  { q: "Do you treat nervous patients?", a: "Absolutely — this is one of our specialisms. We offer a gentle, unhurried approach and conscious sedation options. Our team is trained in dental anxiety management." },
  { q: "How quickly can I get an appointment?", a: "We typically offer new patient appointments within 48 hours. For dental emergencies, we aim to see you the same day. Call +44 (0)20 7946 1100." },
  { q: "What are your teeth whitening options?", a: "We offer professional home whitening from £299 and Enlighten Whitening — the only system guaranteed to reach shade B1 — from £595. Both are GDC-compliant and safe." },
  { q: "Can I book an online video consultation?", a: "Yes — we offer virtual consultations via video call for treatment planning and second opinions. Book through our website or call us." },
  { q: "What payment options do you accept?", a: "We accept all major credit/debit cards, bank transfer, and offer 0% finance through Tabeo for treatments over £500. Our monthly care plan also helps spread costs." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-[1fr_1.5fr] md:px-12">
        <div className="md:sticky md:top-32 md:self-start">
          <Reveal>
            <TealLabel>Everything You Need to Know</TealLabel>
            <h2 className="mt-3 font-serif text-4xl text-navy md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-5 text-muted-foreground">
              Can't find your answer? Call us on +44 (0)20 7946 1100 or
              WhatsApp us anytime.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-teal px-6 py-3 font-medium text-white hover:bg-navy transition">
                Book Appointment
              </button>
              <button className="rounded-full border-2 border-teal px-6 py-3 font-medium text-teal hover:bg-teal hover:text-white transition">
                Call Now
              </button>
            </div>
          </Reveal>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.04 }}
              className="overflow-hidden rounded-2xl bg-soft"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-navy">{f.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal text-white"
                >
                  <Plus className="h-5 w-5" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
