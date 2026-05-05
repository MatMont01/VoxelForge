import { ExternalLink, Mail, MessageCircle } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { business, createWhatsAppLink, designResources, socialLinks } from "../data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <BrandMark />
          <p>
            Impresión 3D profesional en Santa Cruz de la Sierra con envíos a
            toda Bolivia.
          </p>
        </div>
        <div className="footer-links" aria-label="Redes sociales">
          {socialLinks.map((item) => (
            <a key={item.label} href={item.url} target="_blank" rel="noreferrer">
              {item.label}
              <ExternalLink aria-hidden="true" size={16} />
            </a>
          ))}
        </div>
        <div className="footer-contact">
          <a href={createWhatsAppLink()}>
            <MessageCircle aria-hidden="true" size={17} />
            {business.whatsappDisplay}
          </a>
          <a href={`mailto:${business.email}`}>
            <Mail aria-hidden="true" size={17} />
            {business.email}
          </a>
          <a href={designResources[0].url} target="_blank" rel="noreferrer">
            Modelos de referencia
            <ExternalLink aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
