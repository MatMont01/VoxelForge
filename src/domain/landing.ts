export type NavigationLink = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
};

export type ActionLink = NavigationLink & {
  tone: "primary" | "secondary";
};

export type ProofPoint = {
  label: string;
  value: string;
};

export type TextBlock = {
  title: string;
  text: string;
};

export type ProcessStep = {
  phase: string;
  title: string;
  lead: string;
  text: string;
  icon: ImageAsset;
};

export type PortfolioPiece = {
  title: string;
  category: string;
  material: string;
  description: string;
  image: ImageAsset;
};

export type ServiceOffer = {
  title: string;
  summary: string;
  bullets: readonly string[];
  image: ImageAsset;
};

export type MaterialGuide = {
  name: string;
  bestFor: string;
  tone: string;
  image: ImageAsset;
};

export type ExternalLink = NavigationLink & {
  description: string;
  meta?: string;
  icon?: string;
};

export type LandingPageContent = {
  navigation: readonly NavigationLink[];
  hero: {
    eyebrow: string;
    title: string;
    signature: string;
    description: string;
    background: ImageAsset;
    machine: ImageAsset;
    logo: ImageAsset;
    actions: readonly ActionLink[];
    proof: readonly ProofPoint[];
    snapshots: readonly ImageAsset[];
  };
  workshop: {
    eyebrow: string;
    title: string;
    body: string;
    machine: ImageAsset;
    detail: ImageAsset;
    samples: readonly ImageAsset[];
    highlights: readonly TextBlock[];
  };
  meaning: {
    title: string;
    body: string;
    logo: ImageAsset;
    history: string;
    mission: string;
    vision: string;
    terms: readonly (TextBlock & { term: string; signature: string })[];
  };
  process: {
    title: string;
    body: string;
    steps: readonly ProcessStep[];
  };
  portfolio: {
    title: string;
    body: string;
    featured: PortfolioPiece;
    pieces: readonly PortfolioPiece[];
  };
  services: {
    title: string;
    body: string;
    materialsImage: ImageAsset;
    offers: readonly ServiceOffer[];
    materials: readonly MaterialGuide[];
  };
  contact: {
    title: string;
    body: string;
    background: ImageAsset;
    whatsapp: ActionLink;
    email: ActionLink;
    phone: ActionLink;
    facts: readonly ProofPoint[];
    social: readonly ExternalLink[];
    resources: readonly ExternalLink[];
    faq: readonly TextBlock[];
  };
};
