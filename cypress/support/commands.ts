/// <reference path="./commands.d.ts" />

// Custom command: wrapper de data-testid para un punto único de cambio
Cypress.Commands.add("getByTestId", (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`);
});

// Custom command: configura viewport mobile estándar del proyecto
Cypress.Commands.add("setMobileViewport", () => {
  cy.viewport(390, 844);
});
