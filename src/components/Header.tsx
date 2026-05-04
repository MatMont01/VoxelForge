import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { business, navigation } from "../data/site";
import { scrollToHash, whatsappUrl } from "../utils/links";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const navigate = (href: string) => {
    scrollToHash(href);
    setOpen(false);
  };

  return (
    <header
      data-site-header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        scrolled || open
          ? "border-white/10 bg-[#101114]/90 shadow-[0_20px_70px_rgba(0,0,0,.32)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          className="group flex items-center gap-3 text-left"
          onClick={() => navigate("#home")}
          aria-label="Ir al inicio"
        >
          <img
            src={business.assets.logoSolo}
            alt=""
            className="h-11 w-11 rounded-md bg-[#ff7a2f]"
            width={44}
            height={44}
            decoding="async"
          />
          <span className="leading-none">
            <span className="block font-display text-xl text-white">
              {business.name}
            </span>
            <span className="block pt-1 text-xs uppercase text-white/52">
              taller de impresión 3D
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navigation.map((item) => (
            <button
              key={item.href}
              onClick={() => navigate(item.href)}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl("Hola, quiero cotizar una impresión 3D con Voxel Forge.")}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-md bg-[#ff7a2f] px-4 py-2.5 text-sm font-bold text-[#111114] transition hover:bg-[#ffb25f] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Cotizar
          </a>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/12 text-white transition hover:bg-white/10 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#101114] px-4 pb-5 pt-2 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1" aria-label="Móvil">
            {navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => navigate(item.href)}
                className="rounded-md px-3 py-3 text-left text-base font-medium text-white/76 hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <a
              href={whatsappUrl("Hola, quiero cotizar una impresión 3D con Voxel Forge.")}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#ff7a2f] px-4 py-3 font-bold text-[#111114]"
            >
              <MessageCircle className="h-4 w-4" />
              Cotizar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
