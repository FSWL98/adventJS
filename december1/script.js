let isGoing = false;

const startButton = document.getElementsByClassName('start')[0];

const settingsButton = document.getElementsByClassName('settings')[0];

const ring = document.getElementsByClassName('ring')[0];

const minutes = document.getElementsByClassName('minutes')[0].getElementsByTagName('input')[0];
const seconds = document.getElementsByClassName('seconds')[0].getElementsByTagName('input')[0];

let interval = null;

function passSecond() {
  let oldMinutes = Number(minutes.value);
  const oldSeconds = Number(seconds.value);
  let newSeconds = oldSeconds === 0 ? 59 : oldSeconds - 1;
  let newMinutes = oldSeconds === 0 ? oldMinutes - 1 : oldMinutes
  if (oldMinutes === 0 && newSeconds === 0) {
    newMinutes = 0;
    clearInterval(interval);
    ring.style.stroke = 'red';
    startButton.innerText = 'Start';
    isGoing = false;
    alert('Timer ended');
  }
  minutes.value = newMinutes < 10 ? '0' + newMinutes : newMinutes;
  seconds.value = newSeconds < 10 ? '0' + newSeconds : newSeconds;
}


startButton.addEventListener('click', () => {
  if (isGoing) {
    clearInterval(interval);
    startButton.innerText = 'Start';
    isGoing = false;
  } else {
    isGoing = true;
    ring.style.stroke = '#09A65A';
    minutes.disabled = true;
    seconds.disabled = true;
    startButton.innerText = 'Stop';
    passSecond();
    interval = setInterval(passSecond, 1000)
  }
})

settingsButton.addEventListener('click', () => {
  clearInterval(interval);
  startButton.innerText = 'Start';
  isGoing = false;
  minutes.disabled = !minutes.disabled;
  seconds.disabled = !seconds.disabled;
})