
const cucumber = require('cypress-cucumber-preprocessor').default
//todo - causing errors when tests are run
//onst sqlServer = require('cypress-sql-server');


const dbConfig = require('../../cypress.json')

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

}



