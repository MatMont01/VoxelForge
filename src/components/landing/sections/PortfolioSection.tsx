import { useEffect, useState, type CSSProperties } from "react";
import type { LandingPageContent } from "../../../domain/landing";

type PortfolioSectionProps = {
  content: LandingPageContent["portfolio"];
};

export function PortfolioSection({ content }: PortfolioSectionProps) {
  const gallery = content.pieces.filter((piece) => piece.title !== content.featured.title).slice(0, 5);
  const tablePieces = [content.featured, ...gallery];
  const [selectedPiece, setSelectedPiece] = useState<(typeof tablePieces)[number] | null>(null);

  useEffect(() => {
    if (!selectedPiece) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPiece(null);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedPiece]);

  return (
    <section className="vf-section vf-portfolio" id="portfolio" aria-labelledby="portfolio-title">
      <div className="vf-shell vf-portfolio__layout">
        <div className="vf-portfolio__copy" data-reveal>
          <div className="vf-section-copy">
            <p className="vf-kicker">Galería real</p>
            <h2 id="portfolio-title">{content.title}</h2>
            <p>{content.body}</p>
            <div className="vf-actions">
              <a className="vf-button vf-button--primary" href="#contact">Cotizar algo similar</a>
              <a className="vf-button vf-button--secondary" href="#services">Ver servicios</a>
            </div>
          </div>
        </div>

        <div className="vf-portfolio-table" data-reveal>
          <div className="vf-table-plane" aria-hidden="true" />
          {tablePieces.map((piece, index) => (
            <button
              type="button"
              className={`vf-piece-card vf-piece-card--${index === 0 ? "feature" : index}`}
              key={piece.title}
              onClick={() => setSelectedPiece(piece)}
              style={{ "--reveal-index": index } as CSSProperties}
              aria-label={`Ver ${piece.title} en primer plano`}
            >
              <img src={piece.image.src} alt={piece.image.alt} loading="lazy" decoding="async" />
              <div>
                <span>{piece.category}</span>
                <h3>{piece.title}</h3>
                <p>{piece.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="vf-shell vf-portfolio-strip" aria-label="Tipos de trabajo">
        <div><small>Figuras</small><strong>Colección</strong></div>
        <div><small>Maquetas</small><strong>Arquitectura</strong></div>
        <div><small>Props</small><strong>Eventos</strong></div>
        <div><small>Series</small><strong>Stands</strong></div>
        <div><small>Función</small><strong>Piezas útiles</strong></div>
      </div>

      {selectedPiece ? (
        <div
          className="vf-gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
          onClick={() => setSelectedPiece(null)}
        >
          <button
            className="vf-gallery-modal__close"
            type="button"
            onClick={() => setSelectedPiece(null)}
          >
            Cerrar
          </button>
          <figure className="vf-gallery-modal__frame" onClick={(event) => event.stopPropagation()}>
            <img src={selectedPiece.image.src} alt={selectedPiece.image.alt} />
            <figcaption>
              <span>{selectedPiece.category}</span>
              <h3 id="gallery-modal-title">{selectedPiece.title}</h3>
              <p>{selectedPiece.description}</p>
              <small>{selectedPiece.material}</small>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
