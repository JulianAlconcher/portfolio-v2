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
    "count": 16
  },
  {
    "id": "featured",
    "label": "Destacados",
    "count": 4
  },
  {
    "id": "systems",
    "label": "Sistemas & macOS",
    "count": 2
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
    "id": "fintech",
    "label": "Fintech",
    "count": 1
  },
  {
    "id": "tools",
    "label": "Dev Tools & Bots",
    "count": 3
  },
  {
    "id": "academic",
    "label": "Algoritmos & Core CS",
    "count": 5
  }
];

export const projects: Project[] = [
  {
    "id": "agrolens",
    "title": "AgroLens",
    "description": "Plataforma de análisis satelital para monitoreo de suelos agrícolas y cultivos. Procesa imágenes multiespectrales (Sentinel-2), índices de vegetación (NDVI, SAVI) y modelos predictivos para la toma de decisiones agronómicas.",
    "challenge": "Procesar y calibrar capas satelitales multiespectrales de alta resolución de manera eficiente en el navegador.",
    "category": "agrotech",
    "featured": true,
    "tech": [
      "TypeScript",
      "Sentinel-2",
      "NDVI",
      "Machine Learning",
      "Remote Sensing",
      "GIS"
    ],
    "role": "Lead Developer",
    "github": "https://github.com/JulianAlconcher/AgroLens",
    "demo": null,
    "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600",
    "stars": 3,
    "badge": "AgroTech / AI"
  },
  {
    "id": "mynetbuddy",
    "title": "MyNetBuddy",
    "description": "App nativa de macOS para la barra de menú. Permite priorizar la interfaz de red activa (Ethernet o Wi-Fi) en configuraciones dual-WAN, monitoreo de interfaces en tiempo real y medición integrada de velocidad de descarga estilo fast.com.",
    "challenge": "Interactuar a bajo nivel con la pila de red y preferencias de macOS de forma ligera sin consumo de CPU excesivo.",
    "category": "systems",
    "featured": true,
    "tech": [
      "Swift",
      "macOS",
      "Networking",
      "Dual-WAN",
      "AppKit / SwiftUI"
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
    "description": "Plataforma financiera que analiza y clasifica diariamente el Top 5 de CEDEARs con mayor fortaleza técnica y volumen en el mercado argentino, sincronizando métricas de las acciones subyacentes en NASDAQ y NYSE.",
    "challenge": "Automatizar la ingesta y ponderación de datos bursátiles en tiempo real con una interfaz moderna y clara.",
    "category": "fintech",
    "featured": true,
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
    "id": "ejco-website",
    "title": "Estudio Jurídico EJCO",
    "description": "Sitio web institucional de alta fidelidad para el Estudio Jurídico Centurión Otharan. Diseñado para ofrecer máxima velocidad de carga, experiencia de usuario fluida, branding corporativo y optimización SEO.",
    "challenge": "Crear una identidad visual sobria y profesional con tiempos de carga sub-segundo y responsive design perfecto.",
    "category": "web",
    "featured": true,
    "tech": [
      "Astro",
      "Tailwind CSS",
      "TypeScript",
      "SEO",
      "UI/UX"
    ],
    "role": "Web Designer & Dev",
    "github": null,
    "demo": "https://www.ejco.com.ar/",
    "image": "/ejco.png",
    "stars": 0,
    "badge": "Production Client"
  },
  {
    "id": "network-monitor",
    "title": "NetworkMonitor",
    "description": "Solución minimalista de alta performance para monitoreo continuo de conectividad, latencia y disponibilidad en entornos de red dual-WAN y servidores locales.",
    "challenge": "Detección precisa de micro-cortes y fallos en enlaces sin saturar el tráfico del nodo.",
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
    "description": "Bot automatizado de Discord con handlers de eventos en tiempo real, comandos dinámicos, tracking de presencia de usuarios y respuestas interactivas.",
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
    "description": "Configuración automatizada y modular para el editor de código Zed en macOS y Linux. Incluye esquemas de symlinks, linters, keybindings personalizados y perfiles de desarrollo.",
    "challenge": "Garantizar portabilidad y sincronización instantánea entre diferentes estaciones de trabajo UNIX.",
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
    "description": "Plataforma web para planificación de entrenamientos, seguimiento de progreso físico y gestión integral de rutinas de fuerza e hipertrofia.",
    "challenge": "Modelar estructuras dinámicas de ejercicios, series, repeticiones y cálculo de volumen semanal.",
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
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600",
    "stars": 3,
    "badge": "Web Platform"
  },
  {
    "id": "gymlab-fisica",
    "title": "GymLAB Physics Simulation",
    "description": "Suite de simulación numérica y modelado computacional para experimentos de física. Procesamiento de series de datos experimentales, regresiones y cálculo de errores.",
    "challenge": "Integración de métodos numéricos estables y visualización precisa de curvas de movimiento.",
    "category": "academic",
    "featured": false,
    "tech": [
      "Python",
      "NumPy",
      "Matplotlib",
      "Physics Modeling",
      "Data Analysis"
    ],
    "role": "Developer & Researcher",
    "github": "https://github.com/JulianAlconcher/GymLAB-Proyecto-Fisica-2024",
    "demo": null,
    "image": "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=1600",
    "stars": 3,
    "badge": "Science & Physics"
  },
  {
    "id": "moviemerch-ecommerce",
    "title": "MovieMerch E-Commerce",
    "description": "Tienda online moderna desarrollada en Next.js para venta de merchandising cinematográfico. Incluye catálogo interactivo, filtrado dinámico, carrito de compras y checkout optimizado.",
    "challenge": "Implementar server-side rendering y gestión reactiva del estado del carrito con una UI atractiva.",
    "category": "web",
    "featured": false,
    "tech": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "E-Commerce",
      "Vercel"
    ],
    "role": "Frontend Developer",
    "github": "https://github.com/JulianAlconcher/E-commerce-NextJS-MovieMerch",
    "demo": null,
    "image": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1600",
    "stars": 0,
    "badge": "E-Commerce"
  },
  {
    "id": "studyscript",
    "title": "StudyScript",
    "description": "Herramienta CLI diseñada para arrancar y cronometrar sesiones de estudio productivas en menos de 2 segundos, integrando logging y estadísticas de concentración.",
    "challenge": "Crear una experiencia de terminal ultra-rápida y sin fricciones.",
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
    "id": "hospitales2000",
    "title": "Hospitales 2000 (Web & Mobile)",
    "description": "Sistema integral de gestión de turnos, historiales médicos y recursos hospitalarios con arquitectura desacoplada para cliente Web y app Móvil.",
    "challenge": "Sincronización consistente de flujos clínicos y validación estricta de turnos simultáneos.",
    "category": "web",
    "featured": false,
    "tech": [
      "TypeScript",
      "React",
      "Mobile",
      "REST APIs",
      "Healthcare"
    ],
    "role": "Full Stack Developer",
    "github": "https://github.com/JulianAlconcher/Hospitales2000",
    "demo": "https://hospitales2000.vercel.app",
    "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600",
    "stars": 0,
    "badge": "Healthcare System"
  },
  {
    "id": "sistemas-operativos",
    "title": "Operating Systems Core",
    "description": "Proyectos y módulos de bajo nivel implementando conceptos fundamentales de sistemas operativos: planificación de CPU, memoria virtual, concurrencia con semáforos/mutex y llamadas al sistema.",
    "challenge": "Garantizar exclusión mutua y prevención de deadlocks en condiciones de alta concurrencia.",
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
    "title": "OOP & Clean Architecture (TDP 1, 2, 3)",
    "description": "Serie de proyectos de desarrollo orientado a objetos aplicando patrones de diseño GoF (State, Factory, Strategy, MVC), desacoplamiento arquitectónico y pruebas exhaustivas.",
    "challenge": "Estructurar sistemas complejos con alta cohesión y bajo acoplamiento respetando principios SOLID.",
    "category": "academic",
    "featured": false,
    "tech": [
      "Java",
      "OOP",
      "Design Patterns",
      "SOLID",
      "Architecture",
      "Swing/GUI"
    ],
    "role": "Developer",
    "github": "https://github.com/JulianAlconcher/tdp-proyecto-3",
    "demo": null,
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600",
    "stars": 7,
    "badge": "Architecture & OOP"
  },
  {
    "id": "priority-queue-c",
    "title": "Priority Queue & Data Structures",
    "description": "Implementación genérica y optimizada de colas de prioridad en C, junto con librerías de tipos abstractos de datos (árboles binarios, AVL, grafos y tablas hash).",
    "challenge": "Optimización de punteros, manejo manual de memoria sin leaks (valgrind-clean) y complejidad algorítmica óptima.",
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
  },
  {
    "id": "game-2248-prolog",
    "title": "2248 Logic Game (React + Prolog)",
    "description": "Recreación del juego de combinación numérica 2248 con interfaz interactiva en React y motor de resolución lógica de reglas y caminos en Prolog.",
    "challenge": "Conectar el paradigma de programación lógica con un frontend reactivo moderno.",
    "category": "academic",
    "featured": false,
    "tech": [
      "React",
      "Prolog",
      "Logic Programming",
      "Algorithms"
    ],
    "role": "Developer",
    "github": "https://github.com/JulianAlconcher/Proyecto-1-LCC",
    "demo": null,
    "image": "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1600",
    "stars": 1,
    "badge": "Logic & React"
  }
];
