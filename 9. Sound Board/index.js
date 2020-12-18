
let audioElems = document.getElementsByTagName('audio');
let buttonElems = document.getElementsByClassName('btn');
let lastPlayedIdx = 0;

console.log(buttonElems)

for (let i = 0; i < buttonElems.length; i++) {
  buttonElems[i].addEventListener('click', () => playSound(i));
}

function playSound(i) {
  console.log(audioElems[i])
  stopPlaying();
  audioElems[i].play();
  lastPlayedIdx = i;
}

function stopPlaying() {
  audioElems[lastPlayedIdx].pause();
  audioElems[lastPlayedIdx].currentTime = 0;
}
