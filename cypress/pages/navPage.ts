class NavPage {
  // ── Getters ──────────────────────────────────────────────────────────────

  get nav() { return cy.getByTestId("nav"); }
  get logo() { return cy.getByTestId("navLogo"); }
  get links() { return cy.getByTestId("navLinks"); }
  get btnWork() { return cy.getByTestId("navBtnWork"); }
  get btnPortfolio() { return cy.getByTestId("navBtnPortfolio"); }
  get langToggle() { return cy.getByTestId("navLangToggle"); }

  navLink(section: string) {
    const capitalized = section.charAt(0).toUpperCase() + section.slice(1);
    return cy.getByTestId(`navLink${capitalized}`);
  }

  // ── Actions ───────────────────────────────────────────────────────────────

  clickWork() { return this.btnWork.click(); }
  clickPortfolio() { return this.btnPortfolio.click(); }
  clickLangToggle() { return this.langToggle.click(); }

  // ── Assertions ────────────────────────────────────────────────────────────

  shouldBeVisible() { return this.nav.should("be.visible"); }
  shouldShowWorkButton() { return this.btnWork.should("be.visible"); }
  shouldHideDesktopLinks() { return this.links.should("not.be.visible"); }
}

export const navPage = new NavPage();
