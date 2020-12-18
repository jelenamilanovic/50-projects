const API_CONFIG = {
  headers: {
    Accept: 'application/json',
  }
};
let jokeElement = document.getElementById('joke');

fetchRandomJoke();

function fetchRandomJoke() {
  fetch('https://icanhazdadjoke.com/', API_CONFIG)
    .then(response => response.json())
    .then(data => {
      jokeElement.innerText = data.joke;
    });
}
