import { assets, createWhatsAppLink } from "../data/site";

export function FloatingContact() {
  return (
    <a className="floating-contact" href={createWhatsAppLink()} aria-label="Cotizar por WhatsApp">
      <img src={assets.socialIcons.whatsapp} alt="" aria-hidden="true" />
    </a>
  );
}
