import { Box, Flame, Ruler, ShieldCheck, Sparkles } from "lucide-react";
import type { LandingPageContent } from "../../../domain/landing";

type WorkshopSectionProps = {
  workshop: LandingPageContent["workshop"];
  meaning: LandingPageContent["meaning"];
};

export function WorkshopSection({ workshop, meaning }: WorkshopSectionProps) {
  return (
    <>
      <section className="vf-section vf-brand-story" id="meaning" aria-labelledby="meaning-title">
        <div className="vf-brand-wordmark" aria-hidden="true">Voxel / Forge</div>
        <div className="vf-shell vf-brand-grid">
          <div className="vf-brand-symbol" data-reveal>
            <img src={meaning.logo.src} alt={meaning.logo.alt} loading="lazy" decoding="async" />
          </div>
          <div className="vf-brand-copy" data-reveal>
            <p className="vf-kicker">La marca</p>
            <h2 id="meaning-title">{meaning.title}</h2>
            <p>{meaning.body}</p>
            <div className="vf-meaning__terms">
              {meaning.terms.map((item, index) => (
                <article key={item.term}>
                  {index === 0 ? <Box aria-hidden="true" size={22} /> : <Flame aria-hidden="true" size={22} />}
                  <span>{item.term}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <strong>{item.signature}</strong>
                </article>
              ))}
            </div>
            <div className="vf-mission-row">
              <article><strong>Historia</strong><p>{meaning.history}</p></article>
              <article><strong>Misión</strong><p>{meaning.mission}</p></article>
              <article><strong>Visión</strong><p>{meaning.vision}</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="vf-section vf-workshop" id="workshop" aria-labelledby="workshop-title">
        <div className="vf-shell vf-workshop__grid">
          <div className="vf-section-copy" data-reveal>
            <p className="vf-kicker">{workshop.eyebrow}</p>
            <h2 id="workshop-title">{workshop.title}</h2>
            <p>{workshop.body}</p>
            <div className="vf-route-list">
              {workshop.highlights.map((item, index) => (
                <article key={item.title}>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  <div>
                    {index === 0 ? <Sparkles aria-hidden="true" size={18} /> : null}
                    {index === 1 ? <Ruler aria-hidden="true" size={18} /> : null}
                    {index === 2 ? <ShieldCheck aria-hidden="true" size={18} /> : null}
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="vf-workshop__media" aria-label="Máquinas y piezas del taller" data-reveal>
            <div className="vf-stage-plane" aria-hidden="true" />
            <img
              className="vf-workshop__machine"
              src={workshop.machine.src}
              alt={workshop.machine.alt}
              loading="lazy"
              decoding="async"
            />
            <img
              className="vf-workshop__open-machine"
              src={workshop.detail.src}
              alt={workshop.detail.alt}
              loading="lazy"
              decoding="async"
            />
            {workshop.samples.map((sample, index) => (
              <figure className={`vf-workshop-sample vf-workshop-sample--${index + 1}`} key={sample.alt}>
                <img src={sample.src} alt={sample.alt} loading="lazy" decoding="async" />
                <figcaption>{index === 0 ? "Uso y exhibición" : "Maqueta y colección"}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
