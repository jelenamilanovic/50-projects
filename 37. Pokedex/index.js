const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
const TYPE_COLOR_MAP = {
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  electric: '#fcf7de',
  fairy: '#fceaff',
  fighting: '#e6e0d4',
  fire: '#fddfdf',
  flying: '#f5f5f5',
  grass: '#defde0',
  ground: '#f4e7da',
  normal: '#f5f5f5',
  poison: '#98d7a5',
  psychic: '#eaeda1',
  rock: '#d5d5d4',
  water: '#def3fd'
}
let wrapper = document.querySelector('.wrapper');
var id = 0;

fetchPokemon();

function fetchPokemon() {
  if (id >= 150) return;
  id++;

  window.fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(data => {
      let el = document.createElement('div');
      let type = data.types[0].type.name;
      let imgSrc = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
      let order = getOrderString(id);
      el.classList.add('pokemon');
      el.style.background = TYPE_COLOR_MAP[type];
      el.innerHTML = `
        <div class="image-wrapper"> 
          <img src='${imgSrc}'/>
        </div>
        <div class="order"> 
          <span> ${order} </span>
        </div>
        <h3>${data.name}</h3>
        <small>${type}</small>
      `;
      wrapper.appendChild(el);
      fetchPokemon();
    });
}

function getOrderString(num) {
  if (num < 10)
    return `#00${num}`;
  else if (num < 100)
    return `#0${num}`;
  else
    return `#${num}`;
}
