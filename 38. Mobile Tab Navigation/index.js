const navElements = document.querySelectorAll('li');
const backgroundElements = document.querySelectorAll('.content-background');
let lastIdx = 0;

for (let i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener('click', () => navigate(i));
}

function navigate(index) {
  navElements[lastIdx].classList.remove('active');
  backgroundElements[lastIdx].classList.remove('active');

  navElements[index].classList.add('active');
  backgroundElements[index].classList.add('active');

  lastIdx = index;
}
