import { ArrowDown, ArrowRight, MessageCircle } from "lucide-react";
import type { LandingPageContent } from "../../../domain/landing";

type HeroSectionProps = {
  content: LandingPageContent["hero"];
};

export function HeroSection({ content }: HeroSectionProps) {
  const [firstWord, secondWord] = content.title.split(" ");

  return (
    <section className="vf-hero" id="home" aria-labelledby="hero-title">
      <img
        className="vf-hero__backdrop"
        src={content.background.src}
        alt=""
        aria-hidden="true"
        decoding="async"
        fetchPriority="high"
      />
      <div className="vf-hero__wash" aria-hidden="true" />
      <div className="vf-shell vf-hero__grid">
        <div className="vf-hero__copy">
          <p className="vf-kicker">{content.eyebrow}</p>
          <h1 id="hero-title">
            <span>{firstWord}</span>
            <span>{secondWord}</span>
          </h1>
          <p className="vf-hero__signature">{content.signature}</p>
          <p className="vf-hero__text">{content.description}</p>
          <div className="vf-actions" aria-label="Acciones principales">
            {content.actions.map((action) => (
              <a
                className={`vf-button vf-button--${action.tone}`}
                href={action.href}
                key={action.label}
              >
                {action.tone === "primary" ? (
                  <MessageCircle aria-hidden="true" size={19} />
                ) : (
                  <ArrowRight aria-hidden="true" size={18} />
                )}
                {action.label}
              </a>
            ))}
          </div>
        </div>

        <div className="vf-hero__object" aria-label="Taller y piezas de Voxel Forge">
          <div className="vf-hero__logo-disc">
            <img src={content.logo.src} alt={content.logo.alt} decoding="async" />
          </div>
          <div className="vf-hero__snapshots">
            {content.snapshots.map((image) => (
              <img key={image.alt} src={image.src} alt={image.alt} decoding="async" />
            ))}
          </div>
        </div>
      </div>

      <div className="vf-shell vf-proof" aria-label="Datos rápidos">
        {content.proof.map((item) => (
          <span key={item.label}>
            <small>{item.label}</small>
            <strong>{item.value}</strong>
          </span>
        ))}
      </div>

      <a className="vf-scroll-cue" href="#workshop" aria-label="Bajar al taller">
        <ArrowDown aria-hidden="true" size={18} />
      </a>
    </section>
  );
}
