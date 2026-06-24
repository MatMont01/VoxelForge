import logoCircular from "../assets/logos/voxel-forge-logo-circular-optimized.webp";
import logoSolo from "../assets/logos/voxel-forge-logo-solo.svg";
import generatedContactWorkshop from "../assets/generated/contact-kobra-logo.webp";
import generatedHeroWorkshop from "../assets/generated/hero-workshop-p1s-logo.webp";
import facebookLogo from "../assets/social/facebook.svg";
import instagramLogo from "../assets/social/instagram.png";
import filamentAbsAsa from "../assets/generated/filament-abs-asa.webp";
import filamentPetg from "../assets/generated/filament-petg.webp";
import filamentPla from "../assets/generated/filament-pla.webp";
import filamentTpuFlex from "../assets/generated/filament-tpu-flex.webp";
import imgLampara from "../assets/generated/portfolio-lamp.webp";
import imgMaqueta from "../assets/generated/portfolio-maqueta.webp";
import imgSlifer from "../assets/generated/portfolio-slifer.webp";
import imgStandComic from "../assets/generated/portfolio-stand-comiccon.webp";
import imgStandStar from "../assets/generated/portfolio-stand-starcon.webp";
import imgKitAtst from "../assets/generated/portfolio-atst.webp";
import imgXwing from "../assets/generated/portfolio-xwing.webp";
import imgGuardianSword from "../assets/portfolio/guardian-sword-3d-print.jpg";
import processDeliveryIcon from "../assets/generated/process-delivery.webp";
import processFileIcon from "../assets/generated/process-file.webp";
import processMaterialIcon from "../assets/generated/process-material.webp";
import processPrintIcon from "../assets/generated/process-print.webp";
import filamentSpoolDetail from "../assets/printers/filament-spool-detail-optimized.webp";
import networkPrintingDetail from "../assets/printers/network-printing-detail.jpg";
import anycubicKobraFront from "../assets/printers/anycubic-kobra-x-front-optimized.webp";
import printerImage from "../assets/printers/closed-machine-optimized.webp";
import remotePrintingDetail from "../assets/printers/remote-printing-detail.jpg";
import crealityCloudLogo from "../assets/resources/crealitycloud.png";
import cults3dLogo from "../assets/resources/cults3d.png";
import makerOnlineLogo from "../assets/resources/makeronline.png";
import makerWorldLogo from "../assets/resources/makerworld.png";
import tiktokLogo from "../assets/social/tiktok.png";
import twitchLogo from "../assets/social/twitch.svg";
import whatsappLogo from "../assets/social/whatsapp.svg";

export const assets = {
  logos: {
    solo: logoSolo,
    circular: logoCircular,
  },
  socialIcons: {
    instagram: instagramLogo,
    tiktok: tiktokLogo,
    facebook: facebookLogo,
    twitch: twitchLogo,
    whatsapp: whatsappLogo,
  },
  printer: printerImage,
  printerDetails: {
    openFrameFront: anycubicKobraFront,
    filament: filamentSpoolDetail,
    remote: remotePrintingDetail,
    network: networkPrintingDetail,
  },
  inspiration: {
    guardianSword: imgGuardianSword,
  },
  generated: {
    heroWorkshop: generatedHeroWorkshop,
    contactWorkshop: generatedContactWorkshop,
  },
  processIcons: {
    file: processFileIcon,
    material: processMaterialIcon,
    print: processPrintIcon,
    delivery: processDeliveryIcon,
  },
  filaments: {
    pla: filamentPla,
    petg: filamentPetg,
    absAsa: filamentAbsAsa,
    tpuFlex: filamentTpuFlex,
  },
} as const;

export const business = {
  name: "Voxel Forge",
  tagline: "Forjamos tu mundo",
  headline: "Impresión 3D profesional en Santa Cruz de la Sierra",
  description:
    "Prototipos, piezas funcionales, figuras, maquetas y producción para eventos con múltiples máquinas, acabados cuidados y envíos a toda Bolivia.",
  siteUrl: "https://voxelforge.org/",
  email: "voxelforge1502@gmail.com",
  whatsappNumber: "59174697838",
  whatsappDisplay: "+591 746 97838",
  location: "Santa Cruz de la Sierra, Bolivia",
  foundedYear: 2022,
  priceRange: "$$",
  hours: ["Lun-Jue 18:00-22:00", "Viernes 18:00-00:00", "Sáb-Dom 08:00-17:00"],
  social: {
    instagram: "https://www.instagram.com/voxelforge_scz/",
    tiktok: "https://www.tiktok.com/@voxelforge_scz",
    facebook: "https://www.facebook.com/VoxelForgeSCZ",
    twitch: "https://www.twitch.tv/eronii_sama",
  },
} as const;

export const serviceAreas = [
  "Santa Cruz",
  "La Paz",
  "Cochabamba",
  "Chuquisaca",
  "Oruro",
  "Potosí",
  "Tarija",
  "Beni",
  "Pando",
] as const;

export const navigation = [
  { label: "Inicio", href: "#home" },
  { label: "Marca", href: "#meaning" },
  { label: "Proceso", href: "#process" },
  { label: "Galería", href: "#portfolio" },
  { label: "Taller", href: "#equipment" },
  { label: "Servicios", href: "#services" },
  { label: "Redes", href: "#social" },
  { label: "Cotizar", href: "#contact" },
] as const;

export const metrics = [
  { value: "2000+", label: "proyectos impresos" },
  { value: "12000h+", label: "horas de impresión" },
  { value: "9", label: "departamentos con envío" },
  { value: "flujo", label: "equipos coordinados" },
] as const;

export const companyProfile = {
  history:
    "Voxel Forge comenzó en 2022 con una Ender 3 V2. Lo que empezó como un hobby se convirtió en un taller dedicado a convertir ideas, referencias y archivos en piezas físicas para clientes, eventos y proyectos personales.",
  mission:
    "Transformar ideas en objetos tangibles mediante impresión 3D de alta calidad, asesoría técnica y materiales elegidos según el uso real de cada pieza.",
  vision:
    "Ser un referente de impresión 3D personalizada en Bolivia, reconocido por piezas bien resueltas, comunicación clara y entregas confiables.",
} as const;

export const meaning = [
  {
    term: "Voxel",
    title: "El pixel del volumen",
    text: "Un voxel es la unidad mínima de un objeto tridimensional. Representa la precisión digital que define forma, escala y detalle antes de imprimir.",
    signature: "Datos, geometría y control.",
  },
  {
    term: "Forge",
    title: "La forja que transforma",
    text: "Forge habla del oficio: calor, material y criterio técnico para convertir un archivo o idea en una pieza física lista para usarse.",
    signature: "Filamento, capas y acabado.",
  },
] as const;

export const services = [
  {
    title: "Impresión 3D a pedido",
    summary:
      "STL, enlace, foto, medida o idea inicial convertida en una pieza real.",
    bullets: [
      "Material elegido según uso",
      "Piezas decorativas o funcionales",
      "Asesoría antes de imprimir",
    ],
    image: imgXwing,
    tone: "Molten",
  },
  {
    title: "Modelado y medidas",
    summary:
      "Partimos de fotos o dimensiones cuando todavía no existe el modelo.",
    bullets: [
      "Referencia clara antes de fabricar",
      "Ajustes por tolerancia y ensamble",
      "Entrega de archivo cuando aplica",
    ],
    image: imgMaqueta,
    tone: "Blueprint",
  },
  {
    title: "Props y colección",
    summary:
      "Figuras, cosplay y piezas para exhibir sin explicación técnica.",
    bullets: [
      "Detalle visual",
      "Piezas decorativas",
      "Acabado de exhibición",
    ],
    image: imgSlifer,
    tone: "Pulse",
  },
  {
    title: "Eventos y series",
    summary:
      "Stands, premios, regalos y lotes pequeños listos para entregar.",
    bullets: [
      "Comic Con, Gamer Con y Star Con",
      "Series pequeñas y medianas",
      "Acabado y presentación",
    ],
    image: imgStandStar,
    tone: "Stage",
  },
] as const;

export const forgeStory = [
  {
    phase: "01",
    title: "La chispa",
    lead: "Todo empieza como archivo, boceto, foto o medida.",
    text: "Se revisa geometría, tamaño, tolerancias y propósito para saber si la pieza debe verse increíble, resistir uso real o producirse en serie.",
  },
  {
    phase: "02",
    title: "La cámara",
    lead: "El proyecto entra al laminador como metal a la fragua.",
    text: "Orientación, soportes, relleno, temperatura, velocidad y material definen cómo se va a construir cada capa.",
  },
  {
    phase: "03",
    title: "La forja",
    lead: "La boquilla deposita filamento fundido capa por capa.",
    text: "El calor, el movimiento y la repetibilidad convierten datos digitales en volumen físico con control de detalle.",
  },
  {
    phase: "04",
    title: "La pieza",
    lead: "Se enfría, se revisa, se limpia y queda lista para entregar.",
    text: "Coordinamos acabado, empaque, recojo o envío a cualquier departamento de Bolivia.",
  },
] as const;

export const portfolioItems = [
  {
    title: "Lámpara antorcha Minecraft",
    category: "Decoración",
    material: "PLA translúcido",
    description: "Iluminación temática con cuerpo modular y brillo cálido.",
    accent: "#d4872d",
    image: imgLampara,
  },
  {
    title: "Maqueta arquitectónica",
    category: "Arquitectura",
    material: "PLA",
    description: "Volúmenes precisos para presentación y revisión espacial.",
    accent: "#56b2ad",
    image: imgMaqueta,
  },
  {
    title: "Slifer, dragón rojo",
    category: "Colección",
    material: "PLA y pintura",
    description: "Figura de colección con postproceso y acabado brillante.",
    accent: "#b8563b",
    image: imgSlifer,
  },
  {
    title: "Stand Comic Con 2025",
    category: "Eventos",
    material: "PLA",
    description: "Piezas temáticas listas para exhibición y venta.",
    accent: "#d6b45b",
    image: imgStandComic,
  },
  {
    title: "Stand Star Con 2025",
    category: "Eventos",
    material: "PLA",
    description: "Ambientación sci-fi con piezas seriadas y exhibibles.",
    accent: "#6d91bc",
    image: imgStandStar,
  },
  {
    title: "Kit AT-ST y caza TIE",
    category: "Colección",
    material: "PLA",
    description: "Modelos ensamblables con detalle fino y escala de mesa.",
    accent: "#9f8d7a",
    image: imgKitAtst,
  },
  {
    title: "X-Wing Star Wars",
    category: "Colección",
    material: "PLA",
    description: "Modelo con base, torretas y piezas de exposición.",
    accent: "#c3c9bf",
    image: imgXwing,
  },
] as const;

export const materials = [
  {
    name: "PLA / PLA+",
    bestFor: "Figuras, decoración, maquetas y prototipos visuales.",
    tone: "Ligero, económico y con muy buen detalle.",
    image: filamentPla,
  },
  {
    name: "PETG",
    bestFor: "Piezas funcionales, soportes y componentes de uso diario.",
    tone: "Más resistente al impacto y a la humedad.",
    image: filamentPetg,
  },
  {
    name: "ABS / ASA",
    bestFor: "Piezas expuestas a temperatura, exterior o mayor exigencia.",
    tone: "Mayor resistencia térmica y acabado postprocesable.",
    image: filamentAbsAsa,
  },
  {
    name: "TPU / Flex",
    bestFor: "Apoyos, protectores, agarres y piezas que necesitan flexión.",
    tone: "Flexible para absorción, contacto y protección.",
    image: filamentTpuFlex,
  },
] as const;

export const equipment = {
  name: "Taller multimaquina",
  image: printerImage,
  specs: [
    ["Capacidad", "flujo paralelo"],
    ["Formato", "piezas medianas"],
    ["Materiales", "PLA, PETG, ABS, ASA"],
    ["Flujo", "control y monitoreo"],
  ],
  features: [
    "Auto calibración",
    "Reparto de producción",
    "Pruebas en paralelo",
    "Perfiles por material",
  ],
} as const;

export const machineFleet = [
  {
    name: "Máquina cerrada",
    count: "cámara estable",
    role: "detalle, control térmico y repetibilidad",
    text: "Apoya piezas con acabado limpio, mayor estabilidad de cámara y materiales que piden más control.",
  },
  {
    name: "Máquinas abiertas",
    count: "producción paralela",
    role: "capacidad paralela y variantes",
    text: "Permiten dividir trabajo, probar opciones a la vez y acelerar pedidos sin depender de una sola cola.",
  },
  {
    name: "Taller multimaquina",
    count: "capacidad flexible",
    role: "producción ajustada al proyecto",
    text: "Las máquinas pueden cambiar; lo importante es elegir material, orientación, relleno y acabado para que la pieza cumpla su función.",
  },
] as const;

export const capabilityHighlights = [
  {
    title: "No son juguetes",
    text: "Una impresora 3D bien calibrada fabrica piezas útiles cuando el diseño, el material y la orientación se eligen con criterio.",
  },
  {
    title: "Material según uso",
    text: "PLA para detalle visual, PETG para uso diario, ABS o ASA para calor/exterior y TPU/Flex para piezas con absorción o contacto.",
  },
  {
    title: "Producción con criterio",
    text: "Revisamos geometría, soportes, relleno y acabado antes de imprimir para evitar piezas bonitas pero inútiles.",
  },
] as const;

export const socialLinks = [
  {
    label: "Instagram",
    url: business.social.instagram,
    type: "Oficial",
    description: "Fotos de piezas, eventos, prototipos y proyectos terminados.",
    icon: assets.socialIcons.instagram,
  },
  {
    label: "TikTok",
    url: business.social.tiktok,
    type: "Oficial",
    description: "Videos cortos del proceso de impresión y resultados reales.",
    icon: assets.socialIcons.tiktok,
  },
  {
    label: "Facebook",
    url: business.social.facebook,
    type: "Oficial",
    description: "Publicaciones, novedades, eventos y contacto directo.",
    icon: assets.socialIcons.facebook,
  },
  {
    label: "Twitch",
    url: business.social.twitch,
    type: "Personal",
    description: "Canal personal separado del contenido comercial de Voxel Forge.",
    icon: assets.socialIcons.twitch,
  },
] as const;

export const designResources = [
  {
    name: "MakerWorld",
    url: "https://makerworld.com/",
    category: "Modelos gratuitos",
    description: "Biblioteca de diseños listos para revisar, ajustar e imprimir.",
    icon: makerWorldLogo,
  },
  {
    name: "Cults3D",
    url: "https://cults3d.com/",
    category: "Gratis y premium",
    description: "Comunidad con modelos decorativos, funcionales y de colección.",
    icon: cults3dLogo,
  },
  {
    name: "Maker Online",
    url: "https://www.makeronline.com/en/",
    category: "Ideas y archivos",
    description: "Otra fuente útil para buscar referencias imprimibles.",
    icon: makerOnlineLogo,
  },
  {
    name: "Creality Cloud",
    url: "https://www.crealitycloud.com/",
    category: "Modelos y herramientas",
    description: "Catálogo para explorar diseños antes de cotizar la pieza.",
    icon: crealityCloudLogo,
  },
] as const;

export const timeline = [
  {
    year: "2022",
    title: "Primer taller",
    text: "Voxel Forge empezó como un hobby con una Ender 3 V2.",
  },
  {
    year: "2024",
    title: "Más control",
    text: "Se sumó una máquina cerrada para mejorar velocidad, estabilidad y precisión.",
  },
  {
    year: "2025",
    title: "Eventos y comunidad",
    text: "Participación en Comic Con, Gamer Con y Star Con con piezas temáticas.",
  },
  {
    year: "2026",
    title: "Taller multimaquina",
    text: "Se suman apoyos abiertos para repartir producción y atender series pequeñas con más margen.",
  },
] as const;

export const faq = [
  {
    question: "¿Qué necesito para cotizar?",
    answer:
      "Puedes enviar un archivo STL, un enlace, fotos de referencia o medidas. Si falta algo, te guiamos por WhatsApp.",
  },
  {
    question: "¿Hacen envíos fuera de Santa Cruz?",
    answer:
      "Sí. Coordinamos envíos a todos los departamentos de Bolivia según tamaño, urgencia y disponibilidad.",
  },
  {
    question: "¿Cuánto tarda un pedido?",
    answer:
      "Depende del volumen, material y acabado. Prototipos pequeños suelen resolverse en 24 a 72 horas.",
  },
  {
    question: "¿Pueden diseñar la pieza por mí?",
    answer:
      "Sí. Podemos modelar desde referencia, boceto o medidas, especialmente si la pieza requiere ajuste o ensamble.",
  },
  {
    question: "¿Las impresoras 3D sirven para piezas reales?",
    answer:
      "Sí. La diferencia está en el diseño, el material y la calibración. Podemos imprimir piezas visuales, decorativas, prototipos o componentes funcionales según la necesidad.",
  },
] as const;

export const defaultWhatsAppMessage =
  "Hola Voxel Forge, quiero cotizar un proyecto de impresión 3D.";

export function createWhatsAppLink(message = defaultWhatsAppMessage) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
