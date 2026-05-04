import { Award, Calendar, Heart, Target } from "lucide-react";
import { business, timeline } from "../data/site";

export function About() {
  return (
    <section id="about" className="section-band bg-[#fffaf1] text-[#151515]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow text-[#a04912]">Historia</p>
            <h2 className="section-title text-[#151515]">
              Una forja digital nacida en Santa Cruz.
            </h2>
            <p className="section-copy text-[#514d45]">
              {business.name} comenzó como un sueño en {business.foundedYear} con
              una Ender 3 V2. El hobby se convirtió en un taller enfocado en
              transformar ideas en objetos útiles, coleccionables y memorables.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Calidad", Award],
                ["Precisión", Target],
                ["Pasión", Heart],
              ].map(([label, Icon]) => (
                <div key={label as string} className="rounded-lg border border-[#151515]/12 bg-white p-4">
                  <Icon className="mb-4 h-5 w-5 text-[#ff7a2f]" />
                  <p className="font-bold">{label as string}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {timeline.map((item) => (
              <article
                key={item.year}
                className="grid gap-4 rounded-lg border border-[#151515]/12 bg-white p-5 sm:grid-cols-[110px_1fr]"
              >
                <div className="flex items-center gap-2 font-display text-3xl text-[#ff7a2f]">
                  <Calendar className="h-5 w-5" />
                  {item.year}
                </div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#514d45]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
