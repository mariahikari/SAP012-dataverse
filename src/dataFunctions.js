// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.


export const filterData = (data, filterBy, value) => {
  const filteredData = data.filter(item => {
   return item.detalhes[filterBy].toLowerCase() === value.toLowerCase();
  });
  return filteredData;
};

export const sortData = (data, sortBy, sortOrder) => {
  const ordenarDados = (dados, ordem) => {
    if (ordem === 'asc') {
      return dados.slice().sort((a, b) => a.livro.localeCompare(b.livro)); // Ordenação ascendente por título do livro
    } else if (ordem === 'desc') {
      return dados.slice().sort((a, b) => b.livro.localeCompare(a.livro)); // Ordenação descendente por título do livro
    } else {
      return dados; // Retorna os dados inalterados se a ordem não for especificada corretamente
    }
  };
};

