import type { DesignWebsite, Printer, ContactInfo } from "../types";

export const BRAND_COLORS = {
  primary: "#ea9216", // Naranja principal
  secondary: "#eeeeee", // Gris claro del logo
  dark: "#313841", // Gris oscuro
  accent: "#3a4750", // Gris medio
  white: "#ffffff",
  black: "#000000",
} as const;

export const DESIGN_WEBSITES: DesignWebsite[] = [
  {
    name: "MakerWorld",
    url: "https://makerworld.com/",
    description:
      "Plataforma de Bambu Lab con diseños gratuitos y de alta calidad",
    category: "free",
  },
  {
    name: "Cults3D",
    url: "https://cults3d.com/",
    description: "Comunidad de diseñadores con modelos gratuitos y premium",
    category: "mixed",
  },
  {
    name: "Maker Online",
    url: "https://www.makeronline.com/en/",
    description: "Plataforma con variedad de diseños para impresión 3D",
    category: "mixed",
  },
  {
    name: "Creality Cloud",
    url: "https://www.crealitycloud.com/",
    description: "Nube de Creality con modelos y herramientas de diseño",
    category: "free",
  },
];

export const PRINTERS: Printer[] = [
  {
    id: "bambulab-p1s",
    name: "Bambu Lab P1S",
    model: "P1S",
    specifications: {
      buildVolume: "256 × 256 × 256 mm",
      layerHeight: "0.08 - 0.35 mm",
      printSpeed: "Hasta 500 mm/s",
      filamentType: ["PLA", "PETG", "ABS", "ASA", "PC", "PA", "PET"],
    },
    features: [
      "Auto calibración automática",
      "Detección de filamento",
      "Recuperación de fallas eléctricas",
      "Conectividad WiFi",
    ],
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: "voxelforge1502@gmail.com",
  whatsapp: "+591 74697838",
  location: "Santa Cruz de la Sierra, Bolivia",
  serviceAreas: [
    "Santa Cruz de la Sierra",
    "La Paz (envío por flota)",
    "Cochabamba (envío por flota)",
    "Sucre (envío por flota)",
    "Otros departamentos (consultar disponibilidad)",
  ],
};

export const COMPANY_HISTORY = {
  foundedYear: 2022,
  story:
    "Voxel Forge comenzó como un sueño en 2022 con una impresora Ender 3 V2. Lo que inició como un hobby se convirtió en una pasión por dar vida a las ideas de nuestros clientes a través de la impresión 3D.",
  mission:
    "Transformar ideas en realidad tangible mediante tecnología de impresión 3D de alta calidad.",
  vision:
    "Ser la empresa líder en servicios de impresión 3D personalizada en Bolivia.",
};

export const NAVIGATION_ITEMS = [
  { name: "Inicio", href: "#home" },
  { name: "Servicios", href: "#services" },
  { name: "Descargar Diseños", href: "#designs" },
  { name: "Equipos", href: "#equipment" },
  { name: "Portafolio", href: "#portfolio" },
  { name: "Sobre Nosotros", href: "#about" },
  { name: "Cotizar", href: "#contact" },
];
