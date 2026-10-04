let tempoEmMilisegundos = 0;
let intervaloTempo = null;

const spanTempo = document.getElementById('tempo');

function formatarTempo(ms) {
  const segundos = Math.floor(ms / 1000);
  const centesimos = Math.floor((ms % 1000) / 10);

  const segFormatado = String(segundos).padStart(2, '0');
  const centFormatado = String(centesimos).padStart(2, '0');

  return `${segFormatado}.${centFormatado}`;
}

function iniciarCronometro() {
  pararCronometro();
  tempoEmMilisegundos = 0;

  if (spanTempo) {
    spanTempo.textContent = formatarTempo(tempoEmMilisegundos);
  }

  intervaloTempo = setInterval(() => {
    tempoEmMilisegundos += 10;

    if (spanTempo) {
      spanTempo.textContent = formatarTempo(tempoEmMilisegundos);
    }
  }, 10);
}

function pararCronometro() {
  if (intervaloTempo) {
    clearInterval(intervaloTempo);
    intervaloTempo = null;
  }
}

function resetarCronometro() {
  pararCronometro();
  tempoEmMilisegundos = 0;

  if (spanTempo) {
    spanTempo.textContent = '00.00';
  }
}

export {
  iniciarCronometro,
  pararCronometro,
  resetarCronometro,
};

export { tempoEmMilisegundos };