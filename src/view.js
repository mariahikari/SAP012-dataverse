export const renderItems = (data) => {
  console.log(data)
  const cards = document.createElement('ul');
  cards.classList.add('container');
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  data.forEach((item) => {
    cards.innerHTML +=`
    <dl itemscope itemtype="autorasEmFoco">
      <dt><img src=${item.imageUrl} alt="Capa do Livro" /></dt>
      <dd itemprop="livro">${item.livro}</dd>
      <dd itemprop="autora">${item.autora}</dd>
      <dd itemprop="numeroDePaginas">Páginas: ${item.detalhes.numeroDePaginas}</dd>
      <dd itemprop="preco">Preço: ${item.detalhes.preçoMedio}</dd>
      <button class='sinopseButton'><dd itemprop="sinopse">"Sinopse"</dd></button>
    </dl>
    `;
  })
return cards;
};