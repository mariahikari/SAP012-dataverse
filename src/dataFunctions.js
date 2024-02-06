// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.


export const filterData = (data, filterBy, value) => {
  const filteredData = data.filter(item => {
    return item.detalhes[filterBy].toLowerCase() === value.toLowerCase();
  });
  return filteredData;
};

export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder === 'asc') {
    return data.slice().sort((a, b) => a[sortBy].localeCompare(b[sortBy])); // Ordenação ascendente por título do livro
  } else if (sortOrder === 'desc') {
    return data.slice().sort((a, b) => b[sortBy].localeCompare(a[sortBy])); // Ordenação descendente por título do livro
  } else {
    return data; // Retorna os dados inalterados se a ordem não for especificada corretamente
  }
};

