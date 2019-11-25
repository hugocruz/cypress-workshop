describe('App initialization', () => {
    it('displays todos from api on load', () => {
        cy.loadAndVisit();
        cy.get('.todo-list li').should('have.length', 4);
    });
});