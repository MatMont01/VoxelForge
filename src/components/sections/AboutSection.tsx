import { useEffect, useRef } from "react";
import { Calendar, MapPin, Award, Target, Heart } from "lucide-react";
import { COMPANY_HISTORY } from "../../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title animation
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

    // Story animation
    if (storyRef.current) {
      gsap.fromTo(
        storyRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Values animation
    if (valuesRef.current) {
      const valueCards = valuesRef.current.querySelectorAll(".value-card");
      gsap.fromTo(
        valueCards,
        { y: 80, opacity: 0, rotateX: 45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const values = [
    {
      icon: Award,
      title: "Calidad Premium",
      description:
        "Utilizamos únicamente materiales de primera calidad y equipos de última generación.",
    },
    {
      icon: Target,
      title: "Precisión",
      description:
        "Cada proyecto es ejecutado con la máxima atención al detalle y precisión milimétrica.",
    },
    {
      icon: MapPin,
      title: "Alcance Nacional",
      description:
        "Servimos a todo Bolivia con envíos seguros a través de empresas de flota confiables.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 dark:from-[#3a4750] dark:via-[#313841] dark:to-[#3a4750] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ea9216' fill-opacity='0.3'%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='80' cy='80' r='2'/%3E%3Ccircle cx='20' cy='80' r='1'/%3E%3Ccircle cx='80' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#ea9216]/10 to-[#ea9216]/20 border border-[#ea9216]/20 mb-6">
            <Heart className="w-4 h-4 text-[#ea9216] mr-2 animate-pulse" />
            <span className="text-sm font-medium text-[#ea9216]">
              Nuestra Historia
            </span>
          </div>

          <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent">
              Sobre
            </span>{" "}
            <span className="bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent">
              Nosotros
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Una historia de{" "}
            <span className="text-[#ea9216] font-semibold">pasión</span>,{" "}
            <span className="text-[#ea9216] font-semibold">innovación</span> y{" "}
            <span className="text-[#ea9216] font-semibold">dedicación</span> a
            la excelencia
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Company Story */}
            <div ref={storyRef}>
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-[#ea9216] mr-3" />
                <span className="text-2xl font-bold text-[#ea9216]">
                  Desde {COMPANY_HISTORY.foundedYear}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Nuestra Historia
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {COMPANY_HISTORY.story}
              </p>

              <div className="bg-white dark:bg-[#313841] rounded-xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                  Del Hobby al Negocio
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Lo que comenzó como un experimento personal con una Ender 3 V2
                  se ha convertido en un servicio profesional que ha ayudado a
                  decenas de clientes a materializar sus ideas más creativas.
                </p>
              </div>
            </div>

            {/* Visual Timeline */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#ea9216]"></div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-white font-bold">2022</span>
                  </div>
                  <div className="flex-1 bg-white dark:bg-[#313841] rounded-lg p-4 shadow-md">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      El Comienzo
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Primera impresora Ender 3 V2, primeros experimentos y
                      aprendizaje.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-[#ea9216] rounded-full flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-white font-bold">2023</span>
                  </div>
                  <div className="flex-1 bg-white dark:bg-[#313841] rounded-lg p-4 shadow-md">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      Crecimiento
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Primeros clientes, perfeccionamiento de técnicas y
                      procesos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-[#ea9216] rounded-full flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-white font-bold">2024</span>
                  </div>
                  <div className="flex-1 bg-white dark:bg-[#313841] rounded-lg p-4 shadow-md">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      Evolución
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Upgrade a Bambu Lab P1S, expansión del servicio y esta
                      página web.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#ea9216] to-[#d68614] rounded-full flex items-center justify-center mr-6 shadow-lg border-2 border-yellow-400 relative">
                    <span className="text-white font-bold">2025</span>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-white to-[#ea9216]/5 dark:from-[#313841] dark:to-[#ea9216]/10 rounded-lg p-4 shadow-lg border border-[#ea9216]/20">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      Colaboraciones Estratégicas
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Asociaciones oficiales con <strong>Comic Con</strong>,{" "}
                      <strong>Gamer Con</strong> y <strong>Star Con</strong>{" "}
                      para la creación de medallas y trofeos exclusivos.
                      Participación como expositores oficiales en cada evento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-[#313841] rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                🎯 Nuestra Misión
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {COMPANY_HISTORY.mission}
              </p>
            </div>

            <div className="bg-white dark:bg-[#313841] rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                🚀 Nuestra Visión
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {COMPANY_HISTORY.vision}
              </p>
            </div>
          </div>

          {/* Enhanced Values */}
          <div ref={valuesRef} className="mt-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#ea9216]/10 to-[#ea9216]/20 border border-[#ea9216]/20 mb-6">
                <Heart className="w-4 h-4 text-[#ea9216] mr-2 animate-pulse" />
                <span className="text-sm font-medium text-[#ea9216]">
                  Nuestros Principios
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent mb-4">
                Nuestros Valores
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Los pilares que guían cada decisión y cada proyecto que
                realizamos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                const colors = [
                  {
                    gradient: "from-blue-500 to-blue-600",
                    bg: "from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800",
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
                    key={value.title}
                    className={`value-card relative bg-gray-200/95 dark:bg-[#313841]/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-300/30 dark:border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 text-center group`}
                    style={{
                      background: `linear-gradient(135deg, 
                        rgba(55,65,81,0.95) 0%, 
                        rgba(75,85,99,0.9) 100%
                      )`,
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    {/* Icon Container */}
                    <div
                      className={`relative w-20 h-20 bg-gradient-to-r ${colors[index].gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500`}
                    >
                      <Icon className="w-10 h-10 text-white" />

                      {/* Decorative elements */}
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-white/30 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ea9216] transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-gray-200 leading-relaxed">
                      {value.description}
                    </p>

                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#ea9216]/10 to-transparent rounded-full -translate-y-8 translate-x-8"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full translate-y-6 -translate-x-6"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
