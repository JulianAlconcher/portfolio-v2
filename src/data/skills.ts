export interface SkillItem {
  name: string;
  level?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  items: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    "category": "Frontend & UI",
    "iconName": "Layout",
    "description": "Interfaces reactivas, accesibles, performantes y centradas en el usuario.",
    "items": [
      {
        "name": "Astro",
        "level": "Avanzado",
        "highlight": true
      },
      {
        "name": "React",
        "level": "Avanzado",
        "highlight": true
      },
      {
        "name": "Next.js",
        "level": "Avanzado",
        "highlight": true
      },
      {
        "name": "TypeScript",
        "level": "Avanzado",
        "highlight": true
      },
      {
        "name": "Tailwind CSS",
        "level": "Avanzado",
        "highlight": true
      },
      {
        "name": "HTML5 / CSS3",
        "level": "Experto"
      },
      {
        "name": "Responsive Design",
        "level": "Experto"
      },
      {
        "name": "Vite",
        "level": "Avanzado"
      }
    ]
  },
  {
    "category": "Backend & APIs",
    "iconName": "Database",
    "description": "Servicios robustos, arquitecturas limpias y persistencia optimizada.",
    "items": [
      {
        "name": "Node.js",
        "level": "Avanzado",
        "highlight": true
      },
      {
        "name": "Python",
        "level": "Avanzado",
        "highlight": true
      },
      {
        "name": "Java",
        "level": "Avanzado",
        "highlight": true
      },
      {
        "name": "PostgreSQL",
        "level": "Intermedio",
        "highlight": true
      },
      {
        "name": "RESTful APIs",
        "level": "Avanzado"
      },
      {
        "name": "Express",
        "level": "Avanzado"
      },
      {
        "name": "MongoDB",
        "level": "Intermedio"
      },
      {
        "name": "SQL",
        "level": "Avanzado"
      }
    ]
  },
  {
    "category": "Sistemas & Low-Level",
    "iconName": "Cpu",
    "description": "Software nativo, optimización de memoria y utilidades del sistema.",
    "items": [
      {
        "name": "Swift (macOS)",
        "level": "Intermedio",
        "highlight": true
      },
      {
        "name": "C",
        "level": "Avanzado",
        "highlight": true
      },
      {
        "name": "Networking (TCP/IP, WAN)",
        "level": "Avanzado",
        "highlight": true
      },
      {
        "name": "Sistemas Operativos",
        "level": "Avanzado"
      },
      {
        "name": "POSIX / Concurrencia",
        "level": "Intermedio"
      },
      {
        "name": "Memory Management",
        "level": "Avanzado"
      },
      {
        "name": "Algoritmos & EDD",
        "level": "Avanzado"
      }
    ]
  },
  {
    "category": "DevOps, Tools & AI",
    "iconName": "Terminal",
    "description": "Herramientas de automatización, entornos Linux y procesamiento de datos.",
    "items": [
      {
        "name": "Git & GitHub",
        "level": "Experto",
        "highlight": true
      },
      {
        "name": "Linux / macOS CLI",
        "level": "Experto",
        "highlight": true
      },
      {
        "name": "Docker",
        "level": "Intermedio",
        "highlight": true
      },
      {
        "name": "Satellite GIS / NDVI",
        "level": "Intermedio",
        "highlight": true
      },
      {
        "name": "Bash / Zsh Scripting",
        "level": "Avanzado"
      },
      {
        "name": "CI / CD & Vercel",
        "level": "Avanzado"
      },
      {
        "name": "Zed / VSCode Setup",
        "level": "Experto"
      }
    ]
  }
];
