import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { LandingPageContent } from "../../../domain/landing";

type ContactSectionProps = {
  content: LandingPageContent["contact"];
};

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <>
      <section className="vf-section vf-resource-section" id="resources" aria-labelledby="resources-title">
        <div className="vf-resources-word" aria-hidden="true">Ideas</div>
        <div className="vf-shell vf-resource-layout">
          <div className="vf-section-copy" data-reveal>
            <p className="vf-kicker">Modelos listos</p>
            <h2 id="resources-title">Ideas para cotizar sin diseñar desde cero.</h2>
            <p>
              Busca un modelo gratuito o premium, descárgalo o envíanos el enlace.
              Nosotros revisamos si se puede imprimir, qué material conviene y cuánto costaría hacerlo.
            </p>
          </div>
          <div className="vf-resource-grid" data-reveal>
            {content.resources.map((item) => (
              <a href={item.href} key={item.label} target="_blank" rel="noreferrer">
                <div className="vf-resource-card__brand">
                  {item.icon ? (
                    <span className="vf-resource-card__logo" aria-hidden="true">
                      <img src={item.icon} alt="" loading="lazy" decoding="async" />
                    </span>
                  ) : null}
                  <small>{item.meta}</small>
                </div>
                <strong>{item.label}</strong>
                <span>{item.description}</span>
                <ExternalLink aria-hidden="true" size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="vf-section vf-faq-section" id="faq" aria-labelledby="faq-title">
        <div className="vf-faq-word" aria-hidden="true">Preguntas</div>
        <div className="vf-shell vf-faq-layout">
          <div className="vf-faq-head" data-reveal>
            <p className="vf-kicker">Preguntas comunes</p>
            <h2 id="faq-title">Lo básico para pedir una pieza.</h2>
            <p>
              Respuestas directas antes de mandar tu archivo, foto o referencia.
              Queremos que sepas rápido si tu pieza puede avanzar.
            </p>
          </div>
          <div className="vf-faq-grid" data-reveal>
            {content.faq.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vf-contact" id="contact" aria-labelledby="contact-title">
        <img
          className="vf-contact__backdrop"
          src={content.background.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className="vf-contact__wash" aria-hidden="true" />
        <div className="vf-shell vf-contact__grid">
          <div className="vf-contact__copy" data-reveal>
            <p className="vf-kicker">Cotización directa</p>
            <h2 id="contact-title">{content.title}</h2>
            <p>{content.body}</p>
            <div className="vf-actions">
              <a className="vf-button vf-button--primary" href={content.whatsapp.href}>
                <MessageCircle aria-hidden="true" size={19} />
                {content.whatsapp.label}
              </a>
              <a className="vf-button vf-button--secondary" href={content.email.href}>
                <Mail aria-hidden="true" size={19} />
                {content.email.label}
              </a>
              <a className="vf-button vf-button--secondary" href={content.phone.href}>
                <Phone aria-hidden="true" size={19} />
                {content.phone.label}
              </a>
            </div>
            <div className="vf-contact__facts" aria-label="Datos de contacto">
              {content.facts.map((fact) => (
                <span key={fact.label}>
                  <MapPin aria-hidden="true" size={17} />
                  <small>{fact.label}</small>
                  <strong>{fact.value}</strong>
                </span>
              ))}
            </div>
          </div>

          <div className="vf-contact__panel" id="social" data-reveal>
            <h3>Redes oficiales</h3>
            <div className="vf-social-list">
              {content.social.map((item) => (
                <a href={item.href} key={item.label} target="_blank" rel="noreferrer">
                  {item.icon ? <img src={item.icon} alt="" loading="lazy" decoding="async" /> : null}
                  <span>
                    <small>{item.meta}</small>
                    <strong>{item.label}</strong>
                    <em>{item.description}</em>
                  </span>
                  <ExternalLink aria-hidden="true" size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
