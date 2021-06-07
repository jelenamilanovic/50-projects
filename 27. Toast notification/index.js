const showNotificationBtnEl = document.querySelector('.show-notification');
const notificationsEl = document.querySelector('#notifications');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four'
];
const classes = ['info', 'success', 'error'];

showNotificationBtnEl.addEventListener('click', showNotification);

function showNotification() {
  let newNotification = document.createElement('button');
  newNotification.classList.add('btn');
  newNotification.classList.add('notification');

  newNotification.classList.add(getRandomItem(classes));
  newNotification.innerText = getRandomItem(messages);

  notificationsEl.appendChild(newNotification);

  window.setTimeout(() => newNotification.remove(), 3000);
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
