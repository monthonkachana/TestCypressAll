describe("UserTester", () => {
  const users = [
    { username: "test", password: "test" },
    { username: "max1", password: "123456789" },
    { username: "max1", password: "123456" },
  ];
  users.forEach((user, index) => {
    it(`UserIDTest ${index + 1}`, () => {
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
      //code to test
      cy.visit("/dashboard");
      cy.get(".react-select__control").click({ force: true });
      cy.get(".react-select__menu-list").find("div").should("have.length", 77);
      cy.get(".react-select__menu-list").type("กรุง{enter}");
    });
    it(`UserIDTest IN The Dashboard ${index + 1}`, () => {
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
      cy.get(".menu-item.active > .menu-link > .menu-text").click();
      cy.window().then((win) => {
        const originalOpen = win.open;
        cy.stub(win, "open").callsFake((url) => {
          win.location.href = url;
          return null;
        });
        cy.get(".menu > :nth-child(1) > .menu-link")
          .invoke("removeAttr", "target")
          .click({ force: true });
        cy.url().should(
          "include",
          "http://www.smart-insect.com:3005/lineregister"
        );
        cy.wait(1000);
        cy.wrap(originalOpen).as("originalOpen");
      });
      cy.go("back");
    });
  });
});
