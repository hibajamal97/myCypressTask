import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import listAssertions from '../pageObjects/SortedList/assertions';

Given('The user navigated to the list', () => {
    cy.visit("https://sortablejs.github.io/Sortable/#simple-list")
});
Then('The list should be sorted', () => {
    listAssertions.checkingSortedList();
});