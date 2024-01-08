describe('Radiobuttom', () => {
    beforeEach(() => {
        //cy.login('max1', '12345');
        cy.visit('/login')
        cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(3) > input').type('max1');
        cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(4) > input').type('12345{enter}');
    });

    it('Check UI', () => {
        cy.visit('/usergroup')
        cy.get('#sidebar > div > div.menu > div:nth-child(17) > a > div.menu-text').click();
        cy.get('.form-control').type('max1');
        cy.get(':nth-child(8) > .btn-outline-theme').click();
        cy.get(':nth-child(2) > :nth-child(2) > .form-check > .form-check-input').check().should('be.checked')
        //unselecting checkbox
        cy.get(':nth-child(2) > :nth-child(2) > .form-check > .form-check-input').uncheck().should('not.be.checked')
    });
    it('Check Box', () => {
        cy.visit('/usergroup')
        cy.get('#sidebar > div > div.menu > div:nth-child(17) > a > div.menu-text').click();
        cy.get('.form-control').type('max1');
        cy.get(':nth-child(8) > .btn-outline-theme').click();
        cy.wait(1000)
        //seleccting all checkbox
        cy.get('input.form-check-input').check({ force: true }).should('be.checked')
        //seleccting first/last checkbox
        cy.wait(1000)
        cy.get('input.form-check-input').first().check({ force: true })

        cy.get('input.form-check-input').last().check({ force: true }).should('be.checked')
    });
    it.only('Test CheckBox', () => {
        cy.visit('/usergroup')
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(17) > a:nth-child(1) > div:nth-child(2)")
            .click({ focus: true })
        cy.get('.ms-auto > .btn').click()
        cy.get("input[placeholder='ระบุชื่อผู้ใช้งาน']").type('maxmaxmax3')
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(2)").type('123456')
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > input:nth-child(2)").type('123456')
        cy.get("input[placeholder='ระบุชื่อ']").type("maxmax5550007")
        cy.get("input[placeholder='ระบุนามสกุล']").type("mama")
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select:nth-child(2)")
            .select('UserTester')
        cy.get("input[placeholder='ระบุเบอร์โทรศัพท์']").type("091234578")
        cy.get("input[placeholder='ระบุอีเมล์']").type("max@gmail.com")
        cy.get("input[placeholder='ระบุไลน์ไอดี']").type("maxww")
        cy.get("button[type='submit']").click()
        cy.wait(1000)
        cy.get("input[type='search']").type("maxmaxmax3")
        cy.get('.btn-outline-theme > .bi').click()
        cy.get("tbody >  tr > td > div > input")
            .uncheck({ force: true }).should('not.be.checked')



    })

});
