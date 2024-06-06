import { CoursePage } from '../../PageObjects/Coursepage';

describe('Course Navigation', () => {
  const coursePage = new CoursePage();

  beforeEach(() => {
    cy.visit('https://learn.cypress.io/');
  });

  it('Verify that clicking on "Cypress Fundamentals" navigates to the correct course page', () => {
    cy.scrollTo(0, 1500);
    coursePage.clickCourseFundamentals();
   
    cy.get('#headlessui-disclosure-button-34 > span:nth-child(2)').should('contain.text', 'Cypress Fundamentals');
  });

  it('Verify that clicking on "Advanced Cypress Testing Concepts" navigates to the correct course page', () => {
    cy.scrollTo(0, 1500);
    coursePage.clickAdvancedCypressConcepts();
   
    cy.get('#headlessui-disclosure-button-36 > span:nth-child(2)').should('contain.text', 'Advanced Cypress Testing Concepts');
  });
});

