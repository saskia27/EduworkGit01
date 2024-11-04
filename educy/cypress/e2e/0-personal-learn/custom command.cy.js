/// <reference types="cypress" />

describe('Zero Web App Login Test', () => {
    it('should log in successfully', () => {
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
    });
  });
  