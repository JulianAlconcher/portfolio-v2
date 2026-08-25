export interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  category: "systems" | "web" | "agrotech" | "fintech" | "tools" | "bots" | "academic";
  featured: boolean;
  tech: string[];
  role: string;
  github: string | null;
  demo: string | null;
  image: string;
  stars: number;
  badge: string;
}

export interface Category {
  id: string;
  label: string;
  count: number;
}

export const categories: Category[] = [
  {
    "id": "all",
    "label": "Todos",
    "count": 15
  },
  {
    "id": "featured",
    "label": "Destacados",
    "count": 4
  },
  {
    "id": "web",
    "label": "Web & Full Stack",
    "count": 4
  },
  {
    "id": "agrotech",
    "label": "AgroTech & AI",
    "count": 1
  },
  {
    "id": "academic",
    "label": "IA, Visión & CS",
    "count": 4
  },
  {
    "id": "systems",
    "label": "Sistemas & macOS",
    "count": 2
  },
  {
    "id": "fintech",
    "label": "Fintech",
    "count": 1
  },
  {
    "id": "tools",
    "label": "Dev Tools & Bots",
    "count": 3
  }
];

export const projects: Project[] = [
  {
    "id": "agrolens",
    "title": "AgroLens",
    "description": "Plataforma de agricultura de precisión (Proyecto Final de Carrera) que automatiza la obtención y procesamiento de imágenes satelitales (Sentinel-2), datos climáticos e índices espectrales (NDVI, SAVI). Implementa modelos de K-Means y Random Forest para caracterizar la estructura y el estado fenológico de los cultivos.",
    "challenge": "Automatizar el pipeline satelital e inferencia de modelos de Machine Learning integrados en una interfaz web reactiva de alto rendimiento.",
    "category": "agrotech",
    "featured": true,
    "tech": [
      "Python",
      "React",
      "Sentinel-2",
      "Machine Learning",
      "K-Means",
      "Random Forest",
      "NDVI"
    ],
    "role": "Lead Developer (Proyecto Final)",
    "github": "https://github.com/JulianAlconcher/AgroLens",
    "demo": null,
    "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600",
    "stars": 3,
    "badge": "Proyecto Final de Carrera"
  },
  {
    "id": "ejco-website",
    "title": "Estudio Jurídico EJCO",
    "description": "Sitio web institucional en producción para el Estudio Jurídico Centurión Otharan. Diseñado para ofrecer máxima velocidad de carga, experiencia de usuario fluida, branding corporativo, formulario de contacto y optimización SEO integral.",
    "challenge": "Crear una presencia digital sobria y profesional con tiempos de carga sub-segundo y responsive design perfecto.",
    "category": "web",
    "featured": true,
    "tech": [
      "Astro",
      "Tailwind CSS",
      "TypeScript",
      "UI/UX",
      "SEO",
      "Responsive Design"
    ],
    "role": "Web Designer & Developer",
    "github": null,
    "demo": "https://www.ejco.com.ar/",
    "image": "/ejco.png",
    "stars": 0,
    "badge": "Sitio en Producción"
  },
  {
    "id": "gymlab-fisica",
    "title": "GymLAB — Análisis de Ejercicios con IA",
    "description": "Aplicación web para análisis biomecánico de movimientos físicos y ejercicios mediante visión por computadora con MediaPipe y modelos en Python. Procesa series de datos angulares y métricas de repetición para mejorar la técnica deportiva y evitar lesiones.",
    "challenge": "Extracción y cálculo de ángulos articulares en tiempo real a partir de streams de video con baja latencia.",
    "category": "academic",
    "featured": true,
    "tech": [
      "Python",
      "MediaPipe",
      "Computer Vision",
      "React",
      "Pandas",
      "NumPy"
    ],
    "role": "Developer & Researcher",
    "github": "https://github.com/JulianAlconcher/GymLAB-Proyecto-Fisica-2024",
    "demo": null,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600",
    "stars": 3,
    "badge": "Visión por Computadora & IA"
  },
  {
    "id": "moviemerch-ecommerce",
    "title": "MovieMerch E-Commerce",
    "description": "Plataforma completa de comercio electrónico para venta de merchandising cinematográfico. Incluye catálogo reactivo, filtrado dinámico, autenticación, lógica backend con endpoints REST, base de datos PostgreSQL, Prisma ORM e integración de pasarela de pagos.",
    "challenge": "Diseñar una arquitectura transaccional robusta con gestión de stock en tiempo real y flujo de checkout sin fricciones.",
    "category": "web",
    "featured": true,
    "tech": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "MercadoPago",
      "REST APIs"
    ],
    "role": "Full Stack Developer",
    "github": "https://github.com/JulianAlconcher/E-commerce-NextJS-MovieMerch",
    "demo": null,
    "image": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1600",
    "stars": 0,
    "badge": "E-Commerce Full Stack"
  },
  {
    "id": "mynetbuddy",
    "title": "MyNetBuddy",
    "description": "App nativa de macOS que vive en la barra de menú. Permite priorizar la interfaz de red activa (Ethernet o Wi-Fi) en entornos dual-WAN, monitoreo de interfaces de red en tiempo real y medición integrada de velocidad de descarga estilo fast.com.",
    "challenge": "Interactuar a bajo nivel con la pila de red y preferencias de macOS de forma ligera y eficiente.",
    "category": "systems",
    "featured": false,
    "tech": [
      "Swift",
      "macOS",
      "Networking",
      "Dual-WAN",
      "AppKit",
      "SwiftUI"
    ],
    "role": "Developer & Creator",
    "github": "https://github.com/JulianAlconcher/MyNetBuddy",
    "demo": null,
    "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1600",
    "stars": 0,
    "badge": "macOS Native"
  },
  {
    "id": "duckwallet",
    "title": "DuckWallet",
    "description": "Plataforma financiera que analiza y clasifica diariamente el Top 5 de CEDEARs con mayor fortaleza técnica y volumen, evaluando el comportamiento de las acciones subyacentes en NASDAQ y NYSE.",
    "challenge": "Automatizar la ingesta y cálculo de indicadores técnicos bursátiles con actualización diaria.",
    "category": "fintech",
    "featured": false,
    "tech": [
      "Python",
      "TypeScript",
      "Fintech",
      "Data Analysis",
      "CEDEARs",
      "Vercel"
    ],
    "role": "Full Stack Developer",
    "github": "https://github.com/JulianAlconcher/DuckWallet",
    "demo": "https://duckwallet.vercel.app/",
    "image": "/duck.png",
    "stars": 0,
    "badge": "Fintech App"
  },
  {
    "id": "hospitales2000",
    "title": "Hospitales 2000 (Gestión Hospitalaria)",
    "description": "Sistema integral de gestión hospitalaria y atención médica con operaciones CRUD completas, módulos de pacientes, turnos clínicos, facturación y asignación de recursos.",
    "challenge": "Modelado relacional consistente y validación estricta de concurrencia en la asignación de turnos médicos.",
    "category": "web",
    "featured": false,
    "tech": [
      "Next.js",
      "TypeScript",
      "Prisma ORM",
      "SQL",
      "Tailwind CSS",
      "Healthcare"
    ],
    "role": "Full Stack Developer",
    "github": "https://github.com/JulianAlconcher/Hospitales2000",
    "demo": "https://hospitales2000.vercel.app",
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600",
    "stars": 0,
    "badge": "Gestión Hospitalaria"
  },
  {
    "id": "network-monitor",
    "title": "NetworkMonitor",
    "description": "Solución minimalista de alta performance para monitoreo continuo de conectividad, latencia y diagnóstico en redes con doble proveedor de internet (dual-WAN).",
    "challenge": "Detección rápida de micro-cortes sin saturar el tráfico del nodo de red.",
    "category": "systems",
    "featured": false,
    "tech": [
      "JavaScript",
      "Node.js",
      "Networking",
      "DevOps",
      "Automation"
    ],
    "role": "Developer",
    "github": "https://github.com/JulianAlconcher/NetworkMonitor",
    "demo": null,
    "image": "/network.png",
    "stars": 0,
    "badge": "Network Tool"
  },
  {
    "id": "ratitas-bot",
    "title": "Ratitas-Bot",
    "description": "Bot automatizado para Discord con handlers de eventos en tiempo real, comandos interactivos y detección de presencia.",
    "challenge": "Manejo asíncrono eficiente de eventos de la API de Discord con alta disponibilidad.",
    "category": "bots",
    "featured": false,
    "tech": [
      "Python",
      "Discord.py",
      "AsyncIO",
      "Bot Development"
    ],
    "role": "Creator",
    "github": "https://github.com/JulianAlconcher/Ratitas-Bot",
    "demo": null,
    "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600",
    "stars": 0,
    "badge": "Discord Bot"
  },
  {
    "id": "zed-ide-setup",
    "title": "Zed IDE Setup",
    "description": "Configuración automatizada y modular para el editor de código de alto rendimiento Zed en macOS y Linux mediante enlaces simbólicos (symlinks).",
    "challenge": "Sincronización fluida de configuraciones, keybindings y linters entre distintas estaciones UNIX.",
    "category": "tools",
    "featured": false,
    "tech": [
      "Shell / Zsh",
      "macOS",
      "Linux",
      "Dev Setup",
      "Symlinks"
    ],
    "role": "Maintainer",
    "github": "https://github.com/JulianAlconcher/Zed-IDE-Setup",
    "demo": null,
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600",
    "stars": 0,
    "badge": "Developer Tool"
  },
  {
    "id": "gymplex",
    "title": "GymPlex",
    "description": "Plataforma web para planificación de entrenamientos, estructuración de rutinas de fuerza y seguimiento de volumen semanal.",
    "challenge": "Modelar estructuras reactivas de series, repeticiones y cargas progresivas.",
    "category": "web",
    "featured": false,
    "tech": [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Full Stack"
    ],
    "role": "Full Stack Developer",
    "github": "https://github.com/JulianAlconcher/GymPlex",
    "demo": null,
    "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1600",
    "stars": 3,
    "badge": "Web App"
  },
  {
    "id": "studyscript",
    "title": "StudyScript",
    "description": "Utilidad de línea de comandos diseñada para arrancar sesiones de estudio productivas en menos de 2 segundos con registro de métricas.",
    "challenge": "Experiencia de terminal ultra-rápida y sin fricciones en Python.",
    "category": "tools",
    "featured": false,
    "tech": [
      "Python",
      "CLI",
      "Automation",
      "Productivity"
    ],
    "role": "Creator",
    "github": "https://github.com/JulianAlconcher/StudyScript",
    "demo": null,
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1600",
    "stars": 0,
    "badge": "CLI Utility"
  },
  {
    "id": "sistemas-operativos",
    "title": "Operating Systems Core",
    "description": "Implementaciones de bajo nivel de algoritmos de sistemas operativos: planificación de CPU, memoria virtual, concurrencia con semáforos/mutex y llamadas al sistema POSIX.",
    "challenge": "Garantizar sincronización y prevención de deadlocks en condiciones de concurrencia extrema.",
    "category": "academic",
    "featured": false,
    "tech": [
      "C",
      "POSIX Threads",
      "Operating Systems",
      "Memory Management",
      "Concurrency"
    ],
    "role": "Developer",
    "github": "https://github.com/JulianAlconcher/proyecto-Sistemas-Operativos",
    "demo": null,
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1600",
    "stars": 0,
    "badge": "Low-Level / C"
  },
  {
    "id": "tdd-oop-projects",
    "title": "OOP & Clean Architecture (TDP)",
    "description": "Proyectos aplicando patrones de diseño GoF (State, Factory, Observer, Strategy, MVC), desacoplamiento arquitectónico y principios SOLID.",
    "challenge": "Estructurar sistemas orientados a objetos con alta cohesión y bajo acoplamiento.",
    "category": "academic",
    "featured": false,
    "tech": [
      "Java",
      "OOP",
      "Design Patterns",
      "SOLID",
      "Clean Architecture"
    ],
    "role": "Developer",
    "github": "https://github.com/JulianAlconcher/tdp-proyecto-3",
    "demo": null,
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600",
    "stars": 7,
    "badge": "OOP & Patterns"
  },
  {
    "id": "priority-queue-c",
    "title": "Priority Queue & Data Structures",
    "description": "Implementación genérica y optimizada de colas de prioridad en C y tipos abstractos de datos (árboles binarios, AVL, grafos y tablas hash).",
    "challenge": "Manejo manual de memoria sin fugas (valgrind-clean) y complejidad temporal óptima.",
    "category": "academic",
    "featured": false,
    "tech": [
      "C",
      "Java",
      "Data Structures",
      "Algorithms",
      "Memory Optimization"
    ],
    "role": "Developer",
    "github": "https://github.com/JulianAlconcher/PriorityQueue-en-C",
    "demo": null,
    "image": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1600",
    "stars": 0,
    "badge": "Algorithms"
  }
];
