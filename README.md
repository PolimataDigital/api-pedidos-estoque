# API de Pedidos e Estoque

API REST desenvolvida com Node.js, Express, TypeScript e PostgreSQL, utilizando SQL manual por meio do driver `pg`, sem ORM.

## Objetivo

Desenvolver um sistema de back-end para gerenciamento de produtos, pedidos, usuários e estoque de uma pequena loja.

O projeto tem como objetivo aplicar conceitos de engenharia de software, modelagem relacional, integração com banco de dados, segurança, testes automatizados e boas práticas de desenvolvimento.

## Funcionalidades planejadas

- Cadastro e gerenciamento de produtos.
- Controle de quantidades disponíveis em estoque.
- Cadastro e autenticação de usuários.
- Criação e consulta de pedidos.
- Cancelamento de pedidos e reposição de estoque.
- Controle de permissões e acesso aos recursos.
- Transações para preservar a integridade dos dados.
- Tratamento de requisições concorrentes.
- Validação de dados e tratamento de erros.
- Testes automatizados e documentação da API.

## Tecnologias

- **Node.js:** ambiente de execução.
- **Express:** framework para criação da API HTTP.
- **TypeScript:** linguagem utilizada no desenvolvimento.
- **PostgreSQL:** banco de dados relacional.
- **pg (node-postgres):** driver para executar consultas SQL.
- **Git e GitHub:** versionamento e gerenciamento do repositório.

## Estado do desenvolvimento

GET /produtos/:id — consulta individual, parâmetros, validação, SQL parametrizado e erros HTTP

As funcionalidades descritas ainda serão implementadas progressivamente.

## Organização

A estrutura do projeto, as instruções de instalação, a configuração do banco de dados e a documentação dos endpoints serão adicionadas conforme o desenvolvimento avançar.

## Finalidade

Projeto de portfólio voltado à demonstração prática de competências em desenvolvimento back-end, com foco na compreensão das decisões técnicas, na integridade dos dados e na manutenção do código.
