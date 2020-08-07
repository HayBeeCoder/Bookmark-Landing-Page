const menu_open = document.querySelector('.header__menu-open')
const menu_close = document.querySelector('.header__menu-close')
const mobile_menu = document.querySelector('.header-mobile')
const header_logo = document.querySelector('.header__logo')

function openMenu() {
    mobile_menu.style.display = 'block';
    menu_open.style.display = 'none';
    header_logo.style.display = 'none'
    body.style.overflow = 'hidden';
}

function closeMenu() {
    mobile_menu.style.display = 'none';
    menu_open.style.display = 'block';
    header_logo.style.display = 'block'
}
menu_open.addEventListener('click', openMenu)
menu_close.addEventListener('click', closeMenu)