let cards = null;
let currentActiveIndex = 0;

window.onload = () => initCards();

function initCards() {
  cards = document.getElementsByClassName('card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => setActiveCard(i))
  }
}

function setActiveCard(i) {
  cards[currentActiveIndex].classList.remove('active');
  cards[i].classList.add('active');
  currentActiveIndex = i;
}
