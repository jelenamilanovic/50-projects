window.onload = () => {
  let inputFields = document.getElementsByTagName('input');

  for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener('focus', onFocus);
    inputFields[i].addEventListener('blur', onBlur);
  }
}

function onFocus(e) {
  if (this.value) return;
  animateUp(e.target);
}

function onBlur(e) {
  if (this.value) return;
  animateDown(e.target);
}

function getAnimatedElements(element) {
  let parentEl = element.parentNode;
  return parentEl.querySelectorAll('span');
}

function animateUp(element) {
  let spanElems = getAnimatedElements(element);
  for (let i = 0; i < spanElems.length; i++)
    spanElems[i].classList.add('top');
}

function animateDown(element) {
  let spanElems = getAnimatedElements(element);
  for (let i = 0; i < spanElems.length; i++)
    spanElems[i].classList.remove('top');
}
