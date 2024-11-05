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

Cypress.Commands.add('payBill', (payee, amount, date, description) => {
    // Kunjungi halaman pembayaran
    cy.visit('https://zero.webappsecurity.com/bank/pay-bills.html');
  
    // Isi formulir pembayaran
    cy.get('#sp_payee').select(payee); // Pilih payee
    cy.get('#sp_amount').type(amount); // Isi jumlah
    cy.get('#sp_date').type(date); // Isi tanggal
    cy.get('#sp_description').type(description); // Isi deskripsi
  
    // Klik tombol "Pay" untuk melakukan pembayaran
    cy.get('#pay_saved_payees').click();
  });
  