const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector("body");

stopBtn.disabled = true;
startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
    changeColor();
    const timerId = setTimeout(changeColor, 0);
    intervalId = setInterval(() => {
        changeColor();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function changeColor() {
    return body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStopClick() {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}