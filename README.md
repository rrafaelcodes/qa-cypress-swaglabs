# 🚀 Automação de Testes E2E - Swag Labs

Este é um projeto prático de portfólio focado em Quality Assurance (QA) e Automação de Testes de Interface (UI). O objetivo foi criar um robô para testar os fluxos críticos de um e-commerce fictício, o Swag Labs.

## 🛠️ Tecnologias Utilizadas
* **Cypress:** Framework principal de automação Ponta a Ponta (E2E).
* **JavaScript:** Linguagem base para a criação dos scripts.
* **Node.js:** Ambiente de execução.
* **GitHub Actions:** Ferramenta de CI/CD para execução automatizada na nuvem.

## ⚙️ Integração Contínua (CI/CD)
Este projeto possui uma esteira de Integração Contínua configurada. Toda vez que um novo código é enviado, um servidor no GitHub executa os testes em modo *headless* para garantir a qualidade.

[![Testes E2E com Cypress](https://github.com/rrafaelcodes/qa-cypress-swaglabs/actions/workflows/cypress.yml/badge.svg)](https://github.com/rrafaelcodes/qa-cypress-swaglabs/actions)

## 🐞 Cenários Testados
1. **Login com Sucesso (Caminho Feliz):** Valida a autenticação e o carregamento do inventário.
2. **Bloqueio de Usuário:** Garante que o sistema apresente a mensagem de erro correta para usuários bloqueados.
3. **Caça a Bugs Visuais:** Identifica proativamente falhas na interface (ex: imagens quebradas/incorretas carregadas no lugar dos produtos).

## 💻 Como rodar este projeto na sua máquina
1. Clone este repositório: `git clone https://github.com/rrafaelcodes/qa-cypress-swaglabs.git`
2. Instale as dependências: `npm install`
3. Abra a interface do Cypress: `npx cypress open`
