describe('Mysuite ', () => {

    it('Demo fixture Login', () => {

        cy.visit('/')
        cy.fixture('maxtest').then((data) => {
            cy.visit('/login')
            cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(3) > input').type(data.username);
            cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(4) > input').type(data.password);
            cy.get('#root > div > div.app-content.p-0 > div > div > form > button').click();
        })
    });



});
