// describe('Validate Header', () => {
//     it('Successfully validate content-type', () => {
//         cy.reqruest('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
//         cy.get('@pokemon').its('headers').its('content-type')
//             .should('incelude', 'application/json; charset=utf-8')
//     })
// })

describe('Validate Header and Response Body', () => {
	it('Successfully validate content-type and response body', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
		cy.get('@pokemon')
			.its('headers')
			.its('content-type')
			.should('include', 'application/json; charset=utf-8')
		cy.get('@pokemon').then((response) => {
			expect(response.status).to.eq(200)
			expect(response.body.name).to.eq('ditto')
			expect(response.body.id).to.eq(132)
			expect(response.body.abilities).to.be.an('array').that.is.not.empty
			expect(response.body.abilities[0]).to.have.property('ability')
			expect(response.body.abilities[0].ability).to.have.property('name')
		})
	})
})
