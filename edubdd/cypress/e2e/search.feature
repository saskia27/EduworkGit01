Feature: Search Results Display
  As a user
  I want to see search results displayed correctly
  So that I know my query was processed

  Scenario: Display no results message for empty search
    Given I am on the search page
    When I type "searchTerm" in the search bar and press enter
    Then I should see "Search Results:" displayed as a heading
    And I should see a message "No results were found for the query:       searchTerm"
