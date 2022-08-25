Feature:  Search

    @focus
    Scenario: Verify that when search for foothill solutions then it should be appear at the result of search
        Given The user navigated to google site "https://www.google.com/"
        When  The user types "Foothill solutions"
        And The user clicks on Search button
        Then Foothill websites and facebook page should be seen