import { filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

// Seleciona os elementos HTML correspondentes aos filtros e ao contêiner dos cards
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
  // Obtém os valores selecionados dos filtros
  const generoSelecionado = filtroGenero.value;
  const precoSelecionado = filtroPreco.value;
  const ordenacaoSelecionada = ordenarPor.value;

  // Filtrar os dados com base no gênero e no preço
  let dadosFiltrados = data;
  if (generoSelecionado !== 'todos') {
    dadosFiltrados = filterData(data, 'genero', generoSelecionado);
  }

  if (precoSelecionado !== 'todos') {
    dadosFiltrados = filterData(dadosFiltrados, 'preçoMedio', precoSelecionado);
  }

  // Ordenar os dados de acordo com a opção selecionada
  dadosFiltrados = sortData(dadosFiltrados, 'livro', ordenacaoSelecionada);

  renderizarLivros(dadosFiltrados); // Renderiza os livros filtrados e ordenados

};


renderizarLivros(data); // Renderiza todos os livros inicialmente

filtroGenero.addEventListener('change', filtrarEOrdenarLivros); // Event listener para o filtro de gênero

filtroPreco.addEventListener('change', filtrarEOrdenarLivros); // Event listener para o filtro de preço

ordenarPor.addEventListener('change', filtrarEOrdenarLivros); // Event listener para o seletor de ordenação

// Event listener para o botão de reset
resetButton.addEventListener('click', () => {
  // Define os valores padrão para os filtros
  filtroGenero.value = 'todos';
  filtroPreco.value = 'todos';
  ordenarPor.value = 'asc'; // Define a ordem padrão para ascendente ao redefinir os filtros
  renderizarLivros(data); // Renderiza todos os livros novamente
});