let timer; // Armazena o timer
let isPaused = false; // Controla o estado de pausa
let timeRemaining = 15; // 25 minutos em segundos

// Solicita permissão para notificações
document.addEventListener("DOMContentLoaded", () => {
    if (Notification.permission === 'default') {
        Notification.requestPermission();
    }
});

function startTimer() {
    if (isPaused) return; // Não iniciar se estiver pausado
    timer = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timer);
            alert("Tempo esgotado!");
            showNotification();
        } else {
            timeRemaining--;
            updateDisplay();
        }
    }, 1000);
}

function pauseTimer() {
    isPaused = true; // Marca como pausado
    clearInterval(timer); // Para o timer
}

function resumeTimer() {
    isPaused = false; // Marca como não pausado
    startTimer(); // Retoma o timer
}

function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById("timer").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Função para exibir a notificação
function showNotification() {
    if (Notification.permission === 'granted') {
        new Notification('Pomodoro Finalizado!', {
            body: 'Seu tempo de foco terminou. Hora de uma pausa!',
            icon: 'https://via.placeholder.com/150' // Adicione um ícone opcional
        });
    }
}

// Adicione os ouvintes de evento
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("resume").addEventListener("click", resumeTimer);
