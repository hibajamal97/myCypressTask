import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import SearchActions from '../pageObjects/Search/actions';
import SearchAssertions from '../pageObjects/Search/assertions';

Given('The user navigated to google site {string}', (url) => {
    //SearchActions.openGooglePage(url)
    cy.visit('www.google.com')
});
When('The user types {string}', (text) => {
   // SearchActions.typeSearchKeyAtSearchField(text)
   cy.get('.SDkEP').type(text);
});

When('The user clicks on Search button', () => {
    SearchActions.clickSearchBtn()
});
Then('Foothill websites should be seen', () => {
    SearchAssertions.checkingFoothillWebsite()
});
Then('Foothill facebook page should be seen', () => {
    SearchAssertions.checkingFoothillFacbook()
});
