import { useEffect, useRef } from "react";
import {
  ExternalLink,
  Palette,
  Download,
  Star,
  Sparkles,
  Zap,
  Target,
  ArrowRight,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DESIGN_WEBSITES } from "../../constants";
import { Button } from "../ui/Button";
import { scrollToSection } from "../../utils/helpers";

gsap.registerPlugin(ScrollTrigger);

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animación del título con efecto de escritura
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animación de las tarjetas con efectos 3D
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".service-card");
      gsap.fromTo(
        cards,
        {
          y: 80,
          opacity: 0,
          rotationX: 45,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const services = [
    {
      title: "Impresión 3D a Pedido",
      description:
        "Imprimimos tus diseños favoritos con la más alta calidad. Solo envíanos el archivo STL o compártenos el enlace.",
      icon: Sparkles,
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      features: [
        "Materiales premium",
        "Acabado profesional",
        "Entrega garantizada",
        "Cotización personalizada",
      ],
      badge: "Popular",
    },
    {
      title: "Diseños Personalizados",
      description:
        "Creamos diseños únicos según tus especificaciones. Perfecto para proyectos especiales y únicos.",
      icon: Target,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      features: [
        "Diseño exclusivo",
        "Múltiples revisiones",
        "Archivo STL incluido",
        "Asesoría completa",
      ],
      badge: "Premium",
    },
    {
      title: "Prototipos Rápidos",
      description:
        "Ideal para empresas y emprendedores que necesitan validar sus ideas rápidamente.",
      icon: Zap,
      gradient: "from-green-500 via-teal-500 to-blue-500",
      features: [
        "Entrega rápida",
        "Múltiples iteraciones",
        "Consultoría incluida",
        "Precio competitivo",
      ],
      badge: "Rápido",
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "free":
        return <Star className="w-4 h-4 text-green-500" />;
      case "paid":
        return <Download className="w-4 h-4 text-blue-500" />;
      case "mixed":
        return <Palette className="w-4 h-4 text-purple-500" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-[#0a2e1a] dark:via-[#1a3d2e] dark:to-[#0a2e1a] relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Cpath d='M90 90l15-15v30l-15-15zm-30-30l15-15v30l-15-15zm60 0l15-15v30l-15-15zm-30 60l15-15v30l-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Service Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-20 w-12 h-12 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-32 w-8 h-8 bg-gradient-to-br from-teal-400/15 to-green-500/15 rounded-full animate-bounce"></div>
        <div className="absolute bottom-36 left-32 w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full"></div>
        <div className="absolute bottom-24 right-20 w-10 h-10 bg-gradient-to-br from-green-500/15 to-emerald-400/15 rounded-full animate-pulse"></div>
      </div>

      {/* Green Ambient Light */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-radial from-green-300/15 via-emerald-300/8 to-transparent rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#ea9216]/10 to-[#ea9216]/20 border border-[#ea9216]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#ea9216] mr-2" />
            <span className="text-sm font-medium text-[#ea9216]">
              Servicios Premium
            </span>
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent"
          >
            <span>Nuestros</span> <span>Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transformamos tus ideas en realidad con{" "}
            <span className="text-[#ea9216] font-semibold">
              tecnología de vanguardia
            </span>{" "}
            y un servicio personalizado excepcional
          </p>
        </div>

        {/* Services Grid con efectos modernos */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group relative bg-gray-600/90 dark:bg-[#3a4750]/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-4xl transition-all duration-500 border border-gray-400/30 dark:border-gray-700/30 hover:-translate-y-2 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(55,65,81,0.95) 0%, 
                  rgba(75,85,99,0.9) 100%
                )`,
                backdropFilter: "blur(20px)",
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.02,
                  rotationY: 5,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  rotationY: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${service.gradient} text-white shadow-lg`}
                >
                  {service.badge}
                </span>
              </div>

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ea9216] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-200">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#ea9216] to-[#d68614] rounded-full mr-3 shadow-sm"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="pt-4 border-t border-gray-200/50 dark:border-gray-600/50">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-[#ea9216] group-hover:text-white group-hover:border-[#ea9216] transition-all duration-300"
                  onClick={() => {
                    console.log("Botón Solicitar Cotización clickeado!");
                    alert("Botón funcionando - redirigiendo a contacto");
                    scrollToSection("#contact");
                  }}
                >
                  Solicitar Cotización
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              {/* Shine Effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />
            </div>
          ))}
        </div>

        {/* Cotization Process Section */}
        <div className="mt-20 relative">
          <div className="relative bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/50 dark:border-gray-700/30 shadow-2xl overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ea9216' fill-opacity='0.3'%3E%3Cpath d='M50 50l8-8v16l-8-8zm-20 0l8 8h-16l8-8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <div className="relative z-10 text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#ea9216]/20 to-orange-500/20 border border-[#ea9216]/30 mb-6">
                <Target className="w-5 h-5 text-[#ea9216] mr-3 animate-pulse" />
                <span className="text-[#ea9216] font-medium">
                  ¿Cómo Cotizamos?
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Nuestro Proceso de{" "}
                <span className="bg-gradient-to-r from-[#ea9216] to-orange-600 bg-clip-text text-transparent">
                  Cotización
                </span>
              </h3>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Cada proyecto es único, por eso personalizamos cada cotización
                según tus necesidades específicas
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Envías tu Diseño
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Comparte con nosotros el archivo STL o el enlace del diseño
                  que quieres imprimir
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-[#ea9216] to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Laminamos
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Procesamos tu diseño para calcular tiempo de impresión y
                  cantidad de material necesario
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Consultoría
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Discutimos contigo el tipo de material, dureza, color y
                  acabado que necesitas
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Precio Final
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Te damos el precio exacto basado en todos los factores
                  analizados
                </p>
              </div>
            </div>

            {/* Key Factors */}
            <div className="bg-gradient-to-r from-[#ea9216]/10 to-orange-500/10 rounded-2xl p-8 border border-[#ea9216]/20">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Factores que Influyen en el Precio
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-[#ea9216] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Tiempo de Impresión
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Complejidad y tamaño del diseño
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-[#ea9216] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Material Consumido
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Cantidad de filamento necesario
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-[#ea9216] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Tipo de Material
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      PLA, PETG, ABS, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <Button
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => {
                  console.log(
                    "Botón Solicitar Cotización Personalizada clickeado!"
                  );
                  alert("Botón grande funcionando - redirigiendo a contacto");
                  scrollToSection("#contact");
                }}
              >
                Solicitar Cotización Personalizada
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Design Websites Section - Modernizada */}
        <div className="mt-20 relative bg-gradient-to-br from-gray-50/80 via-white/40 to-gray-100/80 dark:from-[#3a4750]/80 dark:via-[#313841]/40 dark:to-[#3a4750]/80 backdrop-blur-xl rounded-3xl p-10 border border-white/20 dark:border-gray-700/30 shadow-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ea9216' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/20 border border-purple-500/20 mb-4">
                <Palette className="w-4 h-4 text-purple-500 mr-2" />
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  Recursos Recomendados
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                ¿No sabes qué{" "}
                <span className="bg-gradient-to-r from-[#ea9216] to-[#d68614] bg-clip-text text-transparent">
                  imprimir?
                </span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Descubre miles de diseños increíbles en estas plataformas
                especializadas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {DESIGN_WEBSITES.map((website, index) => (
                <a
                  key={website.name}
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white/70 dark:bg-[#313841]/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 dark:border-gray-700/30 hover:-translate-y-2 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ea9216]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        {getCategoryIcon(website.category)}
                        <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-[#ea9216] transition-colors duration-300">
                          {website.name}
                        </h4>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#ea9216] group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {website.description}
                    </p>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
