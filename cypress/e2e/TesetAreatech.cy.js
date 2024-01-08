import 'cypress-file-upload'
describe('TestFeatureAreaTech', () => {
  beforeEach(() => {
    cy.Loginsession('test', 'test')
    // cy.TestingSuit()
    // cy.visit('/login')
    // cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(3) > input').type('max1');
    // cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(4) > input').type('12345{enter}');
  })
  it('check navbar', () => {
    cy.visit('/dashboard')
    cy.get('.menu-item.active > .menu-link > .menu-text').click()
    //LineNotify
    cy.window().then((win) => {
      const originalOpen = win.open;
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
        return null;
      });
      cy.get('.menu > :nth-child(1) > .menu-link')
        .invoke('removeAttr', 'target')
        .click({ force: true });
      cy.url().should('include', 'http://www.smart-insect.com:3005/lineregister');
      cy.wait(1000)
      cy.wrap(originalOpen).as('originalOpen');
    });
    cy.go('back');
    //Profile
    cy.get('#header > .menu > :nth-child(2) > .menu-link > .menu-icon > .bi')
      .click().should('have.class', 'bi bi-bell nav-icon')
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > a:nth-child(1) > div:nth-child(2)')
      .click()
    cy.wait(500)
    //แก้ไขข้อมูลส่วนตัว
    cy.get("a[href='/profile']").click()
    cy.get("input[type='file']").attachFile('jennie.jpg');
    cy.get("body div div div div div div div div div form div button[type='submit']").click()
    cy.get('#name').clear().type("Max")
    cy.get('#surname').clear().type("Tester")
    cy.get('#tel').clear().type("0909153638")
    cy.get('#email').clear().type("s6252410006@sau.ac.th")
    cy.get('#lineid').clear().type("max.monthon")
    cy.wait(500)
    cy.get('.react-select__control').click()
    cy.get('.react-select__menu-list').find('div').should('have.length', 77)
    cy.get('.react-select__menu-list').type('นนทบุรี{enter}')
    cy.get('.justify-content-center > .btn').click()
    cy.go('back')
    //Reset Password
    cy.get('.menu > :nth-child(3) > .menu-link').click()
    cy.get('[href="/repassword"]').click()
    cy.wait(500)
    //12345 เปลื่ยนทุกครั้งที่ automated
    cy.get("input[placeholder='กรุณารหัสผ่านปัจจุบัน']").clear().type("12345")
    cy.get("input[placeholder='รหัสผ่านใหม่']").clear().type("12345")
    cy.get("input[placeholder='ยืนยันรหัสผ่านใหม่']").clear().type("12345")
    cy.get("button[type='submit']").click()
    cy.get('.swal2-confirm').click({ focus: true })

    //ออกจากระบบ
    cy.get('.menu > :nth-child(3) > .menu-link').click()
    cy.get('span.dropdown-item').click()
  });
  it.only('check dashboard', () => {
    cy.visit('/dashboard')
    //คลิกเพื่อดูใน select
    cy.get('.react-select__control').click({ force: true })
    // select ดูค่าตรวจดู
    cy.get('.react-select__menu-list').find('div')
      .should('have.length', 77)
    cy.get('.react-select__menu-list').type('กรุง{enter}')
    cy.wait(1000)
    cy.get('[style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -70px; top: 124px; z-index: 144;"] > img')
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
      cy.url().should('include', 'http://www.smart-insect.com:3005/waterpump/engine-waterPump?deviceID=6315a7ba591779bcbbeed954&modelType=engine');
      cy.wait(2000)
      cy.wrap(originalOpen).as('originalOpen');
    });
    cy.go('back');
  });
  it('check water pump', () => {
    cy.visit('/waterpump')
    //เครื่องสูบน้ำระยะไกล
    cy.get('#sidebar > div > div.menu > div:nth-child(4) > a > div.menu-text').click();
    cy.get('#datatable_filter > label > input').type('ทดสอบระบบ');
    cy.window().then((win) => {
      const originalOpen = win.open;
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
        return null;
      });
      cy.get('.btn-outline-info')
        .invoke('removeAttr', 'target')
        .click()
      cy.url().should('include', 'http://www.smart-insect.com:3005/waterpump/engine-waterPump?deviceID=627f7a2490d93d2dc888a78c&modelType=engine');
      cy.wait(2000)
      cy.wrap(originalOpen).as('originalOpen');
    });
    cy.go('back');
    cy.get('#sidebar > div > div.menu > div:nth-child(4) > a > div.menu-text').click();
    cy.get(':nth-child(1) > :nth-child(6) > .btn-outline-warning').click();
    cy.get('.modal-footer > .btn-outline-theme').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > :nth-child(6) > .btn-outline-theme').click()
    cy.get('.modal-footer > .btn-outline-theme').click()
    //ตั้งค่า / รุ่นเครื่องสูบน้ำ
    cy.get('#sidebar > div > div.menu > div:nth-child(5) > a > div.menu-caret').click();
    cy.get('#sidebar > div > div.menu > div.menu-item.has-sub.expand > div > div:nth-child(1) > a > div').click();
    //เพิ่มเครื่อง
    cy.get('.ms-auto > .btn').click()
    cy.get("input[placeholder='ระบุชื่อเครื่องสูบน้ำ']").type('PERAL-751M')
    cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > select:nth-child(2)')
      .select('มอเตอร์ไฟฟ้า')
    cy.get(':nth-child(4) > .form-control').type('test')
    cy.get('.modal-footer > .btn-outline-theme').click()
    cy.wait(1000)
    cy.get('.form-control').type('PERAL-751M')
    cy.get('.btn-outline-warning > .bi').click()
    cy.get(':nth-child(4) > .form-control').type('Test')
    cy.get('.modal-footer > .btn-outline-theme').click();
    cy.wait(1000)
    cy.get('.form-control').type('PERAL-751M')
    cy.get('.btn-outline-danger').click()
    cy.get('.swal2-confirm').click()
    //ตั้งค่า / เครื่องสูบน้ำ
    cy.get('#sidebar > div > div.menu > div:nth-child(5) > div > div:nth-child(2) > a > div').click();
    cy.get('.ms-auto > .btn').click()
    cy.get("input[placeholder='ระบุชื่อเครื่องสูบน้ำ']").type('maxtest')
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > select:nth-child(2)")
      .select('PERAL-750M')
    cy.get("input[placeholder='ระบุไอพีแอสเดรส']").type('191.191.10.1')
    cy.get("input[placeholder='ระบุพอร์ต']").type('1')
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(7) > div:nth-child(2) > select:nth-child(2)")
      .select('CCTV คลองเวฬุ')
    cy.get('.modal-footer > .btn-outline-theme').click()
    cy.wait(1000)
    //เพิ่มรูป
    cy.get('.form-control').type('maxtest')
    cy.get('.btn-outline-info').click();
    cy.get('body > div:nth-child(3) > div > div.modal.fade.show > div > div > form > div.modal-body > div > div > div > div.input-group.flex-nowrap > input')
      .attachFile('Linenotify หลังจากสมัครเสร็จ.png');
    cy.get('.modal-footer > .btn-outline-theme').click()
    cy.wait(1000)
    //แก้ไขข้อมูล
    cy.get('.form-control').type('maxtest')
    cy.get('.btn-outline-warning').click()
    cy.get('.modal-footer > .btn-outline-theme').click()
    cy.wait(1000)
    //สิทธ์การใช้งาน
    cy.get('.form-control').type('maxtest')
    cy.get(':nth-child(7) > .btn-outline-theme').click()
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
    cy.get('.even > :nth-child(8) > .btn-outline-warning > .bi').click()
    cy.wait(1000)
    cy.get('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > select:nth-child(2)')
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
    cy.wait(1000)
    cy.get('.form-control').type('maxtest')
    cy.get('.btn-outline-danger > .bi').click()
    cy.get('.swal2-confirm').click()
    // //ตั้งค่า / กล้องCCTV
    cy.get('#sidebar > div > div.menu > div.menu-item.active.has-sub > div > div:nth-child(3) > a > div').click();
  })
  it('check waterlever', () => {
    cy.visit('/waterlevel')
    cy.get('#sidebar > div > div.menu > div:nth-child(7) > a > div.menu-text').click();
    //setting
    cy.get('[href="/waterlevelsetting"] > .menu-text').click()
    cy.get('.expand > .menu-submenu > .menu-item > .menu-link > .menu-text').click()
    cy.get('.ms-auto > .btn').click()
    cy.get("div[role='document'] div form div div div div div select")
      .select("ปิดการใช้งาน")
    cy.get("input[placeholder='ระบุชื่อเครื่องวัดระดับน้ำ']").type("waterleveltest1")
    cy.get("input[placeholder='ระบุไอพีแอสเดรส']").type("192.168.10.20")
    cy.get("input[placeholder='ระบุพอร์ต']").type("60")
    cy.get("input[placeholder='ระบุระดับน้ำต่ำสุด']").type("20")
    cy.get("input[placeholder='ระบุระดับน้ำสูงสุด']").type("30")
    cy.get("input[placeholder='ระบุขนาดพื้นที่']").type("40")
    cy.get('.modal-footer > .btn-outline-theme').click({ focus: true })
    //เพิ่มรูป
    cy.wait(500)
    cy.get('.form-control').type('waterleveltest1')
    cy.get('.btn-outline-info').click();
    cy.get('body > div:nth-child(3) > div > div.modal.fade.show > div > div > form > div.modal-body > div > div > div > div.input-group.flex-nowrap > input')
      .attachFile('Linenotify หลังจากสมัครเสร็จ.png');
    cy.get('.modal-footer > .btn-outline-theme').click()
    cy.wait(1000)
    //แก้ไขข้อมูล
    cy.get('.form-control').type('waterleveltest1')
    cy.get('.btn-outline-warning').click()
    cy.get("div[role='document'] div form div div div div div select").select("เปิดการใช้งาน")
    cy.get("input[placeholder='ระบุชื่อเครื่องวัดระดับน้ำ']").clear().type("waterleveltest2")
    cy.get("input[placeholder='ระบุพอร์ต']").clear().type("90")
    cy.get("input[placeholder='ระบุระดับน้ำต่ำสุด']").clear().type("99")
    cy.get("input[placeholder='ระบุระดับน้ำสูงสุด']").clear().type("999")
    cy.get("input[placeholder='ระบุขนาดพื้นที่']").clear().type("999")
    cy.get('.modal-footer > .btn-outline-theme').click()
    cy.wait(1000)
    //สิทธ์การใช้งาน
    cy.get('.form-control').type('waterleveltest2')
    cy.get('.btn-outline-theme > .bi').click()
    cy.get('.modal-footer > .btn-outline-theme').click()
    cy.get('#usertable_filter > label > .form-control').type('max1')
    cy.get('#usertable > tbody > .odd > :nth-child(6) > .btn').click()
    cy.get('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > select:nth-child(2)')
      .select('อนุญาต')
    cy.get('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > select:nth-child(2)')
      .select('อนุญาต')
    cy.get('.was-validated > .modal-footer > .btn-outline-theme').click()
    cy.wait(500)
    cy.get('#usertable_filter > label > .form-control').type('max2')
    cy.wait(500)
    cy.get(':nth-child(6) > .btn').click()
    cy.get('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > select:nth-child(2)')
      .select('อนุญาต')
    cy.get('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > select:nth-child(2)')
      .select('อนุญาต')
    cy.get('.was-validated > .modal-footer > .btn-outline-theme').click()
    cy.get(':nth-child(4) > :nth-child(1) > .modal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    cy.get('.odd > :nth-child(7) > .btn-outline-warning > .bi').click()
    cy.wait(1000)
    // cy.get('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > select:nth-child(2)')
    //   .select('ไม่อนุญาต')
    // cy.get('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > select:nth-child(2)')
    //   .select('ไม่อนุญาต')
    cy.get('.was-validated > .modal-footer > .btn-outline-theme').click()
    // cy.get('.odd > :nth-child(8) > .btn-outline-danger').click({ focus: true })
    // cy.get('.swal2-confirm').click()
    // cy.get('.even > :nth-child(8) > .btn-outline-danger').click({ focus: true })
    // cy.get('.swal2-confirm').click()
    cy.wait(500)
    cy.get('.btn-outline-default').click()
    cy.go('back')
    //เครื่องตรวจวัดระดับน้ำ หลังจากสร้างเสร็จ
    cy.get('.form-control').type('waterleveltest2')
    cy.window().then((win) => {
      const originalOpen = win.open;
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
        return null;
      });
      cy.get('.btn-outline-info')
        .invoke('removeAttr', 'target')
        .click()
      cy.url('include', 'http://www.smart-insect.com:3005/waterlevel/mornitor-waterlevel?deviceID=64d9a76558435dc7815bac50&modelType=engine');
      cy.wait(2000)
      cy.wrap(originalOpen).as('originalOpen');
    });
    cy.go('back');
    //ตั้งค่าการแจ้งเตือน
    cy.get('.form-control').type('waterleveltest2')
    cy.get('.btn-outline-warning').click()
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)")
      .clear().type("200")
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > input:nth-child(2)")
      .clear().type("300")
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > input:nth-child(2)")
      .clear().type("400")
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(2)")
      .clear().type("500")
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > input:nth-child(2)")
      .clear().type("600")
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > input:nth-child(2)")
      .clear().type("700")
    cy.wait(500)
    cy.get('.modal-footer > .btn-outline-theme').click({ focus: true })
    //ปักมุดตำแหน่ง
    cy.wait(1000)
    cy.get('.form-control').type('waterleveltest2')
    cy.get('.btn-outline-theme').click()
    cy.wait(500)
    cy.get('.modal-footer > .btn-outline-theme').click({ focus: true })
    //delect
    cy.wait(500)
    cy.get('[href="/waterlevelsetting"] > .menu-text').click()
    cy.get('.expand > .menu-submenu > .menu-item > .menu-link > .menu-text').click()
    cy.get('.form-control').type('waterleveltest2')
    cy.get('.btn-outline-danger > .bi').click()
    cy.get('.swal2-confirm').click()
  })
  it('check weatherlevel', () => {
    cy.visit('/weatherlevel')

    //setting
    cy.get('[href="/weatherlevelsetting"] > .menu-text').click()
    cy.get('.expand > .menu-submenu > .menu-item > .menu-link > .menu-text').click()
    //เพิ่มข้อมูล
    cy.get('.ms-auto > .btn').click()
    cy.get("div[role='document'] div form div div div div div select").select("ปิดการใช้งาน")
    cy.get("input[placeholder='ระบุชื่อเครื่องวัดสภาพอากาศ']").type("weathertest1")
    cy.get("input[placeholder='ระบุไอพีแอสเดรส']").type("192.168.22.6")
    cy.get("input[placeholder='ระบุพอร์ต']").type("606")
    cy.get('.modal-footer > .btn-outline-theme').click()
    //เพิ่มรูป
    cy.wait(1000)
    cy.get('.form-control').type("weathertest1")
    cy.get('.btn-outline-info').click();
    cy.get('body > div:nth-child(3) > div > div.modal.fade.show > div > div > form > div.modal-body > div > div > div > div.input-group.flex-nowrap > input')
      .attachFile('Linenotify หลังจากสมัครเสร็จ.png');
    cy.get('.modal-footer > .btn-outline-theme').click()
    cy.wait(1000)
    //แก้ไขข้อมูล
    cy.get('.form-control').type('weathertest1')
    cy.get('.btn-outline-warning').click()
    cy.get("div[role='document'] div form div div div div div select").select("เปิดการใช้งาน")
    cy.get("input[placeholder='ระบุชื่อเครื่องสูบน้ำ']").clear().type("weathertest2")
    cy.get("input[placeholder='ระบุไอพีแอสเดรส']").clear().type("199.199.99.9")
    cy.get("input[placeholder='ระบุพอร์ต']").clear().type("909")
    cy.get('.modal-footer > .btn-outline-theme').click()
    cy.wait(1000)
    //สิทธ์การใช้งาน
    cy.get('.form-control').type('weathertest2')
    cy.get('.btn-outline-theme > .bi').click()
    cy.get('.modal-footer > .btn-outline-theme').click()
    cy.get('#usertable_filter > label > .form-control').type('max1')
    cy.get('#usertable > tbody > .odd > :nth-child(6) > .btn').click()
    cy.get('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > select:nth-child(2)')
      .select('อนุญาต')
    cy.get('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > select:nth-child(2)')
      .select('อนุญาต')
    cy.get('.was-validated > .modal-footer > .btn-outline-theme').click()
    cy.wait(500)
    cy.get('#usertable_filter > label > .form-control').type('max2')
    cy.wait(500)
    cy.get(':nth-child(6) > .btn').click()
    cy.get('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > select:nth-child(2)')
      .select('อนุญาต')
    cy.get('body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > select:nth-child(2)')
      .select('อนุญาต')
    cy.get('.was-validated > .modal-footer > .btn-outline-theme').click()
    cy.get(':nth-child(4) > :nth-child(1) > .modal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(7) > span:nth-child(1)').click()
    cy.wait(1000)
    cy.get('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > select:nth-child(2)')
      .select('ไม่อนุญาต')
    cy.get('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > select:nth-child(2)')
      .select('ไม่อนุญาต')
    cy.get('.was-validated > .modal-footer > .btn-outline-theme').click()
    // cy.get('.odd > :nth-child(8) > .btn-outline-danger').click({ focus: true })
    // cy.get('.swal2-confirm').click()
    // cy.get('.even > :nth-child(8) > .btn-outline-danger').click({ focus: true })
    // cy.get('.swal2-confirm').click()
    cy.wait(500)
    cy.get('.btn-outline-default').click()
    cy.go('back')
    //เครื่องตรวจวัดสภาพอากาศ หลังจากสร้างเสร็จ
    cy.get('.form-control').type('weathertest2')
    cy.window().then((win) => {
      const originalOpen = win.open;
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
        return null;
      });
      cy.get('.btn-outline-info')
        .invoke('removeAttr', 'target')
        .click()
      cy.url('include', 'http://www.smart-insect.com:3005/weatherlevel/weatherlevel-device?deviceID=64dc2de5d46a46425ac18113');
      cy.wait(2000)
      cy.wrap(originalOpen).as('originalOpen');
    });
    cy.go('back');
    //ตั้งค่าการแจ้งเตือน
    cy.get('.form-control').type('weathertest2')
    cy.get('.btn-outline-warning').click()
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)")
      .clear().type("200")
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(2)")
      .clear().type("300")
    cy.wait(500)
    cy.get('.modal-footer > .btn-outline-theme').click({ focus: true })
    //ปักมุดตำแหน่ง
    cy.wait(1000)
    cy.get('.form-control').type('weathertest2')
    cy.get('.btn-outline-theme').click()
    cy.wait(500)
    cy.get('.modal-footer > .btn-outline-theme').click({ focus: true })
    //delect
    cy.wait(500)
    cy.get('[href="/weatherlevelsetting"] > .menu-text').click()
    cy.get('.expand > .menu-submenu > .menu-item > .menu-link > .menu-text').click()
    cy.get('.form-control').type('weathertest2')
    cy.get('.btn-outline-danger').click()
    cy.get('.swal2-confirm').click()

  })
  it('check pipeline', () => {
    cy.visit('/pipeline')
    cy.get('#sidebar > div > div.menu > div:nth-child(13) > a > div.menu-text').click();
    //setting
    cy.get('#sidebar > div > div.menu > div:nth-child(14) > a > div.menu-caret').click();
    //create โครงการ
    cy.get('#sidebar > div > div.menu > div.menu-item.has-sub.expand > div > div > a > div').click();
    cy.get('.ms-auto > .btn').click()
    cy.get("input[placeholder='ระบุชื่อโครงการ']").type('maxtestpipeline')
    cy.get("input[placeholder='ระบุปีงบประมาณ']").type('2566')
    cy.get(':nth-child(4) > .form-control').type('maxtest ')
    cy.get('.modal-footer > .btn-outline-theme').click()
    //create picture 
    cy.wait(1000)
    cy.get('.form-control').type('maxtestpipeline')
    cy.get('.btn-outline-info').click()
    cy.get('body > div:nth-child(3) > div > div.modal.fade.show > div > div > form > div.modal-body > div > div > div > div.input-group.flex-nowrap > input')
      .attachFile('Linenotify หลังจากสมัครเสร็จ.png');
    cy.get('.modal-footer > .btn-outline-theme').click()
    //create pipeline
    cy.wait(1000)
    cy.get('.form-control').type('maxtestpipeline')
    cy.get(':nth-child(5) > .btn-outline-theme').click()
    cy.get('.modal-footer > .btn-outline-theme').click()
    cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)")
      .click(100, 100)
    cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)")
      .click(200, 200)
    cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)")
      .click(300, 300)
    cy.wait(500)
    cy.get('.was-validated > .modal-footer > .btn-outline-theme').click()
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click({ focus: true })
    //edit pipeline
    cy.wait(1000)
    cy.get('.form-control').type('maxtestpipeline')
    cy.get('.btn-outline-warning > .bi').click()
    cy.get("div[role='document'] div form div div div div div select").select('ปิดการใช้งาน')
    cy.get("input[placeholder='ระบุชื่อโครงการ']").clear().type('maxtest')
    cy.get("input[placeholder='ระบุปีงบประมาณ']").clear().type('2567')
    cy.get("textarea[rows='8']").clear().type('maxtestdesription')
    cy.get("button[type='submit']").click()
    //delete pipeline
    cy.wait(1000)
    cy.get('.form-control').type('maxtest')
    cy.get('.btn-outline-danger > .bi').click()
    cy.get('.swal2-confirm').click()
  })
  it('checck usergroup', () => {
    cy.visit('/usergroup')
    //กลุ่มผู้ใช้  
    cy.get('#sidebar > div > div.menu > div:nth-child(16) > a > div.menu-text').click();
    cy.get("div[id='root'] div div div div div div div div span[role='button']").click()
    cy.get("div[role='document'] div form div div div div div select").select('ปิดการใช้งาน')
    cy.get("input[placeholder='ระบุชื่อกลุ่มผู้ใช้งาน']").type('GroupMaxTester')
    cy.get("button[type='submit']").click()
    cy.wait(1000)
    cy.get("input[type='search']").type('GroupMaxTester')
    //edit data group
    cy.get("span[data-tooltip-content='แก้ไขข้อมูล'] i").click()
    cy.get("div[role='document'] div form div div div div div select").select('เปิดการใช้งาน')
    cy.get("input[placeholder='ระบุชื่อกลุ่มผู้ใช้งาน']").clear().type('GroupMaxTesterEdit')
    cy.get("button[type='submit']").click()
    cy.wait(1000)
    //แก้ไขสิทธิ์การใช้งาน
    cy.get("input[type='search']").type('GroupMaxTesterEdit')
    cy.get("span[data-tooltip-id='action-tooltip'][data-tooltip-content='แก้ไขสิทธิ์การใช้งาน']").click()
    cy.get("input.form-check-input").check({ force: true }).should('be.checked')
    cy.wait(1000)
    cy.get('.modal-footer > .btn-outline-theme').click();
    //ลบ
    cy.wait(1000)
    cy.get("input[type='search']").type('GroupMaxTesterEdit')
    cy.get('.btn-outline-danger').click()
    cy.get('.swal2-confirm').click({ focus: true })
    //ผู้ใช้งาน 
    cy.get(':nth-child(17) > .menu-link > .menu-text').click()
    cy.get("span[class='btn btn-outline-theme']").click()
    //เปลื่ยนทุกครั้งที่maxtest40
    cy.get("input[placeholder='ระบุชื่อผู้ใช้งาน']").type('maxtest40')
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(2)").type('123456')
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > input:nth-child(2)").type('123456')
    cy.get("input[placeholder='ระบุชื่อ']").type('maxtest')
    cy.get("input[placeholder='ระบุนามสกุล']").type('automated')
    cy.get('.react-select__control').click()
    cy.get('.react-select__menu-list').find('div').should('have.length', 77)
    cy.get('.react-select__menu-list').type('นนทบุรี{enter}')
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select:nth-child(2)").select('ผู้ดูแลระบบ')
    cy.get("input[placeholder='ระบุเบอร์โทรศัพท์']").type('0909153638')
    cy.get("input[placeholder='ระบุอีเมล์']").type('maxmonthon98@gmail.com')
    cy.get("input[placeholder='ระบุไลน์ไอดี']").type('max.monthon')
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(2) > select:nth-child(2)").select('ปิดการใช้งาน')
    cy.get("button[type='submit']").click()
    //แก้ไข เปลื่ยนทุกครั้งที่maxtest40
    cy.wait(1000)
    cy.get("input[type='search']").type('maxtest40')
    cy.get("span[data-tooltip-id='action-tooltip'][data-tooltip-content='แก้ไขข้อมูล']").click()
    cy.get("input[placeholder='ระบุชื่อ']").clear().type('maxedittest')
    cy.get("input[placeholder='ระบุนามสกุล']").clear().type('maxeditautomate')
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > select:nth-child(2)")
      .select('ผู้ดูแลระบบ')
    cy.get("input[placeholder='ระบุเบอร์โทรศัพท์']").clear().type('091234578')
    cy.get("input[placeholder='ระบุอีเมล์']").clear().type('maxmonthon98@gmail.com')
    cy.get("input[placeholder='ระบุไลน์ไอดี']").clear().type('maxmonthon')
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > select:nth-child(2)")
      .select('เปิดการใช้งาน')
    cy.get("button[type='submit']").click()
    cy.wait(1000)
    //แก้สิทธ์การใช้งาน เปลื่ยนทุกครั้งที่maxtest40
    cy.get("input[type='search']").type('maxtest40')
    cy.get('.btn-outline-theme > .bi').click()
    //tbody >  tr > td > div > input เฉพาะปุ่ม checkbox เท่านั้น
    cy.get("tbody >  tr > td > div > input")
      .uncheck({ force: true }).should('not.be.checked')
    cy.get('.modal-footer > .btn-outline-theme').click({ focus: true })
    //reset password เปลื่ยนทุกครั้งที่maxtest40
    cy.wait(1000)
    cy.get("input[type='search']").type('maxtest40')
    cy.get('.btn-outline-info > .bi').click()
    cy.get('.swal2-confirm').click({ focus: true })
    cy.get('.swal2-confirm').click({ focus: true })
    cy.wait(500)
    //deleted เปลื่ยนทุกครั้งที่maxtest40
    cy.get("input[type='search']").type('maxtest40')
    cy.get('.btn-outline-danger > .bi').click()
    cy.get('.swal2-confirm').click({ focus: true })
    cy.wait(500)
    //ประวัติผู้ใช้งาน
    cy.get(':nth-child(18) > .menu-link > .menu-text').click()

    //ประวัติการใช้งาน
    cy.get(':nth-child(19) > .menu-link > .menu-text').click()
  })
  it('check report', () => {
    cy.visit('/reportwaterpump')
    cy.get('.menu-item.active > .menu-link > .menu-text').click()
    cy.get(':nth-child(22) > .menu-link > .menu-text').click()
    cy.get(':nth-child(23) > .menu-link > .menu-text').click()
    cy.get(':nth-child(24) > .menu-link > .menu-text').click()
    cy.get(':nth-child(25) > .menu-link > .menu-text').click()
  })

})

//  it('',()=>{

//   })
