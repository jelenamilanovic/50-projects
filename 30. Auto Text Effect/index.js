const textEl = document.getElementById('text');
const speedControllerEl = document.getElementById('speed-controller');
const text = "We Love Programming!";
let currentIdx = 0;
let speed = 1;

speedControllerEl.addEventListener("input", changeSpeed);

updateText();

function updateText() {
  textEl.innerText = text.substr(0, currentIdx);
  currentIdx = currentIdx === text.length ? 0 : ++currentIdx;
  window.setTimeout(updateText, 300 / speed);
}

function changeSpeed(e) {
  speed = Number(e.target.value);
}
