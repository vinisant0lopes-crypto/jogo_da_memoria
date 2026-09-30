

export function expandirBotao(container, toggle, botoes) {

    // console.log("Função expandirBotao inicializada com sucesso!");
    // console.log("Elemento toggle encontrado:", toggle);

    // if (!toggle || !container) {
    //     console.error("Erro: btn_toggle ou container_expansivel não foram encontrados no HTML!");
    //     return;
    // }

    toggle.addEventListener('click', () => {
        // console.log("Botão principal clicado!"); 
        container.classList.toggle('active');
    });

    botoes.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const dificuldade = event.target.dataset.dificuldade;
            // console.log(`Dificuldade selecionada: ${dificuldade}`);
            container.classList.remove('active');
        });
    });
}