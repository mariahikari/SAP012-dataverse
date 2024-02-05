export const renderItems = (data) => {
  
  const cards = document.createElement('ul');
  cards.classList.add('container');
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  data.forEach((item) => {
    cards.innerHTML += `
    <dl itemscope itemtype="autorasEmFoco">
      <dt><img src=${item.imageUrl} alt="Capa do Livro" /></dt>
      <dd itemprop="livro" class="livro_name">${item.livro}</dd>
      <dd itemprop="autora" class="autora_name">${item.autora}</dd>
      <dd itemprop="genero">Gênero: ${item.detalhes.genero}</dd>
      <dd itemprop="numeroDePaginas">Páginas: ${item.detalhes.numeroDePaginas}</dd>
      <dd itemprop="preco">Preço: ${item.detalhes.preçoMedio}</dd>
      <details class="verMais">
      <summary><strong>Ver +</strong></summary>
      <ul>
      <li>Sobre o livro: ${item.sobreOLivro}</li>
      <li>Sinopse: ${item.sinopse}</li>
      <li>Prêmios: ${item.curiosidade.premios}</li>
      <li>Adaptações: ${item.curiosidade.adaptações}</li>
      </ul>
      </details>
    </dl>
    `;
  })
  return cards;
};