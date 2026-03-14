import LoginPage from '../support/pages/LoginPage'
describe('Testes E2E - Swag Labs', () => {

    it('Deve fazer login com sucesso (Caminho Feliz)', () => {
        // Olha como o código fica absurdamente limpo de ler:
        LoginPage.acessarPagina()
        LoginPage.preencherLogin('standard_user', 'secret_sauce')
        LoginPage.clicarEmEntrar()

        // A validação continua igual, pois é a regra de negócio do teste
        cy.url().should('include', '/inventory.html')
    })

    it('Deve barrar usuário bloqueado', () => {
        LoginPage.acessarPagina()
        LoginPage.preencherLogin('locked_out_user', 'secret_sauce')
        LoginPage.clicarEmEntrar()

        // Usamos o mapeamento de erro que criamos lá no POM para validar
        LoginPage.elements.errorMessage().should('contain', 'locked out')
    })

    it('Deve carregar as imagens corretas dos produtos (Caça ao Bug)', () => {
        // Usando o nosso POM para fazer o login com o usuário problemático
        LoginPage.acessarPagina()
        LoginPage.preencherLogin('problem_user', 'secret_sauce')
        LoginPage.clicarEmEntrar()

        // O robô vai olhar todas as imagens da tela e garantir que NENHUMA
        // tenha o nome do arquivo do cachorro (sl-404)
        cy.get('.inventory_item_img img').each(($img) => {
            cy.wrap($img).invoke('attr', 'src').should('not.include', 'sl-404')
        })
    })
    it ('deve conseguir fazer logout', () => {
        LoginPage.acessarPagina()
        LoginPage.preencherLogin('standard_user', 'secret_sauce')
        LoginPage.clicarEmEntrar()
        LoginPage.ExecutarLogout()

        // Validamos que voltamos para a página de login
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })
})