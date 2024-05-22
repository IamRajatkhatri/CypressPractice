export class NavigationPage {
    realWorldExamplesLink = "a[href='/real-world-examples']";
    tutorialsLink = "a[href='/tutorials']";
  
    clickRealWorldExamples() {
      cy.get(this.realWorldExamplesLink).click({ multiple: true });
    }
  
    clickTutorials() {
      cy.get(this.tutorialsLink).click();
    }
  }