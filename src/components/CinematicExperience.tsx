import { lazy, Suspense, useMemo, useRef } from "react";
import type { CSSProperties } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Box,
  ExternalLink,
  Flame,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Printer,
  ShieldCheck,
} from "lucide-react";
import {
  assets,
  business,
  capabilityHighlights,
  companyProfile,
  createWhatsAppLink,
  designResources,
  equipment,
  faq,
  forgeStory,
  machineFleet,
  materials,
  meaning,
  portfolioItems,
  services,
  socialLinks,
} from "../data/site";

const ForgeScene = lazy(() =>
  import("./ForgeScene").then((module) => ({ default: module.ForgeScene })),
);

const continuumMarks = [
  { left: "8%", delay: "0s", scale: 0.82 },
  { left: "18%", delay: "-1.4s", scale: 1.1 },
  { left: "34%", delay: "-2.2s", scale: 0.92 },
  { left: "52%", delay: "-0.8s", scale: 1.22 },
  { left: "67%", delay: "-1.9s", scale: 0.86 },
  { left: "81%", delay: "-2.8s", scale: 1.04 },
] as const;

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

function ForgeContinuum() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-6%", "8%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-2, 2]);

  return (
    <motion.div className="forge-continuum" style={{ y, rotate }} aria-hidden="true">
      <div className="forge-continuum__rail" />
      <div className="forge-continuum__path" />
      {continuumMarks.map((mark, index) => (
        <span
          key={mark.left}
          className="forge-continuum__bead"
          style={
            {
              "--left": mark.left,
              "--delay": mark.delay,
              "--scale": mark.scale,
              "--i": index,
            } as CSSProperties
          }
        />
      ))}
    </motion.div>
  );
}

function HeroChapter() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const printerY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 260]);
  const printerScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.12]);
  const labRotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-1.5, 2.5]);
  const titleY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -140]);
  const shadeOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.05, 0.58, 0.92]);
  const heroCapabilityNotes = [
    {
      label: "Entrada",
      title: "STL, foto o medida",
    },
    {
      label: "Material",
      title: "PLA / PETG / ABS / ASA",
    },
    {
      label: "Entrega",
      title: "Santa Cruz y Bolivia",
    },
  ] as const;

  return (
    <section className="cinema hero-chapter" id="home" ref={ref} aria-labelledby="hero-title">
      <div className="cinema__sticky hero-stage">
        <div className="hero-webgl hero-webgl--forge">
          <Suspense fallback={<div className="hero-webgl--fallback" />}>
            <ForgeScene />
          </Suspense>
        </div>
        <motion.div className="hero-lab" style={{ y: printerY, scale: printerScale, rotate: labRotate }} aria-hidden="true">
          <div className="hero-lab__plate" />
          <img className="hero-kobra hero-kobra--left" src={assets.printerDetails.openFrameFront} alt="" />
          <img className="hero-kobra hero-kobra--right" src={assets.printerDetails.openFrameFront} alt="" />
          <img className="hero-printer" src={assets.printer} alt="" />
        </motion.div>
        <motion.div className="hero-shade" style={{ opacity: shadeOpacity }} />
        <motion.div className="container hero-content" style={{ y: titleY }}>
          <p className="kicker">Santa Cruz de la Sierra / Impresión 3D</p>
          <h1 id="hero-title">Voxel Forge</h1>
          <p className="hero-statement">{business.tagline}</p>
          <p className="hero-text">{business.description}</p>
          <div className="hero-actions" aria-label="Acciones principales">
            <a className="vf-button vf-button--primary" href={createWhatsAppLink()}>
              <MessageCircle aria-hidden="true" size={19} />
              Cotizar una pieza
            </a>
            <a className="vf-button vf-button--glass" href="#portfolio">
              Ver galería
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
          <div className="hero-capability-rail" aria-label="Datos útiles para cotizar">
            {heroCapabilityNotes.map((item) => (
              <span key={item.label}>
                <small>{item.label}</small>
                <strong>{item.title}</strong>
              </span>
            ))}
          </div>
        </motion.div>
        <a className="scroll-indicator" href="#meaning" aria-label="Bajar al significado de la marca">
          <span />
          Scroll
        </a>
      </div>
    </section>
  );
}

function MeaningChapter() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const titleX = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-10%", "12%"]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [1, 1, 1] : [0.82, 1.16, 0.94]);

  return (
    <section className="cinema meaning-chapter" id="meaning" ref={ref} aria-labelledby="meaning-title">
      <div className="cinema__sticky meaning-stage">
        <motion.p className="oversized-word" style={{ x: titleX }}>
          VOXEL / FORGE
        </motion.p>
        <div className="container meaning-layout">
          <motion.img
            className="meaning-logo"
            src={assets.logos.circular}
            alt="Logo circular de Voxel Forge"
            style={{ scale: logoScale }}
          />
          <div className="chapter-copy">
            <p className="kicker">La marca</p>
            <h2 id="meaning-title">Digital como un voxel. Físico como una forja.</h2>
            <p>{companyProfile.history}</p>
          </div>
          <div className="meaning-duo">
            {meaning.map((item, index) => (
              <article className="meaning-panel" key={item.term}>
                {index === 0 ? <Box aria-hidden="true" /> : <Flame aria-hidden="true" />}
                <span>{item.term}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <strong>{item.signature}</strong>
              </article>
            ))}
          </div>
          <div className="brand-proof" aria-label="Misión y visión de Voxel Forge">
            <span>
              <strong>Misión</strong>
              {companyProfile.mission}
            </span>
            <span>
              <strong>Visión</strong>
              {companyProfile.vision}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessChapter() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const printHeadX = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-38%", "44%"]);
  const filamentScale = useTransform(scrollYProgress, [0, 1], [0.05, 1]);
  const plateY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [120, -70]);

  return (
    <section className="cinema process-chapter" id="process" ref={ref} aria-labelledby="process-title">
      <div className="cinema__sticky process-stage">
        <div className="process-machine" aria-hidden="true">
          <motion.div className="machine-head" style={{ x: printHeadX }}>
            <span />
          </motion.div>
          <motion.div className="filament-line" style={{ scaleX: filamentScale }} />
          <motion.div className="build-plate" style={{ y: plateY }}>
            <div className="printed-volume" />
          </motion.div>
        </div>
        <div className="container process-layout">
          <div className="chapter-copy">
            <p className="kicker">Proceso</p>
            <h2 id="process-title">Cada capa entra en escena.</h2>
            <p>
              El proceso avanza como una secuencia de fabricación: archivo,
              laminado, boquilla y entrega. Así se decide si una pieza debe verse
              bien, encajar con otra o resistir uso real.
            </p>
          </div>
          <div className="process-steps">
            {forgeStory.map((step) => (
              <article className="process-card" key={step.phase}>
                <span>{step.phase}</span>
                <h3>{step.title}</h3>
                <strong>{step.lead}</strong>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioChapter() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const galleryY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["10%", "-16%"]);
  const galleryRotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-4, 4]);
  const gallerySpin = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0deg", "0deg"] : ["-7deg", "8deg"]);
  const titleY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [70, -80]);
  const bg = useTransform(scrollYProgress, [0, 0.45, 1], ["#111418", "#f4f1ea", "#111418"]);
  const featured = portfolioItems.slice(0, 6);

  return (
    <motion.section
      className="cinema portfolio-chapter"
      id="portfolio"
      ref={ref}
      style={{ backgroundColor: bg }}
      aria-labelledby="portfolio-title"
    >
      <div className="cinema__sticky portfolio-stage">
        <div className="portfolio-flare" aria-hidden="true" />
        <div className="container portfolio-immersive">
          <motion.div className="portfolio-title" style={{ y: titleY }}>
            <p className="kicker">Galería real</p>
            <h2 id="portfolio-title">Piezas que ya salieron de la forja.</h2>
            <p>
              Cada pieza entra como archivo, pero sale con escala, textura,
              material y propósito. El portafolio se lee como una mesa de taller,
              no como una vitrina plana.
            </p>
          </motion.div>
          <motion.div
            className="portfolio-stack"
            style={
              {
                y: galleryY,
                rotate: galleryRotate,
                "--scroll-spin": gallerySpin,
              } as unknown as CSSProperties
            }
          >
            {featured.map((item, index) => (
              <article
                className={`portfolio-scene portfolio-scene--${index + 1}`}
                key={item.title}
                style={{ "--i": index, "--accent": item.accent } as CSSProperties}
              >
                <img src={item.image} alt={`${item.title} impreso por Voxel Forge`} loading="lazy" />
                <div>
                  <span>{String(index + 1).padStart(2, "0")} / {item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <small>{item.material}</small>
                </div>
              </article>
            ))}
          </motion.div>
          <div className="portfolio-data-strip" aria-label="Tipos de proyectos del portafolio">
            {portfolioItems.slice(2).map((item) => (
              <span key={item.title}>
                <strong>{item.category}</strong>
                {item.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function EquipmentChapter() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const printerRotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-8, 8]);
  const printerY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [80, -120]);
  const panelY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [34, -46]);

  const machinePanels = [
    {
      title: "Apoyos abiertos",
      label: "Producción paralela",
      image: assets.printerDetails.openFrameFront,
      text: "Útiles para variantes, piezas medianas y pedidos repetibles.",
    },
    {
      title: "Filamentos listos",
      label: "Color y material",
      image: assets.printerDetails.filament,
      text: "El material define acabado, resistencia y comportamiento de la pieza.",
    },
    {
      title: "Flujo conectado",
      label: "Monitoreo",
      image: assets.printerDetails.remote,
      text: "Control de cola, revisión de progreso y ajustes antes de producir.",
    },
  ] as const;

  return (
    <section className="cinema equipment-chapter" id="equipment" ref={ref} aria-labelledby="equipment-title">
      <div className="cinema__sticky equipment-stage">
        <div className="container equipment-grid">
          <motion.div className="printer-portrait printer-portrait--fleet" style={{ rotate: printerRotate, y: printerY }}>
            <div className="fleet-orbit" aria-hidden="true">
              <span className="machine-axis" />
              <span className="machine-route machine-route--one" />
              <span className="machine-route machine-route--two" />
            </div>
            <img className="main-machine" src={equipment.image} alt="Máquina cerrada del taller de impresión 3D" />
            {machinePanels.map((panel, index) => (
              <motion.figure
                className={`machine-photo machine-photo--${index + 1}`}
                key={panel.title}
                style={{ y: panelY }}
              >
                <img src={panel.image} alt={panel.title} loading="lazy" />
                <figcaption>
                  <small>{panel.label}</small>
                  <strong>{panel.title}</strong>
                  <span>{panel.text}</span>
                </figcaption>
              </motion.figure>
            ))}
            <div className="machine-hud" aria-hidden="true">
              <span>equipos coordinados</span>
              <span>colas en paralelo</span>
              <span>material por uso</span>
            </div>
          </motion.div>
          <div className="chapter-copy">
            <p className="kicker">Taller multimaquina</p>
            <h2 id="equipment-title">
              <Printer aria-hidden="true" />
              Máquinas para piezas reales.
            </h2>
            <p>
              La impresora no es el producto: es la herramienta. Contamos con
              múltiples máquinas para repartir carga, probar variantes y producir
              piezas con materiales adecuados para decoración, prototipos, eventos
              o uso funcional.
            </p>
            <div className="fleet-run">
              {machineFleet.map((machine) => (
                <article key={machine.name}>
                  <small>{machine.count}</small>
                  <h3>{machine.name}</h3>
                  <strong>{machine.role}</strong>
                  <p>{machine.text}</p>
                </article>
              ))}
            </div>
            <div className="capability-list">
              {capabilityHighlights.map((item) => (
                <span key={item.title}>
                  <ShieldCheck aria-hidden="true" />
                  <strong>{item.title}</strong>
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesMaterialsChapter() {
  const items = useMemo(
    () => [
      ...services.map((item) => ({ kind: "Servicio", title: item.title, text: item.summary })),
      ...materials.map((item) => ({ kind: "Material", title: item.name, text: item.bestFor })),
    ],
    [],
  );

  return (
    <section className="chapter services-chapter" id="services" aria-labelledby="services-title">
      <div className="service-atmosphere" aria-hidden="true">
        <img src={assets.printerDetails.network} alt="" loading="lazy" />
        <span className="service-atmosphere__line service-atmosphere__line--one" />
        <span className="service-atmosphere__line service-atmosphere__line--two" />
      </div>
      <div className="container">
        <div className="chapter-copy chapter-copy--wide">
          <p className="kicker">Servicios y materiales</p>
          <h2 id="services-title">Un mapa técnico para decidir rápido.</h2>
        </div>
        <div className="service-grid">
          {items.map((item) => (
            <article className="service-tile" key={`${item.kind}-${item.title}`}>
              <ShieldCheck aria-hidden="true" />
              <span>{item.kind}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="material-belt" aria-label="Materiales principales">
          {materials.map((item) => (
            <span key={item.name}>
              <strong>{item.name}</strong>
              {item.tone}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialResourcesChapter() {
  return (
    <section className="chapter social-chapter" id="social" aria-labelledby="social-title">
      <div className="container social-layout">
        <div className="chapter-copy">
          <p className="kicker">Redes y modelos</p>
          <h2 id="social-title">Mira trabajos reales. Elige una idea. La revisamos.</h2>
          <p>
            Puedes venir con un archivo STL, una foto, un enlace o solo una idea.
            Si todavía no tienes modelo, estas bibliotecas sirven para encontrar
            referencias antes de cotizar.
          </p>
        </div>
        <div className="social-panel">
          <div className="social-grid" aria-label="Redes sociales de Voxel Forge">
            {socialLinks.map((item) => (
              <a key={item.label} className="social-card" href={item.url} target="_blank" rel="noreferrer">
                <span className="social-card__icon">
                  {item.icon ? <img src={item.icon} alt="" /> : <ExternalLink aria-hidden="true" size={20} />}
                </span>
                <span>
                  <small>{item.type}</small>
                  <strong>{item.label}</strong>
                  <em>{item.description}</em>
                </span>
              </a>
            ))}
          </div>
          <div className="resource-strip" aria-label="Sitios recomendados para descargar modelos 3D">
            {designResources.map((resource) => (
              <a key={resource.name} href={resource.url} target="_blank" rel="noreferrer">
                <small>{resource.category}</small>
                <strong>{resource.name}</strong>
                <span>{resource.description}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactFinale() {
  return (
    <section className="finale" id="contact" aria-labelledby="contact-title">
      <div className="finale-collage" aria-hidden="true">
        {portfolioItems.slice(0, 5).map((item, index) => (
          <img key={item.title} src={item.image} alt="" style={{ "--i": index } as CSSProperties} />
        ))}
      </div>
      <div className="container finale-content">
        <div className="finale-copy">
          <img className="finale-logo" src={assets.logos.circular} alt="Voxel Forge" />
          <p className="kicker">Cotización directa</p>
          <h2 id="contact-title">Manda archivo, foto, medida o idea.</h2>
          <p>
            Revisamos geometría, material, tiempo y acabado por WhatsApp. También
            hacemos envíos a Santa Cruz, La Paz, Cochabamba, Chuquisaca, Oruro,
            Potosí, Tarija, Beni y Pando.
          </p>
          <div className="finale-actions">
            <a className="vf-button vf-button--primary" href={createWhatsAppLink()}>
              <MessageCircle aria-hidden="true" size={19} />
              {business.whatsappDisplay}
            </a>
            <a className="vf-button vf-button--glass" href={`mailto:${business.email}`}>
              <Mail aria-hidden="true" size={19} />
              {business.email}
            </a>
          </div>
          <div className="finale-facts">
            <span>
              <MapPin aria-hidden="true" />
              {business.location}
            </span>
            <span>
              <PackageCheck aria-hidden="true" />
              {business.hours.join(" / ")}
            </span>
          </div>
        </div>
        <div className="finale-terminal" aria-label="Flujo de cotización">
          <div className="finale-terminal__media">
            <img src={assets.inspiration.guardianSword} alt="" />
            <span>prop impreso</span>
            <a
              href="https://learn.adafruit.com/breath-of-the-wild-guardian-sword-led-3d-printed/overview"
              target="_blank"
              rel="noreferrer"
            >
              Referencia: Adafruit
            </a>
          </div>
          <div className="finale-piece-stack" aria-label="Fotos de piezas y stands de Voxel Forge">
            {portfolioItems.slice(3, 8).map((item, index) => (
              <img
                key={item.title}
                src={item.image}
                alt={`${item.title} de Voxel Forge`}
                loading="lazy"
                style={{ "--i": index } as CSSProperties}
              />
            ))}
          </div>
          <div className="finale-terminal__screen">
            <span>Entrada</span>
            <strong>STL / foto / medida / enlace</strong>
            <small>Se revisa escala, orientación, soporte y material antes de producir.</small>
          </div>
          <div className="finale-workflow" aria-hidden="true">
            <span>archivo</span>
            <span>material</span>
            <span>tiempo</span>
            <span>entrega</span>
          </div>
        </div>
        <div className="faq-strip">
          {faq.slice(0, 3).map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CinematicExperience() {
  return (
    <>
      <ForgeContinuum />
      <ScrollProgress />
      <HeroChapter />
      <MeaningChapter />
      <ProcessChapter />
      <PortfolioChapter />
      <EquipmentChapter />
      <ServicesMaterialsChapter />
      <SocialResourcesChapter />
      <ContactFinale />
      <a className="jump-next" href="#meaning" aria-label="Bajar al siguiente capítulo">
        <ArrowDown aria-hidden="true" />
      </a>
    </>
  );
}
