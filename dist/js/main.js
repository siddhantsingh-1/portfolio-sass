const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

function toggleMenu() {
    if(!showMenu) {
        burger.classList.add('open');
        nav.classList.add('open')
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        
        showMenu = true;
    } else {
        burger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

menuBtn.onclick = toggleMenu;