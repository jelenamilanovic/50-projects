const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', ripple);

function ripple(e) {
  let effectEl = document.createElement('div');

  effectEl.classList.add('effect');
  effectEl.style.left = `${e.offsetX}px`;
  effectEl.style.top = `${e.offsetY}px`;
  effectEl.onanimationend = () => effectEl.remove();

  btnEl.appendChild(effectEl);
}
