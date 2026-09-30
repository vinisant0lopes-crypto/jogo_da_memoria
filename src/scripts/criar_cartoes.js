let nivelDificuldade = 4; // 4, 6, 8, 10

function embaralhar(array) {
    for (let i = 0; i < array.length; i++) {
        const j = Math.floor(Math.random() * array.length);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}



async function criar_cartoes(card, container_cards) {
    const resposta = await fetch('../../src/data/cards.json');
    const dados = await resposta.json();

    const cartasEmbaralhadas = embaralhar([...dados.cards]).slice(0, nivelDificuldade);
    // console.log('Cartas embaralhadas:', cartasEmbaralhadas);

    let noveCartas = [...cartasEmbaralhadas, ...cartasEmbaralhadas];
    noveCartas = embaralhar(noveCartas);


    container_cards.innerHTML = '';

    noveCartas.forEach((item) => {
        const divDuplicada = card.cloneNode(true);

        divDuplicada.removeAttribute('id');
        divDuplicada.style.display = 'block';
        divDuplicada.dataset.id = item.id;

        const img = divDuplicada.querySelector('.card-image');
        if (img) {
            img.src = item.image;
            img.alt = `Carta ${item.id}`;

        }

        container_cards.appendChild(divDuplicada);
    });


};

export { criar_cartoes } 
