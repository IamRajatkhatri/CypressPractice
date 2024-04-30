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