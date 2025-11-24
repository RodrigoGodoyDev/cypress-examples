describe('Button Elements Test', () => {
  beforeEach(() => {
    cy.visit('/buttons'); // Replace with the actual URL of the page to be tested
  });

  it('TC01: Should be treiggered when using double click', () => {
    const expectedMessage = 'You have done a double click';
    cy.get('#double-click').dblclick();
    cy.get('#double-click-message').should('have.text', expectedMessage);
  });

  it('TC02: Should be treiggered when using right click', () => {
    const expectedMessage = 'You have done a right click';
    cy.get('#right-click').rightclick();
    cy.get('#right-click-message').should('have.text', expectedMessage);
  });
  it('TC03: Should be treiggered when using dynamic click', () => {
    const expectedMessage = 'You have done a dynamic click';
    cy.get('button').contains('Click Me').click();
    cy.get('#dynamic-click-message').should('have.text', expectedMessage);
    });
});