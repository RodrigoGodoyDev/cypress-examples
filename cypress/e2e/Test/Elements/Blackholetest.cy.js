describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testpages.eviltester.com/pages/basics/basic-web-page/')
    cy.get('#para1').should('have.text', 'A paragraph of text')
  })
})