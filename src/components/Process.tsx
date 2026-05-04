import { processSteps } from "../data/site";

export function Process() {
  return (
    <section id="process" className="section-band bg-[#111418] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow text-[#82e6c9]">Proceso</p>
            <h2 className="section-title">Cotizar sin vueltas.</h2>
            <p className="section-copy text-white/68">
              El precio se calcula con datos reales del laminado: material,
              tiempo, tamaño, soportes, acabado y dificultad del diseño.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-5"
              >
                <div className="mb-5 font-display text-3xl text-[#82e6c9]">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/66">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
