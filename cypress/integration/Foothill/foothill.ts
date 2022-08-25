import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import FoothillActions from '../pageObjects/foothill/actions';
import foothillAssertions from '../pageObjects/foothill/assertions';


Given('The user navigated to foothill website', () => {
    FoothillActions.openFoothillWebsite();
});
Then('The About Us tab should be seen', () => {
    foothillAssertions.checkingAboutUsTab();
});

Then('The Contact Us tab should be seen', () => {
    foothillAssertions.checkingContactUsTab();
});
Then('The Careers tab should be seen', () => {
    foothillAssertions.checkingCareersTab();
});

Then('The Home tab should be seen', () => {
    foothillAssertions.checkingHomeTab();
});

When('The user clicks on About Us tab', () => {
    FoothillActions.clicksOnAboutUsTab();
});
When('The user clicks on Careers tab', () => {
    FoothillActions.clicksOnCareersTab();
});
When('The user clicks on Contact Us tab', () => {
    FoothillActions.clicksOnContactUsTab();
});
When('The user clicks on Home tab', () => {
    FoothillActions.clicksOnHomeTab();
});


Then('The url should contains {string}', (text) => {
    foothillAssertions.checkingUrlContent(text);
});

Then('The {string} should be seen', (text) => {
    foothillAssertions.checkingAboutUsContent(text);
});

Then('The {string} should be seen', (text) => {
    foothillAssertions.checkingContactUsContent(text);
});
Then('The {string} should be seen', (text) => {
    foothillAssertions.checkingCareersContent(text);
});

Then('The {string} should be seen', (text) => {
    foothillAssertions.checkingHomeContent(text);
});