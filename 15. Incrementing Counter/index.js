const counterTargetElements = document.getElementsByClassName('counter-target');

for (let i = 0; i < counterTargetElements.length; i++) {
  const element = counterTargetElements[i];
  const target = Number(element.dataset.target);
  const increment = target / 200;
  let current = 0;

  element.innerText = 0;

  let incrementInterval = window.setInterval(() => {
    current += increment;
    
    if (current >= target) {
      window.clearInterval(incrementInterval);
      element.innerText = target;
    } else {
      element.innerText = Math.ceil(current + increment);
    }
  }, 1);
}
