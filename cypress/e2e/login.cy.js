describe('Teste de Login e Validação de Bug - Swag Labs', () => {

  // TESTE 1: O CAMINHO COM DEFEITO (Deve ficar vermelho)
  it('Deve barrar o bug da foto do cachorro logando com problem_user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('problem_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')

    // Tenta achar a mochila, mas esbarra no cachorro e falha
    cy.get('.inventory_item_img img').first()
      .should('have.attr', 'src')
      .should('include', 'backpack')
  })

  // TESTE 2: O CAMINHO FELIZ (Deve ficar verde)
  it('Deve ver a foto correta da mochila logando com standard_user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')

    // Acha a mochila com sucesso e passa no teste!
    cy.get('.inventory_item_img img').first()
      .should('have.attr', 'src')
      .should('include', 'backpack')
  })

})
// TESTE 3: O USUÁRIO BLOQUEADO (Deve ficar verde, porque o sistema tem que barrar ele)
  it('Deve mostrar mensagem de erro ao logar com locked_out_user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // O robô não procura a mochila dessa vez. Ele procura a caixa de erro vermelha!
    // E verifica se o texto dentro dela contém a frase "locked out"
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'locked out')
  })