describe('App initialization', () => {
    it('displays todos from api on load', () => {
        cy.server();
        cy.route('GET', '/api/todos', [
            { id: 1, name: 'Buy Milk', isComplete: false },
            { id: 2, name: 'Buy Bread', isComplete: true },
            { id: 3, name: 'Go home', isComplete: false },
            { id: 4, name: 'relax', isComplete: false },
        ]);
        cy.visit('/');
        cy.get('.todo-list li').should('have.length', 4);
    });
});