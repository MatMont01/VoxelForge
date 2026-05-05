import { Check, Printer } from "lucide-react";
import { Reveal } from "../Reveal";
import { equipment } from "../../data/site";

export function EquipmentSection() {
  return (
    <section className="section equipment-section" id="equipment" aria-labelledby="equipment-title">
      <div className="container equipment-layout">
        <Reveal className="equipment-visual">
          <div className="printer-model" aria-hidden="true">
            <div className="printer-model__rail" />
            <div className="printer-model__head" />
            <div className="printer-model__frame" />
            <div className="printer-model__plate" />
            <div className="printer-model__part" />
          </div>
        </Reveal>
        <Reveal className="equipment-copy" delay={0.08}>
          <p className="eyebrow">Equipo</p>
          <h2 id="equipment-title">
            <Printer aria-hidden="true" size={34} />
            {equipment.name}
          </h2>
          <p>
            El taller combina máquinas cerradas y abiertas para mejorar
            velocidad, repetibilidad y control de calidad en piezas visuales,
            funcionales y lotes de eventos.
          </p>
          <div className="spec-grid">
            {equipment.specs.map(([label, value]) => (
              <div className="spec" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <ul className="feature-list">
            {equipment.features.map((feature) => (
              <li key={feature}>
                <Check aria-hidden="true" size={17} />
                {feature}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
