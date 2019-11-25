// type definitions for Cypress object "cy"
/// <reference types="cypress" />


describe('Form input', () => {
    beforeEach(() => {
        cy.loadAndVisit([]);
    })
    it('focus the input on load', () => {
        cy.focused().should('have.class', 'new-todo');
    });

    it('accepts input', () => {
        const inputText = 'this is my input';
        cy.get('.new-todo').type(inputText).should('have.value', inputText);

    });
});
