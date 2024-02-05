// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  const filtro1 = data.filter(item => {
    if ('filtroGenero' in item && filterBy in item.filtroGenero)
    return item.filtroGenero[filterBy] === value
  });
  
  return filtro1;
};

export const sortData = (data, sortBy, sortOrder) => {
  return [];
};
