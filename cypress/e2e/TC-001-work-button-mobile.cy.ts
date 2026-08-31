// TC-001 | "Work →" button visibility on mobile
// Bug: BUG-001 | Env: Main | Device: Mobile < 640px | Status: PASS

import { navPage } from "../pages/navPage";
import { portfolioPage } from "../pages/portfolioPage";
import { workPage } from "../pages/workPage";

describe('TC-001 | "Work →" button visibility on mobile', () => {
  beforeEach(() => {
    cy.setMobileViewport();
    portfolioPage.visit();
  });

  // ── Preconditions ─────────────────────────────────────────────────────────

  it("precondition: portfolio loads correctly on mobile viewport", () => {
    portfolioPage.heroSection.should("be.visible");
    portfolioPage.heroName.should("be.visible").and("not.be.empty");
  });

  // ── Step 2-3 | Nav + Work button visible ──────────────────────────────────

  context("Visibility", () => {
    it("renders the nav bar on mobile", () => {
      navPage.shouldBeVisible();
    });

    it('shows the "Work →" button in the nav bar at mobile viewport', () => {
      navPage.btnWork.should("be.visible").and("contain.text", "Work");
    });

    it("does NOT show desktop nav links on mobile (hidden sm:flex)", () => {
      navPage.shouldHideDesktopLinks();
    });
  });

  // ── Step 4-5 | Click → /work ──────────────────────────────────────────────

  context("Navigation", () => {
    it('tapping "Work →" changes URL to /work', () => {
      navPage.clickWork();
      cy.url().should("include", "/work");
    });

    it("work page hero content loads correctly on mobile", () => {
      navPage.clickWork();

      workPage.introSection.should("be.visible");
      workPage.introHeading.should("be.visible").and("not.be.empty");
      workPage.introSubtitle.should("be.visible");
    });

    it("work page sections are present after navigation", () => {
      navPage.clickWork();

      workPage.section("bugReports").should("exist");
      workPage.section("testCases").should("exist");
    });

    it('shows "← Portfolio" back button in nav after navigating to /work', () => {
      navPage.clickWork();

      navPage.btnPortfolio.should("be.visible").and("contain.text", "Portfolio");
    });
  });

  // ── Regression | Other viewports ──────────────────────────────────────────

  context("Regression — other viewports", () => {
    it('shows "Work →" button on desktop viewport (1280px)', () => {
      cy.viewport(1280, 720);
      portfolioPage.visit();
      navPage.btnWork.should("be.visible");
    });

    it('shows "Work →" button on tablet viewport (768px)', () => {
      cy.viewport(768, 1024);
      portfolioPage.visit();
      navPage.btnWork.should("be.visible");
    });
  });
});
