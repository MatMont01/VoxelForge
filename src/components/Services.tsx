import {
  ArrowRight,
  CalendarDays,
  DraftingCompass,
  Printer,
  Wrench,
} from "lucide-react";
import { services } from "../data/site";
import { scrollToHash } from "../utils/links";

const icons = [Printer, DraftingCompass, Wrench, CalendarDays] as const;

export function Services() {
  return (
    <section id="services" data-stage className="services-stage chapter-section section-band text-white">
      <div className="chapter-inner mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow text-[#ffb25f]">Mesa de trabajo</p>
          <h2 className="section-title">
            De un archivo digital a una pieza lista para usar.
          </h2>
          <p className="section-copy text-white/68">
            Cada servicio se trabaja como una pieza de taller: elegimos material,
            orientación, acabado y tolerancias según el uso final.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article key={service.title} className={`service-card ${service.accent}`}>
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-current/10">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">
                  {service.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-white/76">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-current" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <button
          onClick={() => scrollToHash("#process")}
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-white/16 bg-white/8 px-4 py-3 font-bold text-white transition hover:border-[#ffb25f] hover:bg-[#ff7a2f] hover:text-[#111114]"
        >
          Cómo cotizamos
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
