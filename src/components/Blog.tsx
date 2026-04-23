import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal, TealLabel } from "./Section";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const posts = [
  { img: b1, cat: "Oral Health", title: "How to Remove Plaque from Teeth Effectively", excerpt: "Plaque buildup is the leading cause of tooth decay and gum disease. Our hygienist explains the best techniques..." },
  { img: b2, cat: "Cosmetic Dentistry", title: "Composite Bonding vs Porcelain Veneers: Which is Right for You?", excerpt: "Both treatments can transform your smile, but the right choice depends on your goals, budget, and teeth..." },
  { img: b3, cat: "Orthodontics", title: "How Long Does Invisalign Take? A Complete Guide for 2026", excerpt: "Treatment time varies based on complexity — from 6 months for mild cases to 18 months for comprehensive..." },
];

export function Blog() {
  return (
    <section className="bg-soft py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <Reveal className="text-center">
          <TealLabel>Dental Advice & News</TealLabel>
          <h2 className="mt-3 font-serif text-4xl text-navy md:text-5xl">From Our Blog</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.a
              href="#"
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-soft"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-teal transition-transform duration-300 group-hover:scale-x-100" />
              <div className="aspect-[5/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
                  {p.cat}
                </span>
                <h3 className="mt-3 font-serif text-xl text-navy leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal">
                  Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
