import {
  assets,
  business,
  capabilityHighlights,
  companyProfile,
  createWhatsAppLink,
  designResources,
  equipment,
  faq,
  materials,
  meaning,
  portfolioItems,
  serviceAreas,
  services,
  socialLinks,
} from "../data/site";
import type { LandingPageContent, PortfolioPiece } from "../domain/landing";

const toPortfolioPiece = (item: (typeof portfolioItems)[number]): PortfolioPiece => ({
  title: item.title,
  category: item.category,
  material: item.material,
  description: item.description,
  image: {
    src: item.image,
    alt: `${item.title} impreso por Voxel Forge`,
  },
});

const portfolioPieces = portfolioItems.map(toPortfolioPiece);

const materialGuides = materials.map((material) => ({
  ...material,
  image: {
    src: material.image,
    alt: `Rollo de filamento ${material.name} usado por Voxel Forge`,
  },
}));

const serviceOffers = services.map((service) => ({
  ...service,
  image: {
    src: service.image,
    alt: `${service.title} realizado por Voxel Forge`,
  },
}));

export const landingPage: LandingPageContent = {
  navigation: [
    { label: "Inicio", href: "#home" },
    { label: "Marca", href: "#meaning" },
    { label: "Taller", href: "#workshop" },
    { label: "Galería", href: "#portfolio" },
    { label: "Servicios", href: "#services" },
    { label: "Proceso", href: "#process" },
    { label: "Ideas", href: "#resources" },
    { label: "Preguntas", href: "#faq" },
    { label: "Cotizar", href: "#contact" },
  ],
  hero: {
    eyebrow: `${business.location} / desde ${business.foundedYear}`,
    title: business.name,
    signature: business.tagline,
    description:
      "Piezas reales, fabricadas con criterio. Del archivo a una pieza lista para usar, exhibir o entregar.",
    background: {
      src: assets.generated.heroWorkshop,
      alt: "Taller cinematográfico de Voxel Forge con una impresora tipo Bambu Lab P1S",
    },
    machine: {
      src: equipment.image,
      alt: "Impresora 3D cerrada usada por Voxel Forge para fabricar piezas personalizadas",
    },
    logo: {
      src: assets.logos.circular,
      alt: "Logo circular de Voxel Forge",
    },
    actions: [
      {
        label: "Cotizar una pieza",
        href: createWhatsAppLink(),
        tone: "primary",
      },
      {
        label: "Ver trabajos",
        href: "#portfolio",
        tone: "secondary",
      },
    ],
    proof: [
      { value: "STL / foto / medida", label: "punto de partida" },
      { value: "PLA a TPU", label: "material por uso" },
      { value: `${serviceAreas.length} departamentos`, label: "envíos en Bolivia" },
    ],
    snapshots: [
      {
        src: portfolioItems[6].image,
        alt: "Modelo X-Wing impreso por Voxel Forge",
      },
      {
        src: portfolioItems[1].image,
        alt: "Pieza arquitectónica impresa por Voxel Forge",
      },
    ],
  },
  workshop: {
    eyebrow: "Taller",
    title: "Primero vemos tu pieza.",
    body:
      "No necesitas saber de impresoras 3D. Mándanos una foto, medida, referencia o archivo; revisamos si conviene imprimirla, cómo hacerla y qué resultado puedes esperar.",
    machine: {
      src: assets.printer,
      alt: "Máquina cerrada utilizada por Voxel Forge para impresión 3D",
    },
    detail: {
      src: assets.printerDetails.openFrameFront,
      alt: "Impresora 3D abierta para producción en paralelo",
    },
    samples: [
      {
        src: portfolioItems[2].image,
        alt: "Pieza de colección impresa por Voxel Forge",
      },
      {
        src: portfolioItems[6].image,
        alt: "Modelo Star Wars impreso por Voxel Forge",
      },
    ],
    highlights: capabilityHighlights,
  },
  meaning: {
    title: "Del archivo a una pieza con oficio.",
    body:
      "En Voxel Forge unimos precisión digital y mano de taller: medimos, orientamos y terminamos tu pieza para que no sea solo imprimible, sino útil, exhibible o lista para entregar.",
    logo: {
      src: assets.logos.circular,
      alt: "Logo circular oficial de Voxel Forge",
    },
    history: companyProfile.history,
    mission: companyProfile.mission,
    vision: companyProfile.vision,
    terms: meaning,
  },
  process: {
    title: "Del archivo a tus manos.",
    body:
      "Un flujo claro para cotizar, preparar y entregar sin vueltas. Cada proyecto se revisa por uso real, material, tamaño y acabado.",
    steps: [
      {
        phase: "01",
        title: "Archivo",
        lead: "STL, foto, medida o idea.",
        text: "Nos envías el punto de partida y revisamos escala, geometría, tolerancias y objetivo de la pieza.",
        icon: {
          src: assets.processIcons.file,
          alt: "Icono de archivo STL",
        },
      },
      {
        phase: "02",
        title: "Material",
        lead: "Elegimos filamento según el uso.",
        text: "Definimos PLA, PETG, ABS, ASA o TPU/Flex con orientación, relleno y acabado adecuados.",
        icon: {
          src: assets.processIcons.material,
          alt: "Icono de filamento",
        },
      },
      {
        phase: "03",
        title: "Impresión",
        lead: "Fabricación con monitoreo real.",
        text: "Preparamos parámetros, soportes y máquina para lograr una pieza estable, limpia y funcional.",
        icon: {
          src: assets.processIcons.print,
          alt: "Icono de impresora 3D",
        },
      },
      {
        phase: "04",
        title: "Entrega",
        lead: "Revisión final y coordinación.",
        text: "Limpiamos, verificamos y coordinamos recojo o envío a Santa Cruz y toda Bolivia.",
        icon: {
          src: assets.processIcons.delivery,
          alt: "Icono de entrega",
        },
      },
    ],
  },
  portfolio: {
    title: "Piezas con escala, detalle y contexto.",
    body:
      "Mira trabajos reales con escala, material y contexto para que entiendas rápido qué tipo de resultado podemos fabricar para ti.",
    featured: portfolioPieces[6],
    pieces: portfolioPieces,
  },
  services: {
    title: "La pieza define el camino.",
    body:
      "No necesitas saber de impresión 3D para pedir una pieza. Nos mandas una referencia y nosotros la traducimos a material, escala y acabado.",
    materialsImage: {
      src: assets.filaments.pla,
      alt: "Carretes de filamento PLA, PETG, ABS y materiales técnicos en el taller Voxel Forge",
    },
    offers: serviceOffers,
    materials: materialGuides,
  },
  contact: {
    title: "¿Tienes un proyecto? Hablemos por WhatsApp.",
    body:
      "Cotización rápida, asesoría real y resultados que se sienten. Envíanos el archivo, una foto, medidas o una referencia.",
    background: {
      src: assets.generated.contactWorkshop,
      alt: "Mesa de taller con impresora 3D tipo Anycubic Kobra X y pieza impresa naranja",
    },
    whatsapp: {
      label: "Cotizar por WhatsApp",
      href: createWhatsAppLink(),
      tone: "primary",
    },
    email: {
      label: business.email,
      href: `mailto:${business.email}`,
      tone: "secondary",
    },
    phone: {
      label: business.whatsappDisplay,
      href: `tel:+${business.whatsappNumber}`,
      tone: "secondary",
    },
    facts: [
      { value: business.location, label: "ubicación" },
      { value: business.hours.join(" / "), label: "horarios" },
      { value: "Santa Cruz y Bolivia", label: "cobertura" },
    ],
    social: socialLinks.map((item) => ({
      label: item.label,
      href: item.url,
      description: item.description,
      meta: item.type,
      icon: item.icon,
    })),
    resources: designResources.map((item) => ({
      label: item.name,
      href: item.url,
      description: item.description,
      meta: item.category,
      icon: item.icon,
    })),
    faq: faq.slice(0, 4).map((item) => ({
      title: item.question,
      text: item.answer,
    })),
  },
};
