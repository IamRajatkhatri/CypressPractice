export class MenuPage {
    getOpenMenuButton() {
      return cy.get('button[id^="headlessui-popover-button-"]')
    }
  }