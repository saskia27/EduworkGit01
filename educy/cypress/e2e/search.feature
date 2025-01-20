Feature: Search Functionality on Zero.WebAppSecurity
  As a user of the website
  I want to search for information efficiently
  So that I can find relevant content quickly

  Scenario: Successful search with valid keywords
    Given I am on the Zero WebAppSecurity homepage
    When I search for "bank statement"
    Then I should see search results related to "bank statement"
