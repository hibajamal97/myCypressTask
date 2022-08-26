Feature:  Search

    @focus
    Scenario: Verify that when search for foothill solutions then it should be appear at the result of search
        Given The user navigated to google site "https://www.google.com/"
        When  The user types "Foothill solutions" in the search field
        And The user clicks on Search button
        Then Foothill website should be seen
        And  Foothill facebook page should be seen