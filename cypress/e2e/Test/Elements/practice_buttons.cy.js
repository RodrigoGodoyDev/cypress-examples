describe('Práctica de Selectores y Botones', () => {

    // 🛡️ BLOQUE ANTI-CRASH (Obligatorio para demoqa.com)
    // Esto le dice a Cypress: "Si la página web tiene errores, ignóralos y sigue"
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    beforeEach(() => {
        // Usamos la dirección completa para evitar errores de ruta
        cy.visit('https://demoqa.com/buttons'); 
    });

    it('TC01: Validar Doble Click', () => {
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
    });

    it('TC02: Validar Click Derecho', () => {
        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
    });

    it('TC03: Validar Click Dinámico', () => {
        // Usamos contains para buscar por texto y evitar el ID dinámico
        cy.get('button.btn').eq(2).click();
        cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
    });

    it('TC04: Validar que no se muestre el mensaje haciendo un solo click', ()=>{
        cy.get('#doubleClickBtn').click();
        cy.get('#doubleClickMessage').should('not.exist');
    })

    it('TC05: Validar que no se muestre el mensaje haciendo click izquierdo en el botón de click derecho', ()=>{
        cy.get('#rightClickBtn').click();
        cy.get('#rightClickMessage').should('not.exist');
    })

    it('TC06: Validar que no se muestre el mensaje al hacer click derecho en el boton dinámico', ()=>{
        cy.get('button.btn').eq(2).rightclick();
        cy.get('#dynamicClickMessage').should('not.exist');
    })
});