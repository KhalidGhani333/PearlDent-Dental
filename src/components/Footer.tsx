import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Facebook = (p: { className?: string }) => (<svg viewBox="0 0 24 24" fill="currentColor" className={p.className}><path d="M22 12a10 10 0 1 0-11.6 9.9V14.9H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"/></svg>);
const Instagram = (p: { className?: string }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>);
const Linkedin = (p: { className?: string }) => (<svg viewBox="0 0 24 24" fill="currentColor" className={p.className}><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.9-2 3.9-2 4.2 0 5 2.8 5 6.4V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z"/></svg>);
const Youtube = (p: { className?: string }) => (<svg viewBox="0 0 24 24" fill="currentColor" className={p.className}><path d="M23 7s-.2-1.6-.9-2.3c-.8-.9-1.8-.9-2.2-1C16.7 3.5 12 3.5 12 3.5s-4.7 0-7.9.2c-.4.1-1.4.1-2.2 1C1.2 5.4 1 7 1 7S.8 8.9.8 10.8v1.7c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1C5.7 19.8 12 19.8 12 19.8s4.7 0 7.9-.2c.4-.1 1.4-.1 2.2-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.7c0-1.9-.2-3.8-.2-3.8ZM9.7 14.7V8.4l6.2 3.2-6.2 3.1Z"/></svg>);
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

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:px-12">
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
      </div>
      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-white/55 md:flex-row md:justify-center md:px-12">
          <div className="text-center">
            Powered By <a href="https://axistechgroup.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-light font-medium transition-colors">AxisTechGroup</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
