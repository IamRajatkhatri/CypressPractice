// resourcesPageLinks.ts

import { ResourcesPage } from '../../PageObjects/ResourcesPage';

describe('Resources Page Links', () => {
    const resourcesPage = new ResourcesPage();

    beforeEach(() => {
        cy.viewport(1314, 648);
        resourcesPage.visit();
        cy.wait(1000);
        cy.get('#headlessui-popover-button-6').click();
    });

    it('should check that Docs link is visible and clickable', () => {
        cy.wait(2000);
        const linkSelectors = resourcesPage.linkSelectors;
       // resourcesPage.clickLink(linkSelectors.docs);
        resourcesPage.verifyLinkVisibility(linkSelectors.docs);
        resourcesPage.verifyLinkClickable(linkSelectors.docs);
    });

    it('should check that Real World App link is visible and clickable', () => {
        cy.wait(2000);
        const linkSelectors = resourcesPage.linkSelectors;
       // resourcesPage.clickLink(linkSelectors.realWorldApp);
        resourcesPage.verifyLinkVisibility(linkSelectors.realWorldApp);
        resourcesPage.verifyLinkClickable(linkSelectors.realWorldApp);
    });

    it('should check that YouTube link is visible and clickable', () => {
        cy.wait(2000);
        const linkSelectors = resourcesPage.linkSelectors;
        resourcesPage.verifyLinkVisibility(linkSelectors.youTube);
        resourcesPage.verifyLinkClickable(linkSelectors.youTube);
    });

    it('should check that Discord link is visible and clickable', () => {
        cy.wait(2000);
        const linkSelectors = resourcesPage.linkSelectors;
        resourcesPage.verifyLinkVisibility(linkSelectors.discord);
        resourcesPage.verifyLinkClickable(linkSelectors.discord);
    });

    it('should check that GitHub link is visible and clickable', () => {
        cy.wait(2000);
        const linkSelectors = resourcesPage.linkSelectors;
        resourcesPage.verifyLinkVisibility(linkSelectors.gitHub);
        resourcesPage.verifyLinkClickable(linkSelectors.gitHub);
    });
});
describe('Resources Page Links', () => {
    const resourcesPage = new ResourcesPage();

    beforeEach(() => {
        cy.visit('/');
    });

    it('Verify that clicking on the "Docs" link navigates to "https://docs.cypress.io/"', () => {
        resourcesPage.clickDocsLink();
        cy.url().should('eq', 'https://docs.cypress.io/');
    });

    it('Verify that clicking on the "Real World App" link navigates to "https://github.com/cypress-io/cypress-realworld-app"', () => {
        resourcesPage.clickRealWorldAppLink();
        cy.url().should('eq', 'https://github.com/cypress-io/cypress-realworld-app');
    });

    it('Verify that clicking on the "YouTube" link navigates to "https://www.youtube.com/channel/UC-EOsTo2l2x39e4JmSaWNRQ"', () => {
        resourcesPage.clickYoutubeLink();
        cy.url().should('eq', 'https://www.youtube.com/channel/UC-EOsTo2l2x39e4JmSaWNRQ');
    });

    it('Verify that clicking on the "Discord" link navigates to "https://discord.com/invite/cypress"', () => {
        resourcesPage.clickDiscordLink();
        cy.url().should('eq', 'https://discord.com/invite/cypress');
    });

    it('Verify that clicking on the "GitHub" link navigates to "https://github.com/cypress-io/cypress-realworld-testing"', () => {
        resourcesPage.clickGithubLink();
        cy.url().should('eq', 'https://github.com/cypress-io/cypress-realworld-testing');
    });
});

// describe('Resources Page Links', () => {
//     const resourcesPage = new ResourcesPage();

//     beforeEach(() => {
//         cy.viewport(1314, 648);
//         resourcesPage.visit();
//         cy.wait(1000);
//         cy.get('#headlessui-popover-button-6').click();
//     });

//     it('should check that Docs link is visible and clickable', () => {
//         cy.wait(2000);
//         const linkSelectors = resourcesPage.linkSelectors;
//         resourcesPage.verifyLinkVisibility(linkSelectors.docs);
//         resourcesPage.verifyLinkClickable(linkSelectors.docs);
//         resourcesPage.clickLink(linkSelectors.docs);
//         cy.url().should('eq', 'https://docs.cypress.io/');
//     });

//     it('should check that Real World App link is visible and clickable', () => {
//         cy.wait(2000);
//         const linkSelectors = resourcesPage.linkSelectors;
//         resourcesPage.verifyLinkVisibility(linkSelectors.realWorldApp);
//         resourcesPage.verifyLinkClickable(linkSelectors.realWorldApp);
//         resourcesPage.clickLink(linkSelectors.realWorldApp);
//         cy.url().should('eq', 'https://github.com/cypress-io/cypress-realworld-app');
//     });

//     it('should check that YouTube link is visible and clickable', () => {
//         cy.wait(2000);
//         const linkSelectors = resourcesPage.linkSelectors;
//         resourcesPage.verifyLinkVisibility(linkSelectors.youTube);
//         resourcesPage.verifyLinkClickable(linkSelectors.youTube);
//         resourcesPage.clickLink(linkSelectors.youTube);
//         cy.url().should('eq', 'https://www.youtube.com/channel/UC-EOsTo2l2x39e4JmSaWNRQ');
//     });

//     it('should check that Discord link is visible and clickable', () => {
//         cy.wait(2000);
//         const linkSelectors = resourcesPage.linkSelectors;
//         resourcesPage.verifyLinkVisibility(linkSelectors.discord);
//         resourcesPage.verifyLinkClickable(linkSelectors.discord);
//         resourcesPage.clickLink(linkSelectors.discord);
//         cy.url().should('eq', 'https://discord.com/invite/cypress');
//     });

//     it('should check that GitHub link is visible and clickable', () => {
//         cy.wait(2000);
//         const linkSelectors = resourcesPage.linkSelectors;
//         resourcesPage.verifyLinkVisibility(linkSelectors.gitHub);
//         resourcesPage.verifyLinkClickable(linkSelectors.gitHub);
//         resourcesPage.clickLink(linkSelectors.gitHub);
//         cy.url().should('eq', 'https://github.com/cypress-io/cypress-realworld-testing');
//     });
// });
