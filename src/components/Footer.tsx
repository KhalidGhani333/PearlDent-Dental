import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const services = [
  "Invisible Aligners", "Dental Implants", "Teeth Whitening", "Composite Bonding",
  "Porcelain Veneers", "Crown & Bridges", "Root Canal Treatment", "Orthodontic Braces",
  "Dental Check-up", "Dental X-Rays", "Scale & Polish", "Emergency Dentistry",
  "Sedation Dentistry", "Paediatric Dentistry", "Sleep Apnoea", "TMJ/TMD Treatment",
  "Gum Disease Treatment", "HydraFacial", "Anti-Wrinkle Injections", "Smile Makeovers",
];

const justForYou = [
  { img: b1, title: "How to Stop Grinding Teeth in Sleep Naturally?", excerpt: "Bruxism affects millions — discover natural remedies and night guard options that actually work." },
  { img: b2, title: "Why Are My Teeth Sensitive to Cold?", excerpt: "Cold sensitivity has many causes — from worn enamel to gum recession. Here's what to know." },
  { img: b3, title: "Best Dentist in London — What to Look For", excerpt: "Choosing the right private practice in London? These are the credentials and qualities that matter." },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3 md:px-12">
        <div>
          <div className="rounded-xl bg-white/95 p-3 inline-block">
            <Logo />
          </div>
          <p className="mt-5 text-white/70">
            Premium Private Dental Care in Marylebone, London.
          </p>
          <div className="mt-6 space-y-2.5 text-sm text-white/80">
            <div className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 text-teal-light" />
              <div>
                22 Harley Street<br />
                Marylebone, London W1G 9PL
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-teal-light" /> +44 (0)20 7946 1100
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-teal-light" /> hello@pearldent.co.uk
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-teal hover:text-white">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-teal-light">Our Dental Services</h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/70">
            {services.map((s) => (
              <li key={s}>
                <a href="#" className="transition hover:text-teal-light">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-teal-light">Just For You</h3>
          <div className="mt-5 space-y-4">
            {justForYou.map((p) => (
              <a href="#" key={p.title} className="group flex gap-3">
                <img src={p.img} alt="" loading="lazy" className="h-16 w-20 shrink-0 rounded-lg object-cover" />
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-teal-light transition">{p.title}</div>
                  <div className="text-xs text-white/60 line-clamp-2">{p.excerpt}</div>
                </div>
              </a>
            ))}
          </div>
          <button className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-teal-light px-5 py-2.5 text-sm font-medium text-teal-light transition hover:bg-teal-light hover:text-navy">
            Blog & Newsroom <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-white/55 md:flex-row md:justify-between md:px-12">
          <div>
            © 2026 PearlDent Care &amp; Aesthetics Ltd · Registered in England &amp; Wales No. 09471623 · GDC Practice No. 45821 · CQC Reg No. 1-20629579981
          </div>
          <div className="space-x-3">
            <a href="#" className="hover:text-teal-light">Privacy Policy</a>·
            <a href="#" className="hover:text-teal-light">Terms &amp; Conditions</a>·
            <a href="#" className="hover:text-teal-light">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
