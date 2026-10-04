import { tempoEmMilisegundos } from './cronometro.js';

let pontoBase = 0;
let multiplicadorDificuldade = 1;

const spanPontuacao = document.getElementById('pontuacao');

const tempoMaximo = 60;

function definirMultiplicadorDificuldade(novoMultiplicador) {
  multiplicadorDificuldade = Number(novoMultiplicador) || 1;
}

function calcularPontos(paresEncontrados) {
    const valorPorPar = 100;

    const tempoGasto = tempoEmMilisegundos / 1000;
    const bonusTempo = Math.max(0, (tempoMaximo - tempoGasto) * 10);
    const pontosDaRodada = (paresEncontrados * valorPorPar + bonusTempo)
      * multiplicadorDificuldade;

    pontoBase += pontosDaRodada;

  if (spanPontuacao) {
    spanPontuacao.textContent = parseInt(pontoBase);
  }
  return pontoBase;
}

function resetarPontuacao() {
  pontoBase = 0;

  if (spanPontuacao) {
    spanPontuacao.textContent = '0';
  }
}

export {
  calcularPontos,
  definirMultiplicadorDificuldade,
  resetarPontuacao,
};