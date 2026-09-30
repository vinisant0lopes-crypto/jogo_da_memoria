import { criar_cartoes } from "./criar_cartoes.js";
import { ativarLogicaDoJogo } from "./esconder_escolher.js";
// constantes card e container card 
const card = document.querySelector("#card_exemplo")
const container_cards = document.querySelector('#container_cards')
const btnReset = document.getElementById('resetar-jogo');



async function iniciarJogo() {
  await criar_cartoes(card, container_cards);
  ativarLogicaDoJogo(container_cards);
}

if (btnReset) {
  btnReset.addEventListener('click', () => {
    iniciarJogo();
  });
}

iniciarJogo();