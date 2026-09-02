// ==========================================
// ELEMENTOS DO HTML
// ==========================================

const board = document.querySelector("#board");
const movesElement = document.querySelector("#moves");
const pairsElement = document.querySelector("#pairs");
const messageElement = document.querySelector("#message");
const restartButton = document.querySelector("#restart");


// ==========================================
// VARIÁVEIS DO JOGO
// ==========================================

let images = [];
let cards = [];

let firstCard = null;
let secondCard = null;

let lockBoard = false;

let moves = 0;
let pairs = 0;


// ==========================================
// CARREGAR AS IMAGENS DO JSON
// ==========================================

async function loadCards() {

    try {

        const response = await fetch("./src/data/cards.json");

        if (!response.ok) {
            throw new Error("Não foi possível carregar o arquivo cards.json");
        }

        const data = await response.json();

        // Guarda as imagens do JSON
        images = data.cards;

        // Atualiza o total de pares no HTML
        pairsElement.textContent = `0`;

        // Inicia o jogo
        startGame();

    } catch (error) {

        console.error("Erro:", error);

        messageElement.textContent =
            "Erro ao carregar as imagens do jogo.";

    }
}


// ==========================================
// EMBARALHAR CARTAS
// ==========================================

function shuffle(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const randomIndex =
            Math.floor(Math.random() * (i + 1));

        [
            shuffled[i],
            shuffled[randomIndex]
        ] = [
            shuffled[randomIndex],
            shuffled[i]
        ];
    }

    return shuffled;
}


// ==========================================
// INICIAR O JOGO
// ==========================================

function startGame() {

    // Reseta as cartas selecionadas
    firstCard = null;
    secondCard = null;

    // Libera o tabuleiro
    lockBoard = false;

    // Reseta contadores
    moves = 0;
    pairs = 0;

    movesElement.textContent = moves;

    pairsElement.textContent =
        `${pairs}/${images.length}`;

    messageElement.textContent = "";


    // ======================================
    // CRIA OS PARES
    // ======================================

    cards = [
        ...images,
        ...images
    ];


    // ======================================
    // EMBARALHA
    // ======================================

    cards = shuffle(cards);


    // ======================================
    // LIMPA O TABULEIRO
    // ======================================

    board.innerHTML = "";


    // ======================================
    // CRIA AS CARTAS
    // ======================================

    cards.forEach((cardData, index) => {

        createCard(cardData, index);

    });
}


// ==========================================
// CRIAR UMA CARTA
// ==========================================

function createCard(cardData, index) {

    const card = document.createElement("div");

    card.classList.add("card");


    // Guarda informações da carta
    card.dataset.id = cardData.id;
    card.dataset.index = index;


    // HTML da carta
    card.innerHTML = `

        <div class="card-inner">

            <!-- Frente da carta -->
            <div class="card-front">
                ?
            </div>

            <!-- Verso da carta -->
            <div class="card-back">

                <img
                    src="${cardData.image}"
                    alt="Carta do jogo"
                >

            </div>

        </div>

    `;


    // Evento de clique
    card.addEventListener("click", function () {

        flipCard(card);

    });


    // Adiciona ao tabuleiro
    board.appendChild(card);
}


// ==========================================
// VIRAR CARTA
// ==========================================

function flipCard(card) {

    // Não permite clicar enquanto
    // as cartas estão sendo comparadas
    if (lockBoard) {
        return;
    }


    // Não permite clicar novamente
    // na mesma carta
    if (card === firstCard) {
        return;
    }


    // Não permite clicar em carta
    // que já foi encontrada
    if (card.classList.contains("matched")) {
        return;
    }


    // Vira a carta
    card.classList.add("flipped");


    // ======================================
    // PRIMEIRA CARTA
    // ======================================

    if (firstCard === null) {

        firstCard = card;

        return;
    }


    // ======================================
    // SEGUNDA CARTA
    // ======================================

    secondCard = card;


    // Conta a jogada
    moves++;

    movesElement.textContent = moves;


    // Verifica se formou um par
    checkMatch();
}


// ==========================================
// VERIFICAR SE AS CARTAS SÃO IGUAIS
// ==========================================

function checkMatch() {

    const isMatch =
        firstCard.dataset.id ===
        secondCard.dataset.id;


    if (isMatch) {

        handleMatch();

    } else {

        handleMismatch();

    }
}


// ==========================================
// QUANDO ENCONTRA UM PAR
// ==========================================

function handleMatch() {

    // Marca as duas cartas
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");


    // Incrementa quantidade de pares
    pairs++;


    pairsElement.textContent =
        `${pairs}/${images.length}`;


    // Limpa a seleção
    resetTurn();


    // ======================================
    // VERIFICA SE O JOGO TERMINOU
    // ======================================

    if (pairs === images.length) {

        messageElement.textContent =
            "🎉 Parabéns! Você encontrou todos os pares!";

    }
}


// ==========================================
// QUANDO AS CARTAS SÃO DIFERENTES
// ==========================================

function handleMismatch() {

    // Bloqueia novos cliques
    lockBoard = true;


    // Aguarda 1 segundo
    setTimeout(function () {

        // Esconde as duas cartas
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");


        // Libera o tabuleiro
        resetTurn();

    }, 1000);
}


// ==========================================
// RESETAR TURNO
// ==========================================

function resetTurn() {

    firstCard = null;
    secondCard = null;

    lockBoard = false;
}


// ==========================================
// BOTÃO NOVO JOGO
// ==========================================

restartButton.addEventListener("click", function () {

    startGame();

});


// ==========================================
// INICIAR
// ==========================================

loadCards();