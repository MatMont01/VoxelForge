import { useMemo, useState } from "react";
import { ArrowRight, Filter } from "lucide-react";
import { portfolioItems } from "../data/site";
import { scrollToHash } from "../utils/links";

export function Portfolio() {
  const categories = useMemo(
    () => ["Todo", ...Array.from(new Set(portfolioItems.map((item) => item.category)))],
    []
  );
  const [active, setActive] = useState<(typeof categories)[number]>("Todo");
  const visibleItems =
    active === "Todo"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <section id="portfolio" className="section-band bg-[#e9eef0] text-[#151515]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#215d70]">Portafolio</p>
            <h2 className="section-title text-[#151515]">
              Piezas reales, eventos reales, acabados visibles.
            </h2>
            <p className="section-copy text-[#4e585c]">
              Una selección de trabajos impresos por Voxel Forge. El grid está
              listo para crecer con nuevas categorías y casos de estudio.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar portafolio">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-bold transition ${
                  active === category
                    ? "border-[#215d70] bg-[#215d70] text-white"
                    : "border-[#151515]/14 bg-white/50 text-[#151515] hover:bg-white"
                }`}
                type="button"
                role="tab"
                aria-selected={active === category}
              >
                <Filter className="h-3.5 w-3.5" />
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleItems.map((item, index) => (
            <article
              key={item.title}
              className={`portfolio-card ${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              <picture>
                <source srcSet={item.webp} type="image/webp" />
                <img
                  src={item.src}
                  alt={`${item.title} impreso por Voxel Forge`}
                  className="h-full w-full object-cover"
                  width={index === 0 ? 840 : 420}
                  height={index === 0 ? 620 : 340}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
              </picture>
              <div className="portfolio-caption">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold leading-tight">{item.title}</h3>
                  <span className="rounded-md bg-white/16 px-2 py-1 text-xs">
                    {item.category}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/78">{item.description}</p>
                <p className="mt-2 text-xs uppercase text-[#ffb25f]">
                  {item.material}
                </p>
              </div>
            </article>
          ))}
        </div>

        <button
          onClick={() => scrollToHash("#contact")}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#151515] px-4 py-3 font-bold text-white transition hover:bg-[#215d70]"
        >
          Quiero algo parecido
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
