import { ArrowDown, PackageCheck } from "lucide-react";
import { Reveal } from "../Reveal";
import { forgeStory } from "../../data/site";

export function ProcessSection() {
  return (
    <section className="section process-section" id="process" aria-labelledby="process-title">
      <div className="container">
        <Reveal className="section-heading section-heading--wide">
          <p className="eyebrow">Proceso</p>
          <h2 id="process-title">La forja, explicada sin humo.</h2>
          <p>
            Una cotización buena nace de revisar geometría, tolerancia, material
            y acabado. Este flujo ayuda a decidir rápido sin perder detalle.
          </p>
        </Reveal>

        <div className="process-line" aria-label="Proceso de impresión 3D">
          {forgeStory.map((step, index) => (
            <Reveal className="process-step" delay={index * 0.08} key={step.phase}>
              <span className="process-step__phase">{step.phase}</span>
              <h3>{step.title}</h3>
              <strong>{step.lead}</strong>
              <p>{step.text}</p>
              {index < forgeStory.length - 1 ? (
                <ArrowDown className="process-step__arrow" aria-hidden="true" size={18} />
              ) : (
                <PackageCheck className="process-step__arrow" aria-hidden="true" size={18} />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
