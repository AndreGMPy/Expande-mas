export type ServiceArea = "marketing" | "technology";

export type ServiceVisualType =
  | "content-studio"
  | "social-calendar"
  | "marketing-analytics"
  | "website-responsive"
  | "admin-dashboard"
  | "ai-chat"
  | "automation-flow"
  | "infrastructure";

export interface Service {
  id: string;
  anchor: string;
  number: string;
  area: ServiceArea;
  title: string;
  headline: string;
  description: string;
  highlights: string[];
  details: string[];
  visual: ServiceVisualType;
}

export const serviceAreas = {
  marketing: {
    label: "Marketing y crecimiento",
    headline: "Hacemos que más personas conozcan, recuerden y conecten con tu marca.",
  },
  technology: {
    label: "Tecnología y soluciones digitales",
    headline: "Construimos las herramientas que convierten esa atención en ventas, procesos y crecimiento.",
  },
} satisfies Record<ServiceArea, { label: string; headline: string }>;

export const services: Service[] = [
  {
    id: "contenido",
    anchor: "creacion-contenido",
    number: "01",
    area: "marketing",
    title: "Creación de contenido",
    headline: "Contenido que hace que tu marca destaque.",
    description:
      "Creamos fotografía, video y contenido pensado para captar atención y comunicar mejor lo que hace tu negocio.",
    highlights: [
      "Fotografía",
      "Video y reels",
      "Contenido para productos",
      "Guiones y storytelling",
      "Diseño para redes",
      "Textos comerciales",
    ],
    details: [
      "Video corto",
      "Instalaciones",
      "Servicios",
      "Conceptos creativos",
      "Publicaciones",
      "Historias",
      "Materiales digitales",
      "Contenido corporativo",
    ],
    visual: "content-studio",
  },
  {
    id: "gestion",
    anchor: "redes-sociales",
    number: "02",
    area: "marketing",
    title: "Manejo de redes sociales",
    headline: "Mantenemos activa y organizada tu presencia digital.",
    description:
      "Planeamos, publicamos y damos seguimiento a tus redes para que tu marca mantenga una presencia profesional y constante.",
    highlights: [
      "Planeación de contenido",
      "Calendario de publicaciones",
      "Administración de redes sociales",
      "Publicación constante",
      "Gestión de mensajes",
      "Optimización de perfiles",
    ],
    details: ["Seguimiento a clientes", "Asesoría de comunicación"],
    visual: "social-calendar",
  },
  {
    id: "estrategia",
    anchor: "estrategia-publicidad",
    number: "03",
    area: "marketing",
    title: "Estrategia, crecimiento y publicidad",
    headline: "Publicar no es suficiente. Necesitas una estrategia.",
    description:
      "Analizamos contenido, tendencias y audiencia para definir acciones enfocadas en alcance, interacción y generación de oportunidades.",
    highlights: [
      "Estrategia orgánica",
      "Tendencias",
      "Campañas publicitarias",
      "Pauta digital",
      "Análisis de resultados",
      "Generación de prospectos",
    ],
    details: ["Formatos y hashtags", "Colaboraciones", "Llamadas a la acción", "Alcance e interacción"],
    visual: "marketing-analytics",
  },
  {
    id: "web",
    anchor: "paginas-web",
    number: "04",
    area: "technology",
    title: "Páginas web, e-commerce y aplicaciones",
    headline: "Tu negocio merece algo mejor que una página genérica.",
    description:
      "Diseñamos y desarrollamos soluciones digitales a medida para presentar, vender y operar tu negocio desde cualquier dispositivo.",
    highlights: [
      "Páginas empresariales",
      "Tiendas online",
      "Catálogos digitales",
      "Aplicaciones web",
      "Pagos y pedidos",
      "Panel administrativo",
    ],
    details: [
      "Landing pages",
      "Carrito",
      "Productos",
      "Categorías",
      "WhatsApp",
      "Formularios",
      "Mapas",
      "Integraciones",
      "Responsive design",
    ],
    visual: "website-responsive",
  },
  {
    id: "sistemas",
    anchor: "sistemas",
    number: "05",
    area: "technology",
    title: "Sistemas y plataformas a medida",
    headline: "Convertimos procesos manuales en herramientas digitales.",
    description:
      "Creamos sistemas adaptados a la forma en que realmente trabaja tu empresa para centralizar información y simplificar operaciones.",
    highlights: [
      "Paneles administrativos",
      "Clientes",
      "Ventas y pedidos",
      "Inventario",
      "Citas y reservaciones",
      "Dashboards y reportes",
    ],
    details: ["Herramientas internas", "Control de operaciones", "Digitalización de procesos"],
    visual: "admin-dashboard",
  },
  {
    id: "ia",
    anchor: "inteligencia-artificial",
    number: "06",
    area: "technology",
    title: "Inteligencia artificial y chatbots",
    headline: "IA trabajando para tu negocio.",
    description:
      "Integramos asistentes capaces de responder, orientar clientes, capturar prospectos y automatizar parte de la atención.",
    highlights: [
      "Chatbots para WhatsApp",
      "Asistentes web",
      "Preguntas frecuentes",
      "Captura de prospectos",
      "Cotizaciones",
      "Agendamiento",
    ],
    details: ["Información de productos y servicios", "Atención automatizada", "Escalamiento hacia una persona"],
    visual: "ai-chat",
  },
  {
    id: "automatizacion",
    anchor: "automatizaciones",
    number: "07",
    area: "technology",
    title: "Automatizaciones e integraciones",
    headline: "Menos tareas repetitivas. Más tiempo para crecer.",
    description:
      "Conectamos las herramientas de tu negocio para automatizar registros, seguimientos, notificaciones y procesos.",
    highlights: [
      "WhatsApp",
      "Formularios",
      "Correo",
      "Calendarios",
      "Bases de datos",
      "APIs",
    ],
    details: ["Integraciones", "Registros", "Notificaciones", "Recordatorios", "Seguimiento automático"],
    visual: "automation-flow",
  },
  {
    id: "infraestructura",
    anchor: "infraestructura",
    number: "08",
    area: "technology",
    title: "Infraestructura, mantenimiento y soporte",
    headline: "La tecnología también necesita mantenerse funcionando.",
    description:
      "Nos encargamos de la infraestructura necesaria para mantener tus soluciones digitales disponibles, actualizadas y seguras.",
    highlights: [
      "Dominio",
      "Hosting",
      "Correo empresarial",
      "Respaldos",
      "Mantenimiento",
      "Soporte",
    ],
    details: ["Despliegues", "Actualizaciones", "Seguridad básica", "Monitoreo técnico"],
    visual: "infrastructure",
  },
];
