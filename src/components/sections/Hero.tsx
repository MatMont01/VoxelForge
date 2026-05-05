import { ArrowRight, MapPin, MessageCircle, PackageCheck } from "lucide-react";
import { lazy, Suspense } from "react";
import { Reveal } from "../Reveal";
import { business, createWhatsAppLink, metrics } from "../../data/site";

const ForgeScene = lazy(() =>
  import("../ForgeScene").then((module) => ({ default: module.ForgeScene })),
);

export function Hero() {
  return (
    <>
      <section className="hero-section" id="home" aria-labelledby="hero-title">
        <Suspense fallback={<div className="forge-scene forge-scene--fallback" aria-hidden="true" />}>
          <ForgeScene />
        </Suspense>
        <div className="hero-section__veil" />
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">Impresión 3D en Santa Cruz de la Sierra</p>
            <h1 id="hero-title">Voxel Forge</h1>
            <p className="hero-tagline">{business.tagline}</p>
            <p className="hero-lead">{business.description}</p>
            <div className="hero-actions" aria-label="Acciones principales">
              <a className="button button--primary" href={createWhatsAppLink()}>
                <MessageCircle aria-hidden="true" size={19} />
                Cotizar ahora
              </a>
              <a className="button button--ghost" href="#portfolio">
                Ver trabajos
                <ArrowRight aria-hidden="true" size={18} />
              </a>
            </div>
            <div className="hero-facts" aria-label="Datos de atención">
              <span>
                <MapPin aria-hidden="true" size={17} />
                {business.location}
              </span>
              <span>
                <PackageCheck aria-hidden="true" size={17} />
                Envíos a toda Bolivia
              </span>
            </div>
          </Reveal>

          <Reveal className="hero-metrics" delay={0.15}>
            <p className="panel-label">Taller activo desde {business.foundedYear}</p>
            <div className="metric-grid">
              {metrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <a className="scroll-cue" href="#meaning" aria-label="Bajar a la siguiente sección">
          <span />
        </a>
      </section>
      <section className="mobile-metrics-section" aria-label="Resumen de Voxel Forge">
        <div className="container">
          <p className="panel-label">Taller activo desde {business.foundedYear}</p>
          <div className="metric-grid">
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
