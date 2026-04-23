import { Check } from "lucide-react";
import { Reveal, TealLabel, slideInLeft } from "./Section";
import patient from "@/assets/about-patient.jpg";
import dentist from "@/assets/about-dentist.jpg";

const ticks = [
  "Personalised Treatment Plans for Every Patient",
  "Gentle, Unhurried Care — Including Nervous Patients",
  "State-of-the-Art Digital X-Ray & CBCT Scanning",
  "Flexible Appointments — Evenings & Saturdays Available",
];

export function About() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:px-12 md:gap-12 md:items-center">
        <Reveal variant={slideInLeft} className="relative mx-auto w-full max-w-lg md:max-w-none">
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            <img
              src={patient}
              alt="Smiling patient at PearlDent"
              className="h-[400px] w-full rounded-2xl object-cover shadow-pearl md:h-[480px]"
              width={1024}
              height={1280}
              loading="lazy"
            />
            <img
              src={dentist}
              alt="Dentist with patient"
              className="absolute -bottom-10 -right-4 hidden h-48 w-48 rounded-2xl object-cover shadow-pearl ring-8 ring-white sm:block md:h-56 md:w-56"
              width={400}
              height={400}
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal className="flex flex-col justify-center">
          <TealLabel>About PearlDent</TealLabel>
          <h2 className="mt-3 font-serif text-4xl text-navy md:text-5xl">
            Team of London's Finest Dental Professionals
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            PearlDent Care &amp; Aesthetics combines advanced dental treatments
            with genuine warmth and a personal touch. Our Marylebone practice
            has been serving patients across Central London since 2010 — from
            routine check-ups and hygiene appointments to complete smile
            transformations. We believe every patient deserves expert care in
            a calm, unhurried environment.
          </p>
          <ul className="mt-6 space-y-3">
            {ticks.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-teal/10 text-teal">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-navy">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-teal px-6 py-3 font-medium text-white shadow-soft transition hover:bg-navy">
              Book Appointment
            </button>
            <button className="rounded-full border-2 border-teal px-6 py-3 font-medium text-teal transition hover:bg-teal hover:text-white">
              WhatsApp Us
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
