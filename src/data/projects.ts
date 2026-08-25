export interface ProjectDetails {
  es: {
    summary: string;
    architecture: string;
    features: string[];
    impact: string;
  };
  en: {
    summary: string;
    architecture: string;
    features: string[];
    impact: string;
  };
}

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
  details?: ProjectDetails;
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
      "NDVI",
      "GeoTIFF"
    ],
    "role": "Lead Developer (Proyecto Final)",
    "github": "https://github.com/JulianAlconcher/AgroLens",
    "demo": null,
    "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600",
    "stars": 3,
    "badge": "Proyecto Final de Carrera",
    "details": {
      "es": {
        "summary": "AgroLens fue desarrollado como el Proyecto Final de Carrera para la carrera de Ingeniería en Sistemas de Información (UNS). Surge ante la necesidad de brindar a agrónomos y productores herramientas avanzadas de teledetección satelital accesibles y automatizadas.",
        "architecture": "Arquitectura basada en microservicios en Python para procesamiento geoespacial e inferencia de modelos de Machine Learning, desacoplada de una interfaz reactiva en React para visualización y consultas interactivas de lotes agrícolas.",
        "features": [
          "Ingesta y calibración atmosférica automatizada de imágenes multiespectrales de la constelación Sentinel-2 (Agencia Espacial Europea).",
          "Cálculo en tiempo real de índices de vegetación normalizados (NDVI, SAVI, GNDVI) para detección de estrés hídrico y anomalías.",
          "Modelos de Machine Learning no supervisados (K-Means) para zonificación homogénea del suelo y supervisados (Random Forest) para clasificación fenológica.",
          "Exportación de mapas de prescripción agronómica en formatos estándar GIS y visualización temporal interactiva."
        ],
        "impact": "Permite reducir el tiempo de análisis de lotes de días a minutos y optimizar la toma de decisiones sobre fertilización y riego con datos científicos objetivos."
      },
      "en": {
        "summary": "AgroLens was developed as the Capstone Graduation Project for the Information Systems Engineering degree at Universidad Nacional del Sur (UNS). It provides agronomists and farmers with accessible, automated satellite remote sensing and crop intelligence.",
        "architecture": "Microservice-oriented architecture in Python for geospatial raster processing and Machine Learning inference, coupled with a reactive React frontend for interactive parcel analysis.",
        "features": [
          "Automated ingestion and atmospheric calibration of Sentinel-2 multispectral imagery (European Space Agency).",
          "Real-time computation of vegetation indices (NDVI, SAVI, GNDVI) to identify crop health anomalies and water stress.",
          "Unsupervised clustering (K-Means) for soil homogeneity zoning and supervised models (Random Forest) for phenological classification.",
          "GIS-ready prescription map exports and historical temporal tracking dashboards."
        ],
        "impact": "Reduces agricultural field analysis from days to minutes, empowering farmers to optimize fertilization and irrigation strategies with objective scientific data."
      }
    }
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
    "badge": "Sitio en Producción",
    "details": {
      "es": {
        "summary": "Sitio web institucional desarrollado para el prestigioso Estudio Jurídico Centurión Otharan (EJCO), actualmente en producción. El objetivo central fue transmitir confianza, profesionalismo y sobriedad, con una navegación intuitiva y foco en la conversión de clientes.",
        "architecture": "Construido con Astro utilizando arquitectura de islas y renderizado estático (SSG), logrando una puntuación de 100/100 en Lighthouse y tiempos de carga instantáneos sin JavaScript innecesario.",
        "features": [
          "Diseño visual a medida con branding corporativo, tipografía refinada y paleta de colores legal institucional.",
          "Arquitectura orientada a SEO: metadatos OpenGraph, marcado semántico Schema.org y sitemap automatizado para posicionamiento local.",
          "Integración de canales de contacto directo (WhatsApp API, llamada telefónica con un clic y formulario de consultas).",
          "Experiencia 100% responsiva y optimizada para dispositivos móviles y pantallas de alta densidad."
        ],
        "impact": "Incrementó significativamente la visibilidad digital del estudio y el caudal mensual de consultas directas de nuevos clientes."
      },
      "en": {
        "summary": "Corporate institutional website developed for the Centurión Otharan Law Firm (EJCO), currently live in production. Designed to convey authority, trust, and clarity while maximizing client inquiries.",
        "architecture": "Engineered with Astro static site generation (SSG) and island architecture, achieving a perfect 100/100 Google Lighthouse score and sub-second load times.",
        "features": [
          "Custom visual identity tailored for legal corporate branding with crisp typography.",
          "Comprehensive SEO architecture: Schema.org structured data, OpenGraph tags, and automated sitemaps for local legal search ranking.",
          "Direct client inquiry channels (WhatsApp click-to-chat API, phone dialing, and contact form).",
          "Pixel-perfect responsive layout across all mobile devices and desktop viewports."
        ],
        "impact": "Substantially boosted the law firm's digital footprint and monthly inbound consultation inquiries."
      }
    }
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
    "badge": "Visión por Computadora & IA",
    "details": {
      "es": {
        "summary": "GymLAB es un sistema de análisis cinemático y biomecánico que combina visión artificial y física computacional para evaluar la ejecución técnica de ejercicios de fuerza (como sentadillas, press de banca y peso muerto) mediante video.",
        "architecture": "Pipeline de visión en Python apoyado en Google MediaPipe Pose para extracción de 33 landmarks anatómicos, algoritmos de trigonometría vectorial para cálculo angular continuo y visualización estadística en React.",
        "features": [
          "Detección y tracking de puntos articulares en tiempo real a más de 30 FPS.",
          "Cálculo continuo de ángulos de rodilla, cadera y columna durante las fases concéntrica y excéntrica del movimiento.",
          "Filtrado de ruido y suavizado de series temporales de datos cinemáticos con Pandas y NumPy.",
          "Detección automática de errores posturales comunes (valgo de rodilla, hiperextensión lumbar, profundidad insuficiente)."
        ],
        "impact": "Demostró la viabilidad de implementar herramientas de corrección biomecánica accesibles sin necesidad de sensores vestibles costosos."
      },
      "en": {
        "summary": "GymLAB is a biomechanical kinematic evaluation tool combining computer vision and computational physics to analyze the form and technique of resistance exercises (squats, bench press, deadlifts) using standard video input.",
        "architecture": "Python vision pipeline leveraging Google MediaPipe Pose for 33 3D body landmark extractions, vector trigonometry algorithms for angular tracking, and React for data visualization.",
        "features": [
          "Real-time landmark tracking and pose estimation running at 30+ FPS.",
          "Continuous computation of knee, hip, and lumbar angles across concentric and eccentric phases.",
          "Signal noise filtering and trajectory smoothing utilizing Pandas and NumPy algorithms.",
          "Automated detection of common posture flaws (knee valgus, lumbar rounding, lack of depth)."
        ],
        "impact": "Proves that accurate biomechanical coaching and injury prevention analysis can be achieved with standard camera feeds without expensive wearable motion sensors."
      }
    }
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
    "badge": "E-Commerce Full Stack",
    "details": {
      "es": {
        "summary": "MovieMerch es una aplicación web full-stack de e-commerce diseñada desde cero para ofrecer una experiencia de compra fluida y segura de productos y merchandising de películas y series.",
        "architecture": "Full-Stack en Next.js (App Router) con TypeScript, modelado de base de datos relacional con PostgreSQL y Prisma ORM, y arquitectura modular con endpoints API REST para gestión de catálogo, pedidos y pagos.",
        "features": [
          "Catálogo interactivo con búsqueda instantánea, paginación y filtros multicriterio (género, franquicia, precio).",
          "Gestión de carrito de compras persistente con sincronización de estado y validación de inventario en tiempo real.",
          "Pasarela de pago integrada con MercadoPago (checkout seguro, webhooks para confirmación de cobro y generación de recibos).",
          "Panel de administración para control de stock, actualización de productos y seguimiento de pedidos."
        ],
        "impact": "Implementa una solución transaccional sólida con separación limpia de responsabilidades, seguridad en endpoints y rendimiento óptimo."
      },
      "en": {
        "summary": "MovieMerch is a production-grade full-stack e-commerce web platform engineered from the ground up for movie and pop-culture merchandise sales.",
        "architecture": "Next.js App Router full-stack architecture with TypeScript, relational database modeling using PostgreSQL and Prisma ORM, and RESTful API endpoints for inventory and orders.",
        "features": [
          "Interactive product catalog with instant client-side search, category filters, and pagination.",
          "Persistent shopping cart state management with real-time stock availability verification.",
          "Full payment gateway integration using MercadoPago (secure checkout flow, automated webhooks, and invoice receipts).",
          "Admin management dashboard for inventory control, product updates, and order fulfillment tracking."
        ],
        "impact": "Delivers a robust transactional e-commerce architecture ensuring clean code separation, payment security, and exceptional performance."
      }
    }
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
    "badge": "macOS Native",
    "details": {
      "es": {
        "summary": "Aplicación nativa para macOS desarrollada en Swift que se aloja en la barra de menú del sistema. Resuelve el problema común de usuarios con conexiones dual-WAN (Wi-Fi + Ethernet) que necesitan conmutar y diagnosticar su conexión rápidamente.",
        "architecture": "Desarrollada en Swift combinando SwiftUI y AppKit, consumiendo APIs de bajo nivel del subsistema de red de Apple y procesos UNIX ligeros.",
        "features": [
          "Monitoreo en tiempo real de la interfaz primaria activa (Ethernet / Wi-Fi) con icono dinámico en la barra de menú.",
          "Test de velocidad de descarga integrado estilo fast.com sin abrir el navegador.",
          "Conmutación y priorización rápida de adaptadores de red con un solo clic.",
          "Bajo consumo de memoria y CPU (<15MB RAM)."
        ],
        "impact": "Brinda una herramienta nativa, liviana y estética que simplifica el diagnóstico de red diario para desarrolladores y usuarios avanzados de Mac."
      },
      "en": {
        "summary": "Native macOS menu bar utility built in Swift. Solves the pain point of dual-WAN setups (Ethernet + Wi-Fi) by providing instant interface switching and connection diagnostics.",
        "architecture": "Engineered in Swift using SwiftUI & AppKit, interacting directly with low-level Apple network configuration subsystems and lightweight background polling.",
        "features": [
          "Real-time primary network interface indicator right in the macOS menu bar.",
          "Integrated download speed benchmark tool (fast.com style) without needing a web browser.",
          "One-click network route priority switching.",
          "Minimal resource footprint (<15MB RAM, virtually 0% CPU idle)."
        ],
        "impact": "Provides a sleek, native macOS utility that streamlines daily network routing for developers and power users."
      }
    }
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
    "badge": "Fintech App",
    "details": {
      "es": {
        "summary": "Plataforma web de inteligencia financiera enfocada en el mercado bursátil argentino y estadounidense. Procesa diariamente cotizaciones para recomendar el Top 5 de CEDEARs con mayor potencial técnico.",
        "architecture": "Backend automatizado en Python con scripts de análisis técnico y scraping de mercado financiero, conectado a un frontend moderno en TypeScript desplegado en Vercel.",
        "features": [
          "Clasificación cuantitativa diaria de acciones extranjeras (CEDEARs) según momentum y volumen.",
          "Interfaz clara y limpia con cotizaciones, métricas de rendimiento y variaciones porcentuales.",
          "Pipeline de actualización programada automática sin intervención manual."
        ],
        "impact": "Ahorra horas de análisis manual a inversores individuales mediante rankings algorítmicos objetivos."
      },
      "en": {
        "summary": "Financial intelligence web application focused on stock market analysis and CEDEAR assets traded in Argentina backed by NYSE/NASDAQ stocks.",
        "architecture": "Python automated quantitative data pipeline linked to a TypeScript frontend deployed on Vercel.",
        "features": [
          "Daily Top 5 CEDEAR algorithmic ranking based on price momentum and trading volume.",
          "Clean data dashboard displaying financial indicators and percentage variations.",
          "Scheduled automated market data ingestion."
        ],
        "impact": "Saves individual retail investors hours of manual charting by delivering algorithmic daily rankings."
      }
    }
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
