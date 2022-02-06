
describe('Go to website and add a new computer to the list', function() {
    it('Navigate to add computer page ', function(){
      cy.visit(Cypress.config('baseUrl'));
      cy.get('#add').click();
   
    })

    it('Fill add computer form', function(){
      cy.get('#name').type('ACE-1');
      cy.get('#company').select('Apple Inc.')
      cy.get('.primary').click();



    })

         

})






