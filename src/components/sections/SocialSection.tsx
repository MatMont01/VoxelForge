import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import instagramLogo from "../../assets/SocialMediaLogo/instagram.png";
import tiktokLogo from "../../assets/SocialMediaLogo/tiktok.png";
import { Mail, Facebook, Twitch, Sparkles, Filter } from "lucide-react";

interface SocialLink {
  id: string;
  label: string;
  url: string;
  type: "image" | "icon";
  imageSrc?: string;
  icon?: React.ComponentType<{ className?: string }>;
  description: string;
  accent: string;
  category: "social" | "contact" | "personal";
  stats?: {
    metric: string; // e.g. "Seguidores"
    value: string; // e.g. "1.2K" (placeholder)
  }[];
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
    category: "social",
    stats: [
      { metric: "Posts", value: "100+" },
      { metric: "Highlights", value: "Proyectos" },
    ],
  },
  {
    id: "tiktok",
    label: "TikTok",
    url: "https://www.tiktok.com/@voxelforge_scz",
    type: "image",
    imageSrc: tiktokLogo,
    description: "Videos cortos mostrando el proceso y resultados.",
    accent: "from-gray-900 to-[#ea9216]",
    category: "social",
    stats: [
      { metric: "Clips", value: "50+" },
      { metric: "Formato", value: "Proceso" },
    ],
  },
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/VoxelForgeSCZ",
    type: "icon",
    icon: Facebook,
    description: "Publicaciones, novedades y eventos especiales.",
    accent: "from-blue-600 to-indigo-600",
    category: "social",
    stats: [
      { metric: "Comunidad", value: "Activa" },
      { metric: "Eventos", value: "Anuncios" },
    ],
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:voxelforge1502@gmail.com?subject=Consulta%20Impresion%203D",
    type: "icon",
    icon: Mail,
    description: "Contacto directo para cotizaciones detalladas.",
    accent: "from-[#ea9216] to-[#d68614]",
    category: "contact",
    stats: [
      { metric: "Respuesta", value: "Rápida" },
      { metric: "Detalle", value: "Cotizaciones" },
    ],
  },
  {
    id: "twitch",
    label: "Twitch (Personal)",
    url: "https://www.twitch.tv/eronii_sama",
    type: "icon",
    icon: Twitch,
    description: "Transmisiones personales de juegos (no comercial).",
    accent: "from-purple-600 to-fuchsia-600",
    category: "personal",
    stats: [
      { metric: "Contenido", value: "Gaming" },
      { metric: "Rol", value: "Personal" },
    ],
  },
];

const FILTERS: { id: "all" | SocialLink["category"]; label: string }[] = [
  { id: "all", label: "Todo" },
  { id: "social", label: "Redes" },
  { id: "contact", label: "Contacto" },
  { id: "personal", label: "Personal" },
];

export const SocialSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState<
    "all" | SocialLink["category"]
  >("all");
  const [motionAllowed, setMotionAllowed] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotionAllowed(!mq.matches);
  }, []);

  const filteredLinks = SOCIAL_LINKS.filter(
    (l) => activeFilter === "all" || l.category === activeFilter
  );

  // Tilt interaction (lightweight, pointer-only)
  const supportsPointer =
    typeof window !== "undefined" &&
    window.matchMedia("(any-pointer: fine)").matches;

  const handleTilt = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (!supportsPointer) return;
      const el = e.currentTarget as HTMLAnchorElement;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (y / rect.height) * -10; // tilt limits
      const rotateY = (x / rect.width) * 10;
      el.style.transform = `translateY(-2px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },
    [supportsPointer]
  );

  const resetTilt = useCallback((el: HTMLAnchorElement) => {
    el.style.transform = "translateY(0) rotateX(0deg) rotateY(0deg)";
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  } as const;

  return (
    <section
      ref={sectionRef}
      id="social"
      className="py-24 bg-gradient-to-br from-gray-50 via-[#ea9216]/5 to-gray-100 dark:from-[#121518] dark:via-[#222428] dark:to-[#121518] relative overflow-hidden"
    >
      {/* Particle backdrop */}
      {motionAllowed && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 26 }).map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full mix-blend-plus-lighter bg-gradient-to-br from-[#ea9216]/30 to-orange-400/20 blur-[3px] animate-pulse"
              style={{
                width: Math.random() * 12 + 6 + "px",
                height: Math.random() * 12 + 6 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animationDelay: Math.random() * 4 + "s",
                animationDuration: Math.random() * 6 + 4 + "s",
              }}
            />
          ))}
        </div>
      )}
      {/* Decorative soft glows */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute -top-32 -left-24 w-72 h-72 bg-gradient-to-br from-[#ea9216]/50 to-[#d68614]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-purple-600/40 to-pink-500/25 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#ea9216]/15 to-[#ea9216]/30 border border-[#ea9216]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#ea9216]" />
            <span className="text-sm font-semibold text-[#ea9216] tracking-wide">
              Conecta con Nosotros
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent font-cunia">
            Nuestras Redes & Más
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explora nuestros canales para seguir proyectos y avances. Filtra por
            categoría si quieres contactar rápido, ver contenido social o
            acceder al canal personal de Twitch.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {FILTERS.map((f) => {
            const active = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`relative inline-flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ea9216] ${
                  active
                    ? "bg-[#ea9216] text-white border-[#ea9216] shadow-lg shadow-[#ea9216]/30"
                    : "bg-white/80 dark:bg-[#2c3239]/70 text-gray-700 dark:text-gray-200 border-gray-300/50 dark:border-gray-600/50 hover:border-[#ea9216]/50"
                }`}
              >
                <Filter className="w-4 h-4" />
                {f.label}
              </button>
            );
          })}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {filteredLinks.map((link) => (
            <motion.a
              key={link.id}
              variants={cardVariants}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleTilt}
              onMouseLeave={(e) => resetTilt(e.currentTarget)}
              className="group will-change-transform relative p-7 rounded-3xl overflow-hidden border border-gray-200/40 dark:border-gray-700/50 bg-white/85 dark:bg-[#313841]/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r ${link.accent}`}
              />
              <div className="flex items-center mb-5">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${link.accent} text-white shadow-md relative overflow-hidden group-hover:scale-105 transition-transform`}
                >
                  {link.type === "image" && link.imageSrc && (
                    <img
                      src={link.imageSrc}
                      alt={link.label}
                      className="w-9 h-9 object-contain drop-shadow-sm"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  {link.type === "icon" && link.icon && (
                    <link.icon className="w-9 h-9" />
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-cunia">
                    {link.label}
                  </h3>
                  <p className="text-xs uppercase tracking-wide text-[#ea9216] font-semibold">
                    {link.category === "personal" ? "Personal" : "Oficial"}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-1 leading-relaxed">
                {link.description}
              </p>
              {/* Stats placeholders */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                {link.stats?.map((s) => (
                  <div
                    key={s.metric}
                    className="rounded-xl px-3 py-2 bg-gray-100/70 dark:bg-[#3a4149]/70 text-xs flex flex-col gap-0.5 border border-gray-200/40 dark:border-gray-600/40"
                  >
                    <span className="text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-400 font-semibold">
                      {s.metric}
                    </span>
                    <span className="text-gray-800 dark:text-gray-100 font-bold">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  Abre en nueva pestaña
                </span>
                <span className="text-[#ea9216] font-semibold group-hover:translate-x-1 transition-transform text-sm">
                  Visitar →
                </span>
              </div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-gradient-to-br from-[#ea9216]/25 to-[#d68614]/25 blur-xl group-hover:scale-125 transition-transform" />
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
