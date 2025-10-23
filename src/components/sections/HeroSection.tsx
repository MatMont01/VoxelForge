import { useRef } from "react";
import { ArrowDown, Printer, Zap, Shield } from "lucide-react";
import { Button } from "../ui/Button";
import { scrollToSection } from "../../utils/helpers";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    }),
  };

  const features = [
    {
      icon: Printer,
      title: "Tecnología Avanzada",
      description: "Bambu Lab P1S con precisión milimétrica",
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Tiempos de impresión optimizados",
    },
    {
      icon: Shield,
      title: "Calidad Garantizada",
      description: "Materiales de primera calidad",
    },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-orange-50 to-slate-50 dark:from-[#0a0a0a] dark:via-[#1a1a1a] dark:to-[#0a0a0a] relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ea9216' fill-opacity='0.15'%3E%3Cpath d='M60 60l12-12v24l-12-12zm-20-20l12-12v24l-12-12zm40 0l12-12v24l-12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="floating-cube absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-orange-400/30 to-red-500/30 transform rotate-45 animate-spin"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            animationDuration: "20s",
          }}
        ></div>
        <div
          className="floating-cube absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-blue-400/25 to-purple-500/25 transform rotate-45 animate-bounce"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="floating-cube absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-green-400/20 to-teal-500/20 transform rotate-45 animate-pulse"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        ></div>
      </div>

      {/* Spectacular Light Effects */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-300/20 via-yellow-300/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-blue-400/15 via-purple-400/8 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <span className="text-[#ea9216]">Voxel</span> Forge
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Transformamos tus ideas en realidad tangible con impresión 3D de
            alta calidad
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="text-lg px-8 py-4"
            >
              Ver Servicios
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#portfolio")}
              className="text-lg px-8 py-4"
            >
              Ver Portafolio
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.6}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-gray-600/90 dark:bg-[#3a4750]/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-[#ea9216] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#services")}
            className="text-gray-400 hover:text-[#ea9216] transition-colors"
            aria-label="Scroll hacia abajo"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
