let cards = document.getElementsByClassName('card');
let cardTogglers = document.getElementsByClassName('card-toggle');

for (let i = 0; i < cardTogglers.length; i++) {
  cardTogglers[i].addEventListener('click', () => toggleCard(i))
}

function toggleCard(i) {
  cards[i].classList.toggle('open');
}
