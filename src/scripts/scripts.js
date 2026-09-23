import { criar_cartoes } from "./criar_cartoes.js";

// constantes card e container card 
const card = document.querySelector("#card_exemplo")
const container_cards = document.querySelector('#container_cards')

criar_cartoes(card, container_cards)