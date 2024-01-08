import 'cypress-file-upload'
// .attachFile ต้อง import อยาลืม
describe('FileUpload', () => {

    beforeEach(() => {
        //cy.login('max1', '12345');
        cy.visit('/login')
        cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(3) > input').type('max1');
        cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(4) > input').type('12345{enter}');
    });
    //https://github.com/abramenal/cypress-file-upload package file upload ที่ต้องใช้
    it('Single File Upload', () => {
        cy.visit('/pipeline')
        cy.get('#sidebar > div > div.menu > div:nth-child(13) > a > div.menu-text').click();
        cy.get('#sidebar > div > div.menu > div:nth-child(14) > a > div.menu-caret').click();
        cy.get('#sidebar > div > div.menu > div.menu-item.has-sub.expand > div > div > a > div').click();
        cy.get(':nth-child(2) > :nth-child(5) > .btn-outline-info').click();
        cy.get('body > div:nth-child(3) > div > div.modal.fade.show > div > div > form > div.modal-body > div > div > div > div.input-group.flex-nowrap > input')
            .attachFile('Linenotify หลังจากสมัครเสร็จ.png');
        cy.get('.modal-footer > .btn-outline-theme').click()
    });
    it('File Upload Rename', () => {
        cy.visit('/pipeline')
        cy.get('#sidebar > div > div.menu > div:nth-child(13) > a > div.menu-text').click();
        cy.get('#sidebar > div > div.menu > div:nth-child(14) > a > div.menu-caret').click();
        cy.get('#sidebar > div > div.menu > div.menu-item.has-sub.expand > div > div > a > div').click();
        cy.get(':nth-child(2) > :nth-child(5) > .btn-outline-info').click();
        cy.get('body > div:nth-child(3) > div > div.modal.fade.show > div > div > form > div.modal-body > div > div > div > div.input-group.flex-nowrap > input')
            .attachFile({ filePath: 'Linenotify หลังจากสมัครเสร็จ.png', fileName: 'maxtest.png' });
        cy.get('.modal-footer > .btn-outline-theme').click()



    });
    it('File Upload Drag/Drop', () => {
        cy.visit('/pipeline')
        cy.get('#sidebar > div > div.menu > div:nth-child(13) > a > div.menu-text').click();
        cy.get('#sidebar > div > div.menu > div:nth-child(14) > a > div.menu-caret').click();
        cy.get('#sidebar > div > div.menu > div.menu-item.has-sub.expand > div > div > a > div').click();
        cy.get(':nth-child(2) > :nth-child(5) > .btn-outline-info').click();
        cy.get('body > div:nth-child(3) > div > div.modal.fade.show > div > div > form > div.modal-body > div > div > div > div.input-group.flex-nowrap > input')
            .attachFile('Linenotify หลังจากสมัครเสร็จ.png', { subjectType: 'drag-n-drop' });
        // cy.get('.modal-footer > .btn-outline-theme').click()
    });
    it('Multiple Files Upload', () => {
        cy.visit('/pipeline')
        cy.get('#sidebar > div > div.menu > div:nth-child(13) > a > div.menu-text').click();
        cy.get('#sidebar > div > div.menu > div:nth-child(14) > a > div.menu-caret').click();
        cy.get('#sidebar > div > div.menu > div.menu-item.has-sub.expand > div > div > a > div').click();
        cy.get(':nth-child(2) > :nth-child(5) > .btn-outline-info').click();
        cy.get('body > div:nth-child(3) > div > div.modal.fade.show > div > div > form > div.modal-body > div > div > div > div.input-group.flex-nowrap > input')
            .attachFile(['Line เสจ.png', 'Linenotify สมัครแจ้งเตือน.png']);
        cy.get('.modal-footer > .btn-outline-theme').click()
    });

});
