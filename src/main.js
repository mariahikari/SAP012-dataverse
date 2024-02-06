// main.js

//import { filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const filtroGenero = document.querySelector('#filtroGenero');
const filtroPreco = document.querySelector('#filtroPreco');
const ordenarPor = document.querySelector('#ordenarPor');
const resetButton = document.querySelector('#resetButton');
const cardsLivros = document.querySelector('#root');

// Função para renderizar os livros com base nos dados fornecidos
const renderizarLivros = (dados) => {
  cardsLivros.innerHTML = ''; // Limpa o conteúdo atual
  cardsLivros.appendChild(renderItems(dados)); // Renderiza os livros
};


// Função para filtrar e ordenar os livros com base nos filtros e na ordem selecionada
const filtrarEOrdenarLivros = () => {
  const generoSelecionado = filtroGenero.value;
  const precoSelecionado = filtroPreco.value;
  const ordenacaoSelecionada = ordenarPor.value;

  // Filtrar os dados com base no gênero e no preço
  let dadosFiltrados = data.filter(item => {
    const generoCorrespondente = generoSelecionado === 'todos' || item.detalhes.genero.toLowerCase() === generoSelecionado.toLowerCase();
    const precoCorrespondente = precoSelecionado === 'todos' || item.detalhes.preçoMedio.toLowerCase() === precoSelecionado.toLowerCase();
    return generoCorrespondente && precoCorrespondente;
  });

  // Ordenar os dados
  dadosFiltrados = ordenarDados(dadosFiltrados, ordenacaoSelecionada);

  renderizarLivros(dadosFiltrados);
};

// Renderizar todos os livros inicialmente
renderizarLivros(data);

// Event listener para o filtro de gênero
filtroGenero.addEventListener('change', filtrarEOrdenarLivros);

// Event listener para o filtro de preço
filtroPreco.addEventListener('change', filtrarEOrdenarLivros);

// Event listener para o seletor de ordenação
ordenarPor.addEventListener('change', filtrarEOrdenarLivros);

// Event listener para o botão de reset
resetButton.addEventListener('click', () => {
  filtroGenero.value = 'todos';
  filtroPreco.value = 'todos';
  ordenarPor.value = 'asc'; // Define a ordem padrão para ascendente ao redefinir os filtros
  renderizarLivros(data); // Renderiza todos os livros novamente
});