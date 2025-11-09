import { CONTACT_INFO } from "../../constants";
import { formatWhatsAppUrl } from "../../utils/helpers";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  const openWhatsApp = () => {
    const msg = "Hola, me interesa una cotización de impresión 3D";
    const url = formatWhatsAppUrl(CONTACT_INFO.whatsapp, msg);
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="sr-only">WhatsApp</span>
    </button>
  );
};
