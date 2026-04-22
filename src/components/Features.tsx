import { motion } from "framer-motion";
import { Sparkles, Cpu, ShieldCheck, Moon, Wand2, CreditCard } from "lucide-react";
import { Reveal } from "./Section";

const features = [
  { icon: Sparkles, title: "Pain-Free Dentistry", desc: "Our advanced techniques and modern anaesthesia ensure a comfortable, gentle experience — even for our most anxious patients." },
  { icon: Cpu, title: "Latest Technology", desc: "CBCT 3D imaging, digital X-rays, intraoral scanners, and same-day CAD/CAM crowns. Precision dentistry at its finest." },
  { icon: ShieldCheck, title: "GDC & CQC Regulated", desc: "Every clinician is GDC registered and our practice is fully regulated by the Care Quality Commission for your complete peace of mind." },
  { icon: Moon, title: "Sedation Available", desc: "Conscious sedation options available for anxious patients and complex procedures. Relax and let us take care of everything." },
  { icon: Wand2, title: "Aesthetic Treatments", desc: "Beyond dentistry — we offer HydraFacial, anti-wrinkle injections, and dermal fillers alongside your dental care." },
  { icon: CreditCard, title: "0% Finance Available", desc: "Spread the cost of treatment over 12 months with our interest-free finance option. Available on treatments over £500." },
];

export function Features() {
  return (
    <section className="bg-soft py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal className="text-center">
          <h2 className="font-serif text-4xl text-navy md:text-5xl">Why Choose Us?</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-soft"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-teal transition-transform duration-300 group-hover:scale-x-100" />
              <div className="grid h-12 w-12 place-items-center rounded-full bg-teal text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-teal">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
