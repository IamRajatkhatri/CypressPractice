import search from "../../PageObjects/google.search.page";
import '@4tw/cypress-drag-drop';

describe("test suite 1", () => {
  it("Login Sucessfully", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.title().should("eq", "OrangeHRM");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
  });
});

describe("test suite 2", () => {
  it("validating dropdown", () => {
    cy.visit("https://demo.automationtesting.in/Register.html");

    cy.get("#msdd").click();
    cy.get(".ui-corner-all").contains("Arabic").click();
    cy.get(".ui-corner-all").contains("Dutch").click();
    cy.get("span[role='combobox']").click({ force: true });
    cy.get("input[role='textbox']").type("Den");
    cy.get("input[role='textbox']").type("{enter}");
  });

  it("Explains country dropdown", () => {
    cy.visit("https://demo.automationtesting.in/Register.html");
  });
});

describe("Tutorialspoint Test", function () {
 
  it("Scenario 1", function () {

    cy.visit("https://www.letskodeit.com/practice");
   
    cy.get("div.mouse-hover-content").invoke("show");
  
    cy.contains("Top").click();
  });
});

describe("Google Navigation", () => {
  it("Google Search", () => {
    cy.visit("https://www.google.com");
    //search.googleSearch.type("Something");
    //search.googleSearchBtn.click({force:true});
    // search.searchResults.should('be.visible');
  });
});

describe("Tutorialspoint Test", function () {

  it("Test Case1", function () {
   
    cy.visit("https://www.letskodeit.com/practice");
    
    cy.get("div.mouse-hover-content").invoke("show");
  
    cy.contains("Top").click();
  });

  it("Test Case2", function () {
    cy.visit(
      "https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm"
    );
   
    cy.get(
      "#practiceForm > div:nth-child(8) > div > div > div:nth-child(3) > input"
    ).check();
   
    cy.get(":checkbox").uncheck();
   
    cy.get(
      "#practiceForm > div:nth-child(8) > div > div > div:nth-child(3) > input"
    )
      .should("be.visible")
      .invoke("val")
      .should("equal", "on");
  
    cy.get(
      "#practiceForm > div:nth-child(8) > div > div > div:nth-child(3) > input"
    )
      .uncheck()
      .should("not.be.checked");
  });

  it("Test Case3", function () {
 
    cy.visit(
      "https://register.rediff.com/register/register.php?FormName=user_details"
    );
   
    cy.get('input[type="submit"]').click();
  
    cy.on("window:alert", (txt) => {
    
      expect(txt).to.contains("Your full name cannot be blank.");
    });
  });
});


describe("Example to demonstrate commonly used JQuery commands in cypress", () => {
  it("Check if a button is disabled or enabled", function () {
    cy.visit(
      "https://getbootstrap.com/docs/4.0/components/buttons/#disabled-state"
    );
    cy.get("button.btn.btn-lg.btn-primary")
      .eq(2)
      .then(($btn) => {
        if ($btn.is(":disabled")) {
          cy.log("Button is disabled");
        } else {
          cy.log("Button is enabled");
        }
      });
    cy.get("button.btn.btn-lg.btn-primary")
      .eq(1)
      .then(($btn) => {
        if ($btn.is(":enabled")) {
          cy.log("Button is enabled");
        } else {
          cy.log("Button is disabled");
        }
      });
  });

  it("Remove the disabled attribute and validate that button is enabled now", function () {
    cy.visit(
      "https://getbootstrap.com/docs/4.0/components/buttons/#disabled-state"
    );
    cy.get("button.btn.btn-lg.btn-primary")
      .eq(2)
      .then(($btn) => {
        cy.wrap($btn.removeAttr("disabled")).should("be.enabled");
      });
  });

  it("Assert inner text", function () {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get("h2.title")
      .eq(0)
      .then(($ele: JQuery<HTMLElement>) => {
        expect($ele.text()).to.equal("Web Table");
      });
  });

  it("Assert CSS property", function () {
    cy.visit("https://the-internet.herokuapp.com/tables");
    cy.get("table#table1").then(($ele: JQuery<HTMLElement>) => {
      expect($ele.css("margin-bottom")).to.equal("20px");
    });
  });
});

describe("Autocomplete functionality", () => {
  beforeEach(() => {
    cy.viewport(1024, 768)
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.wait(3000);
  });
  // it("Should select an item from autocomplete suggestions", () => {
  //   cy.get(":nth-child(5) > .dropdown-toggle").click();
  //   cy.get("#header > nav > div > div.navbar-collapse.collapse.navbar-right > ul > li:nth-child(5) > ul > li:nth-child(2) > a").click();
  //   cy.wait(3000)
  //   cy.get("#searchbox").clear().type("af");

  //   cy.get("#ui-id-1 > li:nth-child(1)").first().click();
  //   cy.get(
  //     "body > section > div.container > div:nth-child(2) > div.col-xs-12.col-xs-offset-4 > div > div"
  //   ).should("have.text", "Afghanistan");
  // });

  // it("Should validate add to basket button" , () => {
  //   cy.get("#header > nav > div > div.navbar-collapse.collapse.navbar-right > ul > li:nth-child(10) > a").click();
  //   cy.wait(2000);
  //   cy.get("#menu-item-40 > a").click();
  //   cy.get("#content > ul > li.post-170.product.type-product.status-publish.product_cat-javascript.product_tag-javascript.has-post-title.no-post-date.has-post-category.has-post-tag.has-post-comment.has-post-author.instock.downloadable.taxable.shipping-taxable.purchasable.product-type-simple > a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart").click();

  // })

  it("Should validate CKEditor page working " , () => {
    cy.get('#header > nav > div > div.navbar-collapse.collapse.navbar-right > ul > li:nth-child(8) > a').click();
    cy.get("#header > nav > div > div.navbar-collapse.collapse.navbar-right > ul > li.dropdown.open > ul > li:nth-child(2) > a").click();
    cy.wait(2000);
    //cy.get(".cke_wysiwyg_frame").type("I am automation engineer");
  })
});


describe('Handling multiple windows', () => {
  // beforeEach(() => {
  //   cy.disableXhrAndLogs();
  // });
  it('should switch to the second window', () => {
    cy.visit('https://the-internet.herokuapp.com/windows');
    cy.get('#content > div > a').invoke('removeAttr', 'target').click();
    cy.window().then((win) => {
      const secondWindowUrl = win.location.href;
      expect(secondWindowUrl).to.include('/windows');
      win.close();
    });
  });
});

describe('Valiadting heading of sign up page', () => {
  it('Scenario 1', () => {
    cy.visit("https://accounts.google.com");
    cy.wait(2000)
    // cy.get('#headingText').should('contain', 'Sign'); 
    // cy.log("Validation complete")
  });
});

// describe('iframe validation', () => {
//   it('Test Case 1', () => {
//      cy.visit("https://jqueryui.com/draggable/");
//      cy.frameLoaded('.demo-frame');
//      cy.iframe('.demo-frame').find("#draggable").then((t) => {
//         const frmtxt = t.text();
//         expect(frmtxt).to.contains('Drag me around');
//         cy.log(frmtxt);
//      });
//   });
// });

describe('Validation of alert', () => {
  it("Scenario 1", () => {
     cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
     cy.get(':nth-child(2) > button').click();
     cy.on("window:confirm", (t: string) => {
     expect(t).to.equal("I am a JS Confirm");
     });
  });
});

describe('Example Of How To Handle Shadow Dom in Cypress', () => {

  before(() => {
    cy.viewport(1014, 748);
    cy.visit("https://books-pwakit.appspot.com/");
  });

  it('Enter some data in text box and search then validate the URL', () => {
    cy.get('book-app')
      .shadow()
      .find('app-header')
      .find('.toolbar-bottom')
      .find('book-input-decorator')
      .find('#input')
      .type('Math', { force: true })
      .type('{enter}');
    cy.url().should('include', 'explore?q=Math');
  });
});

describe('JQuery and Cypress Test Case1', () => {
  it('Performing JQuery Operation', () => {
    cy.viewport(1014, 748);
    cy.request("https://demoqa.com/")
  .its('body')
  .then((html: string) => {
    const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
    const title = titleMatch ? titleMatch[1] : 'Title not found';
    cy.log('Title of Page is: ' + title);
  });
  });
});

describe('Tutorialspoint Test', () => {
  let signInData: { email: string, password: string }; 
  before(() => { 

     cy.fixture('example').then((data: { email: string, password: string }) => {
        signInData = data;
     });
  });
  it('Test Case1', () => {
    
     cy.visit("https://www.linkedin.com/login");
     cy.wait(1000);
    
     cy.get('#username').type(signInData.email);
     cy.get('#password').type(signInData.password);
  });
});


describe('Example of BaseUrl', () => {
  it('Example of Baseurl', () => {
    const baseUrl: string | null = Cypress.config().baseUrl;
    if (baseUrl) {
      cy.visit(baseUrl); 
    } else {
      throw new Error('Base URL is not defined in Cypress configuration');
    }
  });
});

// describe.only('Cypress Visual Testing', () => {
//   it('Compare fullpage of Google page', () => {
//   cy.visit("https://www.google.com/?hl=hi");
//   cy.get('#APjFqb').type("Kuch")
//   cy.get('#APjFqb').compareSnapshot('google-page');
//   })
//   })














