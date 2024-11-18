/// <reference types="cypress" />

describe('SauceDemo Login and Add to Cart', () => {
  it('should log in and add an item to the cart', () => {
    // Mengunjungi halaman login SauceDemo
    cy.visit('https://www.saucedemo.com/');

    cy.fixture("user").then(user => {
      const username = user.username
      const password = user.password

      cy.get('#user-name').type(username)
      cy.get('#password').type(password)
      cy.contains('Login').click()
    })

    // Verifikasi bahwa login berhasil
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');

    // Menambahkan barang ke keranjang
    cy.get('.btn_inventory').first().click(); // Klik tombol "Add to cart" pada item pertama

    // Verifikasi bahwa item telah ditambahkan ke keranjang
    cy.get('.shopping_cart_badge').should('contain', '1');
  });
});
