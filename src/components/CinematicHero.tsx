import { useRef } from "react";
import { ArrowDown, MessageCircle, Play, Sparkles } from "lucide-react";
import { business, metrics, portfolioItems } from "../data/site";
import { scrollToHash, whatsappUrl } from "../utils/links";

export function CinematicHero() {
  const heroRef = useRef<HTMLElement>(null);
  const featured = portfolioItems.slice(1, 4);

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const target = heroRef.current;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    target.style.setProperty("--pointer-x", x.toFixed(3));
    target.style.setProperty("--pointer-y", y.toFixed(3));
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onPointerMove={onPointerMove}
      className="hero-scene relative isolate min-h-[88svh] overflow-hidden bg-[#101114] px-4 pb-14 pt-28 text-white sm:px-6 lg:px-8"
    >
      <div className="hero-bed" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />

      <div className="absolute inset-0 z-0 opacity-45" aria-hidden="true">
        <img
          src={business.assets.printerImage}
          alt=""
          className="absolute bottom-[-8%] right-[-18%] h-[72vh] max-h-[760px] min-h-[420px] w-auto object-contain opacity-45 saturate-0 sm:right-[-6%] lg:right-[4%]"
          width={900}
          height={900}
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="toolhead">
          <div className="toolhead-carriage" />
          <div className="toolhead-nozzle" />
        </div>
        <svg className="toolpath" viewBox="0 0 1000 560" preserveAspectRatio="none">
          <path d="M80 430 C 160 320, 290 500, 380 340 S 560 210, 690 300 S 820 450, 930 240" />
          <path d="M130 230 C 250 150, 310 290, 430 190 S 620 120, 790 210" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(88svh-7rem)] max-w-7xl content-center gap-10">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/7 px-3 py-2 text-sm text-white/78 backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#ffb25f]" />
            {business.headline}
          </div>

          <h1 className="font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-8xl">
            Voxel Forge
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
            {business.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl("Hola, quiero cotizar una impresión 3D. Tengo una idea/proyecto para revisar.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#ff7a2f] px-5 py-3 font-bold text-[#111114] transition hover:bg-[#ffb25f]"
            >
              <MessageCircle className="h-5 w-5" />
              Cotizar por WhatsApp
            </a>
            <button
              onClick={() => scrollToHash("#portfolio")}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/18 bg-white/8 px-5 py-3 font-bold text-white transition hover:bg-white/14"
            >
              <Play className="h-5 w-5" />
              Ver trabajos
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-white/10 bg-[#17191d]/72 p-3 backdrop-blur sm:p-4"
            >
              <div className="font-display text-xl text-[#ffb25f] sm:text-2xl">
                {metric.value}
              </div>
              <div className="mt-1 text-sm text-white/62">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 z-10 hidden w-[min(760px,72vw)] -translate-x-1/2 gap-3 lg:flex">
        {featured.map((item, index) => (
          <picture key={item.title} className={`film-frame film-frame-${index + 1}`}>
            <source srcSet={item.webp} type="image/webp" />
            <img
              src={item.src}
              alt=""
              className="h-full w-full object-cover"
              width={220}
              height={150}
              decoding="async"
            />
          </picture>
        ))}
      </div>

      <button
        onClick={() => scrollToHash("#services")}
        className="absolute bottom-5 right-5 z-20 inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/14 bg-white/8 text-white transition hover:bg-white/14"
        aria-label="Ir a servicios"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
}
