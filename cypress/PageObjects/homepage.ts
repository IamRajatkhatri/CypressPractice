class HomePage {
    logoSelector: string;
  
    constructor() {
      this.logoSelector = 'a[href="/"]';
    }
  
    clickLogo() {
      cy.get(this.logoSelector).click({ multiple: true, force: true });
    }
  }
  
  export default HomePage;