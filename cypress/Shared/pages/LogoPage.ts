export class LogoPage {
    getLogo() {
      return cy.get('img[alt="Cypress Logo"]')
    }
  }