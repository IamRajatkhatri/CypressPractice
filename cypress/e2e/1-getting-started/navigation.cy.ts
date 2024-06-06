import { NavigationPage } from "../../PageObjects/navigation-page";

describe("Navigation Links", () => {
  const navigationPage = new NavigationPage();

  beforeEach(() => {
    cy.viewport(1024, 768)
    cy.visit("/");
  });

  it("should not redirect 'Real World Examples' to incorrect pages", () => {
    navigationPage.clickRealWorldExamples();
    cy.url().should("eq", "https://learn.cypress.io/real-world-examples");
  });

  it("should not redirect 'Tutorials' to incorrect pages", () => {
    navigationPage.clickTutorials();
    cy.url().should("eq", "https://learn.cypress.io/tutorials");
  });
});