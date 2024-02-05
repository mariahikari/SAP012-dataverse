import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

//console.log(example, renderItems(data), data);

const filtroGenero = document.querySelector('#filtroGenero');
const filtroPreco = document.querySelector('#filtroPreco');
const ordenarPor = document.querySelector('#ordenarPor');
const resetButton = document.querySelector('#resetButton');
const cardsLivros = document.querySelector('#root');
cardsLivros.appendChild(renderItems(data));


filtroGenero.addEventListener('change', () => {
    const generoSelecionado = filtroGenero.value;
    const dadosFiltrados = filterData(data, 'genero', generoSelecionado);
    cardsLivros.innerHTML = '';
    cardsLivros.appendChild(renderItems(dadosFiltrados));
  });

