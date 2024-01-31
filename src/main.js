//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

//console.log(example, renderItems(data), data);

const cardsLivros = document.querySelector('#root');
cardsLivros.appendChild(renderItems(data));
