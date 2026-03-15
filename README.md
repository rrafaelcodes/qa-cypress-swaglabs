# 🚀 Automação de Testes E2E - Swag Labs

Este é um projeto prático de portfólio focado em Engenharia de Qualidade (QA) e Automação de Testes E2E (Ponta a Ponta). O objetivo principal é garantir o funcionamento dos fluxos críticos de um e-commerce fictício, o [Swag Labs](https://www.saucedemo.com/).

## 🛠️ Tecnologias e Arquitetura

* **Cypress:** Framework moderno para testes E2E.
* **JavaScript:** Linguagem base para a criação dos scripts.
* **Node.js:** Ambiente de execução.
* **Page Object Model (POM):** Arquitetura utilizada para separar os elementos da página (seletores) da lógica de testes, tornando o código limpo, reutilizável e altamente escalável.
* **GitHub Actions (CI/CD):** Pipeline configurada para rodar os testes automaticamente na nuvem a cada novo push.

## ⚙️ Funcionalidades Testadas (Cenários)

- [x] **Autenticação:** Validação de login com credenciais válidas e inválidas.
- [x] **Segurança:** Tratamento e bloqueio de usuários inativos (*Locked Out User*).
- [x] **Fluxo de Checkout Completo (E2E):** Teste de ponta a ponta que cobre a adição de produtos ao carrinho, preenchimento do formulário de entrega, revisão e finalização da compra com validação de sucesso.
- [x] Gerenciamento de testes: Uso do '.skip' para isolar cenários com bugs conhecidos da aplicação (ex: falhas visuais do problem_user), mantendo a pipeline de CI/CD limpa.

## 🚀 Como executar este projeto localmente

1. Clone este repositório:
```bash
git clone [https://github.com/rrafaelcodes/SEU-REPOSITORIO-AQUI.git](https://github.com/rrafaelcodes/SEU-REPOSITORIO-AQUI.git)
```

2. Acesse a pasta do projeto e instale as dependências:
```bash
npm install
```

3. Para abrir a interface interativa do Cypress:
```bash
npx cypress open
```

4. Para rodar todos os testes em modo invisível (Headless):
```bash
npx cypress run
```

## 🤖 Integração Contínua (CI/CD)

A qualidade é garantida continuamente através do **GitHub Actions**. Sempre que um novo código é enviado ao repositório, uma máquina virtual Linux é provisionada nas nuvens para instalar as dependências e rodar a suíte completa do Cypress em modo *headless*, garantindo que as novas implementações não quebrem os fluxos existentes.

---
Desenvolvido por **Rafael** - Estudante de Ciência da Computação e focado em Engenharia de Qualidade.
🔗 [Meu LinkedIn](https://www.linkedin.com/in/rrafaelcodes/)