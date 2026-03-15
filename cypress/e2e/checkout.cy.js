import LoginPage from "../support/pages/LoginPage";
import CheckoutPage from "../support/pages/CheckoutPage";

describe("Fluxo de Compra", () => {
  it("Deve realizar uma compra de ponta a ponta (E2E) com sucesso", () => {
    // 1. Login
    LoginPage.acessarPagina();
    LoginPage.preencherLogin("standard_user", "secret_sauce");
    LoginPage.clicarEmEntrar();

    // 2. Adicionar produto e ir pro carrinho
    CheckoutPage.adicionarMochilaAoCarrinho();
    CheckoutPage.acessarCarrinho();

    // 3. Iniciar o Checkout
    CheckoutPage.irParaCheckout();

    // 4. Preencher os dados do cliente e continuar
    CheckoutPage.preencherDados("Rafael", "Augusto", "12345-678");
    CheckoutPage.continuarCheckout();

    // 5. Finalizar a compra na tela de revisão
    CheckoutPage.finalizarCompra();

    // 6. Garantir que a mensagem de sucesso apareceu!
    CheckoutPage.elements
      .mensagemSucesso()
      .should("have.text", "Thank you for your order!");
  });
});
