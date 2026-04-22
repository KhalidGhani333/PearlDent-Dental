import { Reveal, TealLabel, slideInLeft, slideInRight } from "./Section";
import family from "@/assets/why-family.jpg";

export function WhyChoose() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-center md:px-12">
        <Reveal variant={slideInLeft}>
          <TealLabel>Private Dental Care in Marylebone</TealLabel>
          <h2 className="mt-3 font-serif text-4xl text-navy md:text-5xl">
            Why Choose PearlDent? Discover the Difference of Patient-Centred Dentistry
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Choosing the right dental practice is an important decision. At
            PearlDent, we stand out through our unwavering commitment to
            patient-centred care, advanced technology, and a genuinely warm
            environment that puts nervous patients completely at ease.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            With NHS waiting lists stretching months across London, we offer
            same-week appointments, extended evening hours, and a level of
            personalised attention that simply isn't possible in an
            overstretched system.
          </p>
          <button className="mt-7 rounded-full bg-teal px-7 py-3.5 font-medium text-white shadow-soft hover:bg-navy transition animate-pulse-cta">
            Book Your Appointment
          </button>
        </Reveal>
        <Reveal variant={slideInRight}>
          <img
            src={family}
            alt="Smiling family"
            loading="lazy"
            width={1280}
            height={1024}
            className="h-[460px] w-full rounded-2xl object-cover shadow-pearl md:h-[540px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
