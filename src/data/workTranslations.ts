import type { Language } from "./translations";

export type WorkTranslations = {
  nav: {
    back: string;
    bugReports: string;
    testCases: string;
    automation: string;
    reports: string;
  };
  hero: {
    label: string;
    heading: string;
    subtitle: string;
  };
  sections: {
    bugReports: {
      label: string;
      heading: string;
      description: string;
      empty: string;
    };
    testCases: {
      label: string;
      heading: string;
      description: string;
      empty: string;
    };
    automation: {
      label: string;
      heading: string;
      description: string;
      empty: string;
    };
    reports: {
      label: string;
      heading: string;
      description: string;
      empty: string;
    };
  };
};

const en: WorkTranslations = {
  nav: {
    back: "← Portfolio",
    bugReports: "Bug Reports",
    testCases: "Test Cases",
    automation: "Automation",
    reports: "Reports",
  },
  hero: {
    label: "Work samples",
    heading: "Real QA work.",
    subtitle: "Bug reports, test cases, automation scripts and test execution reports from real projects.",
  },
  sections: {
    bugReports: {
      label: "Bug Reports",
      heading: "How I document defects",
      description: "Clear, reproducible, actionable. Every bug report tells a story.",
      empty: "Examples coming soon.",
    },
    testCases: {
      label: "Test Cases",
      heading: "How I design coverage",
      description: "Structured test cases that cover happy paths, edge cases and risk areas.",
      empty: "Examples coming soon.",
    },
    automation: {
      label: "Automation",
      heading: "Scripts & frameworks",
      description: "Cypress and Playwright scripts written for real feature coverage.",
      empty: "Examples coming soon.",
    },
    reports: {
      label: "Test Reports",
      heading: "Execution summaries",
      description: "Run results, coverage metrics and observations from real test cycles.",
      empty: "Examples coming soon.",
    },
  },
};

const es: WorkTranslations = {
  nav: {
    back: "← Portfolio",
    bugReports: "Bug Reports",
    testCases: "Casos de prueba",
    automation: "Automatización",
    reports: "Reportes",
  },
  hero: {
    label: "Trabajo real",
    heading: "QA en acción.",
    subtitle: "Bug reports, casos de prueba, scripts de automatización y reportes de ejecución de proyectos reales.",
  },
  sections: {
    bugReports: {
      label: "Bug Reports",
      heading: "Cómo documento defectos",
      description: "Claro, reproducible y accionable. Cada bug report cuenta una historia.",
      empty: "Ejemplos próximamente.",
    },
    testCases: {
      label: "Casos de prueba",
      heading: "Cómo diseño cobertura",
      description: "Casos estructurados que cubren caminos felices, bordes y áreas de riesgo.",
      empty: "Ejemplos próximamente.",
    },
    automation: {
      label: "Automatización",
      heading: "Scripts y frameworks",
      description: "Scripts de Cypress y Playwright escritos para cobertura de features reales.",
      empty: "Ejemplos próximamente.",
    },
    reports: {
      label: "Reportes de ejecución",
      heading: "Resúmenes de ciclos de testing",
      description: "Resultados de ejecución, métricas de cobertura y observaciones de ciclos reales.",
      empty: "Ejemplos próximamente.",
    },
  },
};

export const workTranslations: Record<Language, WorkTranslations> = { en, es };
