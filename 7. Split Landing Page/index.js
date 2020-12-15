let partElems;

window.onload = () => {
  partElems = document.querySelectorAll('.part');

  for (let i = 0; i < partElems.length; i++) {
    partElems[i].addEventListener('mouseover', () => partElems[i].classList.add('wider'));
    partElems[i].addEventListener('mouseout', () => partElems[i].classList.remove('wider'));
  }
}
