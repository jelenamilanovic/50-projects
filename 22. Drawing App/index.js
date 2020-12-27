const MINUMUM_SIZE = 5;
const MAXIMUM_SIZE = 50;
const SIZE_STEP = 5;

const sizeEl = document.getElementById('size');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let size = 10;
let color = 'black';
let canDraw = false;
let x1;
let y1;

function decrementSize() {
  if (size === MINUMUM_SIZE) return;
  size -= SIZE_STEP;
  sizeEl.innerText = size;
}

function incrementSize() {
  if (size === MAXIMUM_SIZE) return;
  size += SIZE_STEP;
  sizeEl.innerText = size;
}

function changeColor(e) {
  color = document.getElementById('color').value;
}

function beginDrawing(e) {

  canDraw = true;
  x1 = e.offsetX;
  y1 = e.offsetY;
}

function stopDrawing() {
  canDraw = false;
  x1 = undefined;
  y1 = undefined;
}


function draw(e) {
  if (!canDraw) return;

  let x2 = e.offsetX;
  let y2 = e.offsetY;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.stroke();

  x1 = x2;
  y1 = y2;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function initCanvas() {
  canvas.addEventListener('mousedown', beginDrawing);
  canvas.addEventListener('mousemove', draw);
  document.addEventListener('mouseup', stopDrawing);
  ctx.lineCap = "round";
}

initCanvas();
