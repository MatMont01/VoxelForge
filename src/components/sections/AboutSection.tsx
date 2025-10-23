import { useRef } from "react";
import { Calendar, MapPin, Award, Target, Heart } from "lucide-react";
import { COMPANY_HISTORY } from "../../constants";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay },
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
  const containerStagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

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
      className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-[#1a1f3a] dark:via-[#2d1b69] dark:to-[#1a1f3a] relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ea9216' fill-opacity='0.1'%3E%3Cpath d='M50 50l10-10v20l-10-10zm40 40l10-10v20l-10-10zm40-40l10-10v20l-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating 3D Cubes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="floating-cube absolute top-20 left-10 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 transform rotate-45 animate-pulse"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        ></div>
        <div
          className="floating-cube absolute top-40 right-20 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-pink-600/20 transform rotate-45 animate-bounce"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        ></div>
        <div
          className="floating-cube absolute bottom-32 left-20 w-16 h-16 bg-gradient-to-br from-indigo-500/15 to-blue-600/15 transform rotate-45"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        ></div>
      </div>

      {/* Ambient Light Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-blue-400/10 via-purple-400/5 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#ea9216]/10 to-[#ea9216]/20 border border-[#ea9216]/20 mb-6">
            <Heart className="w-4 h-4 text-[#ea9216] mr-2 animate-pulse" />
            <span className="text-sm font-medium text-[#ea9216]">
              Nuestra Historia
            </span>
          </div>

          <motion.h2
            ref={titleRef}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 relative"
          >
            <span className="title-word inline-block bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent relative">
              Sobre
              <span className="title-sparkle absolute -top-2 -right-2 w-4 h-4 bg-[#ea9216] rounded-full opacity-80"></span>
            </span>{" "}
            <span className="title-word inline-block bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent relative">
              Nosotros
              <span className="title-sparkle absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-[#ea9216] rounded-full opacity-90"></span>
            </span>
          </motion.h2>
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
            <motion.div
              ref={storyRef}
              variants={slideLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
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
            </motion.div>

            {/* Visual Timeline */}
            <motion.div
              ref={timelineRef}
              className="relative"
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ea9216] via-yellow-400 to-[#ea9216] glow-pulse"></div>

              <div className="space-y-8">
                <motion.div
                  className="timeline-item flex items-start"
                  variants={fadeUp}
                >
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mr-6 shadow-lg floating-element">
                    <span className="text-white font-bold">2022</span>
                  </div>
                  <div className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-gray-200/50 dark:border-gray-700/50">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      El Comienzo
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Primera impresora Ender 3 V2, primeros experimentos y
                      aprendizaje.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="timeline-item flex items-start"
                  variants={fadeUp}
                >
                  <div className="w-16 h-16 bg-[#ea9216] rounded-full flex items-center justify-center mr-6 shadow-lg floating-element">
                    <span className="text-white font-bold">2023</span>
                  </div>
                  <div className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-gray-200/50 dark:border-gray-700/50">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      Crecimiento
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Primeros clientes, perfeccionamiento de técnicas y
                      procesos.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="timeline-item flex items-start"
                  variants={fadeUp}
                >
                  <div className="w-16 h-16 bg-[#ea9216] rounded-full flex items-center justify-center mr-6 shadow-lg floating-element">
                    <span className="text-white font-bold">2024</span>
                  </div>
                  <div className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-gray-200/50 dark:border-gray-700/50">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      Evolución
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Upgrade a Bambu Lab P1S, expansión del servicio y esta
                      página web.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="timeline-item flex items-start"
                  variants={fadeUp}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#ea9216] to-[#d68614] rounded-full flex items-center justify-center mr-6 shadow-lg border-2 border-yellow-400 relative floating-element">
                    <span className="text-white font-bold">2025</span>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping glow-pulse"></div>
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-white/90 to-[#ea9216]/10 dark:from-gray-800/90 dark:to-[#ea9216]/20 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#ea9216]/30">
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
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <motion.div
            ref={missionRef}
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div
              variants={fadeUp}
              className="mission-card bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-600/50 hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🎯</span> Nuestra Misión
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {COMPANY_HISTORY.mission}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mission-card bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-600/50 hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🚀</span> Nuestra Visión
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {COMPANY_HISTORY.vision}
              </p>
            </motion.div>
          </motion.div>

          {/* Enhanced Values */}
          <motion.div
            ref={valuesRef}
            className="mt-20"
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
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
                    glow: "shadow-blue-500/25",
                    accent: "blue-400",
                  },
                  {
                    gradient: "from-[#ea9216] to-[#d68614]",
                    glow: "shadow-orange-500/25",
                    accent: "orange-400",
                  },
                  {
                    gradient: "from-green-500 to-green-600",
                    glow: "shadow-green-500/25",
                    accent: "green-400",
                  },
                ];

                return (
                  <motion.div
                    variants={fadeUp}
                    key={value.title}
                    className={`value-card relative bg-gradient-to-br from-white/95 via-gray-50/90 to-white/95 dark:from-gray-800/90 dark:via-gray-700/85 dark:to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-600/40 shadow-2xl hover:shadow-3xl transition-all duration-700 text-center group overflow-hidden`}
                  >
                    {/* Background Glow */}
                    <div
                      className={`value-glow absolute inset-0 bg-gradient-to-br from-${colors[index].accent}/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    {/* Icon Container */}
                    <div
                      className={`value-icon relative w-20 h-20 bg-gradient-to-r ${colors[index].gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl ${colors[index].glow} group-hover:shadow-3xl transition-all duration-500 z-10`}
                    >
                      <Icon className="w-10 h-10 text-white" />

                      {/* Decorative elements */}
                      <div
                        className={`absolute -top-1 -right-1 w-4 h-4 bg-${colors[index].accent} rounded-full animate-ping opacity-75`}
                      ></div>
                      <div
                        className={`absolute -bottom-1 -left-1 w-3 h-3 bg-${colors[index].accent}/70 rounded-full animate-pulse`}
                      ></div>
                    </div>

                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#ea9216] transition-colors duration-300 relative z-10">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                      {value.description}
                    </p>

                    {/* Floating decorative elements */}
                    <div
                      className={`floating-element absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-${colors[index].accent}/20 to-transparent rounded-full`}
                    ></div>
                    <div
                      className={`floating-element absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-tr from-${colors[index].accent}/15 to-transparent rounded-full`}
                      style={{ animationDelay: "1s" }}
                    ></div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
