import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { SmileGallery } from "@/components/SmileGallery";
import { Team } from "@/components/Team";
import { Reviews } from "@/components/Reviews";
import { WhyChoose } from "@/components/WhyChoose";
import { Features } from "@/components/Features";
import { Hours } from "@/components/Hours";
import { RoutineCTA } from "@/components/RoutineCTA";
import { FAQ } from "@/components/FAQ";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PearlDent Care & Aesthetics — Private Dentist in Marylebone, London" },
      {
        name: "description",
        content:
          "Award-winning private dental care on Harley Street, Marylebone. GDC registered, CQC regulated. Invisalign, implants, veneers, whitening. Book today.",
      },
      { property: "og:title", content: "PearlDent Care & Aesthetics — Marylebone, London" },
      {
        property: "og:description",
        content:
          "Premium private dentistry in the heart of Marylebone. Same-week appointments, 0% finance, 4.9★ on Google.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <SmileGallery />
        <Team />
        <Reviews />
        <WhyChoose />
        <Features />
        <Hours />
        <RoutineCTA />
        <FAQ />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
