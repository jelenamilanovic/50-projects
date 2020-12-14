let contentElems;

document.body.onscroll = () => onScroll();


function onScroll() {
  let documentCoords = document.body.getBoundingClientRect();
  for (let i = 0; i < contentElems.length; i++) {
    if (isElementVisible(contentElems[i], documentCoords)) {
      contentElems[i].classList.add('visible');
    } else {
      contentElems[i].classList.remove('visible');
    }
  }
}

function isElementVisible(element, documentCoords) {
  let contentElCoords = element.getBoundingClientRect();
  return contentElCoords.bottom < window.scrollY + documentCoords.bottom;
}


window.onload = () => {
  contentElems = document.querySelectorAll('.content-box');
  onScroll();
}
