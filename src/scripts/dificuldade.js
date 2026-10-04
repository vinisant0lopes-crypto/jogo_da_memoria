const containerExpansivel = document.getElementById('container_expansivel');
const btnToggle = document.getElementById('btn_toggle');
const btnsDificuldade = document.querySelectorAll('.btn_dificuldade');

export function expandirBotao(aoSelecionarDificuldade) {

    btnToggle.addEventListener('click', () => {
        containerExpansivel.classList.toggle('active');
    });

    btnsDificuldade.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const nivelDificuldade = Number(event.currentTarget.dataset.nivel);

            containerExpansivel.classList.remove('active');
            aoSelecionarDificuldade(nivelDificuldade);
        });
    });
}