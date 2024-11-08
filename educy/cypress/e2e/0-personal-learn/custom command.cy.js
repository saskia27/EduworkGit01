/// <reference types="cypress" />

// describe('Zero Web App Login Test', () => {
//     it('should log in successfully', () => {
//       // Mengunjungi halaman utama Zero Web App
//       cy.visit('http://zero.webappsecurity.com/');
  
//       // Mengklik tombol "Sign in"
//       cy.get('#signin_button').click();
  
//       // Mengisi form login
//       cy.get('#user_login').type('username'); // Ganti dengan username yang valid
//       cy.get('#user_password').type('password'); // Ganti dengan password yang valid
  
//       // Mengklik tombol "Sign in" di form login
//       cy.get('input[type="submit"]').click();
  
//       // Verifikasi bahwa login berhasil
//       cy.url().should('include', '/bank/account-summary.html');
//       cy.get('.brand').should('contain', 'Zero Bank');
//     });
//   });



          /// <reference types="cypress" />

describe('Zero Web App Payment Test', () => {
  it('should log in and make a payment successfully', () => {
    // Mengunjungi halaman utama Zero Web App
    cy.visit('http://zero.webappsecurity.com/');

    // Mengklik tombol "Sign in"
    cy.get('#signin_button').click();

    // Mengisi form login
    cy.get('#user_login').type('username'); // Ganti dengan username yang valid
    cy.get('#user_password').type('password'); // Ganti dengan password yang valid

    // Mengklik tombol "Sign in" di form login
    cy.get('input[type="submit"]').click();

    // Verifikasi bahwa login berhasil
    cy.url().should('include', '/bank/account-summary.html');
    cy.get('.brand').should('contain', 'Zero Bank');

    // Mengakses halaman pembayaran
    cy.get('#pay_bills_tab').click(); // Asumsi ini adalah ID untuk tab pembayaran

    // Mengisi form pembayaran
    cy.get('#sp_payee').select('Sprint'); // Memilih penerima yang benar
    cy.get('#sp_account').select('Credit Card'); // Memilih akun pembayaran
    cy.get('#sp_amount').type('100'); // Masukkan jumlah
    cy.get('#sp_date').type('2024-11-08'); // Masukkan tanggal pembayaran
    cy.get('#sp_description').type('Pembayaran tagihan listrik', { force: true });


    // Klik tombol "Pay" untuk memproses pembayaran
    cy.get('#pay_saved_payees').click();

    // Verifikasi pembayaran berhasil
    cy.get('#alert_content').should('contain', 'The payment was successfully submitted.');
    
    // Verifikasi bahwa tidak ada error di URL yang dituju
    cy.url().should('include', '/bank/pay-bills');
  });
});


  