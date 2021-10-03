let currentSlide = 0;
const images = [
  {id: 'img1', src: 'https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80'},
  {id: 'img2', src: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'},
  {id: 'img3', src: 'https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'},
  {id: 'img4', src: 'https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80'}
];

const imgContainerEl = document.querySelector('.image-container');
const SLIDE_WIDTH = Number(imgContainerEl.clientWidth);

initializeImages();
let slideChangeTimeout = window.setTimeout(showNextSlide, 2000);

function initializeImages() {
  images.forEach((img, i) => {
    img.x = SLIDE_WIDTH * i;
    const imageEl = document.createElement('img');
    imageEl.setAttribute('id', img.id)
    imageEl.src = `${img.src}`;
    imageEl.style.left = `${img.x}px`;
    imgContainerEl.appendChild(imageEl);
  });
}

function showPreviousSlide() {
  window.clearTimeout(slideChangeTimeout);
  currentSlide--;
  let xDiff = SLIDE_WIDTH;
  if (currentSlide === -1) {
    xDiff = -1 * (images.length - 1) * SLIDE_WIDTH;
    currentSlide = images.length - 1;
  }
  updatePositions(xDiff);
  slideChangeTimeout = window.setTimeout(showNextSlide, 2000);
}

function showNextSlide() {
  window.clearTimeout(slideChangeTimeout);
  currentSlide++;
  let xDiff = -1 * SLIDE_WIDTH;
  if (currentSlide === images.length) {
    xDiff = (images.length - 1) * SLIDE_WIDTH;
    currentSlide = 0;
  }
  updatePositions(xDiff);
  slideChangeTimeout = window.setTimeout(showNextSlide, 2000);
}

function updatePositions(xDiff) {
  images.forEach((img, i) => {
    const imageEl = document.getElementById(img.id);
    img.x += xDiff;
    imageEl.style.left = `${img.x }px`;
  });
}
