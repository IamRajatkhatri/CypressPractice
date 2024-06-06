// header.ts

export class Header {
    private resourcesButton: string = "#headlessui-popover-button-6";
    private tutorialsLink: string = 'a[href="/tutorials"]';

    public clickResourcesButton(): void {
        cy.get(this.resourcesButton).click();
    }

    public clickTutorialsLink(): void {
        cy.get(this.tutorialsLink).click();
    }
}
