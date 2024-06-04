export class CoursePage {
  private courseFundamentals = '[data-test="course-2"]';
  private advancedCypressConcepts = '[data-test="course-3"]';

  

  public clickCourseFundamentals(): void {
      cy.get(this.courseFundamentals).click({ force: true });
  }

  public clickAdvancedCypressConcepts(): void {
      cy.get(this.advancedCypressConcepts).click({ force: true });
  }
}
