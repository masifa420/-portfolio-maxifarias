declare namespace Cypress {
  interface Chainable {
    getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    setMobileViewport(): Chainable<void>;
  }
}
