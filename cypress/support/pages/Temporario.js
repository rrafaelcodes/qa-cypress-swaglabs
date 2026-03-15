class CheckoutPage {
  // 1. O Mapa (Onde o robô deve clicar/escrever)
  elements = {
    botaoAddMochila: () =>
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    iconeCarrinho: () => cy.get('[data-test="shopping-cart-link"]'),

    botaoCheckout: () => cy.get('[data-test="checkout"]'),

    campoNome: () => cy.get('[data-test="firstName"]'),
    campoSobrenome: () => cy.get('[data-test="lastName"]'),
    campoCep: () => cy.get('[data-test="postalCode"]'),

    botaoContinuar: () => cy.get('[data-test="continue"]'),
    botaoFinalizar: () => cy.get('[data-test="finish"]'),
    mensagemSucesso: () => cy.get(".complete-header"),
  };
  // 2. As Ações
  adicionarMochilaAoCarrinho() {
    this.elements.botaoAddMochila().click();
  }

  acessarCarrinho() {
    this.elements.iconeCarrinho().click();
  }

  irParaCheckout() {
    this.elements.botaoCheckout().click();
  }

  preencherDados(nome, sobrenome, cep) {
    this.elements.campoNome().type(nome);
    this.elements.campoSobrenome().type(sobrenome);
    this.elements.campoCep().type(cep);
  }

  continuarCheckout() {
    this.elements.botaoContinuar().click();
  }

  finalizarCompra() {
    this.elements.botaoFinalizar().click();
  }
}

export default new CheckoutPage();
