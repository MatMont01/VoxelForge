import { useEffect, useRef, useState } from "react";
import { ArrowDown, Printer, Zap, Shield, Play } from "lucide-react";
import { gsap } from "gsap";
import { Button } from "../ui/Button";
import { scrollToSection } from "../../utils/helpers";
import {
  morphingBackground,
  createParticles,
  magneticHover,
  breathingAnimation,
  printerHeadAnimation,
} from "../../utils/advancedAnimations";
import logoSolo from "../../assets/VoxelForgeLogos/voxel-forge-logo-solo.svg";
import { isLowEndDevice } from "../../utils/perf";

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const bgShapeRef = useRef<HTMLDivElement>(null);
  const particleContainerRef = useRef<HTMLDivElement>(null);
  const printerIconRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLDivElement>(null);
  const scrollArrowRef = useRef<HTMLDivElement>(null);
  const [isScrollArrowVisible, setIsScrollArrowVisible] = useState(true);
  const lowEnd = isLowEndDevice();

  // Separate effect just for scroll arrow visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 150) {
        if (scrollArrowRef.current && isScrollArrowVisible) {
          gsap.to(scrollArrowRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "power2.out",
          });
          setIsScrollArrowVisible(false);
        }
      } else {
        if (scrollArrowRef.current && !isScrollArrowVisible) {
          gsap.to(scrollArrowRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
          setIsScrollArrowVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollArrowVisible]);

  // Separate effect for main animations (runs only once)
  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set(
      [
        titleRef.current,
        subtitleRef.current,
        buttonsRef.current,
        logoRef.current,
      ],
      {
        opacity: 0,
        y: 100,
      }
    );

    // Main animation sequence
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      scale: lowEnd ? 1.05 : 1.2,
      duration: lowEnd ? 0.8 : 2,
      ease: lowEnd ? "power2.out" : "elastic.out(1, 0.5)",
    })
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: lowEnd ? 0.7 : 1.5,
          ease: "power3.out",
        },
        "-=1"
      )
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: lowEnd ? 0.7 : 1.5,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: lowEnd ? 0.6 : 1.2,
          ease: lowEnd ? "power2.out" : "back.out(1.7)",
        },
        "-=0.8"
      );

    // Background animations
    if (bgShapeRef.current && !lowEnd) {
      morphingBackground(bgShapeRef.current);
    }

    // Logo breathing animation
    if (logoRef.current && !lowEnd) {
      setTimeout(() => {
        breathingAnimation(logoRef.current!);
      }, 3000);
    }

    // Printer head animation
    if (printerIconRef.current && !lowEnd) {
      setTimeout(() => {
        printerHeadAnimation(printerIconRef.current!);
      }, 2000);
    }

    // Create particles
    if (particleContainerRef.current) {
      createParticles(particleContainerRef.current, lowEnd ? 10 : 30);
    }

    // Feature cards animation
    if (featuresRef.current) {
      const cards = featuresRef.current.querySelectorAll(".feature-card");
      gsap.fromTo(
        cards,
        {
          y: lowEnd ? 60 : 150,
          opacity: 0,
          rotationX: lowEnd ? 0 : 45,
          scale: lowEnd ? 0.95 : 0.8,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          duration: lowEnd ? 0.7 : 1.8,
          stagger: lowEnd ? 0.1 : 0.2,
          ease: "power3.out",
          delay: 1.5,
        }
      );

      // Add magnetic hover to cards
      if (window.matchMedia?.("(hover: hover)").matches && !lowEnd) {
        cards.forEach((card) => {
          magneticHover(card as HTMLElement, 0.2);
        });
      }
    }

    // Background subtle animation (removed ScrollTrigger that was causing content to disappear)
    if (bgShapeRef.current) {
      gsap.set(bgShapeRef.current, { y: 0 });
    }
  }, []);

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
      {/* Particle System */}
      <div
        ref={particleContainerRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Morphing Background Shape */}
      <div
        ref={bgShapeRef}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#ea9216]/20 to-[#ea9216]/5 blur-3xl"
        style={{ borderRadius: "50% 20% 80% 30%" }}
      />

      {/* Additional Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#ea9216] rounded-full md:animate-pulse"></div>
        <div className="absolute top-2/3 left-3/4 w-3 h-3 bg-[#ea9216] rounded-full md:animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#ea9216] rounded-full md:animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <img
              ref={logoRef}
              src={logoSolo}
              alt="Voxel Forge Logo"
              className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 drop-shadow-2xl opacity-0 translate-y-6"
            />
          </div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="brand-title text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 leading-tight perspective-1000 opacity-0 translate-y-6"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="text-[#ea9216] inline-block">Voxel</span>{" "}
            <span className="inline-block">Forge</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed opacity-0 translate-y-6"
          >
            Transformamos tus{" "}
            <span className="text-[#ea9216] font-semibold">
              ideas más audaces
            </span>{" "}
            en realidad tangible con impresión 3D de{" "}
            <span className="text-[#ea9216] font-semibold">
              ultra alta calidad
            </span>
          </p>

          {/* CTA Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20 opacity-0 translate-y-6"
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
          </div>

          {/* 3D Printer Icon Animation */}
          <div className="mb-16 flex justify-center">
            <div
              ref={printerIconRef}
              className="w-20 h-20 bg-gradient-to-br from-[#ea9216] to-[#d68614] rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <Printer className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Features Grid with 3D Effects */}
          <div
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24 md:mb-32"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="feature-card relative bg-white/90 dark:bg-[#3a4750]/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/30 cursor-pointer hover:shadow-3xl hover:-translate-y-2"
                  style={{
                    isolation: "isolate",
                  }}
                  onMouseEnter={(e) => {
                    const card = e.currentTarget;
                    gsap.to(card, {
                      scale: 1.03,
                      duration: 0.2,
                      ease: "power2.out",
                    });
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    gsap.to(card, {
                      scale: 1,
                      duration: 0.2,
                      ease: "power2.out",
                    });
                  }}
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
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollArrowRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
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

      {/* Video Background Overlay (Optional) */}
      <div
        ref={heroVideoRef}
        className="absolute inset-0 opacity-5 pointer-events-none"
      >
        {/* You can add a video background here if needed */}
      </div>
    </section>
  );
};
