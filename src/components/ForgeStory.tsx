import { Flame, Layers3, Ruler, Sparkles } from "lucide-react";
import { forgeStory, portfolioItems } from "../data/site";
import { scrollToHash } from "../utils/links";

const icons = [Sparkles, Ruler, Flame, Layers3] as const;
const featured = [portfolioItems[2], portfolioItems[1], portfolioItems[0]];

export function ForgeStory() {
  return (
    <section id="story" data-stage className="forge-story chapter-section section-band text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="story-sticky">
          <p className="eyebrow text-[#ffb25f]">La forja de impresión 3D</p>
          <h2 className="section-title">
            No imprimimos plástico. Forjamos ideas en capas.
          </h2>
          <p className="section-copy text-white/68">
            Una chispa digital entra al taller, atraviesa calor, precisión y
            movimiento, y sale como una pieza física lista para usarse,
            regalarse o exhibirse.
          </p>

          <div className="story-reel" aria-hidden="true">
            {featured.map((item, index) => (
              <picture key={item.title} className={`story-frame story-frame-${index + 1}`}>
                <source srcSet={item.webp} type="image/webp" />
                <img
                  src={item.src}
                  alt=""
                  width={320}
                  height={220}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToHash("#portfolio")}
            className="story-cta"
          >
            Ver piezas forjadas
          </button>
        </div>

        <div className="forge-steps">
          {forgeStory.map((step, index) => {
            const Icon = icons[index];
            return (
              <article key={step.phase} className="forge-step">
                <div className="forge-step-index">{step.phase}</div>
                <div className="forge-step-icon">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p className="forge-step-lead">{step.lead}</p>
                  <p className="forge-step-copy">{step.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
