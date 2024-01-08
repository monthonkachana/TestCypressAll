describe('ผู้ดูแลระบบ', () => {
    beforeEach(() => {
        //cy.login('test', 'test')
        cy.visit('http://www.smart-insect.com:3005/login')
        cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(3) > input').type('max1');
        cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(4) > input').type('12345{enter}');
    })
    it('test1', () => {
        cy.visit('/')


    })
    it('test2', () => {
        cy.visit('/')

    })
})