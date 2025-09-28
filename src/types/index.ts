export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  completedDate: string;
  materials: string[];
  printTime: string;
}

export interface Printer {
  id: string;
  name: string;
  model: string;
  specifications: {
    buildVolume: string;
    layerHeight: string;
    printSpeed: string;
    filamentType: string[];
  };
  features: string[];
  imageUrl?: string;
}

export interface DesignWebsite {
  name: string;
  url: string;
  description: string;
  category: "free" | "paid" | "mixed";
}

export interface ContactInfo {
  email: string;
  whatsapp: string;
  location: string;
  serviceAreas: string[];
}

export interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
