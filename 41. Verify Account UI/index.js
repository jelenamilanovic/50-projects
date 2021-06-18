const digitsElements = document.getElementsByClassName('digit');

digitsElements[0].focus();

for (let i = 0; i < digitsElements.length; i++) {
  digitsElements[i].addEventListener('keydown', (e) => onKeyDown(e, i));
}

function onKeyDown(e, index) {  
  if (e.key >= 0 && e.key <= 9) {
    e.target.value = '';
    setTimeout(() => focusNextDigit(index), 10);
  }  else {
    setTimeout(() => focusPreviousDigit(index), 10);
  }
}

function focusPreviousDigit(index) {
  if (index <= 0) return;
  digitsElements[index-1].focus();
}

function focusNextDigit(index) {
  if (index >= digitsElements.length - 1) return;
  digitsElements[index+1].focus();
}
