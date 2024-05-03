import search from "../../PageObjects/google.search.page"


describe("test suite", () => {
    it("Login Sucessfully", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
    })
})


// describe("test suite", function () {
//    // it("homepage should display", function () {
//    //     cy.visit("https://qa.bitdelta.com/en/nomination")
      
//    // })

//     it("Add nominee button should be clicked",() => {
//         cy.visit("https://qa.bitdelta.com/en/nomination")
//         cy.get('.css-48oap0 > .chakra-button').click
//     })
// })

 
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
    
    it('Test Case2', function (){
        cy.visit("https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm");
        // checking by values
        cy.get('#practiceForm > div:nth-child(8) > div > div > div:nth-child(3) > input')
        .check();
        // unchecking all values
        cy.get(':checkbox').uncheck();
        // checking and assertion combined with and()
        cy.get('#practiceForm > div:nth-child(8) > div > div > div:nth-child(3) > input')
        .should('be.visible')
        .invoke('val')
        .should('equal', 'on');
        // unchecking and assertion combined with and()
        cy.get('#practiceForm > div:nth-child(8) > div > div > div:nth-child(3) > input')
        .uncheck().should('not.be.checked');
     });

    it('Test Case3', function (){
        // launch the url
        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details");
        // click on submit button to produce the alert pop up
        cy.get('input[type="submit"]').click();
         // firing window: alert event with on() method
        cy.on('window:alert',(txt)=>{
            //Mocha assertions
            expect(txt).to.contains('Your full name cannot be blank.');
         })
     });
  });

  context('Blog tests', () => {
    // it('Open homepage', () => {
    //     cy.visit('https://agilecoding.io');
    //     cy.get('.blog-title').should('contain.text', "Agile Coding")
    // });

    it("Search article", () => {
        cy.visit('https://agilecoding.io');
       // cy.get('#__next > div > header > div > div.relative.z-40.flex.flex-row.items-center.justify-between.pb-2.pt-8.md\:mb-4 > div.flex.flex-row.items-center.dark\:text-white > button.blog-search-button.focus-ring-base.flex.flex-row.items-center.rounded-full.font-medium.transition.duration-100.ease-in-out.focus-ring-colors-base.hover\:bg-black\/10.dark\:hover\:bg-white\/20.mr-2.p-2').click()
        //cy.get('#radix-\:rj\: > div.relative.mb-2.w-full.md\:mb-4 > input"]').type("Hello")
       // cy.get('#radix-\:rj\: > div.relative.mb-2.w-full.md\:mb-4 > input').parent().siblings().children('a').first().click()
       // cy.get('[data-query="post-title"]').should('have.text', 'Hello AgileCoding.io')
    })
})
describe('Example to demonstrate commonly used JQuery commands in cypress', () => {

    it('Check if a button is disabled or enabled', function () {
        cy.visit('https://getbootstrap.com/docs/4.0/components/buttons/#disabled-state')
        cy.get('button.btn.btn-lg.btn-primary').eq(2).then(($btn) => {
            if ($btn.is(':disabled')) { cy.log('Button is disabled') }
            else { cy.log('Button is enabled') }
        })
        cy.get('button.btn.btn-lg.btn-primary').eq(1).then(($btn) => {
            if ($btn.is(':enabled')) { cy.log('Button is enabled') }
            else { cy.log('Button is disabled') }
        })
    })

    it('Remove the disabled attribute and validate that button is enabled now', function () {
        cy.visit('https://getbootstrap.com/docs/4.0/components/buttons/#disabled-state')
        cy.get('button.btn.btn-lg.btn-primary').eq(2).then(($btn) => {
            cy.wrap($btn.removeAttr('disabled')).should('be.enabled')
        })
    })

    it('Assert inner text', function () {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('h2.title').eq(0).then(($ele: JQuery<HTMLElement>) => {
            expect($ele.text()).to.equal('Web Table')
        })
    })


    it('Assert CSS property', function () {
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('table#table1').then(($ele: JQuery<HTMLElement>) => {
            expect($ele.css('margin-bottom')).to.equal('20px')
        })
    })
})

