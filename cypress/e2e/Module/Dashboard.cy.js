describe("Dashboard", () => {
  beforeEach(() => {
    cy.Loginsession("max1", "123456789");
  });
  it("กรณีเลือก Filter ", () => {
    cy.visit("/dashboard");
    cy.get(".desktop-toggler > .menu-toggler").click();
    cy.wait(3000);
  });
  it("กรณีเลือก Filter จาก TAB แผงควบคุม", () => {
    cy.visit("/dashboard");
    cy.get(".scrollbar-container > .menu > :nth-child(3)").click();
  });
});
