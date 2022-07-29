// !MENU DESPLEGABLE
const bntOpen = document.querySelector('#open-button');
const bntClose = document.querySelector('#close-button');
const asideMenu = document.querySelector('.aside-menu');


bntOpen.addEventListener('click', () => {
    asideMenu.classList.remove('inactive');
});

bntClose.addEventListener('click', () => {
    asideMenu.classList.add('inactive');
});

