import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../utils/links";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl("Hola, quiero cotizar una impresión 3D.")}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-md bg-[#25D366] text-white shadow-[0_20px_45px_rgba(37,211,102,.32)] transition hover:translate-y-[-2px] hover:bg-[#2fe071]"
      aria-label="Cotizar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
