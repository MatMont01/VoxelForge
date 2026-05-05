import { ShieldCheck } from "lucide-react";
import { Reveal } from "../Reveal";
import { materials } from "../../data/site";

export function MaterialsSection() {
  return (
    <section className="section materials-section" id="materials" aria-labelledby="materials-title">
      <div className="container">
        <Reveal className="section-heading section-heading--wide">
          <p className="eyebrow">Materiales</p>
          <h2 id="materials-title">La pieza cambia cuando el material se elige con intención.</h2>
        </Reveal>
        <div className="material-grid">
          {materials.map((material, index) => (
            <Reveal className="material-row" delay={index * 0.06} key={material.name}>
              <ShieldCheck aria-hidden="true" size={23} />
              <div>
                <h3>{material.name}</h3>
                <p>{material.bestFor}</p>
              </div>
              <span>{material.tone}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
