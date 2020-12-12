let navigation, contentEl, navigationItems;

window.onload = () => {
  navigation = document.querySelector(".navigation-wrapper");
  contentEl = document.querySelector('.content-wrapper');
  navigationItems = document.querySelectorAll('.navigation-items h3');
}

function openMenu() {
  navigation.style.transform = "rotate(-90deg)";
  contentEl.style.transform = "rotate(-20deg)";
  for (let i = 0; i < navigationItems.length; i++) {
    navigationItems[i].style.transform = 'translateX(0px)';
  }
}

function closeMenu() {
  navigation.style.transform = "rotate(0deg)"
  contentEl.style.transform = "rotate(0deg)";
  for (let i = 0; i < navigationItems.length; i++) {
    navigationItems[i].style.transform = 'translateX(-500px)';
  }
}
