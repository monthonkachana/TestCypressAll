describe('Assertion Test', () => {
    beforeEach(() => {
        // cy.login('max1', '12345');
        cy.visit('/login')
        cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(3) > input').type('max1');
        cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(4) > input').type('12345{enter}');
    });
    it.skip('Test element fuction ต่าง', () => {
        // ตัวอย่างการเช็คข้อความใน element
        cy.get('h1').should('have.text', 'ข้อความที่คาดหวัง');

        // ตรวจสอบข้อความใน element ที่มี class "description"
        cy.get('.description').should('contain', 'รายละเอียดที่คาดหวัง');

        // ตรวจสอบว่าไม่มีข้อความที่ไม่คาดหวังใน element ที่มี class "error"
        cy.get('.error').should('not.contain', 'ข้อความที่ไม่คาดหวัง');
        //ดังนั้นในการใช้.should() ใน Cypress ควรใส่เงื่อนไขข้อความที่คาดหวังให้ถูกต้องตรงกับสิ่งที่คุณต้องการทดสอบใน element ที่เลือกครับ
    })

    it('Check  Assertion', () => {
        cy.visit('/dashboard');
        // Assert URL 
        cy.url()
            .should('include', 'http://www.smart-insect.com:3005/dashboard')
            .should('contain', 'smart-insect')
            .and('not.contain', 'smartinsect');
        // Assert  title
        cy.title()
            .should('include', 'HUD | React Version')
            .and('eq', 'HUD | React Version');
        let expName = 'Max Tester';
        cy.wait(1000)
        // Assertions check name after login
        cy.get('.menu-text.d-sm-block.d-none')
            .should('be.visible')
            .invoke('text')
            .should('equal', expName);
    });
});


