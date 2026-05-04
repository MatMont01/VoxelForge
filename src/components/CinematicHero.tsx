import { useState, type CSSProperties } from "react";
import {
  ArrowDown,
  Boxes,
  Clapperboard,
  Gauge,
  MessageCircle,
  MousePointer2,
  Sparkles,
} from "lucide-react";
import { business, metrics } from "../data/site";
import { scrollToHash, whatsappUrl } from "../utils/links";
import type { ForgeMode } from "./ForgeScene";

const modes: Array<{
  id: ForgeMode;
  label: string;
  title: string;
  copy: string;
}> = [
  {
    id: "prototype",
    label: "Prototipo",
    title: "validar una idea",
    copy: "Piezas funcionales, tolerancias y pruebas rápidas antes de producir.",
  },
  {
    id: "collectible",
    label: "Colección",
    title: "dar presencia",
    copy: "Figuras, props y objetos con detalle para vitrina, regalo o marca.",
  },
  {
    id: "event",
    label: "Evento",
    title: "montar una experiencia",
    copy: "Stands, souvenirs y series temáticas listas para activaciones.",
  },
];

export function CinematicHero() {
  const [mode, setMode] = useState<ForgeMode>("collectible");
  const activeMode = modes.find((item) => item.id === mode) ?? modes[1];

  return (
    <section
      id="home"
      data-stage
      className="cinematic-hero chapter-section relative isolate overflow-hidden text-white"
    >
      <div className="relative z-10 mx-auto grid min-h-[112svh] max-w-7xl content-center px-4 pb-28 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="hero-kicker">
            <Sparkles className="h-4 w-4 text-[#ffb25f]" />
            {business.headline}
          </div>

          <h1 className="hero-title">
            Voxel Forge
            <span>{business.tagline}</span>
          </h1>

          <p className="hero-copy">
            Un taller de impresión 3D donde tu archivo, boceto o referencia pasa
            por una forja digital: capas, material, precisión y acabado hasta
            convertirse en una pieza real.
          </p>

          <div className="hero-actions">
            <a
              href={whatsappUrl(
                `Hola Voxel Forge, quiero cotizar una impresión 3D para ${activeMode.title}.`
              )}
              target="_blank"
              rel="noreferrer"
              className="hero-primary"
            >
              <MessageCircle className="h-5 w-5" />
              Cotizar por WhatsApp
            </a>
            <button
              type="button"
              onClick={() => scrollToHash("#story")}
              className="hero-secondary"
            >
              <Clapperboard className="h-5 w-5" />
              Ver experiencia
            </button>
          </div>
        </div>

        <div className="hero-console" aria-label="Modo de proyecto">
          <div className="console-header">
            <span>
              <MousePointer2 className="h-4 w-4" />
              Cámara de forja activa
            </span>
            <span>filamento incandescente</span>
          </div>

          <div className="mode-switch" role="tablist" aria-label="Elegir tipo de proyecto">
            {modes.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={mode === item.id}
                className={mode === item.id ? "is-active" : ""}
                onClick={() => setMode(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mode-readout">
            <Boxes className="h-5 w-5" />
            <p>
              <strong>Preparado para {activeMode.title}.</strong>
              <span>{activeMode.copy}</span>
            </p>
          </div>
        </div>

        <div className="hero-metrics" aria-label="Métricas de Voxel Forge">
          {metrics.map((metric, index) => (
            <div key={metric.label} style={{ "--delay": `${index * 90}ms` } as CSSProperties}>
              <Gauge className="h-4 w-4" />
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToHash("#story")}
        className="scroll-cue"
        aria-label="Bajar a la historia"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
}
