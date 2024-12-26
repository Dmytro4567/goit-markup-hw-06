const openMenuButton = document.getElementsByClassName('burger-btn')[0];
const closeMenuButton = document.getElementsByClassName('mobile-menu-close')[0];
const script = document.getElementsByClassName('mobile-menu')[0];
const modal = document.getElementsByClassName('modal-overlay')[0];
const orderButton = document.getElementsByClassName('hero-button')[0];
const closeModalButton = document.getElementsByClassName('modal-circle')[0];

function openMenu() {
    script.classList.add('is-open');
}

function closeMenu() {
    script.classList.remove('is-open');
}

function openModal() {
    modal.classList.add('is-open');
}
function closeModal() {
    modal.classList.remove('is-open');
}

openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
orderButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
