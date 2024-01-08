describe('Alerts Something', () => {
    beforeEach(() => {
        //cy.login('max1', '12345');
        cy.visit('/login')
        cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(3) > input').type('max1');
        cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(4) > input').type('12345{enter}');
    });
    it('JS Alerts ', () => {

        // 1.Alerts it will have some text and an 'OK' buttom
        cy.visit('/usergroup')
        cy.get('#sidebar > div > div.menu > div:nth-child(17) > a > div.menu-text').click();
        cy.get('.form-control').type('max1')
        cy.get('.btn-outline-info').click();
        cy.on('	window:alert', (t) => {
            expect(t).to.contains('รีเซตรหัสผ่าน!')
        })
    });
    it.skip('Confirm Alerts', () => {

    });
    it.skip('Prompt Alerts ', () => {

        // 3.prompt Alerts it will have some text with a text box for user input along with 'OK'

    });
    it.skip('Authenticated Alerts ', () => {

        // 4.Authenticated Alerts 



    });
});
