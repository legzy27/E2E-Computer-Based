
describe('Go to website, search and update item', function() {
    it('Navigate to add computer page ', function(){
      cy.visit(Cypress.config('baseUrl'));
      cy.get('#searchsubmit').type('ACE').click();
      //click on first item on the list
      cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click();
      cy.get('#company').select('Thinking Machines')
      cy.get('.primary').click();
      
   
    })


})