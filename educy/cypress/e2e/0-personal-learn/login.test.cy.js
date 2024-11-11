/// <reference types="cypress" />

// const { Should } = require("chai")

// describe('Login/ Logout Test', () => {
//     before  (() => {
//         cy.visit('http://zero.webappsecurity.com/index.html')
//         cy.url().should('include', 'index.html')
//         cy.get('#signin_button').click()
//     })
    
//     it('should try to login with invalid data', ()=> {
//         cy.get('login_form').should('be.visible')
//         cy.get('#user_login').type('invalid username')
//         cy.get('#user_password').type('invalid password')
//         cy.get('input[name="submit"]').click()
//     })

//     it('should display erorr message', () => {
//         cy.get('.alert-erorr').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
//     })

//     it('should login to application with valid data', () => {
//         cy.fixture("user").then(user => {
//             const username = user.username
//             const password = user.password

//             cy.get('#user_login').clear()
//             cy.get('#user_login').type(username)
//             cy.get('#user_password').clear()
//             cy.get('#user_password').type(password)
//             cy.get('input[name="submit"]').click()
//         })
//     })

//     it('should logout from the application', () => {
//         //TODO
//     })
// })

describe('Login/ Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    });

    it('should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible') // Perbaikan selector login_form
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()
    });

    it('should display error message', () => {
        cy.get('.error-message').should('be.visible').and('contain.text', 'Login and/or password are wrong.')

    });

    it('should login to application with valid data', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type(password)
            cy.get('input[name="submit"]').click()
        })
    });

    it('should logout from the application', () => {
        cy.get('.icon-user').click() 
        cy.get('#logout_link').click() 
        cy.url().should('include', 'index.html') 
        cy.get('strong').should('contain.text', 'Home') 
        cy.get('#user_login').should('be.visible') 
    });
});



