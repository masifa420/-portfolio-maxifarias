export type Language = "en" | "es";

export type Translations = {
  nav: {
    about: string;
    skills: string;
    experience: string;
    training: string;
    contact: string;
    langToggle: string;
  };
  hero: {
    subtitle: string;
    hook: string;
    stats: { value: string; label: string }[];
  };
  philosophy: {
    label: string;
    heading: string;
    cards: { title: string; body: string }[];
  };
  about: {
    label: string;
    heading: string;
    summary: string;
  };
  human: {
    label: string;
    heading: string;
    body: string[];
  };
  skills: {
    label: string;
    heading: string;
    categories: Record<string, string>;
  };
  experience: {
    label: string;
    heading: string;
    jobs: {
      type: string;
      period: string;
      bullets: string[];
    }[];
  };
  training: {
    label: string;
    heading: string;
    badgeInProgress: string;
    groups: {
      group: string;
      items: { name: string; source: string; year?: number; inProgress?: boolean }[];
    }[];
  };
  competencies: {
    label: string;
    heading: string;
    languagesLabel: string;
    items: { name: string; description: string }[];
    languages: { lang: string; level: string }[];
  };
  contact: {
    label: string;
    heading: string;
    blurb: string;
  };
  footer: {
    role: string;
  };
};

const en: Translations = {
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    training: "Training",
    contact: "Contact",
    langToggle: "ES",
  },
  hero: {
    subtitle: "Functional · Manual · Automation Testing",
    hook: "Test like QA, think like a user.",
    stats: [
      { value: "4+", label: "years experience" },
      { value: "Fintech", label: "specialist" },
      { value: "Intl.", label: "projects" },
    ],
  },
  philosophy: {
    label: "How I think",
    heading: "Quality is more than testing",
    cards: [
      {
        title: "Quality starts before testing",
        body: "I like to get involved from the beginning — understand what we're building, ask questions, and spot potential issues before we even reach the testing phase.",
      },
      {
        title: "A good bug speaks for itself",
        body: "I aim for every report to be clear, concrete, and useful — so anyone on the team can understand what happened, how to reproduce it, and why it matters.",
      },
      {
        title: "Testing is a mindset",
        body: "I don't stick to expected scenarios only. I like to explore, ask questions, and think about the different ways a feature can be used.",
      },
    ],
  },
  about: {
    label: "Profile",
    heading: "About me",
    summary:
      "I'm a Semi-Senior QA Tester with over 4 years in tech.\n\nI started as a Trainee and grew from there — taking on international projects and progressively more responsibility, working mainly in fintech and financial software.\n\nI work with functional testing, manual testing, and automation. I'm especially interested in understanding how each product works, what users actually need, and where risks might appear.\n\nI like learning, trying new tools, and continuously improving how I do QA.",
  },
  human: {
    label: "Beyond the role",
    heading: "QA, but human.",
    body: [
      "Technology changes constantly. Tools change, processes change, and new ways of building software keep appearing.",
      "But behind every product, there are people.",
      "That's why I think doing QA also means observing, exploring, asking questions, and thinking like a user — because quality isn't just about finding bugs. It's also about understanding what we're building and helping build it better.",
      "In the end, behind every product there's a person who will use it — and QA is also about taking care of that experience.",
    ],
  },
  skills: {
    label: "Expertise",
    heading: "Technical skills",
    categories: {
      "Testing & QA": "Testing & QA",
      Automation: "Automation",
      "API & Backend": "API & Backend",
      Cloud: "Cloud",
      Programming: "Programming",
      "Tools & AI": "Tools & AI",
    },
  },
  experience: {
    label: "History",
    heading: "Work experience",
    jobs: [
      {
        type: "Software Factory",
        period: "Dec 2022 — Present",
        bullets: [
          "Joined as a Trainee and grew into my current role through international projects and progressively broader responsibilities.",
          "Started with test execution and defect tracking; expanded into requirements analysis, scenario design, and test planning.",
          "As I grew professionally, I worked on higher-complexity features and integrations, incorporating automation and a more complete view of applications and their potential risks.",
          "In my current role, I have a greater involvement in defining priorities and coverage strategies, while supporting fellow QA engineers and collaborating with technical and business teams.",
        ],
      },
    ],
  },
  training: {
    label: "Learning",
    heading: "Certifications & training",
    badgeInProgress: "In preparation",
    groups: [
      {
        group: "Certification",
        items: [
          { name: "ISTQB Certified Tester – Foundation Level (CTFL)", source: "", inProgress: true },
        ],
      },
      {
        group: "QA Specialization",
        items: [
          { name: "AWS for Software Testers: Cloud Automation Testing", source: "Udemy", year: 2025 },
          { name: "Cypress Automation Testing", source: "Udemy", year: 2024 },
          { name: "Software Testing", source: "Udemy", year: 2024 },
          { name: "Exploratory Testing for Agile Teams", source: "Udemy", year: 2024 },
        ],
      },
      {
        group: "Technical Training",
        items: [
          { name: "Python", source: "Udemy", year: 2024 },
          { name: "Full Stack Development", source: "Coderhouse", year: 2022 },
          { name: "JavaScript · TypeScript · Web Development", source: "Coderhouse", year: 2022 },
        ],
      },
    ],
  },
  competencies: {
    label: "Soft skills",
    heading: "Professional competencies",
    languagesLabel: "Languages",
    items: [
      {
        name: "Analytical thinking",
        description: "I like to understand the system before starting to test it.",
      },
      {
        name: "Critical thinking",
        description: "I question scenarios and look for different ways to use a feature.",
      },
      {
        name: "Ownership",
        description: "I take responsibility for the tasks I pick up and see them through to the end.",
      },
      {
        name: "Problem-solving",
        description: "I investigate before assuming and try to understand the root cause of issues.",
      },
      {
        name: "Effective communication",
        description: "I try to make information clear and useful for every person on the team.",
      },
      {
        name: "Priority management",
        description: "I organize work by impact, risk, and project needs — focusing on what affects users or the business most.",
      },
      {
        name: "Leadership & mentorship",
        description: "I share knowledge, support fellow QA engineers, and take initiative when I can contribute.",
      },
    ],
    languages: [
      { lang: "Spanish", level: "Native" },
      { lang: "English", level: "Intermediate" },
    ],
  },
  contact: {
    label: "Reach out",
    heading: "Let's talk",
    blurb:
      "Open to new opportunities in QA, testing, and quality assurance. Feel free to reach out.",
  },
  footer: {
    role: "QA Tester",
  },
};

const es: Translations = {
  nav: {
    about: "Sobre mí",
    skills: "Habilidades",
    experience: "Experiencia",
    training: "Formación",
    contact: "Contacto",
    langToggle: "EN",
  },
  hero: {
    subtitle: "Testing Funcional · Manual · Automatización",
    hook: "Probar como QA, pensar como usuario.",
    stats: [
      { value: "4+", label: "años de experiencia" },
      { value: "Fintech", label: "especialista" },
      { value: "Intl.", label: "proyectos" },
    ],
  },
  philosophy: {
    label: "Cómo pienso",
    heading: "La calidad es más que testear",
    cards: [
      {
        title: "La calidad empieza antes de testear",
        body: "Me gusta involucrarme desde el principio: entender qué estamos construyendo, hacer preguntas y detectar posibles problemas antes de llegar a la etapa de testing.",
      },
      {
        title: "Un buen bug habla por sí solo",
        body: "Busco que cada reporte sea claro, concreto y útil. Que cualquier persona del equipo pueda entender qué pasó, cómo reproducirlo y por qué debería importarnos.",
      },
      {
        title: "Testear es una mentalidad",
        body: "No me quedo solamente con los escenarios esperados. Me gusta explorar, hacer preguntas y pensar en diferentes formas en las que una funcionalidad puede ser utilizada.",
      },
    ],
  },
  about: {
    label: "Perfil",
    heading: "Sobre mí",
    summary:
      "Soy QA Tester Semi-Senior y trabajo en tecnología desde hace más de 4 años.\n\nDurante este tiempo fui creciendo desde una posición trainee hasta trabajar de forma más autónoma en proyectos internacionales, principalmente dentro del mundo fintech y financiero.\n\nTrabajo con testing funcional, manual y automatización, y me interesa especialmente entender cómo funciona cada producto, qué necesita el usuario y dónde pueden aparecer riesgos.\n\nMe gusta aprender, probar nuevas herramientas y seguir mejorando mi forma de hacer QA.",
  },
  human: {
    label: "Más allá del rol",
    heading: "QA, pero humano.",
    body: [
      "La tecnología cambia constantemente. Las herramientas cambian, los procesos cambian y aparecen nuevas formas de construir software.",
      "Pero detrás de cada producto hay personas.",
      "Por eso creo que hacer QA también implica observar, explorar, preguntar y pensar como usuario — porque la calidad no se trata solamente de encontrar errores. También se trata de entender lo que estamos construyendo y ayudar a construirlo mejor.",
      "Al final, detrás de cada producto hay una persona que lo va a usar, y QA también consiste en cuidar esa experiencia.",
    ],
  },
  skills: {
    label: "Habilidades",
    heading: "Habilidades técnicas",
    categories: {
      "Testing & QA": "Testing & QA",
      Automation: "Automatización",
      "API & Backend": "API & Backend",
      Cloud: "Cloud",
      Programming: "Programación",
      "Tools & AI": "Herramientas & IA",
    },
  },
  experience: {
    label: "Trayectoria",
    heading: "Experiencia laboral",
    jobs: [
      {
        type: "Software Factory",
        period: "Dic 2022 — Presente",
        bullets: [
          "Ingresé como Trainee y fui creciendo profesionalmente hasta mi posición actual, participando en proyectos internacionales y asumiendo progresivamente nuevas responsabilidades.",
          "Inicialmente, me enfoqué en la ejecución de pruebas y el seguimiento de defectos. Luego amplié mi participación hacia el análisis de requerimientos, diseño de escenarios y planificación de pruebas.",
          "A medida que fui creciendo profesionalmente, trabajé sobre funcionalidades e integraciones de mayor complejidad, incorporando automatización y una visión más completa de las aplicaciones y sus posibles riesgos.",
          "En mi posición actual, tengo una mayor participación en la definición de prioridades y estrategias de cobertura, además de acompañar a otros integrantes de QA y colaborar con equipos técnicos y de negocio.",
        ],
      },
    ],
  },
  training: {
    label: "Formación",
    heading: "Certificaciones y formación",
    badgeInProgress: "En preparación",
    groups: [
      {
        group: "Certificación",
        items: [
          { name: "ISTQB Certified Tester – Foundation Level (CTFL)", source: "", inProgress: true },
        ],
      },
      {
        group: "Especialización en QA",
        items: [
          { name: "AWS para Testers: Cloud Automation Testing", source: "Udemy", year: 2025 },
          { name: "Cypress Automation Testing", source: "Udemy", year: 2024 },
          { name: "Software Testing", source: "Udemy", year: 2024 },
          { name: "Exploratory Testing para Equipos Ágiles", source: "Udemy", year: 2024 },
        ],
      },
      {
        group: "Formación técnica",
        items: [
          { name: "Python", source: "Udemy", year: 2024 },
          { name: "Desarrollo Full Stack", source: "Coderhouse", year: 2022 },
          { name: "JavaScript · TypeScript · Desarrollo Web", source: "Coderhouse", year: 2022 },
        ],
      },
    ],
  },
  competencies: {
    label: "Competencias",
    heading: "Competencias profesionales",
    languagesLabel: "Idiomas",
    items: [
      {
        name: "Pensamiento analítico",
        description: "Me gusta entender el sistema antes de empezar a probarlo.",
      },
      {
        name: "Pensamiento crítico",
        description: "Cuestiono los escenarios y busco diferentes formas de utilizar una funcionalidad.",
      },
      {
        name: "Ownership",
        description: "Me hago responsable de las tareas que tomo y de llevarlas hasta el final.",
      },
      {
        name: "Resolución de problemas",
        description: "Investigo antes de asumir y busco entender la causa de los problemas.",
      },
      {
        name: "Comunicación efectiva",
        description: "Intento que la información sea clara y útil para cada persona del equipo.",
      },
      {
        name: "Gestión de prioridades",
        description: "Organizo el trabajo según el impacto, el riesgo y las necesidades del proyecto.",
      },
      {
        name: "Liderazgo y mentoría",
        description: "Comparto conocimientos, acompaño a otros integrantes de QA y tomo iniciativa cuando puedo aportar.",
      },
    ],
    languages: [
      { lang: "Español", level: "Nativo" },
      { lang: "Inglés", level: "Intermedio" },
    ],
  },
  contact: {
    label: "Contacto",
    heading: "Hablemos",
    blurb:
      "Abierto a nuevas oportunidades en QA, testing y aseguramiento de calidad. No dudes en contactarme.",
  },
  footer: {
    role: "QA Tester",
  },
};

export const translations: Record<Language, Translations> = { en, es };
