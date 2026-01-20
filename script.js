const background = document.querySelector('#iatendimento')
const pointer = document.querySelector('#ipointer')
const text = document.querySelector('#iatendimento-text');

function hourVerification() {
    const hours = new Date().getHours();

    if (hours >= 9 && hours <= 18) {
        background.classList.add('atendimento-aberto');
        background.classList.remove('atendimento-fechado');

        pointer.classList.add('pointer-aberto');
        pointer.classList.remove('pointer-fechado');

        text.textContent = 'Aberto agora';
    } else {
        background.classList.add('atendimento-fechado');
        background.classList.remove('atendimento-aberto');

        pointer.classList.add('pointer-fechado');
        pointer.classList.remove('pointer-aberto');

        text.textContent = 'Fechado';
    };
};


hourVerification();
setInterval(hourVerification, 1000 * 60);
