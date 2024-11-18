// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



  
 // Custom command for logging in
Cypress.Commands.add('login', (username, password) => {
  cy.visit('http://zero.webappsecurity.com/');
  cy.get('#signin_button').click();
  cy.get('#user_login').type(username);
  cy.get('#user_password').type(password);
  cy.get('input[type="submit"]').click();

  // Verify successful login
  cy.url().should('include', '/index.html');
  cy.get('.brand').should('contain', 'Zero Bank');
});

// Custom command for making a payment
Cypress.Commands.add('makePayment', (payee, account, amount, date, description) => {
  cy.get('#pay_bills_tab').click();  // Navigate to Pay Bills
  cy.get('#sp_payee').select(payee);  // Select payee
  cy.get('#sp_account').select(account);  // Select account
  cy.get('#sp_amount').type(amount);  // Enter amount
  cy.get('#sp_date').type(date);  // Enter date
  cy.get('#sp_description').type(description, { force: true });  // Enter description
  cy.get('#pay_saved_payees').click();  // Submit payment

  // Verify successful payment
  cy.get('#alert_content').should('contain', 'The payment was successfully submitted.');
});
