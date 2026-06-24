import { ExternalLink, Mail, MapPin, MessageCircle } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { business, createWhatsAppLink, designResources, socialLinks } from "../data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <BrandMark />
          <p>
            Impresión 3D profesional en Santa Cruz de la Sierra con envíos a
            toda Bolivia.
          </p>
        </div>
        <nav className="footer-links footer-socials" aria-label="Redes sociales">
          <p className="footer-heading">Redes</p>
          {socialLinks.map((item) => (
            <a key={item.label} href={item.url} target="_blank" rel="noreferrer">
              <span className="footer-social-icon" aria-hidden="true">
                <img src={item.icon} alt="" />
              </span>
              <span>
                <strong>{item.label}</strong>
                <small>{item.type}</small>
              </span>
              <ExternalLink aria-hidden="true" size={16} />
            </a>
          ))}
        </nav>
        <div className="footer-contact">
          <p className="footer-heading">Contacto</p>
          <span className="footer-location">
            <MapPin aria-hidden="true" size={17} />
            {business.location}
          </span>
          <a href={createWhatsAppLink()}>
            <MessageCircle aria-hidden="true" size={17} />
            <span>{business.whatsappDisplay}</span>
          </a>
          <a href={`mailto:${business.email}`}>
            <Mail aria-hidden="true" size={17} />
            <span>{business.email}</span>
          </a>
          <a href={designResources[0].url} target="_blank" rel="noreferrer">
            <ExternalLink aria-hidden="true" size={16} />
            <span>Modelos de referencia</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
