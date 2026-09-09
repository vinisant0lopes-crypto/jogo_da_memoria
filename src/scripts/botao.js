







function botao(botao) {
    // Seleciona o botão e a div
const botao = document.getElementById('meu-botao');
const minhaDiv = document.getElementById('minha-div');

// Adiciona o evento de clique no botão
botao.addEventListener('click', () => {
  // Remove a classe para fazer a div aparecer
  minhaDiv.classList.remove('escondido');
});
}