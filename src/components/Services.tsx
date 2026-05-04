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
    <section id="services" className="section-band bg-[#f4f1ea] text-[#151515]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow text-[#a04912]">Servicios</p>
          <h2 className="section-title text-[#151515]">
            De un archivo digital a una pieza lista para usar.
          </h2>
          <p className="section-copy text-[#4f4a43]">
            La página nueva está pensada como un catálogo escalable: cada bloque
            nace desde datos editables y puede crecer con precios, galerías o
            pedidos online más adelante.
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
                <p className="mt-3 text-sm leading-6 text-[#514d45]">
                  {service.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[#292722]">
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
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-[#151515]/15 px-4 py-3 font-bold transition hover:bg-[#151515] hover:text-white"
        >
          Cómo cotizamos
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
