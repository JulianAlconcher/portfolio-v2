export type Lang = "es" | "en";

export interface Translations {
  nav: {
    projects: string;
    skills: string;
    about: string;
    contact: string;
    talk: string;
    sublabel: string;
  };
  hero: {
    status: string;
    degree: string;
    bio: string;
    btnProjects: string;
    btnCv: string;
    btnContact: string;
    statsRepos: string;
    statsDegree: string;
    statsCyber: string;
  };
  terminal: {
    helpHint: string;
    shortcuts: string;
    whoami: string;
    aboutText: string;
    skillsText: string;
    contactText: string;
    projectsText: string;
  };
  projects: {
    subtitle: string;
    title: string;
    desc: string;
    searchPlaceholder: string;
    showing: string;
    of: string;
    projectsCount: string;
    reset: string;
    challenge: string;
    repo: string;
    live: string;
    noResultsTitle: string;
    noResultsDesc: string;
    clearFilters: string;
    categories: Record<string, string>;
  };
  skills: {
    subtitle: string;
    title: string;
    desc: string;
    badgeFooter: string;
    categories: Record<string, { title: string; desc: string }>;
  };
  about: {
    profileTag: string;
    heading: string;
    p1: string;
    p2: string;
    degreeTitle: string;
    degreeSub: string;
    degreeBadge: string;
    cyberTitle: string;
    cyberSub: string;
    cyberBadge: string;
    btnCv: string;
    exp1Title: string;
    exp1Desc: string;
    exp2Title: string;
    exp2Desc: string;
    certsTitle: string;
  };
  contact: {
    subtitle: string;
    title: string;
    desc: string;
    directChannels: string;
    emailLabel: string;
    btnSendEmail: string;
    btnCopy: string;
    btnCopied: string;
    responseTime: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    namePlaceholder: string;
    emailInputLabel: string;
    emailInputPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    msgLabel: string;
    msgPlaceholder: string;
    btnSubmit: string;
    redirectNotice: string;
  };
  footer: {
    location: string;
    rights: string;
    backToTop: string;
  };
}

export const translations: Record<Lang, Translations> = {
  es: {
    nav: {
      projects: "Proyectos",
      skills: "Habilidades",
      about: "Sobre mí",
      contact: "Contacto",
      talk: "Contacto",
      sublabel: "Ingeniero en Sistemas · Full Stack"
    },
    hero: {
      status: "Ingeniero en Sistemas de Información · UNS",
      degree: "Ingeniero en Sistemas de Información",
      bio: "y Desarrollador Full Stack. Construyo aplicaciones web modernas y software de alto rendimiento con tecnologías como React, Next.js, TypeScript, Node.js, Python, PostgreSQL, Swift y Tailwind CSS.",
      btnProjects: "Ver Proyectos",
      btnCv: "Descargar CV",
      btnContact: "Contacto",
      statsRepos: "Repositorios",
      statsDegree: "Ing. en Sistemas",
      statsCyber: "Ciberseguridad"
    },
    terminal: {
      helpHint: "Escribe help para listar comandos disponibles.",
      shortcuts: "Atajos:",
      whoami: "Julián Alconcher — Ingeniero en Sistemas de Información (UNS) & Desarrollador Full Stack",
      aboutText: "Ingeniero en Sistemas de Información graduado en la Universidad Nacional del Sur (UNS) y Desarrollador Full Stack. Experiencia sólida en TypeScript, React, Next.js, Node.js, Python, PostgreSQL, Swift (macOS) y Ciberseguridad Inteligente (DCIC-UNS).",
      skillsText: "Lenguajes: TypeScript, Python, Swift, Java, C, SQL\nFrontend: React, Next.js, Astro, Tailwind CSS\nBackend: Node.js, Python, PostgreSQL, Prisma, REST APIs\nSeguridad: Ciberseguridad Inteligente, Análisis de Vulnerabilidades",
      contactText: "Email: alconcherjulian@gmail.com | LinkedIn: /in/julian-alconcher | GitHub: /JulianAlconcher",
      projectsText: "AgroLens (Satellite ML), EJCO (Web Astro), GymLAB (Computer Vision), MovieMerch (E-Commerce), MyNetBuddy (macOS/Swift), DuckWallet (Fintech)."
    },
    projects: {
      subtitle: "Portfolio de Software",
      title: "Proyectos & Aplicaciones",
      desc: "Soluciones de agricultura satelital con Machine Learning, sitios web en producción, aplicaciones de sistemas en macOS y proyectos de código abierto.",
      searchPlaceholder: "Buscar por tecnología o nombre (ej: React, Swift, NDVI)...",
      showing: "Mostrando",
      of: "de",
      projectsCount: "proyectos",
      reset: "Restablecer",
      challenge: "Desafío",
      repo: "Repo",
      live: "Live",
      noResultsTitle: "No se encontraron proyectos",
      noResultsDesc: 'Prueba buscando con otro término o seleccionando "Todos".',
      clearFilters: "Limpiar Filtros",
      categories: {
        all: "Todos",
        featured: "Destacados",
        web: "Web & Full Stack",
        agrotech: "AgroTech & AI",
        academic: "IA, Visión & CS",
        systems: "Sistemas & macOS",
        fintech: "Fintech",
        tools: "Dev Tools & Bots"
      }
    },
    skills: {
      subtitle: "Stack & Herramientas",
      title: "Tecnologías Principales",
      desc: "Lenguajes, frameworks y entornos con los que desarrollo software en producción.",
      badgeFooter: "Producción & Proyectos",
      categories: {
        "Frontend & UI": {
          title: "Frontend & UI",
          desc: "Construcción de interfaces interactivas, performantes y accesibles."
        },
        "Backend & APIs": {
          title: "Backend & APIs",
          desc: "Desarrollo de servicios robustos, lógica de negocio y bases de datos."
        },
        "Sistemas & AI": {
          title: "Sistemas & AI",
          desc: "Aplicaciones nativas macOS, machine learning y visión artificial."
        },
        "DevOps & Herramientas": {
          title: "DevOps & Herramientas",
          desc: "Control de versiones, contenedores, automatización y seguridad."
        }
      }
    },
    about: {
      profileTag: "Perfil Profesional",
      heading: "Ingeniería de software con base sólida, buenas prácticas y ciberseguridad.",
      p1: "Graduado de Ingeniería en Sistemas de Información en la Universidad Nacional del Sur (UNS) con experiencia en desarrollo web end-to-end, aplicaciones nativas y procesamiento de datos.",
      p2: "Actualmente cursando la Diplomatura en Ciberseguridad Inteligente en el DCIC - UNS, profundizando en análisis de vulnerabilidades, seguridad de la información y arquitecturas resilientes.",
      degreeTitle: "Ingeniero en Sistemas de Información",
      degreeSub: "Univ. Nacional del Sur (UNS) · 2019 – 2026",
      degreeBadge: "Graduado",
      cyberTitle: "Diplomatura Ciberseguridad Inteligente",
      cyberSub: "DCIC – UNS · 2026",
      cyberBadge: "En curso",
      btnCv: "Descargar CV (PDF Actualizado)",
      exp1Title: "Full-Stack & Freelance",
      exp1Desc: "Desarrollo de productos end-to-end: UX/UI, React, Next.js, Node.js, Python, bases de datos SQL/PostgreSQL y despliegues.",
      exp2Title: "Prácticas & Sustentabilidad",
      exp2Desc: "Frontend web & mobile con React, React Native, TypeScript, Tailwind CSS y backend PHP bajo metodología Scrum.",
      certsTitle: "Certificaciones"
    },
    contact: {
      subtitle: "Contacto",
      title: "Hablemos",
      desc: "¿Tienes una propuesta, un proyecto o te gustaría conversar? Puedes escribirme por email o LinkedIn.",
      directChannels: "Canales directos",
      emailLabel: "Email",
      btnSendEmail: "Enviar Email",
      btnCopy: "Copiar",
      btnCopied: "¡Copiado!",
      responseTime: "Respuesta habitual en < 24hs",
      formTitle: "Envíame un mensaje",
      formDesc: "Completa el formulario para abrir tu cliente de correo con el mensaje listo.",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailInputLabel: "Email",
      emailInputPlaceholder: "tu@email.com",
      subjectLabel: "Asunto",
      subjectPlaceholder: "Proyecto, propuesta laboral...",
      msgLabel: "Mensaje",
      msgPlaceholder: "Escribe tu mensaje aquí...",
      btnSubmit: "Enviar Mensaje",
      redirectNotice: "Redirigiendo a tu cliente de correo para enviar el mensaje..."
    },
    footer: {
      location: "Ingeniero en Sistemas de Información · Bahía Blanca, Argentina.",
      rights: "Todos los derechos reservados.",
      backToTop: "Arriba"
    }
  },
  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      about: "About Me",
      contact: "Contact",
      talk: "Contact",
      sublabel: "Software Engineer · Full Stack"
    },
    hero: {
      status: "Software Engineer · UNS",
      degree: "Software Engineer",
      bio: "and Full Stack Developer. I build modern web applications and high-performance software using technologies like React, Next.js, TypeScript, Node.js, Python, PostgreSQL, Swift, and Tailwind CSS.",
      btnProjects: "View Projects",
      btnCv: "Download Resume",
      btnContact: "Contact Me",
      statsRepos: "Repositories",
      statsDegree: "Software Eng.",
      statsCyber: "Cybersecurity"
    },
    terminal: {
      helpHint: "Type help to list available commands.",
      shortcuts: "Shortcuts:",
      whoami: "Julián Alconcher — Software Engineer (UNS) & Full Stack Developer",
      aboutText: "Software Engineer graduated from Universidad Nacional del Sur (UNS) and Full Stack Developer. Strong experience in TypeScript, React, Next.js, Node.js, Python, PostgreSQL, Swift (macOS), and Intelligent Cybersecurity (DCIC-UNS).",
      skillsText: "Languages: TypeScript, Python, Swift, Java, C, SQL\nFrontend: React, Next.js, Astro, Tailwind CSS\nBackend: Node.js, Python, PostgreSQL, Prisma, REST APIs\nSecurity: Intelligent Cybersecurity, Vulnerability Assessment",
      contactText: "Email: alconcherjulian@gmail.com | LinkedIn: /in/julian-alconcher | GitHub: /JulianAlconcher",
      projectsText: "AgroLens (Satellite ML), EJCO (Web Astro), GymLAB (Computer Vision), MovieMerch (E-Commerce), MyNetBuddy (macOS/Swift), DuckWallet (Fintech)."
    },
    projects: {
      subtitle: "Software Portfolio",
      title: "Projects & Applications",
      desc: "Satellite agriculture solutions with Machine Learning, production websites, native macOS system apps, and open-source projects.",
      searchPlaceholder: "Search by technology or name (e.g., React, Swift, NDVI)...",
      showing: "Showing",
      of: "of",
      projectsCount: "projects",
      reset: "Reset",
      challenge: "Challenge",
      repo: "Repo",
      live: "Live",
      noResultsTitle: "No projects found",
      noResultsDesc: 'Try searching for a different term or selecting "All".',
      clearFilters: "Clear Filters",
      categories: {
        all: "All",
        featured: "Featured",
        web: "Web & Full Stack",
        agrotech: "AgroTech & AI",
        academic: "AI, Vision & CS",
        systems: "Systems & macOS",
        fintech: "Fintech",
        tools: "Dev Tools & Bots"
      }
    },
    skills: {
      subtitle: "Stack & Tools",
      title: "Core Technologies",
      desc: "Languages, frameworks, and environments I use to build production software.",
      badgeFooter: "Production & Projects",
      categories: {
        "Frontend & UI": {
          title: "Frontend & UI",
          desc: "Building interactive, accessible, and high-performance user interfaces."
        },
        "Backend & APIs": {
          title: "Backend & APIs",
          desc: "Developing robust services, business logic, and databases."
        },
        "Sistemas & AI": {
          title: "Systems & AI",
          desc: "Native macOS apps, machine learning models, and computer vision."
        },
        "DevOps & Herramientas": {
          title: "DevOps & Tools",
          desc: "Version control, containerization, automation, and security."
        }
      }
    },
    about: {
      profileTag: "Professional Profile",
      heading: "Software engineering backed by solid foundations, best practices, and cybersecurity.",
      p1: "Graduated as a Software Engineer from Universidad Nacional del Sur (UNS) with experience in end-to-end web development, native applications, and data processing.",
      p2: "Currently pursuing the Postgraduate Diploma in Intelligent Cybersecurity at DCIC - UNS, deepening expertise in vulnerability analysis, information security, and resilient architectures.",
      degreeTitle: "Software Engineer",
      degreeSub: "Univ. Nacional del Sur (UNS) · 2019 – 2026",
      degreeBadge: "Graduated",
      cyberTitle: "Intelligent Cybersecurity Diploma",
      cyberSub: "DCIC – UNS · 2026",
      cyberBadge: "In Progress",
      btnCv: "Download Resume (Updated PDF)",
      exp1Title: "Full-Stack & Freelance",
      exp1Desc: "End-to-end product development: UX/UI, React, Next.js, Node.js, Python, SQL/PostgreSQL databases, and cloud deployments.",
      exp2Title: "Internship & Sustainability",
      exp2Desc: "Web & mobile frontend with React, React Native, TypeScript, Tailwind CSS, and PHP backend under Scrum methodology.",
      certsTitle: "Certifications"
    },
    contact: {
      subtitle: "Contact",
      title: "Let's Connect",
      desc: "Have a proposal, an exciting project, or just want to chat about tech? Feel free to reach out via email or LinkedIn.",
      directChannels: "Direct Channels",
      emailLabel: "Email",
      btnSendEmail: "Send Email",
      btnCopy: "Copy",
      btnCopied: "Copied!",
      responseTime: "Typical response in < 24h",
      formTitle: "Send me a message",
      formDesc: "Fill in the form to open your email client with the message ready.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailInputLabel: "Email",
      emailInputPlaceholder: "your@email.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Project, job inquiry...",
      msgLabel: "Message",
      msgPlaceholder: "Write your message here...",
      btnSubmit: "Send Message",
      redirectNotice: "Redirecting to your email client to send the message..."
    },
    footer: {
      location: "Software Engineer · Bahía Blanca, Argentina.",
      rights: "All rights reserved.",
      backToTop: "Top"
    }
  }
};
