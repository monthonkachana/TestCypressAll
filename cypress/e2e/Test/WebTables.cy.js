describe('Handle Web Tables', () => {
    beforeEach(() => {
        //cy.login('max1', '12345');
        cy.visit('/login')
        cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(3) > input').type('max1');
        cy.get('#root > div > div.app-content.p-0 > div > div > form > div:nth-child(4) > input').type('12345{enter}');
    });
    it('sdsd', () => {
        // cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1)')
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) ')
            .should('have.length', '1')
    })
    it('check number row and columns', () => {
        cy.visit('/usergroup')
        cy.get('#sidebar > div > div.menu > div:nth-child(17) > a > div.menu-text').click();
        cy.get('tbody tr').should('have.length', '7')

    });
    it('check cell data specific row & columns', () => {
        cy.visit('/usergroup')
        cy.get('#sidebar > div > div.menu > div:nth-child(17) > a > div.menu-text').click();
        cy.get('tbody tr:nth-child(1) td:nth-child(4)').contains('0123456789')
        cy.get()
    });
    it('Read all row & columns data in the first page', () => {
        cy.visit('/usergroup')
        cy.get('#sidebar > div > div.menu > div:nth-child(17) > a > div.menu-text').click();
        cy.get('table[class="table text-nowrap w-100 dataTable no-footer dtr-inline"]>tbody>tr')
            .each(($row, index, $rows) => {
                cy.wrap($row).within(() => {
                    cy.get('td').each(($col, index, $cols) => {
                        cy.log($col.text());
                    })
                })
            })

    });
    it('Pagination', () => {
        cy.visit('/usergroup')
        cy.get('#sidebar > div > div.menu > div:nth-child(17) > a > div.menu-text').click();
        //รอหน้าจอแสดงประวัติเสจ https://www.youtube.com/watch?v=uDpJsk4ReuY&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=12


    });
    it.only('How to Check Table elements ', () => {

        cy.visit('/usergroup')
        cy.get(':nth-child(17) > .menu-link > .menu-text').click()
        // วิธี หา id class name ใน  elements table[class='']>div ใน elements ต่างๆ  
        cy.get('table[class="table text-nowrap w-100 dataTable no-footer dtr-inline"]>tbody>tr').find('td')
    })

});
