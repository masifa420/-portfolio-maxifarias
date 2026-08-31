import type { Language } from "./translations";

export type GherkinLine = { keyword: "feature" | "scenario" | "step" | "blank"; text: string };

export type BugReportExample = {
  id: string;
  title: string;
  severity: string;
  priority: string;
  environment: string;
  device: string;
  browser: string;
  gherkin: GherkinLine[];
  status: string;
  fix: string;
};

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
  bugReportExample: BugReportExample;
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
  bugReportExample: {
    id: "BUG-001",
    title: '"Work →" button not visible on mobile — navigation broken',
    severity: "High",
    priority: "High",
    environment: "portfolio-maxifarias.vercel.app",
    device: "Mobile < 640px",
    browser: "Any",
    gherkin: [
      { keyword: "feature", text: "Feature: Mobile page navigation" },
      { keyword: "blank",   text: "" },
      { keyword: "scenario", text: "  Scenario: Access the Work page from a mobile device" },
      { keyword: "step",    text: '    Given the user opens the portfolio on a mobile device (viewport < 640px)' },
      { keyword: "step",    text: '    When  they look at the navigation bar' },
      { keyword: "step",    text: '    Then  the "Work →" button should be visible' },
      { keyword: "step",    text: '    But   the button is hidden inside a "hidden sm:flex" container' },
      { keyword: "step",    text: '    And   the user has no access to the /work page' },
    ],
    status: "RESOLVED",
    fix: 'Moved the button outside the hidden <ul> — always visible on any viewport.',
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
  bugReportExample: {
    id: "BUG-001",
    title: 'Botón "Work →" no visible en mobile — navegación rota',
    severity: "Alta",
    priority: "Alta",
    environment: "portfolio-maxifarias.vercel.app",
    device: "Mobile < 640px",
    browser: "Cualquier navegador",
    gherkin: [
      { keyword: "feature",  text: "Feature: Navegación mobile entre páginas" },
      { keyword: "blank",    text: "" },
      { keyword: "scenario", text: "  Scenario: Acceder a la página Work desde un mobile" },
      { keyword: "step",     text: "    Given el usuario abre el portfolio en un mobile (viewport < 640px)" },
      { keyword: "step",     text: '    When  observa la barra de navegación' },
      { keyword: "step",     text: '    Then  debería ver el botón "Work →"' },
      { keyword: "step",     text: '    But   el botón está oculto dentro de un elemento "hidden sm:flex"' },
      { keyword: "step",     text: "    And   el usuario no tiene ningún acceso a la página /work" },
    ],
    status: "RESUELTO",
    fix: "Se movió el botón fuera del <ul> oculto — ahora siempre visible en cualquier viewport.",
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
