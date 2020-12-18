let audioElems = document.getElementsByTagName('audio');
let buttonElems = document.getElementsByClassName('btn');
let lastPlayedIdx = 0;

for (let i = 0; i < buttonElems.length; i++) {
  buttonElems[i].addEventListener('click', () => {
    stopPlaying();
    playSound(i);
  });
}

function playSound(i) {
  audioElems[i].play();
  lastPlayedIdx = i;
}

function stopPlaying() {
  audioElems[lastPlayedIdx].pause();
  audioElems[lastPlayedIdx].currentTime = 0;
}
