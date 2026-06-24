import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { landingPage } from "../application/landingPage";
import { createWhatsAppLink } from "../data/site";
import { BrandMark } from "./BrandMark";

export function Header() {
  const [open, setOpen] = useState(false);
  const navigation = landingPage.navigation;

  useEffect(() => {
    if (!open) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <BrandMark />
        <nav className="site-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="vf-button vf-button--primary site-header__cta" href={createWhatsAppLink()}>
          Cotizar por WhatsApp
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>
      <div className={`mobile-nav ${open ? "mobile-nav--open" : ""}`} id="mobile-navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
