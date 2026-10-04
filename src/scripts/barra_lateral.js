import {
  iniciarCronometro,
  pararCronometro,
  resetarCronometro,
} from './cronometro.js';
import { calcularPontos, resetarPontuacao } from './pontuacao.js';

let movimentos = 0;
let paresEncontrados = 0;

const spanMovimentos = document.getElementById('movimentos');
const spanPares = document.getElementById('pares_encontrados');

function registrarMovimento() {
  movimentos++;
  if (spanMovimentos) spanMovimentos.textContent = movimentos;
}

function registrarParEncontrado() {
  paresEncontrados++;
  if (spanPares) spanPares.textContent = paresEncontrados;
  calcularPontos(paresEncontrados);
}

function resetarEstatisticas() {
  movimentos = 0;
  paresEncontrados = 0;

  if (spanMovimentos) spanMovimentos.textContent = '0';
  if (spanPares) spanPares.textContent = '0';
  resetarPontuacao();
  resetarCronometro();
}

export {
  iniciarCronometro,
  pararCronometro,
  registrarMovimento,
  registrarParEncontrado,
  resetarEstatisticas,
};