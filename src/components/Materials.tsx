import { materials } from "../data/site";

export function Materials() {
  return (
    <section id="materials" data-stage className="materials-stage chapter-section section-band text-white">
      <div className="chapter-inner mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow text-[#82e6c9]">Filamentos</p>
          <h2 className="section-title">
            Elegimos material por uso, no por moda.
          </h2>
          <p className="section-copy text-white/68">
            La recomendación cambia según temperatura, impacto, humedad,
            estética, tolerancias y presupuesto.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {materials.map((material) => (
            <article
              key={material.name}
              className="material-card rounded-lg border border-white/12 bg-white/[0.07] p-5 shadow-sm backdrop-blur"
            >
              <h3 className="font-display text-2xl text-[#82e6c9]">
                {material.name}
              </h3>
              <p className="mt-4 text-sm font-bold leading-6 text-white">{material.bestFor}</p>
              <p className="mt-3 text-sm leading-6 text-white/62">
                {material.tone}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
