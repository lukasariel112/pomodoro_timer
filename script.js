let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');
let timer;
let timeLeft = 25 * 60; // 25 minutos

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      timeLeft--;
      updateTimer();
      if (timeLeft <= 0) {
        clearInterval(timer);
        alert("Tempo acabou!");
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  timeLeft = 25 * 60;
  updateTimer();
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

updateTimer(); // Inicializa o timer
