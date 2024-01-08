describe('suite 1', () => {
    beforeEach(() => {
      //cy.login('max1', '12345');
      cy.visit('/login')
      cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(3) > input').type('max1');
      cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(4) > input').type('12345{enter}');
    });

    it('check header', () => {
        cy.visit('/')
        cy.get('#sidebar > div > div.menu > div:nth-child(4) > a > div.menu-text').click();
        cy.get('[href="/waterpumpsetting"] > .menu-caret > .caret').click()
        cy.get('.expand > .menu-submenu > :nth-child(1) > .menu-link').click()
        cy.go('back')
        cy.title().should('eq', 'HUD | React Version')
         cy.go('forward')
         cy.title().should('eq', 'HUD | React Version')
    });
});
