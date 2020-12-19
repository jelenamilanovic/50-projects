document.addEventListener('keydown', onKeyDown);

function onKeyDown(e) {
  let buttons = ['key', 'keyCode', 'code']

  document.body.innerHTML = '';

  for (let i = 0; i < buttons.length; i++) {
    let buttonWrapper = createElement('div', 'button-wrapper');
    let button = createElement('div', 'button', getButtonContent(e, buttons[i]));
    let buttonTitle = createElement('p', 'button-title', `event.${buttons[i]}`);

    buttonWrapper.appendChild(buttonTitle);
    buttonWrapper.appendChild(button);
    document.body.appendChild(buttonWrapper);
  }
}

function createElement(elTag, className = '', content) {
  let element = document.createElement(elTag);
  element.classList.add(className);
  if (content)
    element.innerText = content;
  return element;
}

function getButtonContent(e, key) {
  if (e.keyCode === 32 && key === 'key') return 'Space';
  return e[key];
}
