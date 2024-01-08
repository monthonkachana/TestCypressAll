const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1860,
  viewportHeight: 990,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
     baseUrl: 'http://www.smart-insect.com:3005/',
    
    setupNodeEvents(on, config) {
     
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
