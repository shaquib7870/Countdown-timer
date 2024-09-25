let countdown;
let timeLeft = 60 * 10;
let isCounting = false;

const countdownDisplay = document.getElementById('countdown');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    countdownDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function countdownTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
    } else {
        clearInterval(countdown);
        alert("Time's up!");
    }
}
startButton.addEventListener('click', () => {
    if (!isCounting) {
        countdown = setInterval(countdownTimer, 1000);
        isCounting = true;
    }
});
stopButton.addEventListener('click', () => {
    clearInterval(countdown);
    isCounting = false;
});
resetButton.addEventListener('click', () => {
    clearInterval(countdown);
    timeLeft = 60 * 10;
    updateDisplay();
    isCounting = false;
});
updateDisplay();