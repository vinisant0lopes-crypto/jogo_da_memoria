import { criar_cartoes } from "./criar_cartoes.js";
import { ativarLogicaDoJogo } from "./esconder_escolher.js";
import { expandirBotao } from "./dificuldade.js";
import { iniciarCronometro, resetarEstatisticas } from './barra_lateral.js';
import { configurarResetarJogo } from './resetar_jogo.js';
import { definirMultiplicadorDificuldade } from './pontuacao.js';

document.addEventListener('DOMContentLoaded', () => {
    let nivelDificuldade = 4; 

    async function iniciarJogo() {
      resetarEstatisticas();
      iniciarCronometro();

      const dificuldade = await criar_cartoes(nivelDificuldade);
      definirMultiplicadorDificuldade(dificuldade.multiplicador);
      ativarLogicaDoJogo();
    }

    expandirBotao((novoNivel) => {
      nivelDificuldade = novoNivel;
      iniciarJogo();
    });

    configurarResetarJogo(iniciarJogo);

    iniciarJogo();
});