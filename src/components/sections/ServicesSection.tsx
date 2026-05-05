import { Check, Cog, Factory, Layers3, Ruler } from "lucide-react";
import { Reveal } from "../Reveal";
import { services } from "../../data/site";

const icons = [Factory, Ruler, Cog, Layers3] as const;

export function ServicesSection() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow">Servicios</p>
          <h2 id="services-title">De una idea suelta a una pieza lista para uso real.</h2>
          <p>
            El sitio está pensado para clientes que llegan con archivo, foto,
            boceto o necesidad técnica. Cada servicio muestra qué se resuelve y
            qué datos ayudan a cotizar.
          </p>
        </Reveal>

        <div className="service-layout">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <Reveal className="service-card" delay={index * 0.08} key={service.title}>
                <div className="service-card__top">
                  <span>{service.tone}</span>
                  <Icon aria-hidden="true" size={25} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>
                      <Check aria-hidden="true" size={17} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
