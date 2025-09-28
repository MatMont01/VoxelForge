import { useEffect, useRef } from "react";
import { ArrowDown, Printer, Zap, Shield } from "lucide-react";
import { gsap } from "gsap";
import { Button } from "../ui/Button";
import { scrollToSection } from "../../utils/helpers";
import { fadeInUp } from "../../utils/animations";

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (titleRef.current) {
      tl.add(fadeInUp(titleRef.current, 0));
    }
    if (subtitleRef.current) {
      tl.add(fadeInUp(subtitleRef.current, 0.2), 0.3);
    }
    if (buttonsRef.current) {
      tl.add(fadeInUp(buttonsRef.current, 0), 0.6);
    }
    if (featuresRef.current) {
      tl.add(fadeInUp(featuresRef.current, 0), 0.9);
    }
  }, []);

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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-[#313841] dark:to-[#3a4750] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ea9216' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='4'/%3E%3Ccircle cx='40' cy='40' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <span className="text-[#ea9216]">Voxel</span> Forge
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Transformamos tus ideas en realidad tangible con impresión 3D de
            alta calidad
          </p>

          <div
            ref={buttonsRef}
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
          </div>

          {/* Features Grid */}
          <div
            ref={featuresRef}
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
          </div>
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
