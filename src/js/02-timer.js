// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const inputEl = document.querySelector('input#datetime-picker');
const btnEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector("span[data-days]");
const hoursEl = document.querySelector('span[data-hours]');
const minutsEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

btnEl.setAttribute('disabled', true);

const options = {
    enableTime: true, //Включает функцию выбора времени;
    time_24hr: true, //Отображает средство выбора времени в 24-часовом режиме без выбора утра / вечера, когда оно включено.
    defaultDate: new Date(), //Устанавливает начальную выбранную дату (даты).
    minuteIncrement: 1, //Настраивает шаг для минутного ввода (вкл. прокрутка)
    onClose(selectedDates) {
        // console.log(selectedDates[0]);
        if (selectedDates[0] <= options.defaultDate) {
            btnEl.setAttribute('disabled', true);
            Notiflix.Notify.warning("Please choose a date in the future");
        } else {
        btnEl.removeAttribute('disabled');
        } 
    }
};

flatpickr("input#datetime-picker", options);

btnEl.addEventListener('click', handleClickBtnStart)
 
function handleClickBtnStart() {
    btnEl.setAttribute('disabled', false);

    const selectedDate = inputEl.value;
    const endDate = new Date(selectedDate);
    console.log(endDate);

     this.intervalId = setInterval(() => { 
         const deltaTime = endDate - new Date();
         
         const { days, hours, minutes, seconds } = convertMs(deltaTime);
         console.log(`${days}:${hours}:${minutes}:${seconds}`);

        daysEl.textContent = `${days}`;
        hoursEl.textContent = `${hours}`;
        minutsEl.textContent = `${minutes}`;
        secondsEl.textContent = `${seconds}`;

            if (deltaTime < 1000) {
                clearInterval(this.intervalId);
                return;
         };
     }, 1000); 
};

function addLeadingZero(value) {
    return String(value).padStart(2, 0);
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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}