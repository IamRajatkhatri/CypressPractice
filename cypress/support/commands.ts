// commands.ts
Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('/login'); 
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('button[type="submit"]').click();
  cy.get('.user-profile').should('be.visible');
});

Cypress.Commands.add('disableXhrAndLogs', () => {
  cy.intercept('GET', '**/*').as('xhrInterceptor');
  cy.intercept('POST', '**/*').as('xhrInterceptor');
  cy.intercept('PUT', '**/*').as('xhrInterceptor');
  cy.intercept('DELETE', '**/*').as('xhrInterceptor');
  
  cy.window().then((win) => {
    win.console.log = () => {};
  });
});

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      login(username: string, password: string): void;
      disableXhrAndLogs(): void;
    }
  }
}