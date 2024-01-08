describe("Authentication", () => {
  it("ตรวจสอบเข้าสู่ระบบ ControllRoom", () => {
    cy.visit("/login");
    cy.get(
      "#root > div > div.app-content.p-0 > div > div > form > div:nth-child(3) > input"
    ).type("test");
    cy.get(
      "#root > div > div.app-content.p-0 > div > div > form > div:nth-child(4) > input"
    ).type("test{enter}");
  });
  // it("กรอก Username-Password ไม่ถูกต้อง", () => {
  //   cy.visit("/login");
  //   cy.get(
  //     "#root > div > div.app-content.p-0 > div > div > form > div:nth-child(3) > input"
  //   ).type("");
  //   cy.get(
  //     "#root > div > div.app-content.p-0 > div > div > form > div:nth-child(4) > input"
  //   ).type("{enter}");
  // });
});
