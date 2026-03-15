import LoginPage from "../support/pages/LoginPage";
describe("Testes E2E - Swag Labs", () => {
  it("Deve fazer login com sucesso (Caminho Feliz)", () => {
    LoginPage.acessarPagina();
    LoginPage.preencherLogin("standard_user", "secret_sauce");
    LoginPage.clicarEmEntrar();

    cy.url().should("include", "/inventory.html");
  });

  it("Deve barrar usuário bloqueado", () => {
    LoginPage.acessarPagina();
    LoginPage.preencherLogin("locked_out_user", "secret_sauce");
    LoginPage.clicarEmEntrar();

    LoginPage.elements.errorMessage().should("contain", "locked out");
  });

  it("Deve carregar as imagens corretas dos produtos (Caça ao Bug)", () => {
    LoginPage.acessarPagina();
    LoginPage.preencherLogin("problem_user", "secret_sauce");
    LoginPage.clicarEmEntrar();

    cy.get(".inventory_item_img img").each(($img) => {
      cy.wrap($img).invoke("attr", "src").should("not.include", "sl-404");
    });
  });
  it("deve conseguir fazer logout", () => {
    LoginPage.acessarPagina();
    LoginPage.preencherLogin("standard_user", "secret_sauce");
    LoginPage.clicarEmEntrar();
    LoginPage.ExecutarLogout();

    cy.url().should("eq", "https://www.saucedemo.com/");
  });
});
