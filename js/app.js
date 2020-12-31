const menuIcon = document.querySelector('.menu-bar');

function toggleMenuIcon() {
  menuIcon.classList.toggle('active')
}

menuIcon.addEventListener('click', toggleMenuIcon);