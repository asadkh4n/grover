import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import SortFeatures from '../../pages/sort';

const sortFeatures = new SortFeatures

Given('I am on IMDb charts page', () => {
    cy.visit(Cypress.env('antrag'));
})

When(/^I select sort by '(.*)'$/, (sortBy) => {
    sortFeatures.selectSort(sortBy)
}); 
 
When(/^I select the genre '(.*)'$/, (filterBy) => {
    sortFeatures.selectGenre(filterBy)
}); 

Then('I can see at least one item in the list', () => {
    sortFeatures.checkFilmList()
})

Then('I can confirm that there is at least one movie in the list', () =>{
    sortFeatures.checkGenreFilmList()
})

