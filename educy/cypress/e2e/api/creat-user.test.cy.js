describe('Create New User', () => {
	it('Successfully create new user', () => {
		const user = {
			name: 'Eduwork',
			job: 'Education',
		}

		cy.request('POST', 'https://reqres.in/api/users', user).then(
			(response) => {
				expect(response.status).to.eq(201)
				expect(response.body).to.have.property('name', 'Eduwork')
				expect(response.body).to.have.property('job', 'Education')
				expect(response.body).to.have.property('id')
				expect(response.body).to.have.property('createdAt')
				expect(response.body.name).to.be.a('string')
				expect(response.body.job).to.be.a('string')
				expect(response.body.id).to.be.a('string')
				expect(response.body.createdAt).to.be.a('string')
			},
		)
	})
})
