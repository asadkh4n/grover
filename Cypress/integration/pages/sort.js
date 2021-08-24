
class SortFeatures
{
    selectSort(sortBy){
        cy.get('#lister-sort-by-options').select(sortBy)
    }

    checkFilmList(){
        cy.get('.lister-list').find('tr').should('have.length.greaterThan',0)
    }

    selectGenre(genre){
        cy.get('.quicklinks').contains(genre).click()
        cy.url().should('contain', '/search/title/?genres='+genre.toLowerCase())
    }

    checkGenreFilmList() {
        cy.get('.lister-list').should('have.length.greaterThan', 0)
    }
} 

export default SortFeatures;