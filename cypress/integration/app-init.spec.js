describe('App initialization', () => {
    it('displays todos from api on load', () => {
        cy.server();
        cy.route('GET', '/api/todos', 'fixture:todos');
        cy.visit('/');
        cy.get('.todo-list li').should('have.length', 4);
    });
});