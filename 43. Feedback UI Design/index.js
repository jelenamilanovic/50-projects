const submitBtnEl = document.getElementById('submit-btn');
const ratingsElements = document.getElementsByClassName('rating');
let selectedRating = 'Satisfied';

submitBtnEl.onclick = submitReview;

for (let ratingElement of ratingsElements) {
  ratingElement.onclick = selectRating;
}

function submitReview() {
  const cardElements = document.querySelectorAll('.card');

  document.getElementById('feedback').innerText = "Feedback: " + selectedRating;

  for (let element of cardElements) {
    element.classList.toggle('invisible');
  }
} 

function selectRating() {
  for (let ratingElement of ratingsElements) {
    ratingElement.classList.remove('selected');
  }
  this.classList.add('selected');
  selectedRating = this.dataset.rating;
}
