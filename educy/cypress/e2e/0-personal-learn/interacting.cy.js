/// <reference types="cypress" />



describe('Working with inputs', () => {
    it('Successfull login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('#user_login').type('username');
        cy.get('#user_password').type('password');
        cy.get('#user_remember_me').click();
        cy.get('.btn.btn-primary').click();
    });
});
