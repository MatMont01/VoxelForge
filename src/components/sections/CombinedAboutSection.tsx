import { useRef } from "react";
import { Box, Hammer, Sparkles, Calendar, Heart } from "lucide-react";
import { COMPANY_HISTORY } from "../../constants";
import { motion } from "framer-motion";

export const CombinedAboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    }),
  } as const;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-[#1a1f3a] dark:via-[#2d1b69] dark:to-[#1a1f3a] relative overflow-hidden"
    >
      {/* soft ambient glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-[#ea9216]/30 to-yellow-400/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#ea9216]/10 to-[#ea9216]/20 border border-[#ea9216]/20 mb-6">
            <Heart className="w-4 h-4 text-[#ea9216] mr-2" />
            <span className="text-sm font-medium text-[#ea9216]">
              Quiénes Somos
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent">
              Sobre Nosotros
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Creamos piezas de alta calidad con tecnología de impresión 3D y
            obsesión por el detalle, desde Santa Cruz para toda Bolivia.
          </motion.p>
        </div>

        {/* 2-up merged content: significado y historia */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Significado Voxel + Forge (resumen) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="bg-white/90 dark:bg-[#1f2430]/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 dark:border-gray-700/40 shadow-2xl"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <Box className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                VOXEL
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              El voxel es el “pixel en 3D”, la unidad mínima de un objeto
              tridimensional. Es el fundamento digital de todo lo que
              imprimimos.
            </p>
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ea9216] to-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <Hammer className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                FORGE
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Forjar es transformar ideas en realidad con técnica y pasión. En
              Voxel Forge unimos ambos mundos: la precisión digital y la
              artesanía del acabado.
            </p>
          </motion.div>

          {/* Historia y valores breves */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="bg-white/90 dark:bg-[#1f2430]/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 dark:border-gray-700/40 shadow-2xl"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-[#ea9216] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Desde {COMPANY_HISTORY.foundedYear}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {COMPANY_HISTORY.story}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl px-4 py-3 bg-gray-50 dark:bg-[#2a2f3a] border border-gray-200/60 dark:border-gray-700/60">
                <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
                  Misión
                </span>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  {COMPANY_HISTORY.mission}
                </p>
              </div>
              <div className="rounded-xl px-4 py-3 bg-gray-50 dark:bg-[#2a2f3a] border border-gray-200/60 dark:border-gray-700/60">
                <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
                  Visión
                </span>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  {COMPANY_HISTORY.vision}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cierre corto */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#ea9216]/10 to-[#ea9216]/20 border border-[#ea9216]/20">
            <Sparkles className="w-4 h-4 text-[#ea9216] mr-2" />
            <span className="text-sm font-medium text-[#ea9216]">
              Calidad • Precisión • Pasión
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
