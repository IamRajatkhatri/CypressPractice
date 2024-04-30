
describe("test suite", () => {
    it("Login Sucessfully", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click
    })
})


// describe("test suite", function () {
//     it("homepage should display", function () {
//         cy.visit("https://qa.bitdelta.com/en/nomination")
      
//     })

//     it("Add nominee button should be clicked",() => {
//         cy.visit("https://qa.bitdelta.com/en/nomination")
//         cy.get('.css-48oap0 > .chakra-button').click
//     })
// })

// describe('Tutorialspoint Test', function () {
//     // test case
//     it('Scenario 1', function (){
//        // launch URL
//        cy.visit("https://www.letskodeit.com/practice");
//        // show hidden element with invoke
//        cy.get('div.mouse-hover-content').invoke('show');
//        //click hidden element
//        cy.contains('Top').click();
//     });
//  });