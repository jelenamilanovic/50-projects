let currentStep = 0;
let steps;

window.onload = () => {
  steps = document.getElementsByClassName('step');
}

function prev() {
  steps[currentStep].classList.remove('active');
  currentStep--;
  steps[currentStep].classList.add('disappear');
  if (currentStep === 0) {
    document.querySelector('.prev').classList.add('btn-disabled');
  };
  for (let i = steps.length - 1; i >= currentStep; i--) {
    steps[i].classList.remove('passed');
  }
  document.querySelector('.next').classList.remove('btn-disabled');
}

function next() {
  currentStep++;
  if (currentStep === steps.length - 1) {
    document.querySelector('.next').classList.add('btn-disabled');
  }
  for (let i = 0; i < currentStep; i++) {
    steps[i].classList.remove('disappear');
    steps[i].classList.add('passed');
  }

  steps[currentStep].classList.add('active');
  document.querySelector('.prev').classList.remove('btn-disabled');
  document.querySelector('.prev').classList.add('btn-primary');
}
