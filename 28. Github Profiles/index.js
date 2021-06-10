const GITHUB_API_URL = "https://api.github.com/users";
const searchFormEl = document.getElementById('search-form');
const userInputEl = document.getElementById('search');
const resultEl = document.getElementById('result');

searchFormEl.addEventListener('submit', findGithubUser);

async function findGithubUser(e) {
  e.preventDefault();
  let userInput = userInputEl.value;

  userInputEl.value = "";
  resultEl.innerHTML = "";

  let userData = await fetch(`${GITHUB_API_URL}/${userInput}`);
  if (!userData.ok) return reportNoUser();
  userData = await userData.json();

  let reposData = await fetch(`${GITHUB_API_URL}/${userInput}/repos?sort=true`);
  reposData = await reposData.json();

  showResult(userData, reposData);

}

function showResult(userData, reposData) {

  function showReposData() {
    let result = '<ul class="repos">';
    for (let i = 0; i < reposData.length && i < 5; i++) {
      result += `<li class="repo"> <a href="${reposData[i].html_url}" target="_blank"> ${reposData[i].name} </a> </li>`;
    }
    result += '</ul>';
    return result;
  }

  resultEl.innerHTML = `
    <div class="user-info">
      <div class="user-info--avatar">
        <img src="${userData.avatar_url}" class="avatar"/>
      </div>

      <div class="user-info--data">
        <h2>${userData.name}</h2>
        <p>${userData.bio}</p>
        <ul class="user-info--stats">
          <li>${userData.followers} <span> Followers </span></li>
          <li>${userData.following} <span> Following </span></li>
          <li>${userData.public_repos} <span> Repos </span></li>
        </ul>

        ${showReposData()}
      </div>
    </div>
  `;
}

function reportNoUser() {
  resultEl.innerHTML = `
    <div class="user-info no-user">
      <h1> No profile with this username </h1>
    </div>
  `;
}
