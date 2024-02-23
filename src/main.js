import { filterData, sortData, computeStats } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

// Seleciona os elementos HTML correspondentes aos filtros e ao contêiner dos cards
const filtroGenero = document.querySelector('#filtroGenero');
const filtroPreco = document.querySelector('#filtroPreco');
const ordenarPor = document.querySelector('#ordenarPor');
const resetButton = document.querySelector('#resetButton');
const cardsLivros = document.querySelector('#root');
const quantidadeDeLivros = document.querySelector('#quantidadeDeLivros');

// Função para renderizar os livros com base nos dados fornecidos
const renderizarLivros = (dados) => {
  cardsLivros.innerHTML = ''; // Limpa o conteúdo atual
  if (dados.length === 0) {
    const semResultado = document.createElement('div');
    semResultado.textContent = 'Parece que estamos com uma estante meio vazia! Que tal ajustar os filtros ou explorar outros gêneros para encontrar sua próxima leitura favorita?';
    semResultado.classList.add('mensagem-sem-resultado');
    cardsLivros.appendChild(semResultado);
  }
  else {
    cardsLivros.appendChild(renderItems(dados)); // Renderiza os livros
  }

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
    dadosFiltrados = filterData(data, 'generoLivro', generoSelecionado);
  }

  if (precoSelecionado !== 'todos') {
    dadosFiltrados = filterData(dadosFiltrados, 'precoMedio', precoSelecionado);
  }

  // Ordenar os dados de acordo com a opção selecionada
  dadosFiltrados = sortData(dadosFiltrados, 'name', ordenacaoSelecionada);

  renderizarLivros(dadosFiltrados); // Renderiza os livros filtrados e ordenados

  const totalLivros = computeStats(dadosFiltrados);
  quantidadeDeLivros.textContent = `Quantidade de livros: ${totalLivros}`;
};


renderizarLivros(data); // Renderiza todos os livros inicialmente

filtroGenero.addEventListener('change', () => filtrarEOrdenarLivros()); // Event listener para o filtro de gênero

filtroPreco.addEventListener('change', () => filtrarEOrdenarLivros()); // Event listener para o filtro de preço

ordenarPor.addEventListener('change', () => filtrarEOrdenarLivros()); // Event listener para o seletor de ordenação


resetButton.addEventListener('click', (event) => { // Event listener para o botão de reset
  console.log(event); //passar no teste - Palomita
  // Define os valores padrão para os filtros
  filtroGenero.value = 'todos';
  filtroPreco.value = 'todos';
  ordenarPor.value = 'asc'; // Define a ordem padrão para ascendente ao redefinir os filtros
  quantidadeDeLivros.textContent = '';

  renderizarLivros(data); // Renderiza todos os livros novamente
});