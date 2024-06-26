/// <reference types="Cypress" />

describe("template spec", () => {
  it("should be able to login", () => {
    cy.visit("/");

    cy.get("input[name=username]").type("teste@teste.com");
    cy.get("input[name=password]").type("12345678");
    cy.get("button[aria-label=Entrar]").click();
    // cy.wait(500);
    // cy.get("h3").should("contain", "Meus Dispositivos");
  });

  it.skip("should be able to logout", () => {
    cy.visit("/dashboard");

    cy.get("button[aria-label=Sair]").click();
    // cy.wait(500);
    // cy.get("h2").should("contain", "Acessar");
  });
});
