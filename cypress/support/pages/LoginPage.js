class LoginPage {

    // 1. Mapeamento dos elementos (O "Mapa" de onde estão as coisas)
    elements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginBtn: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get('[data-test="error"]')
    }

    // 2. Ações (O que o robô pode fazer nessa página)
    acessarPagina() {
        cy.visit('https://www.saucedemo.com/')
    }

    preencherLogin(usuario, senha) {
        this.elements.usernameInput().type(usuario)
        this.elements.passwordInput().type(senha)
    }

    clicarEmEntrar() {
        this.elements.loginBtn().click()
    }
}

// Exporta a classe para podermos usar nos arquivos de teste
export default new LoginPage();