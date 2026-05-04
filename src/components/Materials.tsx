import { materials } from "../data/site";

export function Materials() {
  return (
    <section id="materials" className="section-band bg-[#f7f7f4] text-[#171717]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow text-[#4b7b35]">Materiales</p>
          <h2 className="section-title text-[#171717]">
            Elegimos material por uso, no por moda.
          </h2>
          <p className="section-copy text-[#4f554c]">
            La recomendación cambia según temperatura, impacto, humedad,
            estética, tolerancias y presupuesto.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {materials.map((material) => (
            <article
              key={material.name}
              className="rounded-lg border border-[#171717]/12 bg-white p-5 shadow-sm"
            >
              <h3 className="font-display text-2xl text-[#4b7b35]">
                {material.name}
              </h3>
              <p className="mt-4 text-sm font-bold leading-6">{material.bestFor}</p>
              <p className="mt-3 text-sm leading-6 text-[#5a5f57]">
                {material.tone}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
