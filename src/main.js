const menu_open = document.querySelector('.header__menu-open');
const menu_close = document.querySelector('.header__menu-close');
const mobile_menu = document.querySelector('.header-mobile');
const header_logo = document.querySelector('.header__logo');
const faq_buttons = document.getElementsByClassName('faq__arrow');
const faq_paragraphs = document.getElementsByClassName('faq__paragraph');
const arrow_svg = document.querySelector('path');
const faqs = document.getElementsByClassName('faq')

function openMenu() {
    mobile_menu.style.display = 'flex';
    menu_open.style.display = 'none';
    header_logo.style.display = 'none'
    document.body.style.overflowY = 'hidden';
}

function closeMenu() {
    mobile_menu.style.display = 'none';
    menu_open.style.display = 'block';
    header_logo.style.display = 'block'
    document.body.style.overflowY = 'scroll';
}
menu_open.addEventListener('click', openMenu)
menu_close.addEventListener('click', closeMenu)




for (let i = 0; i < faq_buttons.length; i++) {
    let faq_button = faq_buttons[i]
    faq_button.addEventListener('click', function() {
        this.classList.toggle('faq__arrow_active');

        let faq__paragraph = faq_paragraphs[i];
        let faq = faqs[i];
        if (faq__paragraph.style.display == 'block') {
            faq__paragraph.style.display = 'none';
            faq.style.color = 'initial';
        } else { faq__paragraph.style.display = 'block' }

    })
}