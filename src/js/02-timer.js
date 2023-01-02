import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dateInput = document.querySelector('#datetime-picker');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    // console.log(options.defaultDate);
        if (selectedDates[0] <= options.defaultDate) {
            // return alert("Please choose a date in the future");
          return Notiflix.Notify.info('Please choose a date in the future');
        }    

    startBtn.disabled = false;
  },
};

const fp = flatpickr(dateInput, options);

const clock = document.querySelector('.timer');
const clockValues = document.querySelectorAll('.value');
const clockFields = document.querySelectorAll('.field');

clock.style.display = 'flex';
clock.style.gap = '20px'
clockFields.forEach(field => {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.alignItems = 'center';
});
clockValues.forEach(value => value.style.fontSize = '40px');

const startBtn = document.querySelector('button[data-start]');

startBtn.disabled = true;
startBtn.addEventListener('click', onStartClick);

const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

const timer = {
  intervalId: null,
  start() {
    startBtn.disabled = true;

    const startTime = new Date(dateInput.value).getTime();
    
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      // console.log(`${days}:${hours}:${minutes}:${seconds}`);

      timerDays.textContent = `${days}`;
      timerHours.textContent = `${hours}`;
      timerMinutes.textContent = `${minutes}`;
      timerSeconds.textContent = `${seconds}`;

      if (deltaTime < 1000) {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }
}

function onStartClick() {
  timer.start();
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


