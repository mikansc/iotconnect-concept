import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "junit",
  reporterOptions: {
    mochaFile: "results/result.xml",
  },
  // reporterOptions: {
  //   mochaFile: "results/my-test-output.xml",
  //   toConsole: true,
  // },
  e2e: {
    baseUrl: "http://localhost:3000",
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
