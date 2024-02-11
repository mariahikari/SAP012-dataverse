import { filterData, sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

// console.log(fakeData);

describe('filterData', () => {

  it('returns `livrosDeFicção`', () => {
    const filteredData = filterData(fakeData, 'genero', 'Ficção');
    expect(filteredData.length).toBe(4);
  });

});


describe('sortData', () => {

  it('returns `ordemAscendente`', () => {
    const sortedData = sortData(fakeData, 'livro', 'asc')
    expect(sortedData[0].livro).toBe('A Poderosa Chefona');
    expect(sortedData[1].livro).toBe('Bolsa Blindada');
    expect(sortedData[2].livro).toBe('Cinquenta Tons de Cinza');
  });

  it('returns `ordemDescendente`', () => {
    const sortedData = sortData(fakeData, 'livro', 'desc')
    expect(sortedData[0].livro).toBe('Sempre Vivemos no Castelo');
    expect(sortedData[1].livro).toBe('Sejamos Todos Feministas');
    expect(sortedData[2].livro).toBe('Quarto de Despejo: Diário de uma Favelada');
  });
});
