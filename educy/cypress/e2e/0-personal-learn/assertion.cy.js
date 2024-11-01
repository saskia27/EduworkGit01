/// <reference types="cypress" />

describe('Browser action', () => {
	it('Should load coreect url', () => {
		cy.visit('https://example.com/', { timeout: 10000 })
	})

	it('Should check correct url', () => {
		cy.url().should('include', 'example.com')
	})
})
