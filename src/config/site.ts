export const siteConfig = {
  name: "EXPANDE+",
  legalName: "EXPANDE+",
  description: "Agencia de marketing y soluciones tecnológicas para negocios.",
  longDescription:
    "Agencia de marketing, contenido, desarrollo web, inteligencia artificial, automatización y soluciones digitales para hacer crecer tu negocio.",
  slogan: "Creatividad, estrategia y tecnología en un mismo equipo.",
};

export const CONTACT = {
  whatsapp: "524451094721",
  whatsappDisplay: "+52 1 445 109 4721",
  email: "",
  instagram: "https://www.instagram.com/expandemasmx/",
  instagramHandle: "@expandemasmx",
  facebook: "",
} as const;

export const whatsappMessage =
  "Hola, vi la página de EXPANDE+ y me gustaría recibir información sobre sus servicios.";

export const createWhatsappUrl = (message: string) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

export const whatsappUrl = createWhatsappUrl(whatsappMessage);

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];
