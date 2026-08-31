# Cypress E2E Testing — portfolio-maxifarias

End-to-end test suite for the portfolio. Built with **Cypress 14** and **TypeScript**, following the Page Object Model pattern.

---

## Table of Contents

- [Requirements](#requirements)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Conventions](#conventions)
- [Page Object Model](#page-object-model)
- [Custom Commands](#custom-commands)
- [Adding a New Test](#adding-a-new-test)

---

## Requirements

- Node.js ≥ 18
- Next.js dev server running on `http://localhost:3000`

---

## Setup

Dependencies are already included in `package.json`. Install once:

```bash
npm install
```

---

## Running Tests

Always start the dev server before running tests:

```bash
# Terminal 1 — start the app
npm run dev

# Terminal 2 — run Cypress
npm run cy:open     # interactive UI (recommended for development)
npm run cy:run      # headless (CI / command line)
```

### Useful flags

```bash
# Run a single spec file
npx cypress run --spec "cypress/e2e/TC-001-work-button-mobile.cy.ts"

# Run with a specific browser
npx cypress run --browser chrome

# Run in a specific viewport (override inside the test with cy.viewport)
```

---

## Project Structure

```
cypress/
│
├── e2e/                              # Test spec files
│   └── TC-001-work-button-mobile.cy.ts
│
├── pages/                            # Page Object Model classes
│   ├── navPage.ts                    # Nav component (shared across pages)
│   ├── portfolioPage.ts              # Portfolio page  /
│   └── workPage.ts                   # Work page       /work
│
├── support/
│   ├── commands.ts                   # Custom Cypress commands
│   ├── commands.d.ts                 # TypeScript types for custom commands
│   └── e2e.ts                        # Entry point — imports commands
│
├── tsconfig.json                     # TypeScript config scoped to cypress/
└── README.md
```

---

## Conventions

### Test file naming — kebab-case

Spec files follow the pattern `TC-NNN-description.cy.ts`:

```
TC-001-work-button-mobile.cy.ts
TC-002-hero-links.cy.ts
TC-003-skills-accordion.cy.ts
```

The `TC-NNN` prefix links each file to its test case ID for full traceability.

### POM file naming — PascalCase

Page Object files match the class they export:

```
NavPage.ts        → class NavPage
PortfolioPage.ts  → class PortfolioPage
WorkPage.ts       → class WorkPage
```

> **Current filenames** (`navPage.ts`) will be updated to PascalCase in a future refactor.

### Selectors — `data-testid` only

All selectors use `data-testid` attributes. Never select by class, tag, or text content:

```typescript
// ✅ correct
cy.getByTestId("navBtnWork")

// ❌ avoid — breaks on style changes
cy.get(".pill-link")
cy.get("a").contains("Work")
```

`data-testid` values follow **camelCase** for static parts, and **camelCase + dash + ID** for dynamic ones:

```
navBtnWork           ← static
bugReportCard-BUG-001  ← dynamic (camelCase prefix + original ID)
tcStep-TC-001-2        ← dynamic with index
```

### Viewport — mobile first for TC-001

Each test sets its own viewport in `beforeEach`. Default in `cypress.config.ts` is `1280 × 720`.

```typescript
beforeEach(() => {
  cy.setMobileViewport(); // 390 × 844
  portfolioPage.visit();
});
```

---

## Page Object Model

Each POM class has three layers:

```
Getters      →  what the element IS   (returns cy.getByTestId(...))
Actions      →  what the user DOES    (click, type, scroll)
Assertions   →  what we VERIFY        (should be visible, contain text)
```

### Example usage in a test

```typescript
import { navPage }       from "../pages/navPage";
import { portfolioPage } from "../pages/portfolioPage";
import { workPage }      from "../pages/workPage";

it("navigates to /work on mobile", () => {
  cy.setMobileViewport();
  portfolioPage.visit();

  navPage.btnWork.should("be.visible");   // getter + assertion
  navPage.clickWork();                     // action

  workPage.shouldBeLoaded();              // assertion method
  cy.url().should("include", "/work");
});
```

### Available POMs

#### `navPage`

| Layer | Method | Description |
|---|---|---|
| Getter | `nav` | `<nav>` element |
| Getter | `btnWork` | "Work →" pill button |
| Getter | `btnPortfolio` | "← Portfolio" pill button |
| Getter | `langToggle` | Language toggle button |
| Getter | `navLink(section)` | Desktop nav link by section name |
| Action | `clickWork()` | Navigate to /work |
| Action | `clickPortfolio()` | Navigate to / |
| Action | `clickLangToggle()` | Toggle EN ↔ ES |
| Assertion | `shouldBeVisible()` | Nav bar is visible |
| Assertion | `shouldHideDesktopLinks()` | Desktop links not visible (mobile) |

#### `portfolioPage`

| Layer | Method | Description |
|---|---|---|
| Getter | `heroSection` | Hero section |
| Getter | `heroName` | Name heading |
| Getter | `heroStat(i)` | Stat item by index |
| Getter | `skillToggle(i)` | Skill accordion toggle by index |
| Getter | `competencyBtn(i)` | Competency pill by index |
| Getter | `trainingCert(group, cert)` | Cert item by group and cert index |
| Action | `toggleSkill(i)` | Open/close skill category |
| Action | `clickCompetency(i)` | Activate competency description |
| Assertion | `shouldBeLoaded()` | Hero section and name visible |
| Assertion | `shouldHaveHeroName(name)` | Assert name text |
| Assertion | `shouldHaveStatValue(i, value)` | Assert stat value by index |

#### `workPage`

| Layer | Method | Description |
|---|---|---|
| Getter | `introSection` | Work page intro section |
| Getter | `section(key)` | Section by key: `bugReports`, `testCases`, etc. |
| Getter | `bugReportCard(id)` | Bug report card by ID |
| Getter | `tcCard(id)` | Test case card by ID |
| Getter | `tcStep(id, i)` | Individual step by TC ID and index |
| Getter | `tcExpectedResult(id, i)` | Expected result item |
| Action | `openBugReport(id)` | Expand a bug report card |
| Action | `openTcCard(id)` | Expand a test case card |
| Action | `openTcSteps(id)` | Expand steps sub-accordion |
| Action | `openTcResult(id)` | Expand expected result sub-accordion |
| Action | `openGherkinSheet()` | Open Gherkin bottom sheet (mobile) |
| Action | `closeGherkinSheet()` | Close Gherkin sheet via button |
| Assertion | `shouldBeLoaded()` | Intro section and heading visible |
| Assertion | `shouldHaveBugReportExpanded(id)` | Bug report body is visible |
| Assertion | `shouldHaveBugReportCollapsed(id)` | Bug report body does not exist |
| Assertion | `shouldHaveTcStepsVisible(id)` | TC steps panel is visible |
| Assertion | `shouldHaveSectionVisible(key)` | Work section is visible |

---

## Custom Commands

Defined in `support/commands.ts`. Type declarations in `support/commands.d.ts`.

### `cy.getByTestId(testId)`

Single entry point for all `data-testid` selectors. Changing the attribute name (e.g. to `data-cy`) only requires editing this one command.

```typescript
cy.getByTestId("navBtnWork")
// equivalent to: cy.get('[data-testid="navBtnWork"]')
```

### `cy.setMobileViewport()`

Sets the standard mobile viewport used across the test suite: **390 × 844 px** (iPhone 14 Pro).

```typescript
cy.setMobileViewport()
// equivalent to: cy.viewport(390, 844)
```

---

## Adding a New Test

1. **Create the spec file** in `cypress/e2e/` following the naming convention:

   ```
   TC-002-hero-contact-links.cy.ts
   ```

2. **Import the POMs** you need:

   ```typescript
   import { navPage }       from "../pages/navPage";
   import { portfolioPage } from "../pages/portfolioPage";
   ```

3. **Structure the test** with `describe` → `context` → `it`:

   ```typescript
   describe("TC-002 | Hero contact links", () => {
     beforeEach(() => {
       portfolioPage.visit();
     });

     context("Email link", () => {
       it("is visible in the hero section", () => {
         portfolioPage.heroEmailLink.should("be.visible");
       });
     });
   });
   ```

4. **If you need a new page**, create a POM in `cypress/pages/` with getters, actions and assertions following the existing pattern.

5. **If you need a new element**, add its `data-testid` to the component first, then add the getter to the corresponding POM.

---

## Configuration

`cypress.config.ts` at the project root:

| Option | Value | Description |
|---|---|---|
| `baseUrl` | `http://localhost:3000` | Default base URL for `cy.visit()` |
| `viewportWidth` | `1280` | Default desktop width |
| `viewportHeight` | `720` | Default desktop height |
| `video` | `false` | No video recording (enable for CI if needed) |
| `screenshotOnRunFailure` | `true` | Screenshot on failure |
