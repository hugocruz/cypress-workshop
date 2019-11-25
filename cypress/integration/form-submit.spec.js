describe('form submission', () => {
    it('ads a new todo item', () => {
        const newTodo = 'I am a new todo';
        cy.server();
        cy.route({
            method: 'POST',
            url: '/api/todos',
            response: {
                id: 123, 
                name: newTodo,
                isComplete: false
            }
        }).as('save');


        cy.loadAndVisit();

        cy.get('.new-todo').type(newTodo).type('{enter}');
        cy.wait('@save');

        cy.get('.todo-list li').should('have.length', 5);
    });

    it('shows an error message for a failed submission', () => {
        const newTodo = 'Error error';
        cy.server();
        cy.route({
            method: 'POST',
            url: '/api/todos',
            status: 500,
            response: {}
        }).as('save');

        cy.loadAndVisit();

        cy.get('.new-todo').type(newTodo).type('{enter}');
        cy.wait('@save');

        cy.get('.todo-list li').should('have.length', 4);
        cy.get('.error').should('be.visible');
    });
});