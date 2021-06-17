const choicesEl = document.getElementById('choices');
const tagsEl = document.getElementById('tags');

let choices = [];

choicesEl.addEventListener('input', onChoicesChange);
document.addEventListener('keyup', listenToMakeAChoice);

choicesEl.focus();

function onChoicesChange(e) {
  choices = e.target.value.split(',')
    .map(choice => choice.trim())
    .filter(choice => choice.length > 0);

    updateTags();
}

function updateTags() {
  tagsEl.innerHTML = '';
  for (let i = 0; i < choices.length; i++) {
    let tag = document.createElement('div');
    tag.classList.add('tag');
    tag.innerHTML = choices[i];
    tagsEl.append(tag);
  }
}

function hasChoice() {
  return !!choicesEl.value.trim();
}

function listenToMakeAChoice(e) {
  if (e.key !== "Enter") return;
  if (hasChoice()) {
    makeRandomChoice();
  }
  e.target.value = '';
}

function makeRandomChoice() {
  let randomHighlightInterval = null;
  let finalChoiceTimeout = null;
  let allTags = document.getElementsByClassName('tag');
  let randomIndex = -1;

  function clearHighlight() {
    if (randomIndex < 0) return;
    allTags[randomIndex].classList.remove("highlighted");
  }

  function pickRandomTag() {
    clearHighlight();
    randomIndex = Math.floor(Math.random() * allTags.length);
    allTags[randomIndex].classList.add('highlighted');
  }

  function makeFinalChoice() {
    window.clearInterval(randomHighlightInterval);
    window.clearTimeout(finalChoiceTimeout);
    pickRandomTag();
  }

  randomHighlightInterval = window.setInterval(pickRandomTag, 100);
  finalChoiceTimeout = window.setTimeout(makeFinalChoice, 3000);
}
