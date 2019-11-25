// type definitions for Cypress object "cy"
/// <reference types="cypress" />


describe('Form input', () => {
    it('focus the input on load', () => {
        cy.visit('/');
        cy.focused().should('have.class', 'new-todo');
    });
});
