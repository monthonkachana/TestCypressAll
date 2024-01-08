describe('Handle click new tab', () => {
    beforeEach(() => {
        //cy.login('max1', '12345');
        cy.visit('/login')
        cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(3) > input').type('max1');
        cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(4) > input').type('12345{enter}');
    });

    it('check new tab', () => {
        cy.visit('/dashboard');
        cy.get('[style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -26px; top: 54px; z-index: 74;"] > img')
            .click({ force: true });

        cy.window().then((win) => {
            const originalOpen = win.open;
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url;
                return null;
            });

            cy.get('.btn')
                .invoke('removeAttr', 'target')
                .click({ force: true });
            cy.url().should('include', 'http://www.smart-insect.com:3005/waterpump/engine-waterPump?deviceID=627f7a2490d93d2dc888a78c&modelType=engine');
            cy.wait(2000)
            cy.wrap(originalOpen).as('originalOpen');
        });

        cy.go('back');
    });
});
