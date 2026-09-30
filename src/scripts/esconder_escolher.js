let primeiraCarta = null;
let segundaCarta = null;
let bloqTabuleiro = false;

function ativarLogicaDoJogo(container_cards){
    container_cards.addEventListener('click', (event) =>{

        const cartaClicada = event.target.closest('.card') || event.target.closest('#card_exemplo');

        if (!cartaClicada) return;
        if (bloqTabuleiro) return;
        if (cartaClicada.classList.contains('revelada')) return;
        if (cartaClicada.classList.contains('par-encontrado')) return;

        cartaClicada.classList.add('revelada');

        if (!primeiraCarta) {
            primeiraCarta = cartaClicada;
            return;
        }

        segundaCarta = cartaClicada;
        verificarPar();
    });
}

function verificarPar() {
    const eIgual = primeiraCarta.dataset.id === segundaCarta.dataset.id;

    if (eIgual) {
        desativarCartas();
    }else {
        desvirarCartas();
    }

}


function desativarCartas() {
    primeiraCarta.classList.add('par-encontrado');
    segundaCarta.classList.add('par-encontrado');

    resetarTabuleiro();
}

function desvirarCartas() {
    bloqTabuleiro = true;

    setTimeout(() => {
        primeiraCarta.classList.remove('revelada');
        segundaCarta.classList.remove('revelada');

        resetarTabuleiro();
    }, 1000);
}

function resetarTabuleiro() {
    [primeiraCarta, segundaCarta] = [null, null];
    bloqTabuleiro = false;
}

export { ativarLogicaDoJogo }
