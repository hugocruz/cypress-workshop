describe('Footer', () => {
    it('filters todos', () => {
        const filters = [
            {link: 'Active', expectedLength: 2},
            {link: 'Completed', expectedLength: 2},
            {link: 'All', expectedLength: 4}
        ];

        cy.wrap(filters).each((filter) => {
            cy.loadAndVisit('fixture:other_todos');
            cy.contains(filter.link).click();
            cy.get('.todo-list li').should('have.length', filter.expectedLength);    
        });
    });
})