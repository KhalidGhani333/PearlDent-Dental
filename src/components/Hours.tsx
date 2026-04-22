import { Reveal } from "./Section";
import { MapPin, Phone, MessageCircle } from "lucide-react";

const hours = [
  ["Monday", "08:00 – 19:00"],
  ["Tuesday", "08:00 – 19:00"],
  ["Wednesday", "08:00 – 19:00"],
  ["Thursday", "08:00 – 19:00"],
  ["Friday", "08:00 – 18:00"],
  ["Saturday", "09:00 – 14:00"],
  ["Sunday", "Closed"],
];

export function Hours() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:px-12">
        <Reveal>
          <h2 className="font-serif text-3xl font-bold uppercase tracking-wide text-teal md:text-4xl">
            We Are Open 6 Days a Week
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            <table className="w-full">
              <tbody>
                {hours.map(([d, h], i) => (
                  <tr key={d} className={i % 2 ? "bg-soft" : "bg-white"}>
                    <td className="px-5 py-3 font-medium text-navy">{d}</td>
                    <td className={`px-5 py-3 text-right ${h === "Closed" ? "font-semibold text-destructive" : "text-navy"}`}>
                      {h}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl bg-soft p-4 text-sm text-muted-foreground">
            🅿 Pay &amp; Display parking on Harley Street. Nearest tube: Baker Street (5 min walk).
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-full bg-teal px-6 py-3 font-medium text-white hover:bg-navy transition">
              Book Appointment
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border-2 border-teal px-6 py-3 font-medium text-teal hover:bg-teal hover:text-white transition">
              <MessageCircle className="h-4 w-4" /> WhatsApp: +44 7700 900 174
            </button>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl shadow-pearl">
            <iframe
              title="PearlDent location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1517%2C51.5180%2C-0.1417%2C51.5230&layer=mapnik&marker=51.5205%2C-0.1467"
              className="h-full w-full"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-4 shadow-pearl backdrop-blur md:right-auto md:max-w-xs">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 text-teal" />
                <div>
                  <div className="font-semibold text-navy">PearlDent Care &amp; Aesthetics</div>
                  <div className="text-sm text-muted-foreground">22 Harley Street, Marylebone, London W1G 9PL</div>
                  <div className="mt-1 text-xs">
                    <span className="text-gold">★ 4.9</span>
                    <span className="text-muted-foreground"> (1,100+ reviews)</span>
                  </div>
                  <div className="mt-1 inline-flex items-center gap-1 text-xs text-teal">
                    <Phone className="h-3 w-3" /> +44 (0)20 7946 1100
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
