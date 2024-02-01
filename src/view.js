export const renderItems = (data) => {
  console.log(data)
  const cards = document.createElement('ul');
  cards.classList.add('container');
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  data.forEach((item) => {
    cards.innerHTML +=`
    <dl itemscope itemtype="autorasEmFoco">
      <dt><img src="${item.imageUrl}" alt="Capa do Livro" /></dt>
      <dd itemprop="livro">"${item.livro}"</dd>
      <dd itemprop="autora">"${item.autora}"</dd>
      <dd itemprop="numeroDePaginas">${item.numeroDePaginas}"</dd>
      <dd itemprop="preco">${item.preçoMedio}"</dd>
      <button class='sinopseButton'><dt>Sinopse</dt><dd itemprop="Sinopse"></dd></button>
    </dl>
    `;
  })
return cards;
};