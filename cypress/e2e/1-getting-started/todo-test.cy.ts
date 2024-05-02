import search from "../../PageObjects/google.search.page"


describe("test suite", () => {
    it("Login Sucessfully", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click
    })
})


describe("test suite", function () {
   // it("homepage should display", function () {
   //     cy.visit("https://qa.bitdelta.com/en/nomination")
      
   // })

    it("Add nominee button should be clicked",() => {
        cy.visit("https://qa.bitdelta.com/en/nomination")
        cy.get('.css-48oap0 > .chakra-button').click
    })
})

 
describe('Tutorialspoint Test', function () {
    // test case
    it('Scenario 1', function (){
       // launch URL
       cy.visit("https://www.letskodeit.com/practice");
       // show hidden element with invoke
       cy.get('div.mouse-hover-content').invoke('show');
       //click hidden element
       cy.contains('Top').click();
    });
 });

 describe('Google Navigation', () => {
    it('Google Search', () => {
    cy.visit('https://www.google.com')
   //search.googleSearch.type("Something");
    //search.googleSearchBtn.click({force:true});
   // search.searchResults.should('be.visible');
    });
});

 describe('Tutorialspoint Test', function () {
//     // test case
     it('Scenario 1', function (){
//        // launch URL
        cy.visit("https://www.letskodeit.com/practice");
//        // show hidden element with invoke
        cy.get('div.mouse-hover-content').invoke('show');
//        //click hidden element
        cy.contains('Top').click();
    });
  });

  context('Blog tests', () => {
    it('Open homepage', () => {
        cy.visit('https://agilecoding.io');
        cy.get('.blog-title').should('contain.text', "Agile Coding")
    });

    it("Search article", () => {
        cy.visit('https://agilecoding.io');
       // cy.get('#__next > div > header > div > div.relative.z-40.flex.flex-row.items-center.justify-between.pb-2.pt-8.md\:mb-4 > div.flex.flex-row.items-center.dark\:text-white > button.blog-search-button.focus-ring-base.flex.flex-row.items-center.rounded-full.font-medium.transition.duration-100.ease-in-out.focus-ring-colors-base.hover\:bg-black\/10.dark\:hover\:bg-white\/20.mr-2.p-2').click()
        //cy.get('#radix-\:rj\: > div.relative.mb-2.w-full.md\:mb-4 > input"]').type("Hello")
       // cy.get('#radix-\:rj\: > div.relative.mb-2.w-full.md\:mb-4 > input').parent().siblings().children('a').first().click()
       // cy.get('[data-query="post-title"]').should('have.text', 'Hello AgileCoding.io')
    })
})

