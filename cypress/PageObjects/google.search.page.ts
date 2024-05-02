class GoogleSearch {
    get googleSearch() { return cy.get('APjFqb').first(); }
    get googleSearchBtn() { return cy.get('.FPdoLc > center > .gNO89b"]').first(); }
   // get searchResults() { return cy.get('h3').first(); }
   // get searchFithResult() { return cy.xpath("//a[contains(@href,'https://en.wikipedia.org/wiki')]").first(); }
}

export default new GoogleSearch;