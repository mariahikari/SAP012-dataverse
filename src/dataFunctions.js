// A função filterData recebe três parâmetros: 
// 1. data (conjunto de dados a ser filtrado),
// 2. filterBy (a chave pela qual os dados serão filtrados) e 
// 3. value (o valor pelo qual os dados serão filtrados).
export const filterData = (data, filterBy, value) => {
  const filteredData = data.filter(item => { // Utiliza o método filter() para iterar sobre o array data e filtrar os itens que satisfazem a condição.
    return item.detalhes[filterBy].toLowerCase() === value.toLowerCase(); // Verifica se o valor da propriedade detalhes (especificada por filterBy) do item é igual a value, após converter ambos para minúsculas para garantir comparação case-insensitive.
  });
  return filteredData; // Retorna um novo array contendo apenas os itens filtrados.
};

// Esta função sortData recebe três parâmetros: 
// 1. data (conjunto de dados a ser ordenado),
// 2. sortBy (a chave pela qual os dados serão ordenados) e 
// 3. sortOrder (a direção da ordenação).
export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder === 'asc') { // Verifica se a ordenação será ascendente (asc).
    return data.slice().sort((a, b) => a[sortBy].localeCompare(b[sortBy])); // Utiliza o método sort() para ordenar o array data de forma ascendente com base na propriedade especificada por sortBy. A função de comparação (a, b) => a[sortBy].localeCompare(b[sortBy]) compara as strings.
  } else if (sortOrder === 'desc') { // Verifica se a ordenação será descendente (desc)
    return data.slice().sort((a, b) => b[sortBy].localeCompare(a[sortBy])); // Utiliza o método sort() para ordenar o array data de forma descendente com base na propriedade especificada por sortBy. A função de comparação (a, b) => b[sortBy].localeCompare(a[sortBy]) compara as strings.
 
  } else {
    return data; // Retorna os dados inalterados se a ordem não for especificada corretamente
  }
};





// // uma função computeStats que possui pelo menos um parâmetro (data) e retorna um valor computado

export const computeStats = (data) => {
  const count = data.reduce((accumulator) => accumulator + 1, 0);

  return count;
};



