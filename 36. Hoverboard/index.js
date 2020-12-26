const COLORS = [
  'rgb(231, 76, 60)',
  'rgb(52, 152, 219)',
  'rgb(142, 68, 173)',
  'rgb(230, 126, 34)',
  'rgb(46, 204, 113)'
]
let grid = document.querySelector('.grid');

function generateGrid(total) {
  for (let i = 0; i < total; i++)
    grid.appendChild(createSquare());
}

function createSquare() {
  let square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', addColor);
  square.addEventListener('mouseout', removeColor);
  return square;
}

function addColor() {
  let color = getRandomColor();
  this.style.background = color;
  this.style.boxShadow = `${color} 0px 0px 2px, ${color} 0px 0px 10px`;
}

function removeColor() {
  this.style.backgroundColor = '#1d1d1d';
  this.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  let idx = Math.floor(Math.random() * COLORS.length);
  return COLORS[idx]
}

generateGrid(500);
setInterval(changeColor, 50)
