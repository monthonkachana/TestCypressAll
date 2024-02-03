describe("Mysuite", () => {
  it("Check User JSON", () => {
    cy.fixture("preparedata").then((users) => {
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        cy.log(user);
      }
      expect(users, "User All member").to.deep.equal(users);
    });
  });
  it("Login Users Check login in vaildate", () => {
    cy.fixture("preparedata").then((users) => {
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
  it("check login ID to Fix", () => {
    cy.fixture("preparedata").then((users) => {
      const firstID = users[0];
      // const userid1 = users[1];
      // cy.log(userid1);
      cy.visit("/login");
      cy.get(":nth-child(3) > .form-control")
        .type(firstID.username)
        .should("have.value", "max1");
      cy.get(":nth-child(4) > .form-control")
        .type(firstID.password)
        .should("have.value", "123456789");
      cy.get(".btn").click();
      cy.wait(1000);
      cy.get(".menu > :nth-child(3) > .menu-link").click();
      cy.get("span.dropdown-item").click();
      cy.wait(1000);
      expect(firstID.username, "vaildate ID").to.equal(firstID.username);
    });
  });
});
