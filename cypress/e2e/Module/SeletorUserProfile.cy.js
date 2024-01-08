describe("SeletorUserProfile", () => {
  beforeEach(() => {
    cy.Loginsession("max1", "123456789");
  });
  it("กรอก ข้อมูลแก้ไข โปรไฟล์", () => {
    cy.visit("/dashboard");
    cy.get(".menu > :nth-child(3) > .menu-link > .menu-text").click();
    cy.get('[href="/profile"]').click();
    cy.get("#name").clear().type("Max");
    cy.get("#surname").clear().type("Tester");
    cy.get("#tel").clear().type("0909153638");
    cy.get("#email").clear().type("s6252410006@sau.ac.th");
    cy.get("#lineid").clear().type("max.monthon");
    cy.wait(500);
    cy.get(".react-select__control").click();
    cy.get(".react-select__menu-list").find("div").should("have.length", 77);
    cy.get(".react-select__menu-list").type("กรุง{enter}");
    cy.get(".justify-content-center > .btn").click();
    // cy.go('back')
  });
  it("กรอก ข้อมูลแก้ไขรัหสผ่าน", () => {
    cy.visit("/dashboard");
    cy.get(".menu > :nth-child(3) > .menu-link > .menu-text").click();
    cy.get('[href="/repassword"]').click();
    cy.get("input[placeholder='กรุณารหัสผ่านปัจจุบัน']").clear().type("12345");
    cy.get("input[placeholder='รหัสผ่านใหม่']").clear().type("12345");
    cy.get("input[placeholder='ยืนยันรหัสผ่านใหม่']").clear().type("12345");
    cy.get("button[type='submit']").click();
    cy.get(".swal2-confirm").click({ focus: true });
  });
  it("ออกสู่ระบบ กลับสู่หน้า Login Page", () => {
    cy.visit("/dashboard");
    cy.get(".menu > :nth-child(3) > .menu-link > .menu-text").click();
    cy.get("span.dropdown-item").click();
  });
});
