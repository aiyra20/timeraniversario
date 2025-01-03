//Seleciona o elemento do timer
const timerElement = document.getElementById('timer');

//Define a data do proximo Ano Novo
const newYear = new Date().getFullYear() + 0;
const newYearDate = new Date(`January 17, ${newYear} 00:00:00`);

//Função para atualizar o timer
function updateTimer() {
    const now = new Date();
    const timeRemaining = newYearDate - now;

    if (timeRemaining <= 0) {
        timerElement.textContent = "Feliz Aniversário ✨❤!!"
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

//Atualiza o timer a cada segundo
const timerInterval = setInterval(updateTimer, 1000);

//Atualiza o timer
updateTimer();
