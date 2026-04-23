import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Our Dentists", id: "our-dentists" },
  { name: "Smile Gallery", id: "smile-gallery" },
  { name: "Blog", id: "blog" },
  { name: "Contact Us", id: "contact-us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = links.map(l => document.getElementById(l.id));
      const current = sections.findIndex(s => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current !== -1) setActiveId(links[current].id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <motion.header
      initial={false}
      animate={{
        height: scrolled ? 68 : 84,
        boxShadow: scrolled
          ? "0 6px 24px -8px rgba(11,123,131,0.18)"
          : "0 1px 0 rgba(11,123,131,0.06)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-8">
        <Logo />

        <nav className="hidden xl:flex items-center gap-7 text-sm text-navy">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`relative transition-colors hover:text-teal ${
                activeId === l.id ? "text-teal font-semibold" : ""
              }`}
            >
              {l.name}
              {activeId === l.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={() => scrollTo("contact-us")}
            className="rounded-full border-2 border-teal px-5 py-2 text-sm font-medium text-teal transition hover:bg-teal hover:text-white"
          >
            Send Enquiry
          </button>
          <button 
            onClick={() => scrollTo("contact-us")}
            className="flex items-center gap-2 rounded-full bg-teal px-5 py-2 text-sm font-medium text-white transition hover:bg-navy animate-pulse-cta"
          >
            <Calendar className="h-4 w-4" /> Book Now
          </button>
        </div>

        <button
          className="md:hidden text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t bg-white"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <button 
                  key={l.id} 
                  onClick={() => scrollTo(l.id)}
                  className={`rounded px-2 py-2 text-left text-navy hover:bg-soft ${
                    activeId === l.id ? "bg-soft text-teal font-medium" : ""
                  }`}
                >
                  {l.name}
                </button>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <button 
                  onClick={() => scrollTo("contact-us")}
                  className="rounded-full border-2 border-teal py-2 text-sm font-medium text-teal"
                >
                  Send Enquiry
                </button>
                <button 
                  onClick={() => scrollTo("contact-us")}
                  className="rounded-full bg-teal py-2 text-sm font-medium text-white"
                >
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
