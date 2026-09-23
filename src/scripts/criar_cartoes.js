

function criar_cartoes(card, container_cards) {
// constantes 


// numero de cartões a ser adicionado
const n_cartoes = 20;

// laço de repetição
for (let i = 0; i < n_cartoes; i++) {
    const divDuplicada = card.cloneNode(true)

    // aplicar as divs duplicadas para o container
    container_cards.appendChild(divDuplicada)
}

};

export { criar_cartoes } 
