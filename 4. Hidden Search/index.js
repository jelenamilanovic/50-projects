let wrapperEl, searchEl;
let isSearchVisible = false;

window.onload = () => {
  wrapperEl = document.querySelector(".search-wrapper");
  searchEl = document.getElementById("search");
}

function toggleSearch() {
  isSearchVisible = !isSearchVisible;
  wrapperEl.style.width = isSearchVisible ? '250px' : '50px';
  searchEl.focus();
}
