import { criar_cartoes } from "./criar_cartoes.js";
import { ativarLogicaDoJogo } from "./esconder_escolher.js";
import { expandirBotao } from "./dificuldade.js";

document.addEventListener('DOMContentLoaded', () => {

  const card = document.querySelector("#card_exemplo");
  const container_cards = document.querySelector('#container_cards');
  const btnReset = document.getElementById('resetar_jogo');

  const btnsDificuldade = document.querySelectorAll('.btn_dificuldade');


  let nivelDificuldade = 4;


  btnsDificuldade.forEach((btn) => {
    btn.addEventListener('click', (event) => {

      nivelDificuldade = Number(event.currentTarget.dataset.nivel);
      

      iniciarJogo();
    });
  });

  const containerExpansivel = document.getElementById('container_expansivel');
  const btnToggle = document.getElementById('btn_toggle');

  async function iniciarJogo() {
      await criar_cartoes(card, container_cards, nivelDificuldade);
      ativarLogicaDoJogo(container_cards);
  }

  if (btnReset) {
      btnReset.addEventListener('click', () => {
          iniciarJogo();
      });
  }


  expandirBotao(containerExpansivel, btnToggle, btnsDificuldade);

  iniciarJogo();
});