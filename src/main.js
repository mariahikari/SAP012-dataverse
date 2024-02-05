// main.js

import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const filtroGenero = document.querySelector('#filtroGenero');
const filtroPreco = document.querySelector('#filtroPreco');
const ordenarPor = document.querySelector('#ordenarPor');
const resetButton = document.querySelector('#resetButton');
const cardsLivros = document.querySelector('#root');

// Render all items initially
cardsLivros.appendChild(renderItems(data));

// Event listener for the genre filter

filtroGenero.addEventListener('change', () => {
  const generoSelecionado = filtroGenero.value;

  const dadosFiltrados = filterData(data, 'genero', generoSelecionado);

  cardsLivros.innerHTML = '';
  cardsLivros.appendChild(renderItems(dadosFiltrados));
});
