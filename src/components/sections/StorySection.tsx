import { Clock, MapPin } from "lucide-react";
import { Reveal } from "../Reveal";
import { business, faq, serviceAreas, timeline } from "../../data/site";

export function StorySection() {
  return (
    <section className="section story-section" id="story" aria-labelledby="story-title">
      <div className="container story-layout">
        <Reveal className="section-intro">
          <p className="eyebrow">Historia</p>
          <h2 id="story-title">Un taller que creció desde el hobby hasta la producción.</h2>
          <p>
            Voxel Forge comenzó en 2022 con una Ender 3 V2 y evolucionó hacia
            un taller orientado a clientes, eventos y piezas con propósito.
          </p>
          <div className="business-notes">
            <span>
              <Clock aria-hidden="true" size={17} />
              {business.hours.join(" / ")}
            </span>
            <span>
              <MapPin aria-hidden="true" size={17} />
              {serviceAreas.join(", ")}
            </span>
          </div>
        </Reveal>

        <div className="timeline">
          {timeline.map((item, index) => (
            <Reveal className="timeline-item" delay={index * 0.08} key={item.year}>
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="container faq-wrap" id="faq">
        <Reveal className="section-heading">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2>Antes de cotizar.</h2>
        </Reveal>
        <div className="faq-list">
          {faq.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
