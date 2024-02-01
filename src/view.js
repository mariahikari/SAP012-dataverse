export const renderItems = (data) => {
  console.log(data)
  const cards = document.createElement('ul');
  cards.classList.add('container');
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  data.forEach((item) => {
    cards.innerHTML += `
    <dl itemscope itemtype="autorasEmFoco">
      <dt><img src=${item.imageUrl} alt="Capa do Livro" /></dt>
      <dd itemprop="livro" class="livro_name">${item.livro}</dd>
      <dd itemprop="autora">${item.autora}</dd>
      <dd itemprop="numeroDePaginas">Gênero: ${item.detalhes.genero}</dd>
      <dd itemprop="numeroDePaginas">Páginas: ${item.detalhes.numeroDePaginas}</dd>
      <dd itemprop="preco">Preço: ${item.detalhes.preçoMedio}</dd>
      <details open>
      <summary><strong>Ver +</strong></summary>
      <ul>
      <li>Sobre o livro: ${item.sobreOLivro}</li>
      <li>Sinopse: ${item.sinopse}</li>
      <li>Prêmios: ${item.detalhes.premios}</li>
      <li>Adaptações: ${item.detalhes.adaptações}</li>
      </ul>
      </details>

    </dl>
    `;
  })
  return cards;
};