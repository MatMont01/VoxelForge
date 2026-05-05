import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { portfolioItems } from "../../data/site";

export function PortfolioSection() {
  return (
    <section className="section portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
      <div className="container portfolio-header">
        <Reveal className="section-heading">
          <p className="eyebrow">Portafolio</p>
          <h2 id="portfolio-title">Casos que cuentan escala, detalle y contexto.</h2>
          <p>
            La web nueva no reutiliza las fotos de la versión anterior; conserva
            los casos y los presenta con fichas visuales generadas desde el
            propio diseño.
          </p>
        </Reveal>
        <a className="inline-link" href="#contact">
          Cotizar algo similar
          <ArrowRight aria-hidden="true" size={17} />
        </a>
      </div>

      <div className="portfolio-track" aria-label="Trabajos destacados">
        {portfolioItems.map((item, index) => (
          <article
            className="portfolio-card"
            key={item.title}
            style={{ "--tile-accent": item.accent } as CSSProperties}
          >
            <div className="portfolio-card__visual" aria-hidden="true">
              <span className="voxel-stack voxel-stack--a" />
              <span className="voxel-stack voxel-stack--b" />
              <span className="voxel-stack voxel-stack--c" />
            </div>
            <div className="portfolio-card__body">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <dl>
                <dt>Material</dt>
                <dd>{item.material}</dd>
              </dl>
            </div>
            <small>{String(index + 1).padStart(2, "0")}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
