<h1>
    <a href="https://www.laboratoria.la/br">
     <img align="center" width="40px" src="https://v.fastcdn.co/u/cf943cfe/52655001-0-Laboratoria-RGB-isot.png"></a>
    <span>Projeto 02 - Dataverse</span>
</h1> 

![Status](https://img.shields.io/static/v1?label=Status&message=CONCLU%C3%8DDO&color=%3CCOLOR%3E&style=%3CSTYLE%3E&logo=%3CLOGO%3E) ![Date](https://img.shields.io/badge/Release_date-FEVEREIRO-yellow)

<img src="https://i.imgur.com/BVQmFCk.png">

## Índice

* [1. Sobre o projeto](#1-sobre-o-projeto)
* [2. Ferramentas utilizadas](#2-ferramentas-utilizadas)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Tarefas](#4-tarefas)
* [5. Objetivos de aprendizagem](#5-objetivos-de-aprendizagem)
* [6. Considerações finais](#6-considerações-finais)


***

## 1. Sobre o projeto.

Neste projeto, desenvolvemos uma aplicação dedicado à visualização de um conjunto específico de dados. Utilizamos a tecnologia de inteligência artificial, **o ChatGPT**, para gerar um banco de dados em formato de arquivo JavaScript, utilizando o prompting como método.

Como resultado final, apresentamos **um site responsivo que possibilita a visualização, filtragem, ordenação e cálculo de estatísticas sobre os dados.** Este conjunto de dados está relacionado a **livros escritos por autoras mulheres**, oferecendo uma maneira acessível e interativa de explorar essas informações.

- Este projeto foi realizado em dupla por Marcele Reis e Maria Hikari, com apoio da equipe e das colegas do **Bootcamp de Desenvolvimento Front-end da Laboratória**.
- O principal objetivo desse projeto é a aprendizagem e o desenvolvimento de habilidades técnicas e softskills.
- Não foi permitido o uso de frameworks de CSS (Bootstrap, Materialize, etc).
- O tempo de conclusão do projeto foi de 5 Sprints.

#### Deploy
A aplicação foi publicada (ou _deployed_) para que as usuárias da web possam acessá-la.

Neste projeto, foi utilizado o _Github Pages_ para implantar o site: [Autoras em Foco](https://mariahikari.github.io/SAP012-dataverse/).

## 2. Ferramentas utilizadas

### Preparo do PC para trabalhar

+ Node.js
+ Git e GitBash
+ Playwright
+ Visual Studio Code

### Organização e planejamento

+ GitHub
+ Trello

### Linguagens

+ HTML
+ CSS
+ Vanilla JavaScript

### Geração de dados

+ ChatGPT

### Prototipagem

+ Figma

## 3. Funcionalidades

A lista de funcionalidades é a seguinte:

- A aplicação oferece à usuária uma visualização dos dados em estilo de cartões, permitindo que ela explore os itens de forma intuitiva.
- Cada um dos 24 cartões contém informações sobre livros escritos por autoras mulheres, como capa, título, gênero, número de páginas, preço médio, sinopse e prêmios.
- A aplicação permite à usuária filtrar os dados por gênero e preço.
- A aplicação calcula e exibe uma estatística dos dados.
- Em caso de não houver livros que atendam aos critérios de filtragem da usuária, a aplicação apresentará uma mensagem na tela informando-a sobre essa condição.
- A funcionalidade de ordenação permite que a usuária organize os títulos em ordem alfabética, tanto de forma ascendente quanto descendente.
- A aplicação permite à usuária reiniciar a aplicação, limpando filtros e ordenamentos, com um botão "Mostrar todos".
- As operações de filtrar, ordenar, limpar, não recarregam a página, mas sim adicionam conteúdo de maneira dinâmica via JavaScript.
- A aplicação é responsiva, ou seja, pode ser visualizada sem problemas em diferentes tamanhos de tela: celulares, tablets e desktops.

![img](./src/data/assets/gif.gif)

## 4. Tarefas

### História da usuária

Considerando a temática escolhida para o projeto (livros de autoras femininas), temos como objetivo resolver os problemas e atender à demanda do nosso público-alvo, que são:

- **Leitora ávida:**

Valorizando a diversidade literária, busca-se encontrar facilmente livros de autoras mulheres em diversos gêneros e estilos, contribuindo para apoiar a representatividade feminina no mundo da literatura.

- **Pessoa interessada em expandir o repertório literário:**

Como um indivíduo em busca de uma plataforma que facilite a descoberta de livros de autoras mulheres, reconhecendo a importância da diversidade de vozes na jornada de leitura. Deseja-se explorar novos gêneros e perspectivas, ampliando assim o horizonte intelectual e cultural.

### Geração de dados

Por meio de Inteligência Artificial, ChatGPT foram gerados os dados utilizados no projeto.

<img src="https://imgur.com/XysUiuT.png">

Estes dados foram salvos em um arquivo JavaScript, que exporta uma matriz com 24 objetos. A estrutura de cada objeto é a seguinte:

<br><img src="https://imgur.com/68Tf01o.png">

### Protótipo 

Depois, com o auxílio do Figma, elaborou-se um protótipo de alta fidelidade do site, onde foi enfatizado um design limpo, cores suaves e uma clara hierarquia de informações para facilitar a leitura das usuárias.

<img src="https://imgur.com/zAoG9Hy.png">


## 5. Objetivos de aprendizagem

#### HTML

- Uso de HTML semântico.

#### CSS

- Uso de seletores CSS;
- Modelo de caixa (box model): borda, margem, preenchimento;
- Uso de flexbox em CSS.

#### Web APIs

- Uso de seletores do DOM;
- Manuseio de eventos do DOM (ouvintes, propagação, delegação);
- Manipulação dinâmica do DOM.

#### JavaScript

- Diferenciar entre tipos de dados primitivos e não primitivos;
- Arrays (arranjos);
- Objetos (key, value);
- Variáveis (declaração, atribuição, escopo);
- Uso de condicionais (if-else, switch, operador ternário, lógica booleana);
- Uso de laços (while, for, for..of);
- Funções (params, args, return);
- Testes unitários (unit tests);
- Módulos de ECMAScript (ES modules);
- Uso de linter (ESLINT);
- Uso de identificadores descritivos (Nomenclatura e Semântica);
- Diferença entre expressões (expressions) e declarações (statements).

### Controle de Versões (Git e GitHub)

- Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote);
- Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag);
- GitHub: Implantação com GitHub Pages.

## 6. Considerações finais

Participar desse projeto foi uma jornada enriquecedora, proporcionando o aprimoramento de diversas habilidades, tanto técnicas quanto práticas. Ao longo do processo, adquiri conhecimentos em linguagens, ferramentas e tecnologias, enquanto desenvolvia competências como organização, planejamento, gestão de tempo, comunicação e autodidatismo.

A experiência de trabalhar em equipe também foi fundamental, promovendo a colaboração entre mim e minha dupla. Destacou-se nossa capacidade de lidar com diferentes perspectivas e habilidades individuais. A organização eficiente dos horários e a comunicação clara foram cruciais para alinharmos nossos objetivos e prazos, fortalecendo nossa parceria e impulsionando a produtividade.
