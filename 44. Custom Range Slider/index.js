const rangeEl = document.getElementById("range");
const rangeLabelEl = document.getElementById("range-label");

const WIDTH = rangeEl.getBoundingClientRect().width - rangeLabelEl.getBoundingClientRect().width / 2;
const HALF_PADDING = 15;
const RANGE_DIFF = Number(rangeEl.max) - Number(rangeEl.min);
const junkyOffset = -3;

rangeEl.addEventListener('input', onRangeChange);
rangeEl.focus();

function onRangeChange(e) {
  rangeLabelEl.style.left = `${calcLabelPosition(e.target.value)}px`;
  rangeLabelEl.innerText = e.target.value;
}

function calcLabelPosition (currentRangeValue) {
  return WIDTH * currentRangeValue / RANGE_DIFF - HALF_PADDING + junkyOffset;
}
