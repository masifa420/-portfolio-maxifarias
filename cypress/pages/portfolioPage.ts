class PortfolioPage {
  // ── Navigation ────────────────────────────────────────────────────────────

  visit() { return cy.visit("/"); }

  // ── Getters: Hero ─────────────────────────────────────────────────────────

  get heroSection() { return cy.getByTestId("heroSection"); }
  get heroName() { return cy.getByTestId("heroName"); }
  get heroHook() { return cy.getByTestId("heroHook"); }
  get heroSubtitle() { return cy.getByTestId("heroSubtitle"); }
  get heroLocation() { return cy.getByTestId("heroLocation"); }
  get heroEmailLink() { return cy.getByTestId("heroEmailLink"); }
  get heroLinkedinLink() { return cy.getByTestId("heroLinkedinLink"); }
  get heroStats() { return cy.getByTestId("heroStats"); }
  heroStat(index: number) { return cy.getByTestId(`heroStat${index}`); }

  // ── Getters: Sections ─────────────────────────────────────────────────────

  get experienceSection() { return cy.getByTestId("experienceSection"); }
  get skillsSection() { return cy.getByTestId("skillsSection"); }
  get aboutSection() { return cy.getByTestId("aboutSection"); }
  get humanSection() { return cy.getByTestId("humanSection"); }
  get philosophySection() { return cy.getByTestId("philosophySection"); }
  get trainingSection() { return cy.getByTestId("trainingSection"); }
  get competenciesSection() { return cy.getByTestId("competenciesSection"); }
  get contactSection() { return cy.getByTestId("contactSection"); }

  // ── Getters: Skills ───────────────────────────────────────────────────────

  skillCategory(index: number) { return cy.getByTestId(`skillCategory${index}`); }
  skillToggle(index: number) { return cy.getByTestId(`skillToggle${index}`); }
  skillItem(categoryIndex: number, itemIndex: number) {
    return cy.getByTestId(`skillItem-${categoryIndex}-${itemIndex}`);
  }

  // ── Getters: Philosophy ───────────────────────────────────────────────────

  philosophyCard(index: number) { return cy.getByTestId(`philosophyCard${index}`); }
  philosophyCardTitle(index: number) { return cy.getByTestId(`philosophyCardTitle${index}`); }
  philosophyCardBody(index: number) { return cy.getByTestId(`philosophyCardBody${index}`); }

  // ── Getters: Experience ───────────────────────────────────────────────────

  experienceJob(index: number) { return cy.getByTestId(`experienceJob${index}`); }
  experienceCompany(index: number) { return cy.getByTestId(`experienceCompany${index}`); }
  experienceRole(index: number) { return cy.getByTestId(`experienceRole${index}`); }
  experienceBullet(jobIndex: number, bulletIndex: number) {
    return cy.getByTestId(`experienceBullet-${jobIndex}-${bulletIndex}`);
  }

  // ── Getters: Training ─────────────────────────────────────────────────────

  trainingGroup(index: number) { return cy.getByTestId(`trainingGroup${index}`); }
  trainingGroupLabel(index: number) { return cy.getByTestId(`trainingGroupLabel${index}`); }
  trainingCert(groupIndex: number, certIndex: number) {
    return cy.getByTestId(`trainingCert-${groupIndex}-${certIndex}`);
  }

  // ── Getters: Competencies ─────────────────────────────────────────────────

  competencyBtn(index: number) { return cy.getByTestId(`competencyBtn${index}`); }
  competencyLang(index: number) { return cy.getByTestId(`competencyLang${index}`); }
  get competencyDesc() { return cy.getByTestId("competencyDesc"); }
  get competencyActiveTitle() { return cy.getByTestId("competencyActiveTitle"); }
  get competencyActiveBody() { return cy.getByTestId("competencyActiveBody"); }

  // ── Getters: Contact & Footer ─────────────────────────────────────────────

  get contactEmailLink() { return cy.getByTestId("contactEmailLink"); }
  get contactLinkedinLink() { return cy.getByTestId("contactLinkedinLink"); }
  get footer() { return cy.getByTestId("footer"); }
  get footerName() { return cy.getByTestId("footerName"); }
  get footerRole() { return cy.getByTestId("footerRole"); }

  // ── Actions ───────────────────────────────────────────────────────────────

  clickHeroEmail() { return this.heroEmailLink.click(); }
  clickHeroLinkedin() { return this.heroLinkedinLink.click(); }
  clickContactEmail() { return this.contactEmailLink.click(); }
  clickContactLinkedin() { return this.contactLinkedinLink.click(); }

  toggleSkill(index: number) { return this.skillToggle(index).click(); }
  clickCompetency(index: number) { return this.competencyBtn(index).click(); }

  scrollToSection(testId: string) {
    return cy.getByTestId(testId).scrollIntoView();
  }

  // ── Assertions ────────────────────────────────────────────────────────────

  shouldBeLoaded() {
    this.heroSection.should("be.visible");
    this.heroName.should("be.visible").and("not.be.empty");
    return this;
  }

  shouldHaveHeroName(name: string) {
    return this.heroName.should("contain.text", name);
  }

  shouldHaveLocation(location: string) {
    return this.heroLocation.should("contain.text", location);
  }

  shouldHaveStatValue(index: number, value: string) {
    return this.heroStat(index).should("contain.text", value);
  }

  shouldSkillBeExpanded(index: number) {
    return this.skillCategory(index).should("have.attr", "data-testid");
  }

  shouldFooterShowName(name: string) {
    return this.footerName.should("contain.text", name);
  }

  shouldFooterShowRole(role: string) {
    return this.footerRole.should("contain.text", role);
  }
}

export const portfolioPage = new PortfolioPage();
