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

export type TestCase = {
  id: string;
  title: string;
  bugId: string;
  environment: string;
  device: string;
  browser: string;
  discoverer: string;
  testData: string;
  fixCommit: string;
  status: string;
  preconditions: string[];
  steps: { action: string; detail: string }[];
  expectedResult: string[];
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
  bugReports: BugReportExample[];
  testCases: TestCase[];
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
  bugReports: [
    {
      id: "BUG-001",
      title: '"Work →" button not visible on mobile — navigation broken',
      severity: "High",
      priority: "High",
      environment: "Main",
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
  ],
  testCases: [
    {
      id: "TC-001",
      title: '"Work →" button visibility on mobile',
      bugId: "BUG-001",
      environment: "Main",
      device: "Mobile < 640px",
      browser: "Any",
      discoverer: "Maximiliano Farias",
      testData: "390 × 844px · Chrome",
      fixCommit: "a4e4f7e",
      status: "PASS",
      preconditions: [
        "Portfolio deployed and accessible on Vercel (Main)",
        "Viewport set to < 640px (real device or DevTools)",
      ],
      steps: [
        { action: 'Open the portfolio on mobile', detail: 'URL: portfolio-maxifarias.vercel.app · Viewport: 390px' },
        { action: 'Observe the top navigation bar', detail: 'Identify visible elements in the nav bar' },
        { action: 'Look for the "Work →" button', detail: 'Verify if the button is present and visible' },
        { action: 'Tap the "Work →" button', detail: 'Touch interaction on real device or click in emulator' },
        { action: 'Verify URL changes to /work', detail: 'Work page loads correctly on mobile viewport' },
      ],
      expectedResult: [
        '"Work →" button is visible in the nav on any viewport',
        'Tapping it navigates correctly to /work',
        'Page transition animation fires (left ← right)',
        '/work content loads without errors on mobile',
      ],
    },
  ],
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
  bugReports: [
    {
      id: "BUG-001",
      title: 'Botón "Work →" no visible en mobile — navegación rota',
      severity: "Alta",
      priority: "Alta",
      environment: "Main",
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
  ],
  testCases: [
    {
      id: "TC-001",
      title: 'Visibilidad del botón "Work →" en mobile',
      bugId: "BUG-001",
      environment: "Main",
      device: "Mobile < 640px",
      browser: "Cualquier navegador",
      discoverer: "Maximiliano Farias",
      testData: "390 × 844px · Chrome",
      fixCommit: "a4e4f7e",
      status: "PASS",
      preconditions: [
        "Portfolio deployado y accesible en Vercel (Main)",
        "Viewport configurado en < 640px (dispositivo real o DevTools)",
      ],
      steps: [
        { action: "Abrir el portfolio en mobile", detail: "URL: portfolio-maxifarias.vercel.app · Viewport: 390px" },
        { action: "Observar la barra de navegación superior", detail: "Identificar los elementos visibles en la nav bar" },
        { action: 'Buscar el botón "Work →" en la nav', detail: "Verificar si el botón está presente y visible" },
        { action: 'Hacer tap en el botón "Work →"', detail: "Interacción táctil en dispositivo real o click en emulador" },
        { action: "Verificar que la URL cambia a /work", detail: "La página Work carga correctamente en viewport mobile" },
      ],
      expectedResult: [
        'El botón "Work →" es visible en la nav en cualquier viewport',
        "Al hacer tap navega correctamente a /work",
        "La transición de página se ejecuta (animación left ← right)",
        "El contenido de /work carga sin errores en mobile",
      ],
    },
  ],
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
