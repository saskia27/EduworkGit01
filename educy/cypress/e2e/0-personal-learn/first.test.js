/// <reference types="cypress" />

describe('My First Test', () => {
	it('Visit the Kitchen Sink', () => {
		cy.visit('https://example.cypress.io/todo')
	})
})
