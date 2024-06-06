// headerTests.ts

import { Header } from '../../PageObjects/Header';

describe('Header Tests', () => {
    const header = new Header();

    beforeEach(() => {
        cy.viewport(1314, 648);
        cy.visit('https://learn.cypress.io/');
        cy.wait(1000);
    });

    it('Verify that clicking the "Resources" button displays a dropdown with resource options', () => {
        header.clickResourcesButton();
        cy.wait(1000);
        cy.get('.grid > :nth-child(2) > .text-sm').should('be.visible');
    });

    it('Verify that the "Tutorials" link redirects to the correct page', () => {
        header.clickTutorialsLink();
        cy.url().should('eq', 'https://learn.cypress.io/tutorials');
    });
});
