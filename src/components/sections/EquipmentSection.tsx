import { useRef } from "react";
import { Printer, Cpu, Gauge, Layers, Star, Sparkles } from "lucide-react";
import { PRINTERS } from "../../constants";
import p1sPrinterImage from "../../assets/3DPrinters/p1sPrinter.png";
import { motion } from "framer-motion";

export const EquipmentSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const printerRef = useRef<HTMLDivElement>(null);
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    }),
  };
  const slideLeft = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const printer = PRINTERS[0]; // Bambu Lab P1S

  const specIcons = {
    buildVolume: Layers,
    layerHeight: Gauge,
    printSpeed: Gauge,
    filamentType: Cpu,
  };

  return (
    <section
      ref={sectionRef}
      id="equipment"
      className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-[#0a1a2e] dark:via-[#16213e] dark:to-[#0a1a2e] relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-25">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.12'%3E%3Cpath d='M80 80l20-20v40l-20-20zm-30-30l20-20v40l-20-20zm60 0l20-20v40l-20-20zm-30 60l20-20v40l-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Tech-themed Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-28 left-24 w-14 h-14 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-lg animate-pulse transform rotate-12"></div>
        <div className="absolute top-44 right-28 w-10 h-10 bg-gradient-to-br from-cyan-400/15 to-blue-500/15 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-28 w-18 h-18 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg transform -rotate-12"></div>
        <div className="absolute bottom-20 right-24 w-12 h-12 bg-gradient-to-br from-blue-500/15 to-cyan-400/15 rounded-full animate-pulse"></div>
      </div>

      {/* Blue Tech Ambient Light */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-blue-400/12 via-indigo-400/6 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#ea9216]/10 to-[#ea9216]/20 border border-[#ea9216]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#ea9216] mr-2" />
            <span className="text-sm font-medium text-[#ea9216]">
              Tecnología Premium
            </span>
          </div>
          <motion.h2
            ref={titleRef}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent">
              Nuestro
            </span>{" "}
            <span className="bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent">
              Equipo
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Utilizamos la{" "}
            <span className="text-[#ea9216] font-semibold">Bambu Lab P1S</span>,{" "}
            una impresora 3D de última generación que garantiza{" "}
            <span className="text-[#ea9216] font-semibold">
              precisión excepcional
            </span>
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={printerRef}
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.1 }}
            className="relative bg-gray-600/90 dark:bg-[#313841]/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-400/30 dark:border-gray-700/30"
            style={{
              background: `linear-gradient(135deg, 
                rgba(55,65,81,0.95) 0%, 
                rgba(75,85,99,0.9) 100%
              )`,
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Printer Showcase */}
              <div className="relative p-8 sm:p-12 flex items-center justify-center bg-gradient-to-br from-[#eeeeee]/50 to-gray-100/50 dark:from-[#3a4750]/50 dark:to-[#313841]/50 order-2 lg:order-1 mt-6 lg:mt-0 overflow-hidden">
                {/* 3D Printer Model */}
                <div className="relative group">
                  <div className="w-full max-w-xs sm:max-w-sm aspect-square flex items-center justify-center overflow-hidden">
                    <img
                      src={p1sPrinterImage}
                      alt="Bambu Lab P1S 3D Printer"
                      className="w-full h-full object-contain drop-shadow-2xl filter brightness-110 transform transition-all duration-500 group-hover:scale-105 relative z-10"
                    />
                  </div>

                  {/* Status Badge */}
                  <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                    <div className="text-center">
                      <div className="w-3 h-3 bg-white rounded-full mx-auto mb-1"></div>
                      <span className="text-white font-bold text-xs">
                        ONLINE
                      </span>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div
                    className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg animate-bounce"
                    style={{ animationDelay: "0s" }}
                  >
                    <Cpu className="w-4 h-4 text-white" />
                  </div>
                  <div
                    className="absolute -bottom-1 -left-4 sm:-bottom-2 sm:-left-6 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Gauge className="w-5 h-5 text-white" />
                  </div>
                  <div
                    className="absolute top-10 -right-1 sm:-right-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                    style={{ animationDelay: "1s" }}
                  >
                    <Star className="w-3 h-3 text-white fill-current" />
                  </div>
                </div>
              </div>

              {/* Printer Details */}
              <div className="p-6 sm:p-12 relative order-1 lg:order-2 z-10">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-[#ea9216] dark:from-white dark:to-[#ea9216] bg-clip-text text-transparent">
                      {printer.name}
                    </h3>
                    <div className="flex items-center px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                      <span className="text-xs font-semibold text-green-700 dark:text-green-300">
                        OPERATIVA
                      </span>
                    </div>
                  </div>
                  <p className="text-xl text-[#ea9216] font-semibold mb-2">
                    Modelo {printer.model}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Tecnología de punta que combina precisión, velocidad y
                    confiabilidad
                  </p>
                </div>

                {/* Enhanced Specifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {Object.entries(printer.specifications).map(
                    ([key, value], index) => {
                      const IconComponent =
                        specIcons[key as keyof typeof specIcons] || Cpu;
                      const labels = {
                        buildVolume: "Volumen de Impresión",
                        layerHeight: "Altura de Capa",
                        printSpeed: "Velocidad",
                        filamentType: "Materiales Compatibles",
                      };

                      const colors = [
                        {
                          gradient: "from-blue-500 to-blue-600",
                          bg: "from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800",
                        },
                        {
                          gradient: "from-purple-500 to-purple-600",
                          bg: "from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800",
                        },
                        {
                          gradient: "from-[#ea9216] to-[#d68614]",
                          bg: "from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800",
                        },
                        {
                          gradient: "from-green-500 to-green-600",
                          bg: "from-green-100 to-green-200 dark:from-green-900 dark:to-green-800",
                        },
                      ];

                      return (
                        <div
                          key={key}
                          className={`relative p-4 bg-gradient-to-br ${
                            colors[index % colors.length].bg
                          } backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                        >
                          <div
                            className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${
                              colors[index % colors.length].gradient
                            } rounded-xl mb-3 shadow-lg`}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                            {Array.isArray(value) ? value.join(", ") : value}
                          </div>
                          <div className="text-sm text-gray-700 dark:text-gray-200 font-medium">
                            {labels[key as keyof typeof labels]}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>

                {/* Premium Features */}
                <div className="bg-gradient-to-r from-gray-50/50 to-white/50 dark:from-[#3a4750]/50 dark:to-[#313841]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
                  <div className="flex items-center mb-6">
                    <Sparkles className="w-5 h-5 text-[#ea9216] mr-2" />
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Características Premium
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {printer.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center p-3 bg-white/60 dark:bg-[#313841]/60 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/80 dark:hover:bg-[#313841]/80 transition-all duration-300 hover:scale-105"
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-[#ea9216] to-[#d68614] rounded-full mr-3 shadow-sm"></div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fun Fact */}
                <div className="relative p-6 bg-gradient-to-r from-[#ea9216]/10 via-[#ea9216]/5 to-transparent dark:from-[#ea9216]/20 dark:via-[#ea9216]/10 dark:to-transparent backdrop-blur-sm rounded-2xl border border-[#ea9216]/20">
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-[#ea9216] to-[#d68614] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm">💡</span>
                  </div>
                  <div className="pl-4">
                    <h5 className="font-bold text-gray-900 dark:text-white mb-2">
                      ¿Sabías que...?
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      Esta impresora puede alcanzar velocidades de hasta{" "}
                      <span className="text-[#ea9216] font-semibold">
                        500mm/s
                      </span>{" "}
                      manteniendo una precisión increíble, lo que nos permite
                      entregar tus proyectos más rápido sin comprometer la
                      calidad. ¡Es como tener una fórmula 1 de la impresión 3D!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Evolution Timeline */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#ea9216]/10 to-[#ea9216]/20 border border-[#ea9216]/20 mb-4">
                <Star className="w-4 h-4 text-[#ea9216] mr-2" />
                <span className="text-sm font-medium text-[#ea9216]">
                  Nuestra Historia
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent mb-4">
                Evolución Tecnológica
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Nuestro viaje hacia la excelencia en impresión 3D
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 via-[#ea9216] to-[#ea9216] dark:from-gray-600 dark:via-[#ea9216] dark:to-[#ea9216] transform -translate-y-1/2 hidden md:block"></div>

              <div className="flex flex-col md:flex-row items-center justify-between relative">
                {/* 2022 - Inicio */}
                <div className="flex flex-col items-center mb-8 md:mb-0 relative z-10">
                  <div className="relative group">
                    <div className="w-20 h-20 bg-gradient-to-r from-gray-400 to-gray-500 rounded-2xl flex items-center justify-center mb-4 shadow-xl border-4 border-white dark:border-gray-800 group-hover:scale-110 transition-transform duration-300">
                      <Printer className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                  </div>
                  <div className="text-center bg-white/80 dark:bg-[#313841]/80 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      2022
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Comenzamos con
                      <br />
                      <span className="font-semibold">Ender 3 V2</span>
                    </p>
                  </div>
                </div>

                {/* Connection Arrow for Mobile */}
                <div className="md:hidden w-0.5 h-12 bg-gradient-to-b from-gray-400 to-[#ea9216] mb-8"></div>

                {/* 2024 - Actualidad */}
                <div className="flex flex-col items-center relative z-10">
                  <div className="relative group">
                    <div className="w-24 h-24 bg-gradient-to-r from-[#ea9216] to-[#d68614] rounded-2xl flex items-center justify-center mb-4 shadow-2xl border-4 border-white dark:border-gray-800 group-hover:scale-110 transition-transform duration-300">
                      <Printer className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <span className="text-white text-xs font-bold">★</span>
                    </div>
                    {/* Sparkle Effects */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                    <div
                      className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-75"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                  <div className="text-center bg-gradient-to-r from-white/90 to-[#ea9216]/5 dark:from-[#313841]/90 dark:to-[#ea9216]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#ea9216]/20 shadow-xl">
                    <h4 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-[#ea9216] dark:from-white dark:to-[#ea9216] bg-clip-text text-transparent mb-2">
                      2024
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      Upgrade Premium a<br />
                      <span className="font-bold text-[#ea9216]">
                        Bambu Lab P1S
                      </span>
                    </p>
                    <div className="flex items-center justify-center mt-3">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection Arrow */}
                <div className="w-0.5 h-16 bg-gradient-to-b from-[#ea9216] to-yellow-400 mb-8 animate-pulse"></div>

                {/* 2025 - Actualidad */}
                <div className="flex flex-col items-center relative z-10">
                  <div className="relative group">
                    <div className="w-28 h-28 bg-gradient-to-r from-yellow-400 via-[#ea9216] to-[#d68614] rounded-2xl flex items-center justify-center mb-4 shadow-2xl border-4 border-yellow-300 dark:border-yellow-500 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                      <div className="flex space-x-1 z-10">
                        <Star className="w-6 h-6 text-white animate-pulse" />
                        <Sparkles className="w-6 h-6 text-white animate-bounce" />
                        <Star
                          className="w-6 h-6 text-white animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        />
                      </div>
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <span className="text-white text-sm font-bold">🏆</span>
                    </div>
                    {/* Sparkle Effects */}
                    <div className="absolute -top-2 -left-2 w-5 h-5 bg-yellow-300 rounded-full animate-ping opacity-75"></div>
                    <div
                      className="absolute -bottom-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-75"
                      style={{ animationDelay: "0.3s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 -left-3 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-75"
                      style={{ animationDelay: "0.7s" }}
                    ></div>
                  </div>
                  <div className="text-center bg-gradient-to-r from-yellow-50/90 via-white/90 to-[#ea9216]/10 dark:from-[#313841]/90 dark:via-[#3a4750]/90 dark:to-[#ea9216]/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-300/50 dark:border-yellow-500/50 shadow-2xl">
                    <h4 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 via-[#ea9216] to-purple-600 bg-clip-text text-transparent mb-2">
                      2025
                    </h4>
                    <p className="text-gray-700 dark:text-gray-200 text-sm mb-3 font-medium">
                      <span className="block text-purple-600 dark:text-purple-400 font-bold">
                        Colaboraciones Oficiales
                      </span>
                      Asociaciones con <strong>Comic Con</strong>,{" "}
                      <strong>Gamer Con</strong> y <strong>Star Con</strong>
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                      • Medallas y trofeos exclusivos
                      <br />
                      • Expositor oficial en eventos
                      <br />• Reconocimiento internacional
                    </p>
                    <div className="flex items-center justify-center mt-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2 font-bold">
                      Nivel Profesional Alcanzado
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {[
                  { label: "Proyectos", value: "500+", icon: "🎯" },
                  { label: "Precisión", value: "99.9%", icon: "🎪" },
                  { label: "Velocidad", value: "5x", icon: "⚡" },
                  { label: "Calidad", value: "Premium", icon: "✨" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/60 dark:bg-[#313841]/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[#ea9216] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
