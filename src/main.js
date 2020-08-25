//functionality for Progress-Bar
const progressBar = document.getElementById('progress')
window.addEventListener('scroll', () => {
    let max = document.body.scrollHeight - innerHeight;
    progressBar.style.width = `${pageYOffset/max * 100}%`;
})

//functionality for opening and closing menu
const menu_open = document.querySelector('.header__menu-open');
const menu_close = document.querySelector('.header__menu-close');
const mobile_menu = document.querySelector('.header-mobile');
const header_logo = document.querySelector('.header__logo');
const nav_btn = document.querySelector('.nav__btn');

function openMenu() {
    mobile_menu.style.display = 'flex';
    menu_close.style.animation = ` rotate 0.9s ease 0s`;
    menu_open.style.display = 'none';
    header_logo.style.display = 'none'
    document.body.style.overflowY = 'hidden';
    nav_btn.style.backgroundColor = '#fff';
    nav_btn.style.borderColor = '#fff';
}

function closeMenu() {
    mobile_menu.style.display = 'none';
    menu_open.style.animation = `reverseRotate 0.2s forwards 0s`;
    menu_open.style.display = 'block';
    header_logo.style.display = 'block'
    document.body.style.overflowY = 'scroll';
}
menu_open.addEventListener('click', openMenu)
menu_close.addEventListener('click', closeMenu)



//functionality for accordion
const faq_buttons = document.getElementsByClassName('faq__arrow');
const faq_paragraphs = document.getElementsByClassName('faq__paragraph');
const arrow_svg = document.querySelector('path');
const faqs = document.getElementsByClassName('faq');

for (let i = 0; i < faq_buttons.length; i++) {
    let faq_button = faq_buttons[i]
    faq_button.addEventListener('click', function() {
        this.classList.toggle('faq__arrow_active');

        let faq__paragraph = faq_paragraphs[i];
        let faq = faqs[i];
        if (faq__paragraph.style.display == 'block') {
            faq__paragraph.style.display = 'none';
            faq.style.color = 'initial';
        } else {
            faq__paragraph.style.display = 'block';

        }

    })
}

//functionality to switch features
const feature_image = document.querySelector('.feature__image');
const feature_heading = document.querySelector('.feature__heading');
const feature_paragraph = document.querySelector('.feature__paragraph');
const feature_button = document.querySelector('.feature__btn');
const features = document.getElementsByClassName('feature');
const feature__items__container = document.querySelector('.feature__items .container');
const feature_contents = [{
    image_url: 'images/illustration-features-tab-1.svg',
    heading: 'Bookmark in one click',
    paragraph: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    btn_link: '#'

}, {
    image_url: 'images/illustration-features-tab-2.svg',
    heading: 'Intelligent search',
    paragraph: 'Our powerful search feature will find you saved files in no time at all.No need to trawl through all your bookmarks.',
    btn_link: '#'

}, {
    image_url: 'images/illustration-features-tab-3.svg',
    heading: 'Share your bookmarks',
    paragraph: 'Easily share your bookmarks and collections with other people.Create a sharable link that you can send at the click of  a button.',
    btn_link: '#'

}]

for (let i = 0; i < features.length; i++) {

    features[i].addEventListener('click', () => {
        for (let feature of features) {
            feature.classList.remove('feature_status-active');

        }

        features[i].classList.add('feature_status-active');
        feature_contents.forEach(f => {
            feature__items__container.classList.remove('feature__items_container');

            if (feature_contents[i] == f) {
                feature_heading.innerHTML = f.heading;
                feature_paragraph.innerHTML = f.paragraph;
                feature_image.setAttribute('src', f.image_url);
                feature_button.setAttribute('href', f.btn_link);
                feature__items__container.classList.add('feature__items_container');
            }
            feature__items__container.classList.remove('feature__items_container');
        })
    })
}

//Functionality for client-side validation.
const form = document.querySelector('form');
const form__input = document.querySelector('input');
const form__button = document.querySelector('.update__btn');
const form__errorMessage = document.querySelector('.update__error')
const form__inputWrapper = document.querySelector('.update__inputWrapper');
const form__iconError = document.querySelector('.update__icon_error');
const inputRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

window.addEventListener('load', function() {
    const test = form__input.value.length === 0 || inputRegExp.test(form__input.value);
    form__input.className = test ? "update__input" : "update__input update__input_status-invalid";
});


form__input.addEventListener('input', function() {
    const test = form__input.value.length === 0 || inputRegExp.test(form__input.value);
    if (test) {
        form__input.classList.remove('update__input_status-invalid');

    } else {
        form__input.classList.add('update__input_status-invalid');
    }
    form__errorMessage.innerHTML = '';
    form__errorMessage.style.display = 'none';
    form__inputWrapper.classList.remove('update__inputWrapper_status-error');
    form__iconError.style.display = 'none';
})


form.addEventListener('submit', function() {
    const test = form__input.value.length === 0 || inputRegExp.test(form__input.value);
    if (!test) {
        form__input.classList.remove('update__input_status-invalid');
        form__errorMessage.innerHTML = `Whoops! make sure it's an email.`;
        form__errorMessage.style.display = 'block';
        form__iconError.style.display = 'block';
        form__inputWrapper.classList.add('update__inputWrapper_status-error');
        event.preventDefault();
    } else {
        form__input.classList.remove('update__input_status-invalid');
    }
})

// Remove default actions for buttons
const all_buttons = document.querySelectorAll('.btn');

all_buttons.forEach((element) => {
    if (element.nodeName != "BUTTON") {
        element.addEventListener("click", (event) => {
            event.preventDefault();
        });
    }
});