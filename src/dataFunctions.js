// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.


export const filterData = (data, filterBy, value) => {
  const filteredData = data.filter(item => {
    return item.detalhes[filterBy].toLowerCase() === value.toLowerCase();
  });
  return filteredData;
};

export const sortData = (data, sortBy, sortOrder) => {
// return [];
//};
