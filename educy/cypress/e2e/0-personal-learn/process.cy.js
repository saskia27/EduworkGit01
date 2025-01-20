/// <reference types="cypress" />

// describe('Login Test with valid credentials', () => {
//     it('Should successfully login with valid credentials', () => {
//         cy.visit('https://www.saucedemo.com/')
//         cy.get('#user-name').type('standard_user')
//         cy.get('#password').type('secret_sauce')
//         cy.get('#login-button').click()

//         // Assertion: Redirect to inventory page after successful login
//         cy.url().should('include', '/inventory.html')
//         cy.get('.inventory_list').should('be.visible')
//     });
// });

// describe('Add Items to Cart', () => {
//     before(() => {
//         cy.visit('https://www.saucedemo.com/')
//         cy.get('#user-name').type('standard_user')
//         cy.get('#password').type('secret_sauce')
//         cy.get('#login-button').click()
//     });

//     it('Should add an item to the cart', () => {
//         cy.get('.inventory_item').first().find('button').click()

//         // Assertion: The cart badge should be updated
//         cy.get('.shopping_cart_badge').should('contain', '1')
//     });
// });

// describe('Remove Items from Cart', () => {
//     before(() => {
//         cy.visit('https://www.saucedemo.com/')
//         cy.get('#user-name').type('standard_user')
//         cy.get('#password').type('secret_sauce')
//         cy.get('#login-button').click()
//         cy.get('.inventory_item').first().find('button').click() // Add item to cart
//     });

//     it('Should remove an item from the cart', () => {
//         cy.get('.shopping_cart_link').click() // Go to cart
//         cy.get('.cart_item').should('exist')

//         cy.get('.cart_button').click() // Remove the item

//         // Assertion: The item should no longer be in the cart
//         cy.get('.cart_item').should('not.exist')
//         cy.get('.shopping_cart_badge').should('not.exist')
//     });
// });

// describe('Checkout Flow Test', () => {
//     before(() => {
//         cy.visit('https://www.saucedemo.com/')
//         cy.get('#user-name').type('standard_user')
//         cy.get('#password').type('secret_sauce')
//         cy.get('#login-button').click()

//         // Add item to cart
//         cy.get('.inventory_item').first().find('button').click()
//         cy.get('.shopping_cart_link').click()
//     });

//     it('Should complete the checkout process', () => {
//         cy.get('.checkout_button').click()

//         // Fill checkout information
//         cy.get('#first-name').type('John')
//         cy.get('#last-name').type('Doe')
//         cy.get('#postal-code').type('12345')
//         cy.get('#continue').click()

//         // Assertion: Redirect to checkout overview page
//         cy.url().should('include', '/checkout-step-two.html')
//         cy.get('.cart_list').should('be.visible')

//         // Complete the checkout
//         cy.get('#finish').click()

//         // Assertion: Verify order completion
//         cy.get('.complete-header').should('contain.text', 'Thank you for your order!')
//     });
// });


describe('SauceDemo E2E Test: Login, Add to Cart, Checkout, and Logout', () => {
  
  // URL dasar SauceDemo
  const baseUrl = 'https://www.saucedemo.com/';
  
  // Sebelum setiap test, buka halaman login
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should log in, add item to cart, complete checkout, and log out', () => {
    // **Step 1: Login**
    cy.get('[data-test="username"]').type('standard_user');  
    cy.get('[data-test="password"]').type('secret_sauce');   
    cy.get('[data-test="login-button"]').click();            

    // Verifikasi login berhasil dengan memastikan URL mengarah ke halaman inventory
    cy.url().should('include', '/inventory.html');

    // **Step 2: Menambahkan barang ke keranjang**
    // Tambahkan barang pertama (sauce-labs-backpack)
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); 

    // Klik pada ikon keranjang
    cy.get('.shopping_cart_link').click(); 
    
    // Verifikasi bahwa barang sudah masuk ke keranjang
    cy.get('.cart_item').should('have.length', 1);  // Pastikan ada 1 item di keranjang
    
    // **Step 3: Checkout barang**
    cy.get('[data-test="checkout"]').click();  // Klik tombol checkout

    // Isi form informasi pengguna untuk checkout
    cy.get('[data-test="firstName"]').type('John');  
    cy.get('[data-test="lastName"]').type('Doe');    
    cy.get('[data-test="postalCode"]').type('12345'); 
    cy.get('[data-test="continue"]').click();         

    // Verifikasi bahwa halaman checkout sudah benar dengan total harga yang muncul
    cy.get('.summary_total_label').should('contain', 'Total: $32.39');

    // Klik tombol "Finish" untuk menyelesaikan checkout
    cy.get('[data-test="finish"]').click();

    // Verifikasi bahwa proses checkout selesai
    cy.get('.complete-header').should('contain', 'Thank you for your order!');

    // **Step 4: Logout**
    cy.get('#react-burger-menu-btn').click();  
    cy.get('#logout_sidebar_link').click();    

    // Verifikasi logout berhasil dengan kembali ke halaman login
    cy.url().should('include', '/');
  });
});


