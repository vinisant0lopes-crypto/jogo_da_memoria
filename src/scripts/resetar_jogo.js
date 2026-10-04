const btnReset = document.getElementById('resetar_jogo');

function configurarResetarJogo(aoResetarJogo) {
    if (btnReset) {
        btnReset.addEventListener('click', aoResetarJogo);
    }
}

export { configurarResetarJogo };