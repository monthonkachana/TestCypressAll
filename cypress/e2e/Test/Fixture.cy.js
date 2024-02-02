describe("Mysuite", () => {
  it.only("Check User JSON", () => {
    cy.fixture("maxtest").then((users) => {
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        cy.log(user);
      }
      expect(users, "User All member").to.deep.equal(users);
    });
  });
  it("Login Users Check login in vaildate", () => {
    cy.fixture("maxtest").then((users) => {
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        cy.visit("/login");
        cy.get(
          "#root > div > div.app-content.p-0 > div > div > form > div:nth-child(3) > input"
        ).type(user.username);
        cy.get(
          "#root > div > div.app-content.p-0 > div > div > form > div:nth-child(4) > input"
        ).type(user.password);
        cy.get(
          "#root > div > div.app-content.p-0 > div > div > form > button"
        ).click();
        cy.visit("/dashboard");
        cy.get(".react-select__control").click({ force: true });
        cy.get(".react-select__menu-list")
          .find("div")
          .should("have.length", 77);
        cy.get(".react-select__menu-list").type("กรุง{enter}");
      }
    });
  });
});
