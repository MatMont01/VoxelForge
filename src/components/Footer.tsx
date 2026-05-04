import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";
import { business, navigation } from "../data/site";
import { mailtoUrl, scrollToHash, whatsappUrl } from "../utils/links";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0c0f] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={business.assets.logoSolo}
                alt=""
                className="h-11 w-11 rounded-md bg-[#ff7a2f]"
                width={44}
                height={44}
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="font-display text-xl">{business.name}</p>
                <p className="text-sm text-white/52">{business.tagline}</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/58">
              Impresión 3D, diseño, prototipos, figuras, maquetas y piezas
              funcionales en Santa Cruz con envíos a toda Bolivia.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-white/42">Mapa</h2>
            <div className="mt-4 grid gap-2">
              {navigation.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToHash(item.href)}
                  className="text-left text-sm text-white/64 transition hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-white/42">Canales</h2>
            <div className="mt-4 grid gap-3">
              <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="footer-link">
                <MessageCircle className="h-4 w-4" />
                {business.whatsappDisplay}
              </a>
              <a href={mailtoUrl()} className="footer-link">
                <Mail className="h-4 w-4" />
                {business.email}
              </a>
              <a href={business.social.instagram} target="_blank" rel="noreferrer" className="footer-link">
                <Instagram className="h-4 w-4" />
                @voxelforge_scz
              </a>
              <a href={business.social.facebook} target="_blank" rel="noreferrer" className="footer-link">
                <Facebook className="h-4 w-4" />
                VoxelForgeSCZ
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Voxel Forge. Todos los derechos reservados.</p>
          <p>{business.location}</p>
        </div>
      </div>
    </footer>
  );
}
