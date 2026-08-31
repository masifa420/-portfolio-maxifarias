type SectionKey = "bugReports" | "testCases" | "automation" | "reports";

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

class WorkPage {
  // ── Navigation ────────────────────────────────────────────────────────────

  visit() { return cy.visit("/work"); }

  // ── Getters: Page intro ───────────────────────────────────────────────────

  get introSection() { return cy.getByTestId("workHeroSection"); }
  get introHeading() { return cy.getByTestId("workHeroHeading"); }
  get introSubtitle() { return cy.getByTestId("workHeroSubtitle"); }

  // ── Getters: Sections ─────────────────────────────────────────────────────

  section(key: SectionKey) { return cy.getByTestId(`workSection${capitalize(key)}`); }
  sectionHeading(key: SectionKey) { return cy.getByTestId(`workSectionHeading${capitalize(key)}`); }
  sectionDesc(key: SectionKey) { return cy.getByTestId(`workSectionDesc${capitalize(key)}`); }

  // ── Getters: Bug Reports ──────────────────────────────────────────────────

  bugReportCard(id: string) { return cy.getByTestId(`bugReportCard-${id}`); }
  bugReportToggle(id: string) { return cy.getByTestId(`bugReportToggle-${id}`); }
  bugReportBody(id: string) { return cy.getByTestId(`bugReportBody-${id}`); }
  bugReportFix(id: string) { return cy.getByTestId(`bugReportFix-${id}`); }

  // ── Getters: Gherkin bottom sheet ─────────────────────────────────────────

  get gherkinMobileTrigger() { return cy.getByTestId("gherkinMobileTrigger"); }
  get gherkinSheetOverlay() { return cy.getByTestId("gherkinSheetOverlay"); }
  get gherkinSheet() { return cy.getByTestId("gherkinSheet"); }
  get gherkinSheetClose() { return cy.getByTestId("gherkinSheetClose"); }

  // ── Getters: Test Cases ───────────────────────────────────────────────────

  tcCard(id: string) { return cy.getByTestId(`tcCard-${id}`); }
  tcToggle(id: string) { return cy.getByTestId(`tcToggle-${id}`); }
  tcStepsToggle(id: string) { return cy.getByTestId(`tcStepsToggle-${id}`); }
  tcResultToggle(id: string) { return cy.getByTestId(`tcResultToggle-${id}`); }
  tcSteps(id: string) { return cy.getByTestId(`tcSteps-${id}`); }
  tcResult(id: string) { return cy.getByTestId(`tcResult-${id}`); }
  tcPrecondition(id: string, index: number) {
    return cy.getByTestId(`tcPrecondition-${id}-${index}`);
  }
  tcStep(id: string, index: number) {
    return cy.getByTestId(`tcStep-${id}-${index}`);
  }
  tcExpectedResult(id: string, index: number) {
    return cy.getByTestId(`tcExpectedResult-${id}-${index}`);
  }

  // ── Actions: Bug Reports ──────────────────────────────────────────────────

  openBugReport(id: string) { return this.bugReportToggle(id).click(); }
  closeBugReport(id: string) { return this.bugReportToggle(id).click(); }

  // ── Actions: Gherkin ──────────────────────────────────────────────────────

  openGherkinSheet() { return this.gherkinMobileTrigger.click(); }
  closeGherkinSheet() { return this.gherkinSheetClose.click(); }
  closeGherkinSheetByOverlay() { return this.gherkinSheetOverlay.click("topLeft"); }

  // ── Actions: Test Cases ───────────────────────────────────────────────────

  openTcCard(id: string) { return this.tcToggle(id).click(); }
  closeTcCard(id: string) { return this.tcToggle(id).click(); }
  openTcSteps(id: string) { return this.tcStepsToggle(id).click(); }
  openTcResult(id: string) { return this.tcResultToggle(id).click(); }

  // ── Assertions: Page intro ────────────────────────────────────────────────

  shouldBeLoaded() {
    this.introSection.should("be.visible");
    this.introHeading.should("be.visible").and("not.be.empty");
    return this;
  }

  // ── Assertions: Bug Reports ───────────────────────────────────────────────

  shouldHaveBugReportCard(id: string) {
    return this.bugReportCard(id).should("exist");
  }

  shouldHaveBugReportCollapsed(id: string) {
    return this.bugReportBody(id).should("not.exist");
  }

  shouldHaveBugReportExpanded(id: string) {
    return this.bugReportBody(id).should("be.visible");
  }

  // ── Assertions: Test Cases ────────────────────────────────────────────────

  shouldHaveTcCard(id: string) {
    return this.tcCard(id).should("exist");
  }

  shouldHaveTcCollapsed(id: string) {
    return this.tcSteps(id).should("not.exist");
  }

  shouldHaveTcStepsVisible(id: string) {
    return this.tcSteps(id).should("be.visible");
  }

  shouldHaveTcResultVisible(id: string) {
    return this.tcResult(id).should("be.visible");
  }

  shouldHaveSectionVisible(key: SectionKey) {
    return this.section(key).should("be.visible");
  }
}

export const workPage = new WorkPage();
