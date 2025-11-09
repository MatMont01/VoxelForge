import { useRef } from "react";
import {
  Box,
  Hammer,
  Sparkles,
  Zap,
  Layers,
  Infinity as InfinityIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { isLowEndDevice } from "../../utils/perf";

export const VoxelMeaningSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const voxelRef = useRef<HTMLDivElement>(null);
  const forgeRef = useRef<HTMLDivElement>(null);
  const unityRef = useRef<HTMLDivElement>(null);
  const cubesRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const lowEnd = isLowEndDevice();

  return (
    <section
      ref={sectionRef}
      className="cv-auto py-20 bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ea9216]/5 via-transparent to-blue-500/5"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ea9216' fill-opacity='0.4'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0l15 15v-30l-15 15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating 3D Cubes */}
      <div ref={cubesRef} className="absolute inset-0 pointer-events-none">
        <div
          className="floating-cube absolute top-20 left-10 w-8 h-8 bg-gradient-to-br from-[#ea9216]/30 to-orange-600/30 rotate-45"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            animation: `${lowEnd ? "pulse" : "bounce"} 6s ease-in-out infinite`,
          }}
        ></div>
        <div
          className="floating-cube absolute top-40 right-20 w-6 h-6 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rotate-45"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            animation: `${lowEnd ? "pulse" : "bounce"} 7s ease-in-out infinite`,
          }}
        ></div>
        <div
          className="floating-cube absolute bottom-32 left-20 w-10 h-10 bg-gradient-to-br from-green-500/30 to-teal-600/30 rotate-45"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            animation: `${lowEnd ? "pulse" : "bounce"} 8s ease-in-out infinite`,
          }}
        ></div>
        <div
          className="floating-cube absolute bottom-20 right-10 w-7 h-7 bg-gradient-to-br from-pink-500/30 to-red-600/30 rotate-45"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            animation: `${
              lowEnd ? "pulse" : "bounce"
            } 5.5s ease-in-out infinite`,
          }}
        ></div>
      </div>

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="meaning-particle absolute w-2 h-2 bg-[#ea9216] rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#ea9216]/20 to-blue-500/20 border border-[#ea9216]/30 mb-8">
            <Sparkles className="w-5 h-5 text-[#ea9216] mr-3 animate-pulse" />
            <span className="text-[#ea9216] font-medium">
              El Significado Detrás del Nombre
            </span>
          </div>

          <h2 className="brand-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <motion.span
              className="meaning-title inline-block bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              ¿Qué es
            </motion.span>
            <br className="mb-4" />
            <motion.span
              className="meaning-title inline-block bg-gradient-to-r from-[#ea9216] via-yellow-400 to-[#ea9216] bg-clip-text text-transparent mt-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              VOXEL FORGE?
            </motion.span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Descubre el profundo significado detrás de nuestro nombre y cómo
            refleja nuestra
            <span className="text-[#ea9216] font-semibold">
              {" "}
              filosofía de creación
            </span>
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Voxel + Forge Explanation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* VOXEL */}
            <motion.div
              ref={voxelRef}
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-[#ea9216]/20 transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 shadow-2xl">
                    <Box className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                    VOXEL
                  </h3>
                </div>

                <div className="space-y-6">
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
                        pixel pero en 3D. Representa el{" "}
                        <strong className="text-gray-800 dark:text-white">
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
                      "Cada impresión 3D comienza con miles de voxels que
                      definen su forma digital"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FORGE */}
            <motion.div
              ref={forgeRef}
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-[#ea9216]/20 transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ea9216] to-red-600 rounded-2xl flex items-center justify-center mr-6 shadow-2xl">
                    <Hammer className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                    FORGE
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Zap className="w-6 h-6 text-[#ea9216] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Forja Creativa
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        <strong className="text-[#ea9216]">Forjar</strong>{" "}
                        significa crear con maestría, transformar materias
                        primas en obras de arte funcionales con fuego y pasión.
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
                      "En nuestra forja digital, cada filamento se convierte en
                      una pieza única"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Unity Section */}
          <div ref={unityRef}>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                VOXEL + FORGE =
                <span className="text-transparent bg-gradient-to-r from-[#ea9216] via-yellow-400 to-[#ea9216] bg-clip-text">
                  {" "}
                  Creación Sin Límites
                </span>
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                La unión perfecta entre la{" "}
                <strong className="text-blue-600 dark:text-blue-400">
                  precisión digital
                </strong>{" "}
                y la{" "}
                <strong className="text-[#ea9216]">
                  artesanía tradicional
                </strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="unity-card bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/60 dark:to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/30 text-center hover:border-[#ea9216]/50 transition-all duration-500"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Box className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Diseño Digital
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Cada proyecto comienza como una colección de voxels en el
                  espacio digital
                </p>
              </motion.div>

              <motion.div
                className="unity-card bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/60 dark:to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/30 text-center hover:border-[#ea9216]/50 transition-all duration-500"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#ea9216] to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Proceso de Forja
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Nuestras impresoras 3D actúan como forjas modernas, creando
                  layer por layer
                </p>
              </motion.div>

              <motion.div
                className="unity-card bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/60 dark:to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/30 text-center hover:border-[#ea9216]/50 transition-all duration-500"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Realidad Tangible
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  El resultado final: tus ideas convertidas en objetos reales
                  que puedes tocar
                </p>
              </motion.div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/40 dark:to-gray-900/40 backdrop-blur-2xl rounded-3xl p-12 border border-gray-200/50 dark:border-[#ea9216]/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Nuestra Filosofía
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                En <strong className="text-[#ea9216]">VOXEL FORGE</strong>, no
                solo imprimimos objetos,
                <strong className="text-blue-600 dark:text-blue-400">
                  {" "}
                  forjamos sueños
                </strong>
                . Cada voxel digital se convierte en una molécula de filamento,
                cada layer en un paso hacia la materialización de tu visión.
              </p>
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#ea9216] to-orange-600 rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-[#ea9216]/50 transition-all duration-300">
                <Box className="w-6 h-6 mr-3" />
                De Pixel a Realidad
                <Sparkles className="w-6 h-6 ml-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
