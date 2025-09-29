import { useRef, useEffect } from "react";
import { Play, Eye, Users, Clock, Sparkles, Video } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tiktokLogo from "../../assets/SocialMediaLogo/tiktok.png";

gsap.registerPlugin(ScrollTrigger);

export const LivePrintingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title animation with 3D effect
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current.children,
        { y: 100, opacity: 0, rotationX: 45 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
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

    // Video mockup animation
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        {
          scale: 0.8,
          opacity: 0,
          rotationY: -15,
        },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Features stagger animation
    if (featuresRef.current) {
      const featureCards =
        featuresRef.current.querySelectorAll(".feature-card");
      gsap.fromTo(
        featureCards,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Stats counter animation
    if (statsRef.current) {
      const statNumbers = statsRef.current.querySelectorAll(".stat-number");
      statNumbers.forEach((stat) => {
        const target = parseInt(stat.textContent || "0");
        const obj = { value: 0 };
        gsap.to(obj, {
          value: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: function () {
            (stat as HTMLElement).textContent = Math.round(
              obj.value
            ).toString();
          },
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }
  }, []);

  const features = [
    {
      icon: Eye,
      title: "Transparencia Total",
      description: "Ve exactamente cómo se imprime tu pedido paso a paso",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "Tiempo Real",
      description: "Seguimiento en vivo del progreso de tu impresión",
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: Users,
      title: "Comunidad Interactiva",
      description: "Comenta y comparte la experiencia con otros clientes",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: Sparkles,
      title: "Contenido Exclusivo",
      description: "Behind the scenes y tips de impresión 3D",
      gradient: "from-yellow-500 to-orange-600",
    },
  ];

  const stats = [
    { number: "500", label: "Videos en Vivo", suffix: "+" },
    { number: "10", label: "Horas Diarias", suffix: "K+" },
    { number: "95", label: "Satisfacción", suffix: "%" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#f8fafc] dark:via-[#f1f5f9] dark:to-[#f8fafc] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ea9216' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating TikTok icons */}
      <div className="absolute top-20 left-10 animate-float">
        <Video className="w-8 h-8 text-[#ea9216] opacity-20" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float-slow">
        <Play className="w-6 h-6 text-pink-500 opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-900 mb-6 leading-tight"
          >
            <span className="block">¡Ve Tu Pedido</span>
            <span className="block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Imprimiéndose en Vivo!
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experimenta una{" "}
            <span className="font-bold text-[#ea9216]">
              transparencia total
            </span>{" "}
            - sigue el progreso de tu pedido en tiempo real a través de nuestros
            <span className="font-bold text-pink-600">
              {" "}
              streams en vivo de TikTok
            </span>
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Video Mockup */}
          <div ref={videoRef} className="relative">
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              {/* Phone Frame */}
              <div className="bg-black rounded-2xl p-2 shadow-inner">
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl aspect-[9/16] relative overflow-hidden">
                  {/* TikTok UI Elements */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                    <div className="flex items-center space-x-2">
                      <img src={tiktokLogo} alt="TikTok" className="w-6 h-6" />
                      <span className="text-white text-sm font-bold">
                        @voxelforge_scz
                      </span>
                    </div>
                    <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                      EN VIVO
                    </div>
                  </div>

                  {/* Video Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent">
                    <div
                      className="absolute inset-0 bg-center bg-cover opacity-80"
                      style={{
                        backgroundImage: `linear-gradient(45deg, #ea9216 25%, transparent 25%, transparent 75%, #ea9216 75%), 
                                           linear-gradient(45deg, #ea9216 25%, transparent 25%, transparent 75%, #ea9216 75%)`,
                        backgroundSize: "20px 20px",
                        backgroundPosition: "0 0, 10px 10px",
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-[#ea9216] rounded-full flex items-center justify-center mb-4 mx-auto animate-spin">
                          <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm font-semibold">
                          Imprimiendo tu pedido...
                        </p>
                        <p className="text-xs opacity-75">#123456</p>
                      </div>
                    </div>
                  </div>

                  {/* TikTok Side Actions */}
                  <div className="absolute right-3 bottom-20 flex flex-col space-y-4">
                    <div className="bg-gray-800/50 rounded-full p-2">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-gray-800/50 rounded-full p-2">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-gray-800/50 rounded-full p-2">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Comments Preview */}
                  <div className="absolute bottom-4 left-4 right-16">
                    <div className="space-y-1">
                      <div className="bg-black/30 rounded-lg px-2 py-1">
                        <p className="text-white text-xs">
                          ¡Se ve increíble! 🔥
                        </p>
                      </div>
                      <div className="bg-black/30 rounded-lg px-2 py-1">
                        <p className="text-white text-xs">¿Cuánto falta? 👀</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Features */}
          <div ref={featuresRef} className="space-y-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-900 mb-4">
                Una Experiencia Única
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-600 leading-relaxed">
                Somos los primeros en Bolivia en ofrecer transparencia total en
                el proceso de impresión 3D.
              </p>
            </div>

            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card group flex items-start space-x-4 p-6 bg-white/50 dark:bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-300/50"
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-900 mb-2 group-hover:text-[#ea9216] transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-white to-gray-50 dark:from-white dark:to-gray-100 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-300/50"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#ea9216] mb-2">
                <span className="stat-number">{stat.number}</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¡Síguenos en TikTok y No Te Pierdas Nada!
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Únete a nuestra comunidad y sé parte de la revolución de la
              impresión 3D transparente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.tiktok.com/@voxelforge_scz"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-black text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <img src={tiktokLogo} alt="TikTok" className="w-6 h-6 mr-3" />
                Seguir en TikTok
                <Play className="w-5 h-5 ml-3 group-hover:scale-110 transition-transform" />
              </a>
              <button
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Eye className="w-5 h-5 mr-3" />
                Hacer Pedido
                <Sparkles className="w-5 h-5 ml-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
