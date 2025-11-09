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

  // Entrance stagger for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  } as const;

  // Card entrance
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.92 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  } as const;

  // Subtle continuous float animation (CSS keyframes via tailwind arbitrary values)
  const floatClasses = "[animation:float_6s_ease-in-out_infinite]";

  /* Inject keyframes once (scoped approach). We rely on global CSS being able
     to parse this; if not present, consider adding to index.css. */

  return (
    <section
      ref={sectionRef}
      id="social"
      className="py-24 bg-gradient-to-br from-gray-50 via-[#ea9216]/10 to-gray-100 dark:from-[#161c20] dark:via-[#25292e] dark:to-[#161c20] relative overflow-hidden"
    >
      {/* Animated ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-br from-[#ea9216]/50 to-orange-400/30 blur-3xl opacity-40 [animation:blob_18s_linear_infinite]" />
        <div className="absolute bottom-[-120px] right-[-60px] w-96 h-96 rounded-full bg-gradient-to-tr from-purple-600/40 to-pink-500/30 blur-3xl opacity-30 [animation:blob_22s_linear_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full bg-gradient-to-br from-[#ea9216]/10 to-transparent blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-40 h-40 bg-[#ea9216]/20 rounded-full blur-2xl opacity-50" />
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#ea9216]/20 to-[#ea9216]/35 border border-[#ea9216]/30 shadow-inner mb-6 backdrop-blur-sm">
            <span className="text-sm font-semibold text-[#ea9216] tracking-wide animate-pulse">
              Conecta con Nosotros
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-6 font-cunia relative"
          >
            <span className="bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent">
              Nuestras Redes & Más
            </span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#ea9216]/0 via-[#ea9216]/10 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Sigue nuestra actividad, descubre proyectos recientes y elige tu
            canal favorito para conectar. Twitch está marcado como personal para
            separar entretenimiento de trabajo profesional.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {SOCIAL_LINKS.map((link) => (
            <motion.a
              key={link.id}
              variants={cardVariants}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${floatClasses} relative p-6 rounded-3xl overflow-hidden border border-gray-200/40 dark:border-gray-700/40 bg-white/85 dark:bg-[#313841]/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-1 hover:border-[#ea9216]/60`}
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
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#ea9216]/25 to-[#d68614]/25 blur-xl group-hover:scale-125 transition-transform" />
              {/* Subtle top shimmer */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-700 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.35),transparent)]" />
            </motion.a>
          ))}
        </motion.div>

        {/* Disclaimer for Twitch */}
        <div className="mt-14 text-center max-w-2xl mx-auto">
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
