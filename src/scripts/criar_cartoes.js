
const containerCards = document.querySelector('#container_cards');
const cardTemplate = document.getElementById('card_exemplo');

function embaralhar(array) {
    for (let i = 0; i < array.length; i++) {
        const j = Math.floor(Math.random() * array.length);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function definirNivelDificuldade(nivel) {
    const niveis = {
        4: { nome: 'facil', quantidadeCartas: 4, multiplicador: 1 },
        6: { nome: 'medio', quantidadeCartas: 6, multiplicador: 1.5 },
        8: { nome: 'dificil', quantidadeCartas: 8, multiplicador: 2 },
        10: { nome: 'extrema', quantidadeCartas: 10, multiplicador: 3 },
    };

    return niveis[Number(nivel)] || niveis[6];
}


async function criar_cartoes(nivelDificuldade) {
    const dificuldade = definirNivelDificuldade(nivelDificuldade);
    const resposta = await fetch('../../src/data/cards.json');
    const dados = await resposta.json();

    const cartasEmbaralhadas = embaralhar([...dados.cards])
        .slice(0, dificuldade.quantidadeCartas);

    let noveCartas = [...cartasEmbaralhadas, ...cartasEmbaralhadas];
    noveCartas = embaralhar(noveCartas);


    containerCards.innerHTML = '';

    noveCartas.forEach((item) => {
        const divDuplicada = cardTemplate.cloneNode(true);

        divDuplicada.removeAttribute('id');
        divDuplicada.style.display = 'block';
        divDuplicada.dataset.id = item.id;

        const img = divDuplicada.querySelector('.card-image');
        if (img) {
            img.src = item.image;
            img.alt = `Carta ${item.id}`;

        }

        containerCards.appendChild(divDuplicada);
    });

    return dificuldade;
};

export { criar_cartoes, definirNivelDificuldade };
