export class Coursepage {
    private courseFundamentals = '[data-test="course-2"]';
    private advancedCypressConcepts = '[data-test="course-3"]';
  
    clickCourseFundamentals() {
      cy.get(this.courseFundamentals).click({force:true});
    }
  
    clickAdvancedCypressConcepts() {
      cy.get(this.advancedCypressConcepts).click({force:true});
    }
  }