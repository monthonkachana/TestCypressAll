describe('Mysuite ', () => {
    it('Demo DDT Login', () => {
        cy.visit('/')
        cy.fixture('testsuite').then((data) => {
            cy.visit('/login')
            data.forEach((userdata) => {
                cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(3) > input').type(userdata.username);
                cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(4) > input').type(userdata.password);
                cy.get('#root > div > div.app-content.p-0 > div > div > form > button').click();

                if (userdata.username == 'max1' && userdata.password == '12345') {
                    cy.get('.menu > :nth-child(3) > .menu-link > .menu-text')
                        .should('have.class', 'menu-text d-sm-block d-none')
                    //logout
                    cy.get('.menu > :nth-child(3) > .menu-link').click();
                    cy.get('span.dropdown-item').click();

                }
                else {

                    cy.get('.menu > :nth-child(3) > .menu-link > .menu-text')
                        .should('have.class', 'menu-text d-sm-block d-none')
                    //logout  
                    cy.get('.menu > :nth-child(3) > .menu-link').click();
                    cy.get('span.dropdown-item').click();
                }
            })


        })
    });


});


