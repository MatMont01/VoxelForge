import { Box, Flame } from "lucide-react";
import { Reveal } from "../Reveal";
import { meaning } from "../../data/site";

export function MeaningSection() {
  return (
    <section className="section section--meaning" id="meaning" aria-labelledby="meaning-title">
      <div className="container split-section">
        <Reveal className="section-intro">
          <p className="eyebrow">La marca</p>
          <h2 id="meaning-title">Un nombre construido como una pieza.</h2>
          <p>
            Voxel Forge une la precisión del mundo digital con el criterio técnico
            del taller. No vende solo plástico derretido: traduce intención en
            volumen físico.
          </p>
        </Reveal>
        <div className="meaning-grid">
          {meaning.map((item, index) => (
            <Reveal className="meaning-card" delay={index * 0.08} key={item.term}>
              <div className="meaning-card__icon">
                {index === 0 ? <Box aria-hidden="true" size={24} /> : <Flame aria-hidden="true" size={24} />}
              </div>
              <span className="term">{item.term}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <strong>{item.signature}</strong>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
