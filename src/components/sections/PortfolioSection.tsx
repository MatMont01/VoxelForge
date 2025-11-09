import { useEffect, useRef, useMemo, useState } from "react";
import { SAMPLE_PROJECTS } from "../../constants/projects";
import { isLowEndDevice } from "../../utils/perf";
import { motion } from "framer-motion";
import {
  Play,
  Star,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Facebook,
  Twitch,
} from "lucide-react";
import instagramLogo from "../../assets/SocialMediaLogo/instagram.png";
import tiktokLogo from "../../assets/SocialMediaLogo/tiktok.png";
// Portfolio images (real)
import imgLampara from "../../assets/Portafolio/lampara antorcha minecraft.jpg";
import imgLamparaWebp from "../../assets/Portafolio/lampara antorcha minecraft.webp";
import imgMaqueta from "../../assets/Portafolio/maqueta arquitectura.jpg";
import imgMaquetaWebp from "../../assets/Portafolio/maqueta arquitectura.webp";
import imgSlifer from "../../assets/Portafolio/Slifer dragon rojo.jpg";
import imgSliferWebp from "../../assets/Portafolio/Slifer dragon rojo.webp";
import imgStandComic from "../../assets/Portafolio/stand comic con 2025.jpg";
import imgStandComicWebp from "../../assets/Portafolio/stand comic con 2025.webp";
import imgStandGamer from "../../assets/Portafolio/Stand Gamer Con 2025.jpg";
import imgStandGamerWebp from "../../assets/Portafolio/Stand Gamer Con 2025.webp";
import imgStandStar from "../../assets/Portafolio/stand star con 2025.jpg";
import imgStandStarWebp from "../../assets/Portafolio/stand star con 2025.webp";
import imgKitATST from "../../assets/Portafolio/Starwars kit card at st y caza tie .jpg";
import imgKitATSTWebp from "../../assets/Portafolio/Starwars kit card at st y caza tie .webp";
import imgXwing from "../../assets/Portafolio/Xwing Star wars.jpg";
import imgXwingWebp from "../../assets/Portafolio/Xwing Star wars.webp";

export const PortfolioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const track1Pos = useRef(0);
  const track2Pos = useRef(0);
  const track1Width = useRef(0);
  const track2Width = useRef(0);
  const draggingTrack = useRef<1 | 2 | null>(null);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);
  const isDragging = useRef(false);
  const lowEnd = isLowEndDevice?.() ?? false;
  const [inView, setInView] = useState(true);
  const [openOverlays, setOpenOverlays] = useState<Set<string>>(new Set());
  // Prepare real portfolio items
  const portfolioItems = useMemo(
    () => [
      {
        src: imgLampara,
        webp: imgLamparaWebp,
        title: "Lámpara Antorcha Minecraft",
        desc: "Accesorio decorativo impreso con acabados nítidos.",
      },
      {
        src: imgMaqueta,
        webp: imgMaquetaWebp,
        title: "Maqueta Arquitectura",
        desc: "Modelo arquitectónico de alta precisión.",
      },
      {
        src: imgSlifer,
        webp: imgSliferWebp,
        title: "Slifer, Dragón del Cielo",
        desc: "Figura detallada, post-procesado y pintura.",
      },
      {
        src: imgStandComic,
        webp: imgStandComicWebp,
        title: "Stand Comic Con 2025",
        desc: "Elementos impresos para exhibición temática.",
      },
      {
        src: imgStandGamer,
        webp: imgStandGamerWebp,
        title: "Stand Gamer Con 2025",
        desc: "Decoraciones personalizadas para evento gamer.",
      },
      {
        src: imgStandStar,
        webp: imgStandStarWebp,
        title: "Stand Star Con 2025",
        desc: "Props y piezas para ambientación sci‑fi.",
      },
      {
        src: imgKitATST,
        webp: imgKitATSTWebp,
        title: "Kit AT‑ST y TIE",
        desc: "Modelos Star Wars ensamblables de colección.",
      },
      {
        src: imgXwing,
        webp: imgXwingWebp,
        title: "X‑Wing Star Wars",
        desc: "Nave icónica impresa con gran definición.",
      },
    ],
    []
  );

  // Duplicate items for seamless marquee
  const marqueeItems = useMemo(
    () => [...portfolioItems, ...portfolioItems],
    [portfolioItems]
  );
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Measure track widths after mount
    const measure = () => {
      if (track1Ref.current)
        track1Width.current = track1Ref.current.scrollWidth;
      if (track2Ref.current)
        track2Width.current = track2Ref.current.scrollWidth;
      // Initialize/normalize positions to keep ranges tight for seamless wrap
      const half1 = track1Width.current / 2;
      const half2 = track2Width.current / 2;
      if (track1Ref.current && half1) {
        while (track1Pos.current <= -half1) track1Pos.current += half1;
        while (track1Pos.current > 0) track1Pos.current -= half1;
        track1Ref.current.style.transform = `translateX(${track1Pos.current}px)`;
      }
      if (track2Ref.current && half2) {
        // Start the rightward-scrolling track at -half so new items enter from the left
        if (track2Pos.current === 0) track2Pos.current = -half2;
        while (track2Pos.current >= 0) track2Pos.current -= half2;
        while (track2Pos.current < -half2) track2Pos.current += half2;
        track2Ref.current.style.transform = `translateX(${track2Pos.current}px)`;
      }
    };
    measure();
    window.addEventListener("resize", measure);

    // IntersectionObserver to pause autoplay when off-screen
    const el = carouselRef.current ?? sectionRef.current;
    let io: IntersectionObserver | null = null;
    if (el) {
      io = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setInView(entry.isIntersecting && entry.intersectionRatio > 0.15);
        },
        { threshold: [0, 0.15, 0.5, 1] }
      );
      io.observe(el);
    }

    let prevTime = performance.now();
    const speed = lowEnd ? 18 : 28; // px per second base speed

    const step = (time: number) => {
      const dt = time - prevTime;
      prevTime = time;
      if (inView && !isDragging.current) {
        // Track1 moves left (negative), Track2 moves right (positive)
        track1Pos.current -= (speed * dt) / 1000;
        track2Pos.current += (speed * dt) / 1000;

        // Wrap logic for infinite effect (duplicate arrays)
        const half1 = track1Width.current / 2;
        const half2 = track2Width.current / 2;
        if (half1) {
          if (track1Pos.current <= -half1) track1Pos.current += half1;
          if (track1Pos.current > 0) track1Pos.current -= half1;
        }
        if (half2) {
          // Keep track2 within [-half2, 0) so it loops smoothly moving right
          if (track2Pos.current >= 0) track2Pos.current -= half2;
          if (track2Pos.current < -half2) track2Pos.current += half2;
        }
        // Apply transforms (imperative to avoid excessive re-renders)
        if (track1Ref.current) {
          track1Ref.current.style.transform = `translateX(${track1Pos.current}px)`;
        }
        if (track2Ref.current) {
          track2Ref.current.style.transform = `translateX(${track2Pos.current}px)`;
        }
      }
      requestAnimationFrame(step);
    };
    const rafId = requestAnimationFrame(step);

    // Pointer handlers (mouse + touch unified via pointer events)
    const startDrag = (track: 1 | 2, clientX: number) => {
      draggingTrack.current = track;
      dragStartX.current = clientX;
      dragStartPos.current =
        track === 1 ? track1Pos.current : track2Pos.current;
      isDragging.current = true;
    };
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (!track1Ref.current || !track2Ref.current) return;
      if (track1Ref.current.contains(target)) {
        startDrag(1, e.clientX);
      } else if (track2Ref.current.contains(target)) {
        startDrag(2, e.clientX);
      } else {
        return;
      }
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current || draggingTrack.current == null) return;
      const dx = e.clientX - dragStartX.current;
      if (draggingTrack.current === 1) {
        track1Pos.current = dragStartPos.current + dx;
        const half = track1Width.current / 2;
        if (half) {
          while (track1Pos.current <= -half) track1Pos.current += half;
          while (track1Pos.current > 0) track1Pos.current -= half;
        }
        if (track1Ref.current)
          track1Ref.current.style.transform = `translateX(${track1Pos.current}px)`;
      } else {
        track2Pos.current = dragStartPos.current + dx;
        const half = track2Width.current / 2;
        if (half) {
          while (track2Pos.current >= 0) track2Pos.current -= half;
          while (track2Pos.current < -half) track2Pos.current += half;
        }
        if (track2Ref.current)
          track2Ref.current.style.transform = `translateX(${track2Pos.current}px)`;
      }
    };
    const endDrag = () => {
      isDragging.current = false;
      draggingTrack.current = null;
    };
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", endDrag, { passive: true });
    window.addEventListener("pointercancel", endDrag, { passive: true });

    // Keyboard accessibility (arrow keys nudge when focused)
    const onKeyDown = (e: KeyboardEvent) => {
      if (!track1Ref.current || !track2Ref.current) return;
      const activeEl = document.activeElement;
      const nudge = 60;
      if (activeEl && track1Ref.current.contains(activeEl)) {
        if (e.key === "ArrowLeft") track1Pos.current -= nudge;
        if (e.key === "ArrowRight") track1Pos.current += nudge;
        const half = track1Width.current / 2;
        if (half) {
          if (track1Pos.current <= -half) track1Pos.current += half;
          if (track1Pos.current > 0) track1Pos.current -= half;
        }
        track1Ref.current.style.transform = `translateX(${track1Pos.current}px)`;
      } else if (activeEl && track2Ref.current.contains(activeEl)) {
        if (e.key === "ArrowLeft") track2Pos.current -= nudge;
        if (e.key === "ArrowRight") track2Pos.current += nudge;
        const half = track2Width.current / 2;
        if (half) {
          if (track2Pos.current >= half) track2Pos.current -= half;
          if (track2Pos.current < -half) track2Pos.current += half;
        }
        track2Ref.current.style.transform = `translateX(${track2Pos.current}px)`;
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
      window.removeEventListener("keydown", onKeyDown);
      if (io && el) io.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [inView, lowEnd]);

  const categories = [
    ...new Set(SAMPLE_PROJECTS.map((project) => project.category)),
  ];
  // Display numbers (business metrics)
  const displayTotalProjects = 2000; // 2000+ proyectos
  const displayTotalPrintTime = 12000; // 12000h+ de impresión

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-[#2e0a2e] dark:via-[#4a1a4a] dark:to-[#2e0a2e] relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-25">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='140' height='140' viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23a855f7' fill-opacity='0.1'%3E%3Cpath d='M70 70l18-18v36l-18-18zm-25-25l18-18v36l-18-18zm50 0l18-18v36l-18-18zm-25 50l18-18v36l-18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Creative Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-28 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-32 w-12 h-12 bg-gradient-to-br from-pink-400/15 to-purple-500/15 rounded-lg animate-bounce transform rotate-45"></div>
        <div className="absolute bottom-36 left-32 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-full"></div>
        <div className="absolute bottom-24 right-28 w-14 h-14 bg-gradient-to-br from-pink-500/15 to-purple-400/15 rounded-lg animate-pulse transform -rotate-12"></div>
      </div>

      {/* Purple Creative Ambient Light */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-purple-400/10 via-pink-400/5 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#ea9216]/10 to-[#ea9216]/20 border border-[#ea9216]/20 mb-6">
            <Star className="w-4 h-4 text-[#ea9216] mr-2 animate-pulse" />
            <span className="text-sm font-medium text-[#ea9216]">
              Nuestros Trabajos
            </span>
          </div>

          <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent">
              Nuestro
            </span>{" "}
            <span className="bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent">
              Portafolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Cada proyecto cuenta una historia de{" "}
            <span className="text-[#ea9216] font-semibold">precisión</span>,{" "}
            <span className="text-[#ea9216] font-semibold">creatividad</span> y{" "}
            <span className="text-[#ea9216] font-semibold">excelencia</span>
          </p>

          {/* Enhanced Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
          >
            {[
              {
                number: displayTotalProjects,
                label: "Proyectos completados",
                icon: "🎯",
                suffix: "+",
              },
              {
                number: categories.length,
                label: "Categorías Diferentes",
                icon: "📦",
                suffix: "",
              },
              {
                number: displayTotalPrintTime,
                label: "Horas de Impresión",
                icon: "⏱️",
                suffix: "h+",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="relative bg-gray-600/90 dark:bg-[#313841]/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-400/30 dark:border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(55,65,81,0.95) 0%, 
                    rgba(75,85,99,0.9) 100%
                  )`,
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ea9216] to-[#d68614] bg-clip-text text-transparent mb-2">
                  <span className="stat-number">{stat.number}</span>
                  {stat.suffix}
                </div>
                <div className="text-gray-200 font-medium">{stat.label}</div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#ea9216] to-[#d68614] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-bounce"></div>
              </div>
            ))}
          </div>

          {/* Social Media Showcase */}
          <div className="mb-8">
            <div className="inline-flex flex-wrap gap-4 items-center px-6 py-3 bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-pink-200/30 dark:border-pink-700/30">
              <span className="text-gray-700 dark:text-gray-300">
                Síguenos para ver más proyectos:
              </span>
              <a
                href="https://www.instagram.com/voxelforge_scz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-pink-500 hover:text-pink-600 font-semibold hover:underline transition-colors"
              >
                <img
                  src={instagramLogo}
                  alt="Instagram"
                  className="w-5 h-5 mr-2"
                  width={20}
                  height={20}
                  loading="lazy"
                  decoding="async"
                />
                Instagram
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="https://www.tiktok.com/@voxelforge_scz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-800 dark:text-gray-200 hover:text-white font-semibold hover:underline transition-colors"
              >
                <img
                  src={tiktokLogo}
                  alt="TikTok"
                  className="w-5 h-5 mr-2"
                  width={20}
                  height={20}
                  loading="lazy"
                  decoding="async"
                />
                TikTok
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="https://www.facebook.com/VoxelForgeSCZ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors"
              >
                <Facebook className="w-5 h-5 mr-2" /> Facebook
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="https://www.twitch.tv/eronii_sama"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold hover:underline transition-colors"
                title="Canal personal"
              >
                <Twitch className="w-5 h-5 mr-2" /> Twitch
              </a>
            </div>
          </div>
        </motion.div>

        {/* Infinite Marquee Gallery */}
        <motion.div
          ref={carouselRef}
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-gray-200/30 dark:border-gray-700/30 shadow-2xl bg-white/70 dark:bg-[#313841]/60 backdrop-blur-xl">
            {/* Glow accents */}
            <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-br from-[#ea9216]/20 to-[#d68614]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-500/15 to-pink-500/10 blur-3xl" />

            {/* Marquee track wrapper (no pause on hover for smoother feel) */}
            <div className="relative py-4">
              {/* Track 1 - manual autoplay + drag */}
              <div
                ref={track1Ref}
                className="flex gap-6 w-[200%] will-change-transform select-none cursor-grab active:cursor-grabbing touch-pan-y"
                aria-label="Galería desplazable manual y automática (carril 1)"
                tabIndex={0}
              >
                {marqueeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative w-[320px] sm:w-[360px] lg:w-[420px] h-[220px] sm:h-[240px] lg:h-[260px] rounded-2xl overflow-hidden flex-shrink-0 border border-white/30 dark:border-gray-700/40 bg-gray-100/70 dark:bg-[#2b323b]/70 hover:shadow-xl transition-all duration-300"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      const id = `ltr-${idx}`;
                      setOpenOverlays((prev) => {
                        const next = new Set(prev);
                        next.has(id) ? next.delete(id) : next.add(id);
                        return next;
                      });
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        const id = `ltr-${idx}`;
                        setOpenOverlays((prev) => {
                          const next = new Set(prev);
                          next.has(id) ? next.delete(id) : next.add(id);
                          return next;
                        });
                      }
                    }}
                  >
                    <picture>
                      <source srcSet={item.webp} type="image/webp" />
                      <img
                        src={item.src}
                        alt={item.title}
                        width={420}
                        height={260}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end ${
                        openOverlays.has(`ltr-${idx}`) ? "opacity-100" : ""
                      }`}
                    >
                      <div className="p-4">
                        <h4 className="text-white font-bold text-lg leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-white/90 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Track 2 - manual autoplay + drag */}
              <div
                ref={track2Ref}
                className="mt-6 flex gap-6 w-[200%] will-change-transform select-none cursor-grab active:cursor-grabbing touch-pan-y"
                aria-label="Galería desplazable manual y automática (carril 2)"
                tabIndex={0}
              >
                {marqueeItems.map((item, idx) => (
                  <div
                    key={`rtl-${idx}`}
                    className="relative w-[280px] sm:w-[320px] lg:w-[380px] h-[200px] sm:h-[220px] lg:h-[240px] rounded-2xl overflow-hidden flex-shrink-0 border border-white/30 dark:border-gray-700/40 bg-gray-100/70 dark:bg-[#2b323b]/70 hover:shadow-xl transition-all duration-300"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      const id = `rtl-${idx}`;
                      setOpenOverlays((prev) => {
                        const next = new Set(prev);
                        next.has(id) ? next.delete(id) : next.add(id);
                        return next;
                      });
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        const id = `rtl-${idx}`;
                        setOpenOverlays((prev) => {
                          const next = new Set(prev);
                          next.has(id) ? next.delete(id) : next.add(id);
                          return next;
                        });
                      }
                    }}
                  >
                    <picture>
                      <source srcSet={item.webp} type="image/webp" />
                      <img
                        src={item.src}
                        alt={item.title}
                        width={380}
                        height={240}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.05]"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end ${
                        openOverlays.has(`rtl-${idx}`) ? "opacity-100" : ""
                      }`}
                    >
                      <div className="p-3">
                        <h4 className="text-white font-bold text-base leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-white/90 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Categories */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-200/30 dark:border-purple-700/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              Especialidades
            </span>
          </div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-600 dark:from-white dark:to-purple-400 bg-clip-text text-transparent mb-8">
            Categorías de Proyectos
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.span
                key={category}
                className={`px-6 py-3 bg-gradient-to-r backdrop-blur-sm rounded-2xl text-sm font-semibold border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  index % 4 === 0
                    ? "from-blue-500/10 to-blue-600/10 text-blue-600 dark:text-blue-400 border-blue-200/30 dark:border-blue-700/30"
                    : index % 4 === 1
                    ? "from-purple-500/10 to-purple-600/10 text-purple-600 dark:text-purple-400 border-purple-200/30 dark:border-purple-700/30"
                    : index % 4 === 2
                    ? "from-[#ea9216]/10 to-[#ea9216]/20 text-[#ea9216] border-[#ea9216]/30"
                    : "from-green-500/10 to-green-600/10 text-green-600 dark:text-green-400 border-green-200/30 dark:border-green-700/30"
                }`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
              >
                {category}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Call to Action with Social Links */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-100/95 via-[#ea9216]/5 to-gray-100/95 dark:from-[#313841]/90 dark:via-[#ea9216]/10 dark:to-[#313841]/90 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/30 dark:border-gray-700/30 shadow-2xl overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ea9216]/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#ea9216]/20 to-[#ea9216]/10 border border-[#ea9216]/30 mb-6">
                <Star className="w-4 h-4 text-[#ea9216] mr-2 animate-pulse" />
                <span className="text-sm font-medium text-[#ea9216]">
                  ¡Comenzemos!
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#ea9216] to-gray-900 dark:from-white dark:via-[#ea9216] dark:to-white bg-clip-text text-transparent mb-6">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Desde{" "}
                <span className="text-[#ea9216] font-semibold">
                  figuras personalizadas
                </span>{" "}
                hasta{" "}
                <span className="text-[#ea9216] font-semibold">
                  prototipos funcionales
                </span>
                , estamos aquí para dar vida a tus{" "}
                <span className="text-[#ea9216] font-semibold">
                  ideas más creativas
                </span>
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/59174697838?text=Hola, tengo un proyecto que me gustaría imprimir",
                      "_blank"
                    )
                  }
                  className="group px-8 py-4 bg-gradient-to-r from-[#ea9216] to-[#d68614] text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-center">
                    <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    Solicitar Cotización
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group px-8 py-4 bg-white/80 dark:bg-[#313841]/80 backdrop-blur-sm border-2 border-[#ea9216] text-[#ea9216] rounded-2xl font-semibold hover:bg-[#ea9216] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Más Información
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform inline" />
                </button>
              </div>

              {/* Social Media Links */}
              <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-8">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Síguenos en nuestras redes sociales
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://www.instagram.com/voxelforge_scz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-6 py-3 bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-pink-200/30 dark:border-pink-700/30 hover:from-pink-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src={instagramLogo}
                      alt="Instagram"
                      className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"
                      width={20}
                      height={20}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Instagram
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/VoxelForgeSCZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-2xl border border-blue-200/30 dark:border-blue-700/30 hover:from-blue-500/20 hover:to-indigo-500/20 transition-all duration-300 hover:scale-105"
                  >
                    <Facebook className="w-5 h-5 mr-3 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Facebook
                    </span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@voxelforge_scz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-6 py-3 bg-gradient-to-r from-gray-800/10 to-gray-900/10 backdrop-blur-sm rounded-2xl border border-gray-300/30 dark:border-gray-600/30 hover:from-gray-800/20 hover:to-gray-900/20 transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src={tiktokLogo}
                      alt="TikTok"
                      className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"
                      width={20}
                      height={20}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      TikTok
                    </span>
                  </a>
                  <a
                    href="https://www.twitch.tv/eronii_sama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 backdrop-blur-sm rounded-2xl border border-purple-200/30 dark:border-purple-700/30 hover:from-purple-500/20 hover:to-fuchsia-500/20 transition-all duration-300 hover:scale-105"
                  >
                    <Twitch className="w-5 h-5 mr-3 text-purple-600 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Twitch
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
