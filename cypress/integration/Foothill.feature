Feature: Footill website


    Scenario: Verify the Home Tab is in foothill website
        Given The user navigated to foothill website
        Then The Home tab should be seen

    Scenario: Verify the About us Tab is in foothill website
        Given The user navigated to foothill website
        Then The About Us tab should be seen

    Scenario: Verify the Careers Tab is in foothill website
        Given The user navigated to foothill website
        Then The Careers tab should be seen

    Scenario: Verify the Careers Tab is in foothill website
        Given The user navigated to foothill website
        Then The Contact Us tab should be seen

    Scenario: verify the about page should display when click on about us tab
        Given The user navigated to foothill website
        When The user clicks on About Us tab
        Then The url should contains "/about"
        And The "Who We Are" should be seen
    @focus
    Scenario: verify the career page should display when click on careers tab
        Given The user navigated to foothill website
        When The user clicks on Careers tab
        Then The url should contains "/careers"
        And The "Grow with Us" should be seen


    Scenario: verify the contactus page should display when click on contuct us tab
        Given The user navigated to foothill website
        When The user clicks on Contact Us tab
        Then The url should contains "/contactus"
        And The "Get In Touch With Us" should be seen