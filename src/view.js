// Esta função recebe um parâmetro data, que representa os dados a serem renderizados.
export const renderItems = (data) => {

  const cards = document.createElement('ul'); // Cria um elemento <ul> (lista não ordenada) para armazenar os itens renderizados.
  cards.classList.add('container'); // Adiciona a classe 'container' ao elemento <ul>.

  data.forEach((item) => { // Início do loop de iteração sobre os dados para renderização de cada item.
    // Adiciona o HTML de cada item ao conteúdo do elemento <ul> e adiciona dinamicamente os dados de cada item.
    cards.innerHTML += ` 
    <li itemscope itemtype="autorasEmFoco">
      <dl>
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
    </li>
    `;
  })
  return cards; // Retorna o elemento <ul> (cards) contendo todos os itens renderizados.
};