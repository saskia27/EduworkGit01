Feature: Search Functionality

    As a user 
    I want to use the search feature
    So that I can find relevant information on the website

    Scenario: Valid Search Query
        Given I open the homepage
        When I enter "online banking" in the search field
        And I submit the search
        Then I should see search results related to "online banking"