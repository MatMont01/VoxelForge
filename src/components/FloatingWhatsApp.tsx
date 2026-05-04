import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../utils/links";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const isDesktop = window.innerWidth >= 760;
      const contact = document.getElementById("contact")?.getBoundingClientRect();
      const contactInView =
        contact && contact.top < window.innerHeight && contact.bottom > 0;
      setVisible(
        (isDesktop || window.scrollY > window.innerHeight * 0.65) &&
          !(contactInView && !isDesktop)
      );
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <a
      href={whatsappUrl("Hola, quiero cotizar una impresión 3D.")}
      target="_blank"
      rel="noreferrer"
      className={`fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-md bg-[#25D366] text-white shadow-[0_20px_45px_rgba(37,211,102,.32)] transition hover:translate-y-[-2px] hover:bg-[#2fe071] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-label="Cotizar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
