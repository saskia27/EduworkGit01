describe('Login via API Tests', () => {
	before(() => {
		cy.loginViaAPI()
	})

	it('Should successfully navigate to the main dashboard', () => {
		cy.url().should('include', '/main')
		cy.get('h1').should('contain', 'Welcome')
	})

	it('Should display user information correctly', () => {
		cy.getCookie('userName')
			.should('exist')
			.then((cookie) => {
				expect(cookie.value).to.be.a('string')
			})
		cy.get('.username-display').should('contain', Cypress.env('userEmail'))
	})
})
