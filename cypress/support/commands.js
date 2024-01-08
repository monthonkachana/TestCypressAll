// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


Cypress.Commands.add('Loginsession', (username, password) => {
  //Login session  
  cy.session(
    [username, password],
    () => {
      cy.visit('/login')
      cy.get(':nth-child(3) > .form-control').type(username);
      cy.get(':nth-child(4) > .form-control').type(password);
      cy.get('.btn').click();
    },
    {
      cacheAcrossSpecs: true
    }
  )
})




Cypress.Commands.add('TestingSuit', () => {
  //Login fixture testsuit 
  cy.visit('/')
  //maxtest.json
  cy.fixture('maxtest').then((data) => {
    cy.visit('/login')
    cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(3) > input').type(data.username);
    cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(4) > input').type(data.password);
    cy.get('#root > div > div.app-content.p-0 > div > div > form > button').click();
  }),
  {
    cacheAcrossSpecs: true
  }
})


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Cypress.Commands.overwrite('visit', (options) => {

// })