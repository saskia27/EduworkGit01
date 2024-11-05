/// <reference types="cypress" />

describe('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
    });

    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    });

    it('Should display feedback content', () => {
        cy.get('#Feedback').click()
        cy.url().should('include', 'feedback.html')
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    });
});


// describe('Navbar Test', () => {
//     before(() => {
//         cy.visit('http://zero.webappsecurity.com/index.html');
//     });

//     it('Should display online banking content', () => {
//         cy.get('#onlineBankingMenu').click()
//         cy.url().should('include', 'online-banking.html')
//         cy.get('h1').should('be.visible').and('contain.text', 'Banking')
//         cy.get('a').contains('Open New Account').should('exist').and('be.visible')
//     });

//     it('Should display feedback content', () => {
//         cy.get('#feedback').click()
//         cy.url().should('include', 'feedback.html')
//         cy.get('form').should('be.visible')
//         cy.get('input[name="email"]').should('exist').and('be.visible')
//     });

//     it('Should display homepage content', () => {
//         cy.contains('Zero Bank').click()
//         cy.url().should('include', 'index.html')
//         cy.get('img[alt="Zero Bank"]').should('be.visible')
//         cy.get('footer').should('be.visible')
//     });
// });

