describe('suite 1', () => {
    beforeEach(() => {
        cy.Loginsession('max1', '12345');
        // cy.visit('/login')
        // cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(3) > input').type('max1');
        // cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(4) > input').type('12345{enter}');
    });

    it.skip('check header', () => {
        cy.visit('/dashboard');
        cy.get('[href="/waterpumpsetting"] > .menu-caret > .caret').click()
        cy.get('.menu-submenu > :nth-child(2) > .menu-link > .menu-text').click()
        cy.get(':nth-child(1) > :nth-child(7) > .btn-outline-theme').click()
        cy.get('.modal-footer > .btn-outline-theme').click()
        cy.get('#usertable_filter > label > .form-control').type('max1')
        cy.get(':nth-child(6) > .btn').click()
        cy.get('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > select:nth-child(2)')
            .select('อนุญาต')
        cy.get('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > select:nth-child(2)')
            .select('อนุญาต')
        cy.get('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > select:nth-child(2)')
            .select('อนุญาต')
        cy.get('.was-validated > .modal-footer > .btn-outline-theme').click()
        cy.wait(1000)
        cy.get('#usertable_filter > label > .form-control').type('max2')
        cy.get(':nth-child(6) > .btn').click()
        cy.get('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > select:nth-child(2)')
            .select('อนุญาต')
        cy.get('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > select:nth-child(2)')
            .select('อนุญาต')
        cy.get('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > select:nth-child(2)')
            .select('อนุญาต')
        cy.get('.was-validated > .modal-footer > .btn-outline-theme').click()
        cy.get(':nth-child(4) > :nth-child(1) > .modal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        cy.get('.even > :nth-child(8) > .btn-outline-warning').click()
        cy.get('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > select:nth-child(2)')
            .select('ไม่อนุญาต')
        cy.get('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > select:nth-child(2)')
            .select('ไม่อนุญาต')
        cy.get('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > select:nth-child(2)')
            .select('ไม่อนุญาต')
        cy.get('.was-validated > .modal-footer > .btn-outline-theme').click()
        cy.get('.odd > :nth-child(8) > .btn-outline-danger').click({ focus: true })
        cy.get('.swal2-confirm').click()
        cy.get('.even > :nth-child(8) > .btn-outline-danger').click({ focus: true })
        cy.get('.swal2-confirm').click()
        cy.get('.btn-outline-default').click()
    });
    it.skip('change google map ', () => {
        cy.visit('/');
        cy.get('[href="/pipelinesetting"] > .menu-caret > .caret').click()
        cy.get('.expand > .menu-submenu > .menu-item > .menu-link > .menu-text').click()
        cy.get(':nth-child(2) > :nth-child(5) > .btn-outline-theme > .fa').click()
        cy.get('.modal-footer > .btn-outline-theme').click()
        cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)")
            .click(100, 100)
        cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)")
            .click(200, 200)
        cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)")
            .click(300, 300)
        cy.wait(500)

    })

    it.skip('change google map ', () => {
        cy.visit('/dashboard')
        cy.get('.react-select__control').click({ force: true })
        cy.get('.react-select__menu-list').find('div')
            .should('have.length', 77)
        cy.get('.react-select__menu-list').type('กรุง{enter}')

        cy.wait(1000)

    })
    it('test table', () => {
        cy.visit('/usergroup')
        //ประวัติผู้ใช้งาน
        cy.get(':nth-child(18) > .menu-link > .menu-text').click()
        cy.get(':nth-child(1) > .col-sm-8 > .css-b62m3t-container > .react-select__control > .react-select__value-container > .react-select__input-container').type("max1{enter}")
        cy.get(':nth-child(2) > .css-b62m3t-container > .react-select__control').type("เข้าสู่ระบบ{enter}")
        cy.get(':nth-child(2) > .css-b62m3t-container > .react-select__control').type("สำเร็จ{enter}")
        cy.get('.form-group > :nth-child(4) > .btn').click()
        cy.get('tbody > :nth-child(1) > .active').click({ focus: true })
        cy.get(':nth-child(5) > .active').click({ focus: true })
        cy.get('.applyBtn').click()
        cy.get('.justify-content-end > .btn').click()

        //ประวัติการใช้งาน
        cy.get(':nth-child(19) > .menu-link > .menu-text').click()
    })


});
