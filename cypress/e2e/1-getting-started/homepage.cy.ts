import HomePage from '../../PageObjects/homepage';

describe('Homepage Tests', () => {
  const homePage = new HomePage();

  it('Verify that the "Workflow" link in the logo redirects to the homepage', () => {
    cy.visit('/');
    homePage.clickLogo();
    cy.url().should('eq', 'https://learn.cypress.io/');
  });
});
