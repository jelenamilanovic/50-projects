const USERS_API_URL = 'https://randomuser.me/api?results=50';

const searchEl = document.getElementById('users-search');
const usersListEl = document.getElementById('users-list');

let userElements = [];

fetchUsers();

searchEl.addEventListener('keyup', filterUsers);

async function fetchUsers() {
  let result = await fetch(USERS_API_URL);
  let data = await result.json();
  users = data.results;
  showUsers(users);
}

function showUsers(users) {
  function getUserElement(user) {
    return `
      <img src="${user.picture.thumbnail}" alt="${user.name.first}" class="user-avatar"/>
      <div class="user-info">
        <h4 class="user-name"> ${user.name.first} ${user.name.last} </h4>
        <p class="user-location"> ${user.location.city}, ${user.location.country} </p>
      </div>
    `
  };

  users.forEach(user => {
    let userEl = document.createElement('li');
    userEl.innerHTML = getUserElement(user);
    usersListEl.appendChild(userEl);
  });
}

function filterUsers(e) {
  let searchTerm = e.target.value.toLowerCase();
  let listEl = document.querySelectorAll('li');

  for (let i = 0; i < users.length; i++) {
    listEl[i].style.display = isSearchedFor(users[i], searchTerm) ? 'flex' : 'none';
  }
}

function isSearchedFor(user, searchTerm) {
  return (
    user.name.first.toLowerCase().indexOf(searchTerm) >= 0 ||
    user.name.last.toLowerCase().indexOf(searchTerm) >= 0 ||
    user.location.city.toLowerCase().indexOf(searchTerm) >= 0 ||
    user.location.country.toLowerCase().indexOf(searchTerm) >= 0 
  )
}
