const toggles = document.getElementsByClassName('toggle-input');
const toggleToggles = {
  'good': 'fast',
  'cheap': 'good',
  'fast': 'cheap'
};

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener('change', onChange)
}

function onChange(e) {
  if (areAllTogglesChecked())
    document.getElementById(toggleToggles[e.target.name]).checked = false;
}

function areAllTogglesChecked() {
  for (let i = 0; i < toggles.length; i++) {
    if (!toggles[i].checked) return false;
  }
  return true;
}
