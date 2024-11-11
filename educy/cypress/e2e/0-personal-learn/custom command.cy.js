/// <reference types="cypress" />


// describe('Zero Web App Payment Test', () => {
//   it('should log in and make a payment successfully', () => {
//     cy.visit('http://zero.webappsecurity.com/');
//     cy.get('#signin_button').click();
//     cy.get('#user_login').type('username'); 
//     cy.get('#user_password').type('password'); 
//     cy.get('input[type="submit"]').click();
//     cy.url().should('include', '/bank/account-summary.html');
//     cy.get('.brand').should('contain', 'Zero Bank');
//     cy.get('#pay_bills_tab').click(); 
//     cy.get('#sp_payee').select('Sprint'); 
//     cy.get('#sp_account').select('Credit Card'); 
//     cy.get('#sp_amount').type('100'); 
//     cy.get('#sp_date').type('2024-11-08'); 
//     cy.get('#sp_description').type('Pembayaran tagihan listrik', { force: true });
//     cy.get('#pay_saved_payees').click();
//     cy.get('#alert_content').should('contain', 'The payment was successfully submitted.');
//     cy.url().should('include', '/bank/pay-bills');
//   });
// });

    describe('Zero Web App Payment Test', () => {
     const username = 'valid_username'; 
     const password = 'valid_password';  
     const payee = 'Sprint';  
     const account = 'Credit Card';  
     const amount = '100';  
     const date = '2024-11-08'; 
     const description = 'Pembayaran tagihan listrik';  

      it('should log in and make a payment successfully', () => {
        cy.login(username, password);
        cy.makePayment(payee, account, amount, date, description);
        });
      });


   







  