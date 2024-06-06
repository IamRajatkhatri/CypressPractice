// ResourcesPage.ts

export class ResourcesPage {
    public linkSelectors: { [key: string]: string } = {
        docs: 'a[href="https://docs.cypress.io/"]',
        realWorldApp: 'a[href="https://github.com/cypress-io/cypress-realworld-app"]',
        youTube: 'a[href="https://www.youtube.com/channel/UC-EOsTo2l2x39e4JmSaWNRQ"]',
        discord: 'a[href="https://discord.com/invite/cypress"]',
        gitHub: 'a[href="https://github.com/cypress-io/cypress-realworld-testing"]',
    };

    public getLinkSelectors(): { [key: string]: string } {
        return this.linkSelectors;
    }

    visit(): void {
        cy.visit('/');
    }

    clickDocsLink(): void {
        cy.get(this.linkSelectors.docs).click({force:true});
    }

    clickRealWorldAppLink(): void {
        cy.get(this.linkSelectors.realWorldApp).click({force:true});
    }

    clickYoutubeLink(): void {
        cy.get(this.linkSelectors.youTube).click({force:true});
    }

    clickDiscordLink(): void {
        cy.get(this.linkSelectors.discord).click({force:true});
    }

    clickGithubLink(): void {
        cy.get(this.linkSelectors.gitHub).click({force:true});
    }

    getLink(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(selector);
    }

    clickLink(selector: string): void {
        this.getLink(selector).click();
    }

    verifyLinkVisibility(selector: string): void {
        this.getLink(selector).should('be.visible');
    }

    verifyLinkClickable(selector: string): void {
        this.getLink(selector).should('have.attr', 'href');
    }
}
