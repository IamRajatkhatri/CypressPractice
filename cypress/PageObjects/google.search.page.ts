class GoogleSearch {
    get googleSearch() { return cy.get('.gLFyf').first(); }
    get googleSearchBtn() { return cy.get('.FPdoLc > center > [name="btnK"]').first(); }
  
    // get searchResults() { return cy.get('h3').first(); }
    // get searchFithResult() { return cy.xpath("//a[contains(@href,'https://en.wikipedia.org/wiki')]").first(); }
}

export default new GoogleSearch();
