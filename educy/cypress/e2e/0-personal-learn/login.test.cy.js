/// <reference types="cypress" />

// describe('Login/ Logout Test', () => {
//     before(() => {
//         cy.visit('http://zero.webappsecurity.com/index.html');
//         cy.url().should('include', 'index.html')
//         cy.get('#signin_button').click()
//     });

//     it('Should try to login invalid data', () => {
//         cy.get('#login_form"').should('be.visible')
//         cy.get('#user_login').type('invalid username')
//         cy.get('#user_password').type('invalid password')
//         cy.get('input[name="submit"]').click()
//     });

//     it('Should display error message', () => {
//         cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
//     });

//     it('Should login to application eith valid data', () => {
//         cy.fixture("user").then(user => {
//             const username = user.username
//             const password = user.password

//             cy.get('#user_login').clear()
//             cy.get('#user_login').type(username)
//             cy.get('#user_password').clear()
//             cy.get('#user_password').type(password)
//             cy.get('input[name="submit"]').click()

//             cy.get('h2').should('contain.text', 'Cash Account')
//         })
//     });

//     it('Should logout from the application', () => {
//         cy.contains('username').click()
//         cy.get('#logout_link').click()
//         cy.get('strong').should('contain.text', 'Home')
//         cy.get('#user_login').should('be.visible');
//     });
// });


describe('Login/Logout Test', () => {
    before(() => {
        // Mengunjungi halaman utama
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    });

    it('Should try to login with invalid data', () => {
        // Memastikan form login terlihat dan memasukkan data login yang salah
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()
    });

    it('Should display error message', () => {
        // Memastikan pesan error muncul ketika login gagal
        cy.get('.alert-error').should('be.visible')
          .and('contain.text', 'Login and/or password are wrong.')
    });

    it('Should login to the application with valid data', () => {
        // Mengambil data user dari fixture
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            // Login dengan data yang valid
            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type(password)
            cy.get('input[name="submit"]').click()

            // Memastikan halaman akun terbuka
            cy.get('h2').should('contain.text', 'Cash Account')
        })
    });

    it('Should logout from the application', () => {
        // Klik username untuk membuka menu logout dan klik tombol logout
        cy.contains('username').click()
        cy.get('#logout_link').click()

        // Memastikan halaman utama muncul kembali dengan tombol sign-in terlihat
        cy.get('#signin_button').should('be.visible');
    });
});



