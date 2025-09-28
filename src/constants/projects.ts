import type { Project } from "../types";

// Datos de ejemplo para el portafolio - reemplazar con proyectos reales
export const SAMPLE_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Figura de Acción Personalizada",
    description:
      "Figura coleccionable impresa en PLA+ con acabado detallado y pintura personalizada.",
    imageUrl:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    category: "Figuras",
    completedDate: "2024-01-15",
    materials: ["PLA+", "Pintura acrílica"],
    printTime: "12 horas",
  },
  {
    id: "2",
    title: "Soporte para Tablet",
    description:
      "Soporte ergonómico ajustable para tablets y teléfonos, diseño minimalista y funcional.",
    imageUrl:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    category: "Funcional",
    completedDate: "2024-01-20",
    materials: ["PETG"],
    printTime: "6 horas",
  },
  {
    id: "3",
    title: "Miniatura de Dragón",
    description:
      "Detallada miniatura de dragón para juegos de mesa, impresa con alta resolución.",
    imageUrl:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    category: "Gaming",
    completedDate: "2024-02-01",
    materials: ["Resin", "PLA"],
    printTime: "8 horas",
  },
  {
    id: "4",
    title: "Organizador de Escritorio",
    description:
      "Set completo de organizadores modulares para mantener el escritorio ordenado.",
    imageUrl:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    category: "Organización",
    completedDate: "2024-02-10",
    materials: ["PLA"],
    printTime: "15 horas",
  },
  {
    id: "5",
    title: "Prototipo de Gadget",
    description:
      "Prototipo funcional para startup tecnológica, múltiples iteraciones hasta el diseño final.",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    category: "Prototipo",
    completedDate: "2024-02-20",
    materials: ["ABS", "TPU"],
    printTime: "20 horas",
  },
  {
    id: "6",
    title: "Maceta Decorativa",
    description:
      "Maceta con diseño geométrico moderno, perfecta para plantas suculentas.",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
    category: "Decoración",
    completedDate: "2024-03-01",
    materials: ["PLA"],
    printTime: "10 horas",
  },
];
