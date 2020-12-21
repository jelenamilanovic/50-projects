let droppables = document.querySelectorAll('.droppable');
let draggable = document.getElementById('draggable');

draggable.addEventListener('dragstart', onDragStart);
draggable.addEventListener('dragend', onDragEnd);

for (let i = 0; i < droppables.length; i++) {
  droppables[i].addEventListener('dragover', (e) => onDragOver(e, i));
  droppables[i].addEventListener('dragenter', (e) => onDragEnter(e, i));
  droppables[i].addEventListener('dragleave', (e) => onDragLeave(e, i));
  droppables[i].addEventListener('drop', onDrop);
}

function onDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.target.classList.add('dragged');
  setTimeout(() => e.target.classList.add('invisible'))
}

function onDragOver(e, i) {
  e.preventDefault();
}

function onDragEnter(e) {
  e.preventDefault();
  e.target.classList.add('dragged-over');
}

function onDragLeave(e) {
  e.target.classList.remove('dragged-over');
}

function onDragEnd(e) {
  e.target.classList.remove('invisible');
  e.target.classList.remove('dragged');
}

function onDrop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");
  e.target.appendChild(document.getElementById(data));
}

