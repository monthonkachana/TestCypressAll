describe("Controll", () => {
  beforeEach(() => {
    cy.Loginsession("max1", "123456789");
  });
  it("ตรวจสอบเลือกจังหวัดแสดงข้อมูล", () => {
    cy.visit("/dashboard");
    cy.get(".react-select__control").click({ force: true });
    cy.get(".react-select__menu-list").find("div").should("have.length", 77);
    cy.get(".react-select__menu-list").type("กรุง{enter}");
    cy.wait(1000);
    cy.get(":nth-child(3) > .text-opacity-50")
      .should("be.visible")
      .should(
        "have.text",
        " ท้องฟ้ามีเมฆบางส่วน ทิศทางลม 100° ความเร็วลม 3km/h ฝนปกคลุมพื้นที่ 0%"
      );
  });
  it("ตรวจสอบปุ่มและไอคอนในตำแหน่งที่ติดตั้งเครื่องจักร", () => {
    cy.visit("/dashboard");
    cy.get(
      '[style="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none; left: -70px; top: 124px; z-index: 144;"] > img'
    ).click({ force: true });
  });
  // it("กรณี RoleUser ไม่ได้กำหนดไม่แสดงไอคอนในแผนที่", () => {
  //   cy.visit("/dashboard");
  // });
});
