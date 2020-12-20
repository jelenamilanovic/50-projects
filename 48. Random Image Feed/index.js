var photoCount = 0;
let gallery = document.querySelector('.gallery');

fetchRandom();

function fetchRandom() {
  if (photoCount >= 15) return;
  photoCount++;
  let img = document.createElement('img');
  img.classList.add('photo');
  img.setAttribute('src', `https://source.unsplash.com/random/${getRandomDimensions()}?sig=${Date.now() + photoCount}`);
  gallery.appendChild(img);
  fetchRandom();
}

// this function serves only one purpose: to minimize chances of getting two or more identical images
// the same is appliable to sig parameter in the URL. 
function getRandomDimensions() {
  let w = Math.floor(Math.random() * 10) + 300;
  let h = Math.floor(Math.random() * 10) + 300;
  return `${w}x${h}`;
}
