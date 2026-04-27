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
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <div id="smile-gallery"><SmileGallery /></div>
        <div id="our-dentists"><Team /></div>
        <Reviews />
        <WhyChoose />
        <Features />
        <div id="contact-us"><Hours /></div>
        <RoutineCTA />
        <FAQ />
        <div id="blog"><Blog /></div>
      </main>
      <Footer />
    </div>
  );
}
