// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

// Este código se ejecutará automáticamente antes de CADA prueba en tu proyecto
Cypress.on('uncaught:exception', (err, runnable) => {
    // Devuelve false para evitar que Cypress falle por errores de la página web
    return false;
});
import './commands'