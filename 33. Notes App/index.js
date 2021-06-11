const btnAddEl = document.getElementById('btn-add');
const notesEl = document.getElementById('notes');

let notes = [];

btnAddEl.addEventListener('click', e => addNote(''));
loadNotes();

function loadNotes() {
  notes = getStoredNotes();
  notes.forEach(note => addNote(note));
}

function getStoredNotes() {
  return JSON.parse(window.localStorage.getItem("notes"));
}

function addNote(content) {
  const noteEl = document.createElement('div');

  noteEl.classList.add('note');
  if (!content)
    noteEl.classList.add('editable');

  noteEl.innerHTML = `
    <div class="note-header">
      <div class="note-ctrl note-edit">
        <i class="fas fa-edit"></i>
      </div>
      <div class="note-ctrl note-delete"">
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>

    <div class="note-body">
      <textarea>${content}</textarea>
      <p>${content}</p>
    </div>
  `
  noteEl.querySelector('.note-edit').addEventListener('click', () => toggleEditNote(noteEl));
  noteEl.querySelector('.note-delete').addEventListener('click', () => deleteNote(noteEl));
  noteEl.querySelector('.note-body textarea').addEventListener('keyup', e => storeContent(e, noteEl));

  notesEl.appendChild(noteEl);
}

function toggleEditNote(noteEl) {
  if (noteEl.classList.contains('editable')) {
    noteEl.classList.remove('editable');
  } else {
    noteEl.classList.add('editable');
  }
}

function deleteNote(noteEl) {
  let index = findIndexOfNote(noteEl);
  noteEl.remove();
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
}

function storeContent(e, noteEl) {
  let index = findIndexOfNote(noteEl);
  notes[index] = e.target.value;
  noteEl.querySelector('.note-body p').innerHTML = notes[index];
  localStorage.setItem("notes", JSON.stringify(notes));
}

function findIndexOfNote(noteEl) {
  const allNoteElems = document.querySelectorAll('.note');
  for (let i = 0; i < allNoteElems.length; i++) {
    if (allNoteElems[i] === noteEl) return i;
  }
  return -1;
}
