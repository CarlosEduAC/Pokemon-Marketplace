<div class="bg-gray-dark">
  <h1 align="center">
    Pokémon Marketplace
  </h1>
</div>

<p align="center">
  <a href="https://www.linkedin.com/in/carloseac/">
    <img alt="Carlos Cardoso" src="https://img.shields.io/badge/-CarlosEAC-009db9?style=flat&logo=Linkedin&logoColor=white" />
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/CarlosEduAC/Pokemon-Marketplace?color=009bd9">

  <a href="https://github.com/CarlosEduAC/Pokemon-Marketplace/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/CarlosEduAC/Pokemon-Marketplace?color=009bd9">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-009db9">

  <a href="https://github.com/CarlosEduAC/Pokemon-Marketplace/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/CarlosEduAC/Pokemon-Marketplace?color=009db9&logo=github">
  </a>
</p>

<div align="center">
  <sub>Desafio FrontEnd B2W. Construído por
    <a href="https://github.com/CarlosEduAC">Carlos Eduardo Cardoso</a>
  </sub>
</div>

## :pushpin: Tabela de Conteúdo

<!-- * [Site de Demostração](#eyes-site-de-demostração)  -->
* [Sobre](#one-sobre-o-projeto)
* [Tecnologias](#two-tecnologias)
* [Funcionalidades](#three-funcionalidades)
* [Como rodar](#construction_worker-como-rodar)
* [Licencia](#closed_book-licencia)

## :one: Sobre o Projeto
Construção de uma [Pokémon Marketplace](https://pokemonmarketplace.herokuapp.com/) composta por lojas
representadas pelos tipos dos Pokémon. Cada loja deve ter um catálogo de Pokémon com a opção de adicionar no carrinho, remover do carrinho, mais detalhes sobre o pokémon, com preço definido de acordo com o nível do pokémon. O carrinho é compartilhado entre as lojas e gerenciado pela Pokémon Marketplace. Todas as informações sobre os Pokémon, foram obtidas pela API pública de [Pokémon](https://pokeapi.co/).

O projeto segue boas práticas e está disponivel no link [Pokémon Marketplace](https://pokemonmarketplace.herokuapp.com/).

## :two: Tecnologias
Esse projeto foi feito utilizando as seguintes tecnologias:

* [Typescript](https://www.typescriptlang.org/)
* [ReactJS](https://pt-br.reactjs.org/)
* [Heroku](https://dashboard.heroku.com/)

## :three: Funcionalidades

Aplicação responsiva e composta pelas seguintes funcionalidades:

* Catálogo de produtos
* Carrinho lateral
* Resumo do carrinho
* 10 lojas com estilos e tipos diferentes de Pokémon
* Barra de busca para filtrar os Pokémon
* Botão de finalizar compra, reiniciando o processo de compra
* Modal de obrigado ao finalizar compra
* Uma página com mais detalhes do Pokémon, tendo informações como os tipos, movimentos.
* Salvar os dados da compra do usuário localmente para não perdê-las ao atualizar a página
* Colocá-lo online em alguma url pública para que as pessoas consigam utilizar a loja.

### 💻 [Pokémon Marketplace](https://pokemonmarketplace.herokuapp.com/) Screenshot
<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
  <img src="./.github/Home.png" width="800px">
  <img src="./.github/PokeStore.png" width="800px">
  <img src="./.github/PokeStore1.png" width="800px">
  <img src="./.github/Details.png" width="800px">
  <img src="./.github/Modal.png" width="800px">
  <img src="./.github/LocalStorage.png" width="800px">
</div>

### 📱 [Pokémon Marketplace](https://pokemonmarketplace.herokuapp.com/) Screenshot
<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
  <img src="./.github/HomeMobile.png" width="300px">
  <img src="./.github/PokeStoreMobile.png" width="300px">
  <img src="./.github/CartMobile.png" width="300px">
  <img src="./.github/DetailsMobile.png" width="300px">
  <img src="./.github/ModalMobile.png" width="300px">
</div>

## :four: Como rodar local

### 💻 Rode a Aplicação Web

```bash
# Clone o Repositório
$ git clone https://github.com/CarlosEduAC/Pokemon-Marketplace.git
```

```bash
# Vá para a pasta do projeto
$ cd Pokemon-Marketplace

# Instale as depedencias
$ yarn install

# Rode a aplicação
$ yarn start
```
Aplicação disponivel na url: http://localhost:3000/

## :closed_book: Licencia

Lançado em 2021 :closed_book: Licencia

Construído por [Carlos Cardoso](https://github.com/CarlosEduAC) 🚀.
Esse projeto esta sobre [MIT license](./LICENSE).
