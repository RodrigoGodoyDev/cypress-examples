const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com', // <--- Tu base central
    setupNodeEvents(on, config) { },
  },
});