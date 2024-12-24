const openMenuButton = document.getElementsByClassName('burger-btn')[0];
const closeMenuButton = document.getElementsByClassName('mobile-menu-close')[0];
const menu = document.getElementsByClassName('mobile-menu')[0];

function openMenu() {
    menu.classList.add('is-open');
}

function closeMenu() {
    menu.classList.remove('is-open');
}

openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);