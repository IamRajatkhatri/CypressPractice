import search from "../../PageObjects/google.search.page";

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
  // test case
  it("Scenario 1", function () {
    // launch URL
    cy.visit("https://www.letskodeit.com/practice");
    // show hidden element with invoke
    cy.get("div.mouse-hover-content").invoke("show");
    //click hidden element
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
  //     // test case
  it("Scenario 1", function () {
    //        // launch URL
    cy.visit("https://www.letskodeit.com/practice");
    //        // show hidden element with invoke
    cy.get("div.mouse-hover-content").invoke("show");
    //        //click hidden element
    cy.contains("Top").click();
  });

  it("Test Case2", function () {
    cy.visit(
      "https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm"
    );
    // checking by values
    cy.get(
      "#practiceForm > div:nth-child(8) > div > div > div:nth-child(3) > input"
    ).check();
    // unchecking all values
    cy.get(":checkbox").uncheck();
    // checking and assertion combined with and()
    cy.get(
      "#practiceForm > div:nth-child(8) > div > div > div:nth-child(3) > input"
    )
      .should("be.visible")
      .invoke("val")
      .should("equal", "on");
    // unchecking and assertion combined with and()
    cy.get(
      "#practiceForm > div:nth-child(8) > div > div > div:nth-child(3) > input"
    )
      .uncheck()
      .should("not.be.checked");
  });

  it("Test Case3", function () {
    // launch the url
    cy.visit(
      "https://register.rediff.com/register/register.php?FormName=user_details"
    );
    // click on submit button to produce the alert pop up
    cy.get('input[type="submit"]').click();
    // firing window: alert event with on() method
    cy.on("window:alert", (txt) => {
      //Mocha assertions
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
   
    cy.visit("https://demo.automationtesting.in/AutoComplete.html");
    cy.wait(3000);
  });
  it("Should select an item from autocomplete suggestions", () => {
    cy.get("#searchbox").clear().type("af");

    cy.get("#ui-id-1 > li:nth-child(1)").first().click();
    cy.get(
      "body > section > div.container > div:nth-child(2) > div.col-xs-12.col-xs-offset-4 > div > div"
    ).should("have.text", "Afghanistan");
  });
});
