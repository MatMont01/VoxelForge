import { useRef } from "react";
import { motion } from "framer-motion";
import instagramLogo from "../../assets/SocialMediaLogo/instagram.png";
import tiktokLogo from "../../assets/SocialMediaLogo/tiktok.png";
import { Mail, Facebook, Twitch } from "lucide-react";

interface SocialLink {
  id: string;
  label: string;
  url: string;
  type: "image" | "icon";
  imageSrc?: string;
  icon?: React.ComponentType<{ className?: string }>;
  description: string;
  accent: string; // tailwind color (hex or utility)
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/voxelforge_scz/",
    type: "image",
    imageSrc: instagramLogo,
    description: "Fotos de impresiones, prototipos y proyectos terminados.",
    accent: "from-pink-500 to-purple-500",
  },
  {
    id: "tiktok",
    label: "TikTok",
    url: "https://www.tiktok.com/@voxelforge_scz",
    type: "image",
    imageSrc: tiktokLogo,
    description: "Videos cortos mostrando el proceso y resultados.",
    accent: "from-gray-900 to-[#ea9216]",
  },
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/VoxelForgeSCZ",
    type: "icon",
    icon: Facebook,
    description: "Publicaciones, novedades y eventos especiales.",
    accent: "from-blue-600 to-indigo-600",
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:voxelforge1502@gmail.com?subject=Consulta%20Impresion%203D",
    type: "icon",
    icon: Mail,
    description: "Contacto directo para cotizaciones detalladas.",
    accent: "from-[#ea9216] to-[#d68614]",
  },
  {
    id: "twitch",
    label: "Twitch (Personal)",
    url: "https://www.twitch.tv/eronii_sama",
    type: "icon",
    icon: Twitch,
    description: "Transmisiones personales de juegos (no comercial).",
    accent: "from-purple-600 to-fuchsia-600",
  },
];

export const SocialSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <section
      ref={sectionRef}
      id="social"
      className="py-20 bg-gradient-to-br from-gray-50 via-[#ea9216]/5 to-gray-100 dark:from-[#1a1f24] dark:via-[#2d2f34] dark:to-[#1a1f24] relative overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-[#ea9216]/40 to-[#d68614]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-purple-600/30 to-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-[#ea9216]/15 to-[#ea9216]/30 border border-[#ea9216]/30 mb-6">
            <span className="text-sm font-semibold text-[#ea9216] tracking-wide">
              Conecta con Nosotros
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent font-cunia">
            Nuestras Redes & Más
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sigue nuestra actividad, descubre proyectos recientes y ponte en
            contacto rápido por el canal que prefieras. Twitch está marcado como
            personal para separar el contenido de entretenimiento del trabajo
            profesional.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SOCIAL_LINKS.map((link) => (
            <motion.a
              key={link.id}
              variants={cardVariants}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-3xl overflow-hidden border border-gray-200/40 dark:border-gray-700/40 bg-white/80 dark:bg-[#313841]/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r ${link.accent}`}
              />
              <div className="flex items-center mb-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${link.accent} text-white shadow-md relative overflow-hidden group-hover:scale-105 transition-transform`}
                >
                  {link.type === "image" && link.imageSrc && (
                    <img
                      src={link.imageSrc}
                      alt={link.label}
                      className="w-8 h-8 object-contain drop-shadow-sm"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  {link.type === "icon" && link.icon && (
                    <link.icon className="w-8 h-8" />
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-cunia">
                    {link.label}
                  </h3>
                  <p className="text-xs uppercase tracking-wide text-[#ea9216] font-semibold">
                    {link.id === "twitch" ? "Personal" : "Oficial"}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-1 leading-relaxed">
                {link.description}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  Abre en nueva pestaña
                </span>
                <span className="text-[#ea9216] font-semibold group-hover:translate-x-1 transition-transform text-sm">
                  Visitar →
                </span>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#ea9216]/20 to-[#d68614]/20 blur-xl group-hover:scale-125 transition-transform" />
            </motion.a>
          ))}
        </motion.div>

        {/* Disclaimer for Twitch */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ea9216]/10 border border-[#ea9216]/30 mb-4">
            <Twitch className="w-4 h-4 text-[#ea9216] mr-2" />
            <span className="text-sm font-medium text-[#ea9216]">
              Twitch Personal
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            El canal de Twitch es de uso personal y no representa contenido
            comercial de Voxel Forge. Lo incluimos para quienes deseen conectar
            también en un ámbito más relajado.
          </p>
        </div>
      </div>
    </section>
  );
};
