import logoSolo from "../assets/VoxelForgeLogos/voxel-forge-logo-solo.svg";
import logoCircular from "../assets/VoxelForgeLogos/voxel-forge-logo-circular.png";
import logoRectangular from "../assets/VoxelForgeLogos/voxel-forge-logo-rectangular.jpg";
import printerImage from "../assets/3DPrinters/p1sPrinter.png";
import instagramIcon from "../assets/SocialMediaLogo/instagram.png";
import tiktokIcon from "../assets/SocialMediaLogo/tiktok.png";
import imgLampara from "../assets/Portafolio/lampara antorcha minecraft.jpg";
import imgLamparaWebp from "../assets/Portafolio/lampara antorcha minecraft.webp";
import imgMaqueta from "../assets/Portafolio/maqueta arquitectura.jpg";
import imgMaquetaWebp from "../assets/Portafolio/maqueta arquitectura.webp";
import imgSlifer from "../assets/Portafolio/Slifer dragon rojo.jpg";
import imgSliferWebp from "../assets/Portafolio/Slifer dragon rojo.webp";
import imgStandComic from "../assets/Portafolio/stand comic con 2025.jpg";
import imgStandComicWebp from "../assets/Portafolio/stand comic con 2025.webp";
import imgStandGamer from "../assets/Portafolio/Stand Gamer Con 2025.jpg";
import imgStandGamerWebp from "../assets/Portafolio/Stand Gamer Con 2025.webp";
import imgStandStar from "../assets/Portafolio/stand star con 2025.jpg";
import imgStandStarWebp from "../assets/Portafolio/stand star con 2025.webp";
import imgKitAtst from "../assets/Portafolio/Starwars kit card at st y caza tie .jpg";
import imgKitAtstWebp from "../assets/Portafolio/Starwars kit card at st y caza tie .webp";
import imgXwing from "../assets/Portafolio/Xwing Star wars.jpg";
import imgXwingWebp from "../assets/Portafolio/Xwing Star wars.webp";

export const business = {
  name: "Voxel Forge",
  tagline: "Forjamos tu mundo",
  headline: "Impresión 3D profesional en Santa Cruz",
  description:
    "Prototipos, piezas funcionales, figuras, maquetas y producción para eventos con acabados cuidados y envíos a toda Bolivia.",
  siteUrl: "https://voxelforge.org/",
  email: "voxelforge1502@gmail.com",
  whatsappNumber: "59174697838",
  whatsappDisplay: "+591 746 97838",
  location: "Santa Cruz de la Sierra, Bolivia",
  foundedYear: 2022,
  priceRange: "$$",
  hours: ["Lun-Jue 18:00-22:00", "Vie-Dom 08:00-17:00"],
  serviceAreas: [
    "Santa Cruz",
    "La Paz",
    "Cochabamba",
    "Chuquisaca",
    "Oruro",
    "Potosí",
    "Tarija",
    "Beni",
    "Pando",
  ],
  assets: {
    logoSolo,
    logoCircular,
    logoRectangular,
    printerImage,
    instagramIcon,
    tiktokIcon,
  },
  social: {
    instagram: "https://www.instagram.com/voxelforge_scz/",
    tiktok: "https://www.tiktok.com/@voxelforge_scz",
    facebook: "https://www.facebook.com/VoxelForgeSCZ",
  },
} as const;

export const navigation = [
  { label: "Forja", href: "#story" },
  { label: "Nombre", href: "#meaning" },
  { label: "Servicios", href: "#services" },
  { label: "Proceso", href: "#process" },
  { label: "Portafolio", href: "#portfolio" },
  { label: "Materiales", href: "#materials" },
  { label: "Equipo", href: "#equipment" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contact" },
] as const;

export const metrics = [
  { value: "2000+", label: "proyectos impresos" },
  { value: "12000h+", label: "horas de impresión" },
  { value: "9", label: "departamentos con envío" },
  { value: "500 mm/s", label: "capacidad P1S" },
] as const;

export const services = [
  {
    title: "Impresión 3D a pedido",
    summary:
      "Cotizamos por pieza, tiempo, material y acabado. Puedes enviar STL, enlace o idea inicial.",
    bullets: [
      "PLA, PETG, ABS, ASA, PC, PA y más",
      "Piezas decorativas o funcionales",
      "Asesoría antes de imprimir",
    ],
    accent: "service-orange",
  },
  {
    title: "Diseño y modelado",
    summary:
      "Convertimos referencias, bocetos o medidas en archivos listos para fabricar.",
    bullets: [
      "Modelado para impresión FDM",
      "Ajustes por tolerancia y ensamble",
      "Entrega de archivo cuando aplica",
    ],
    accent: "service-cyan",
  },
  {
    title: "Prototipado rápido",
    summary:
      "Iteraciones ágiles para validar forma, ergonomía y función antes de producir.",
    bullets: [
      "Pruebas de encaje",
      "Revisión de resistencia",
      "Versiones sucesivas del diseño",
    ],
    accent: "service-green",
  },
  {
    title: "Producción para eventos",
    summary:
      "Props, stands, medallas, trofeos, souvenirs y piezas temáticas para activaciones.",
    bullets: [
      "Comic Con, Gamer Con y Star Con",
      "Series pequeñas y medianas",
      "Acabado y presentación",
    ],
    accent: "service-violet",
  },
] as const;

export const forgeStory = [
  {
    phase: "01",
    title: "La chispa",
    lead: "Todo empieza como archivo, boceto, foto o medida.",
    text: "Revisamos geometría, tamaño, tolerancias y propósito para saber si la pieza debe verse increíble, resistir uso real o producirse en serie.",
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

export const processSteps = [
  {
    title: "Envío",
    text: "Compartes archivo, enlace, fotos, medidas o referencia del proyecto.",
  },
  {
    title: "Laminado",
    text: "Calculamos tiempo, consumo de material, orientación y soportes.",
  },
  {
    title: "Ajuste",
    text: "Definimos material, color, resistencia, tolerancias y acabado.",
  },
  {
    title: "Entrega",
    text: "Imprimimos, revisamos calidad y coordinamos recojo o envío nacional.",
  },
] as const;

export const meaning = [
  {
    term: "Voxel",
    title: "El pixel del volumen",
    text: "Un voxel es la unidad minima de un objeto tridimensional. Representa la precision digital que define forma, escala y detalle antes de imprimir.",
    signature: "Datos, geometria y control.",
  },
  {
    term: "Forge",
    title: "La forja que transforma",
    text: "Forge habla del oficio: calor, material y criterio tecnico para convertir un archivo o idea en una pieza fisica lista para usarse.",
    signature: "Filamento, capas y acabado.",
  },
] as const;

export const portfolioItems = [
  {
    title: "Lámpara antorcha Minecraft",
    category: "Decoración",
    material: "PLA translúcido",
    description: "Iluminación temática con cuerpo modular y brillo cálido.",
    src: imgLampara,
    webp: imgLamparaWebp,
  },
  {
    title: "Maqueta arquitectónica",
    category: "Arquitectura",
    material: "PLA",
    description: "Volúmenes precisos para presentación y revisión espacial.",
    src: imgMaqueta,
    webp: imgMaquetaWebp,
  },
  {
    title: "Slifer, dragón rojo",
    category: "Colección",
    material: "PLA y pintura",
    description: "Figura de colección con postproceso y acabado brillante.",
    src: imgSlifer,
    webp: imgSliferWebp,
  },
  {
    title: "Stand Comic Con 2025",
    category: "Eventos",
    material: "PLA",
    description: "Piezas temáticas listas para exhibición y venta.",
    src: imgStandComic,
    webp: imgStandComicWebp,
  },
  {
    title: "Stand Gamer Con 2025",
    category: "Eventos",
    material: "PLA",
    description: "Producción de accesorios y props para activación gamer.",
    src: imgStandGamer,
    webp: imgStandGamerWebp,
  },
  {
    title: "Stand Star Con 2025",
    category: "Eventos",
    material: "PLA",
    description: "Ambientación sci-fi con piezas seriadas y exhibibles.",
    src: imgStandStar,
    webp: imgStandStarWebp,
  },
  {
    title: "Kit AT-ST y caza TIE",
    category: "Colección",
    material: "PLA",
    description: "Modelos ensamblables con detalle fino y escala de mesa.",
    src: imgKitAtst,
    webp: imgKitAtstWebp,
  },
  {
    title: "X-Wing Star Wars",
    category: "Colección",
    material: "PLA",
    description: "Modelo con base, torretas y piezas de exposición.",
    src: imgXwing,
    webp: imgXwingWebp,
  },
] as const;

export const materials = [
  {
    name: "PLA / PLA+",
    bestFor: "Figuras, decoración, maquetas y prototipos visuales.",
    tone: "Ligero, económico y con muy buen detalle.",
  },
  {
    name: "PETG",
    bestFor: "Piezas funcionales, soportes y componentes de uso diario.",
    tone: "Más resistente al impacto y a la humedad.",
  },
  {
    name: "ABS / ASA",
    bestFor: "Piezas expuestas a temperatura, exterior o mayor exigencia.",
    tone: "Mayor resistencia térmica y acabado postprocesable.",
  },
  {
    name: "PC / PA",
    bestFor: "Proyectos técnicos donde importa rigidez, fuerza o durabilidad.",
    tone: "Materiales avanzados para requisitos específicos.",
  },
] as const;

export const equipment = {
  name: "Bambu Lab P1S",
  image: printerImage,
  specs: [
    ["Volumen", "256 x 256 x 256 mm"],
    ["Capa", "0.08 - 0.35 mm"],
    ["Velocidad", "hasta 500 mm/s"],
    ["Conectividad", "WiFi"],
  ],
  features: [
    "Auto calibración",
    "Detección de filamento",
    "Recuperación ante cortes",
    "Perfiles optimizados",
  ],
} as const;

export const timeline = [
  {
    year: "2022",
    title: "Primer taller",
    text: "Voxel Forge empezó como un hobby con una Ender 3 V2.",
  },
  {
    year: "2024",
    title: "Salto premium",
    text: "Se integró una Bambu Lab P1S para mejorar velocidad y precisión.",
  },
  {
    year: "2025",
    title: "Eventos y comunidad",
    text: "Participación en Comic Con, Gamer Con y Star Con con piezas temáticas.",
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
] as const;
