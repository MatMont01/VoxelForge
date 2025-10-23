import { useRef } from "react";
import { ArrowDown, Printer, Zap, Shield, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { scrollToSection } from "../../utils/helpers";
import logoSolo from "../../assets/VoxelForgeLogos/voxel-forge-logo-solo.svg";
import { isLowEndDevice } from "../../utils/perf";

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const scrollArrowRef = useRef<HTMLDivElement>(null);
  const lowEnd = isLowEndDevice();
  // Arrow visibility/animation removed to keep perf high on low-end devices

  const features = [
    {
      icon: Printer,
      title: "Tecnología Avanzada",
      description: "Bambu Lab P1S con precisión milimétrica",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Tiempos de impresión optimizados",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Shield,
      title: "Calidad Garantizada",
      description: "Materiales de primera calidad",
      color: "from-green-500 to-teal-600",
    },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen pt-28 md:pt-32 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#eeeeee] via-white to-gray-100 dark:from-[#313841] dark:via-[#3a4750] dark:to-[#313841]"
    >
      {/* Decorative Background Shape (static for perf) */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#ea9216]/20 to-[#ea9216]/5 blur-3xl rounded-[50%_20%_80%_30%]" />

      {/* Additional Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#ea9216] rounded-full md:animate-pulse"></div>
        <div className="absolute top-2/3 left-3/4 w-3 h-3 bg-[#ea9216] rounded-full md:animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#ea9216] rounded-full md:animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, scale: lowEnd ? 1 : 1.05 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <img
              src={logoSolo}
              alt="Voxel Forge Logo"
              className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 drop-shadow-2xl"
              width={128}
              height={128}
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="brand-title text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          >
            <span className="text-[#ea9216] inline-block">Voxel</span>{" "}
            <span className="inline-block">Forge</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          >
            Transformamos tus{" "}
            <span className="text-[#ea9216] font-semibold">
              ideas más audaces
            </span>{" "}
            en realidad tangible con impresión 3D de{" "}
            <span className="text-[#ea9216] font-semibold">
              ultra alta calidad
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="text-lg px-10 py-5 bg-gradient-to-r from-[#ea9216] to-[#d68614] hover:from-[#d68614] hover:to-[#c47613] shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Play className="w-6 h-6 mr-3" />
              Explorar Servicios
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#portfolio")}
              className="text-lg px-10 py-5 border-2 border-[#ea9216] text-[#ea9216] hover:bg-[#ea9216] hover:text-white shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Ver Portafolio
            </Button>
          </motion.div>

          {/* 3D Printer Icon Animation */}
          <div className="mb-16 flex justify-center">
            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-[#ea9216] to-[#d68614] rounded-2xl flex items-center justify-center shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <Printer className="w-10 h-10 text-white" />
            </motion.div>
          </div>

          {/* Features Grid with 3D Effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24 md:mb-32">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="feature-card relative bg-white/90 dark:bg-[#3a4750]/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/30 cursor-pointer hover:shadow-3xl hover:-translate-y-2"
                  style={{
                    isolation: "isolate",
                  }}
                  initial={{ opacity: 0, y: lowEnd ? 20 : 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollArrowRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <button
            onClick={() => scrollToSection("#services")}
            className="text-gray-400 dark:text-gray-500 hover:text-[#ea9216] dark:hover:text-[#ea9216] transition-colors duration-300 group"
            aria-label="Scroll hacia abajo"
          >
            <div className="flex flex-col items-center">
              <ArrowDown className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm mt-2 opacity-70">Descubre más</span>
            </div>
          </button>
        </div>
      </div>

      {/* Optional background video removed for performance */}
    </section>
  );
};
