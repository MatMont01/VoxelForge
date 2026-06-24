import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import type { LandingPageContent, MaterialGuide } from "../../../domain/landing";

type ProcessSectionProps = {
  content: LandingPageContent["process"];
  materials: readonly MaterialGuide[];
};

export function ProcessSection({ content, materials }: ProcessSectionProps) {
  return (
    <section className="vf-section vf-process" id="process" aria-labelledby="process-title">
      <div className="vf-shell">
        <div className="vf-process-flow">
          <div className="vf-process__top" data-reveal>
            <p className="vf-kicker">Proceso</p>
            <h2 id="process-title">{content.title}</h2>
            <p>{content.body}</p>
          </div>

          <div className="vf-process__rail" aria-label="Proceso de fabricación" data-reveal>
            {content.steps.map((step, index) => (
              <article
                className="vf-process__step"
                key={step.phase}
                style={{ "--reveal-index": index } as CSSProperties}
              >
                <span className="vf-process__phase">{step.phase}</span>
                <div className="vf-process__icon">
                  <img src={step.icon.src} alt="" loading="lazy" decoding="async" />
                </div>
                <h3>{step.title}</h3>
                <strong>{step.lead}</strong>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="vf-material-rail" id="materials" aria-label="Materiales disponibles" data-reveal>
          <div className="vf-material-rail__lead">
            <p className="vf-kicker">Materiales</p>
            <h3>El material correcto para cada proyecto</h3>
            <a href="#contact">
              Ver guía de materiales
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>
          {materials.map((material) => (
            <article className="vf-material-card" key={material.name}>
              <img src={material.image.src} alt="" loading="lazy" decoding="async" />
              <div>
                <strong>{material.name}</strong>
                <span>{material.bestFor}</span>
                <small>{material.tone}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
