import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  "Home", "About", "Services", "Our Dentists",
  "Smile Gallery", "Blog", "Contact Us",
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          {links.map((l, i) => (
            <a
              key={l}
              href="#"
              className={`relative transition-colors hover:text-teal ${
                i === 0 ? "text-teal font-semibold" : ""
              }`}
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="rounded-full border-2 border-teal px-5 py-2 text-sm font-medium text-teal transition hover:bg-teal hover:text-white">
            Send Enquiry
          </button>
          <button className="flex items-center gap-2 rounded-full bg-teal px-5 py-2 text-sm font-medium text-white transition hover:bg-navy animate-pulse-cta">
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
                <a key={l} href="#" className="rounded px-2 py-2 text-navy hover:bg-soft">
                  {l}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <button className="rounded-full border-2 border-teal py-2 text-sm font-medium text-teal">
                  Send Enquiry
                </button>
                <button className="rounded-full bg-teal py-2 text-sm font-medium text-white">
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
