import {
  Calendar,
  Heart,
  Award,
  Target,
  Box,
  Hammer,
  Sparkles,
  Layers,
  Infinity as InfinityIcon,
  Zap,
} from "lucide-react";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { COMPANY_HISTORY } from "../../constants";

export const AboutSection = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: i * 0.1 },
    }),
  } as const;

  const values = [
    {
      icon: Award,
      title: "Calidad Premium",
      description:
        "Materiales de primera y calibraciones finas para detalles limpios en cada pieza.",
      accent: "from-blue-500 to-indigo-600",
      glow: "shadow-blue-500/30",
    },
    {
      icon: Target,
      title: "Precisión",
      description:
        "Ajustes milimétricos y perfiles optimizados para resultados confiables.",
      accent: "from-[#ea9216] to-[#d68614]",
      glow: "shadow-orange-500/30",
    },
    {
      icon: Heart,
      title: "Pasión",
      description:
        "Tratamos cada proyecto como propio: acabado, pulido y presentación cuidada.",
      accent: "from-pink-500 to-purple-600",
      glow: "shadow-pink-500/30",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-[#12141c] dark:via-[#1c2330] dark:to-[#12141c] relative overflow-hidden"
    >
      {/* Ambient pattern & radial glows */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ea9216' fill-opacity='0.07'%3E%3Cpath d='M50 50l10-10v20l-10-10zm40 40l10-10v20l-10-10zm40-40l10-10v20l-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-radial from-blue-400/10 via-purple-400/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[420px] h-[420px] bg-gradient-radial from-pink-400/10 via-purple-400/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Floating cubes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rotate-45 animate-float-slow"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        />
        <div
          className="absolute top-40 right-24 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rotate-45 animate-float"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        />
        <div
          className="absolute bottom-32 left-24 w-16 h-16 bg-gradient-to-br from-indigo-500/15 to-blue-600/15 rotate-45 animate-float-slow"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-[#ea9216]/15 to-[#ea9216]/30 border border-[#ea9216]/30 mb-6 backdrop-blur-sm shadow-inner">
            <Heart className="w-4 h-4 text-[#ea9216] mr-2 animate-pulse" />
            <span className="text-sm font-semibold text-[#ea9216] tracking-wide">
              Nuestra Historia
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6 font-cunia"
          >
            <span className="bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent">
              Sobre Nosotros
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Voxel Forge nació como un hobby nocturno y evolucionó a un taller
            apasionado que combina{" "}
            <span className="text-[#ea9216] font-semibold">
              precisión digital
            </span>{" "}
            con{" "}
            <span className="text-[#ea9216] font-semibold">
              artesanía manual
            </span>
            .
          </motion.p>
        </div>

        {/* VOXEL + FORGE cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto mb-16">
          {/* VOXEL */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="relative bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-blue-500/40 transition-opacity" />
            <div className="flex items-center mb-8 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 shadow-2xl">
                <Box className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                VOXEL
              </h3>
            </div>
            <div className="space-y-6 relative z-10">
              <div className="flex items-start">
                <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Pixel 3D
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Un{" "}
                    <strong className="text-blue-500 dark:text-blue-400">
                      voxel
                    </strong>{" "}
                    es la unidad mínima de un objeto tridimensional, como un
                    pixel pero en 3D. Representa el
                    <strong className="text-gray-800 dark:text-white">
                      {" "}
                      fundamento digital
                    </strong>{" "}
                    de toda creación.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <InfinityIcon className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Infinitas Posibilidades
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Cada voxel es una{" "}
                    <strong className="text-purple-600 dark:text-purple-400">
                      posibilidad infinita
                    </strong>
                    . Combinados, crean mundos, objetos y sueños tangibles.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/10 dark:to-purple-500/10 rounded-xl p-6 border border-blue-500/30 dark:border-blue-500/20">
                <p className="text-blue-700 dark:text-blue-200 italic text-center font-medium">
                  "Cada impresión 3D comienza con miles de voxels que definen su
                  forma digital"
                </p>
              </div>
            </div>
          </motion.div>

          {/* FORGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="relative bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-[#ea9216]/40 via-red-500/40 to-[#ea9216]/40 transition-opacity" />
            <div className="flex items-center mb-8 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ea9216] to-red-600 rounded-2xl flex items-center justify-center mr-6 shadow-2xl">
                <Hammer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                FORGE
              </h3>
            </div>
            <div className="space-y-6 relative z-10">
              <div className="flex items-start">
                <Zap className="w-6 h-6 text-[#ea9216] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Forja Creativa
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    <strong className="text-[#ea9216]">Forjar</strong> significa
                    crear con maestría, transformando materias primas en obras
                    funcionales con fuego y pasión.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Sparkles className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Transformación
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Tomamos tus{" "}
                    <strong className="text-yellow-600 dark:text-yellow-400">
                      ideas digitales
                    </strong>{" "}
                    y las forjamos en realidad física, layer por layer.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#ea9216]/10 to-red-500/10 rounded-xl p-6 border border-[#ea9216]/30 dark:border-[#ea9216]/20">
                <p className="text-orange-700 dark:text-orange-200 italic text-center font-medium">
                  "En nuestra forja digital, cada filamento se convierte en una
                  pieza única"
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Story + Misión/Visión */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl p-10 bg-white/90 dark:bg-[#1f2430]/80 backdrop-blur-xl border border-white/30 dark:border-gray-700/40 shadow-2xl max-w-5xl mx-auto mb-14"
        >
          <div className="flex items-center mb-6">
            <Calendar className="w-8 h-8 text-[#ea9216] mr-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Desde {COMPANY_HISTORY.foundedYear}
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {COMPANY_HISTORY.story}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            <div className="rounded-xl px-5 py-4 bg-gray-50 dark:bg-[#2a303a] border border-gray-200/60 dark:border-gray-700/60">
              <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
                Misión
              </span>
              <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                {COMPANY_HISTORY.mission}
              </p>
            </div>
            <div className="rounded-xl px-5 py-4 bg-gray-50 dark:bg-[#2a303a] border border-gray-200/60 dark:border-gray-700/60">
              <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
                Visión
              </span>
              <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                {COMPANY_HISTORY.vision}
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-r from-[#ea9216]/10 to-[#ea9216]/25 border border-[#ea9216]/30 p-5 shadow-inner">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <Sparkles className="w-4 h-4 text-[#ea9216] mr-2" /> Del Hobby al
              Taller Profesional
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              De una sola impresora a un flujo optimizado con equipos avanzados
              y procesos pulidos para clientes y proyectos personales que
              enriquecen nuestra experiencia.
            </p>
          </div>
        </motion.div>

        {/* Valores */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#ea9216]/10 to-[#ea9216]/20 border border-[#ea9216]/25 mb-6">
              <Sparkles className="w-4 h-4 text-[#ea9216] mr-2" />
              <span className="text-sm font-medium text-[#ea9216]">
                Nuestros Pilares
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent mb-4">
              Valores
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Principios que sostienen cada diseño, calibración y entrega.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => {
              const Icon = val.icon as ComponentType<{ className?: string }>;
              return (
                <motion.div
                  key={val.title}
                  variants={fadeUp}
                  custom={i + 2}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative group rounded-3xl p-8 bg-gradient-to-br from-white/95 via-gray-50/90 to-white/95 dark:from-[#1f2430]/90 dark:via-[#202a38]/85 dark:to-[#1f2430]/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/40 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${val.accent} transition-opacity duration-700`}
                  />
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-r ${val.accent} shadow-2xl ${val.glow} group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#ea9216] transition-colors">
                    {val.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {val.description}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms]" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Closing badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-[#ea9216]/10 to-[#ea9216]/25 border border-[#ea9216]/30 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#ea9216] mr-2" />
            <span className="text-sm font-medium text-[#ea9216] tracking-wide">
              Calidad • Precisión • Pasión
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
