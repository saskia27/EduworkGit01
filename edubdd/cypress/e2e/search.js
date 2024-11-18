const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the search page', () => {
  cy.visit('http://zero.webappsecurity.com/index.html');
});

When('I type "searchTerm" in the search bar and press enter', (searchTerm) => {
  cy.get('#searchTerm').type(searchTerm).type('{enter}');
});

Then('I should see "Search Results:" displayed as a heading', (headingText) => {
  cy.contains('h2', headingText).should('be.visible');
});

Then('I should see a message "No results were found for the query:       searchTerm"', (messageText) => {
  cy.contains(messageText).should('be.visible');
});

