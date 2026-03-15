class LoginPage {
  // 1. Mapeamento dos elementos
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginBtn: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
    menuBtn: () => cy.get("#react-burger-menu-btn"),
    logoutLink: () => cy.get("#logout_sidebar_link"),
  };

  // 2. Ações
  acessarPagina() {
    cy.visit("https://www.saucedemo.com/");
  }

  preencherLogin(usuario, senha) {
    this.elements.usernameInput().type(usuario);
    this.elements.passwordInput().type(senha);
  }

  clicarEmEntrar() {
    this.elements.loginBtn().click();
  }
  ExecutarLogout() {
    this.elements.menuBtn().click();
    this.elements.logoutLink().click();
  }
}
// Exporta a classe para podermos usar nos arquivos de teste
export default new LoginPage();
