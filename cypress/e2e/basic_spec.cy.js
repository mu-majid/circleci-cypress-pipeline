describe('Basic API Test', () => {
  it('Should return "Hello World!" from the root endpoint', () => {
    cy.request('http://localhost:3000/') 
      .its('body') 
      .should('eq', 'Hello World!'); 
  });
});
