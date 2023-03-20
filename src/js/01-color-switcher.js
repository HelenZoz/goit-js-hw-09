
const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

btnStopEl.setAttribute('disabled', false);

let timerId = null;

btnStartEl.addEventListener("click", () => {
  timerId = setInterval(() => {
    btnStartEl.setAttribute('disabled', true);
    btnStopEl.removeAttribute('disabled');

    bodyEl.style.backgroundColor = getRandomHexColor();
  console.log(getRandomHexColor());
  }, 1000);
});


btnStopEl.addEventListener("click", () => {
  clearInterval(timerId);
  btnStartEl.removeAttribute('disabled')
  btnStopEl.setAttribute('disabled', true);
  console.log(`color has stopped!`);
});
