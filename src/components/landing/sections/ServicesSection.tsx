import { useEffect, useState, type CSSProperties } from "react";
import type { LandingPageContent } from "../../../domain/landing";

type ServicesSectionProps = {
  content: LandingPageContent["services"];
};

export function ServicesSection({ content }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<LandingPageContent["services"]["offers"][number] | null>(null);

  useEffect(() => {
    if (!selectedService) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedService]);

  return (
    <section className="vf-section vf-services" id="services" aria-labelledby="services-title">
      <div className="vf-services-word" aria-hidden="true">Servicios</div>
      <div className="vf-shell vf-services__grid">
        <div className="vf-section-copy" data-reveal>
          <p className="vf-kicker">Servicios</p>
          <h2 id="services-title">{content.title}</h2>
          <p>{content.body}</p>
        </div>

        <div className="vf-service-collage">
          {content.offers.map((service, index) => (
            <button
              type="button"
              key={service.title}
              className="vf-service-card"
              data-reveal
              onClick={() => setSelectedService(service)}
              style={{ "--reveal-index": index % 4 } as CSSProperties}
              aria-label={`Ver ${service.title} en primer plano`}
            >
              <img src={service.image.src} alt={service.image.alt} loading="lazy" decoding="async" />
              <div>
                <small>{service.bullets[0]}</small>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedService ? (
        <div
          className="vf-gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={() => setSelectedService(null)}
        >
          <button
            className="vf-gallery-modal__close"
            type="button"
            onClick={() => setSelectedService(null)}
          >
            Cerrar
          </button>
          <figure className="vf-gallery-modal__frame" onClick={(event) => event.stopPropagation()}>
            <img src={selectedService.image.src} alt={selectedService.image.alt} />
            <figcaption>
              <span>{selectedService.bullets[0]}</span>
              <h3 id="service-modal-title">{selectedService.title}</h3>
              <p>{selectedService.summary}</p>
              <small>{selectedService.bullets.slice(1).join(" / ")}</small>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
