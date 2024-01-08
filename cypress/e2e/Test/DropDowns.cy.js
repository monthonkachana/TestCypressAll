describe('Handle DropDowns', () => {
    beforeEach(() => {
        //cy.login('max1', '12345');
        cy.visit('/login')
        cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(3) > input').type('max1');
        cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(4) > input').type('12345{enter}');
    });

    it('handle with dropdowns', () => {
        cy.visit('/usergroup')
        cy.get('#sidebar > div > div.menu > div:nth-child(17) > a > div.menu-text').click();
        cy.get('.ms-auto > .btn').click();
        cy.get('body > div:nth-child(3) > div > div.modal.fade.show > div > div > form > div.modal-body > div > div:nth-child(2) > div:nth-child(1) > div > select')
            .select('UserTester')
            .should('have.value', '6493c10d7abd0d37c006c5f3')
    });
    it('handle with select', () => {
        cy.visit('/dashboard')
        cy.wait(1000);
        cy.get('.react-select__control').select().should('have.length', '0')
        cy.get('.react-select__menu-list').type('กรุง{enter}')

    });

    it.only('Check Box Length Select', () => {
        cy.visit('/usergroup');
        cy.get(':nth-child(17) > .menu-link > .menu-text').click()
        cy.get('.ms-auto > .btn').click()
        cy.get("input[placeholder='ระบุชื่อผู้ใช้งาน']").type('maxtest13')
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(2)").type('123456')
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > input:nth-child(2)").type('123456')
        cy.get("input[placeholder='ระบุชื่อ']").type('maxtest')
        cy.get("input[placeholder='ระบุนามสกุล']").type('automated')
        cy.get('.react-select__control').click()
        cy.get('.react-select__menu-list').find('div').should('have.length', 77)
        cy.get('.react-select__menu-list').type('นนทบุรี{enter}')
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select:nth-child(2)").select('UserTester')
        cy.get("input[placeholder='ระบุเบอร์โทรศัพท์']").type('0909153638')
        cy.get("input[placeholder='ระบุอีเมล์']").type('maxmonthon98@gmail.com')
        cy.get("input[placeholder='ระบุไลน์ไอดี']").type('max.monthon')
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(2) > select:nth-child(2)").select('ปิดการใช้งาน')
        cy.get("button[type='submit']").click()
        //แก้ไข เปลื่ยนทุกครั้งที่maxtest13
        cy.wait(1000)
        cy.get("input[type='search']").type('maxtest13')
        cy.get("span[data-tooltip-id='action-tooltip'][data-tooltip-content='แก้ไขข้อมูล']").click()
        cy.get("input[placeholder='ระบุชื่อ']").clear().type('maxedittest')
        cy.get("input[placeholder='ระบุนามสกุล']").clear().type('maxeditautomate')
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > select:nth-child(2)")
            .select('UserTester')
        cy.get("input[placeholder='ระบุเบอร์โทรศัพท์']").clear().type('091234578')
        cy.get("input[placeholder='ระบุอีเมล์']").clear().type('maxmonthon98@gmail.com')
        cy.get("input[placeholder='ระบุไลน์ไอดี']").clear().type('maxmonthon')
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > select:nth-child(2)")
            .select('เปิดการใช้งาน')
        cy.get("button[type='submit']").click()
        cy.wait(1000)
        //แก้สิทธ์การใช้งาน เปลื่ยนทุกครั้งที่maxtest13
        cy.get("input[type='search']").type('maxtest13')
        cy.get('.btn-outline-theme > .bi').click()
        //tbody >  tr > td > div > input เฉพาะปุ่ม checkbox เท่านั้น
        cy.get("tbody >  tr > td > div > input")
            .uncheck({ force: true }).should('not.be.checked')
        cy.get('.modal-footer > .btn-outline-theme').click({ focus: true })
    })

});

