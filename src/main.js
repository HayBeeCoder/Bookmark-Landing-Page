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
function displayFaq(node) {
    let faqs = Array.from(node).map((faq_paragraph, index) => {
        let faq_arrows = Array.from(document.querySelectorAll('.faq__arrow'));
        let faq_arrow = faq_arrows[index];
        console.log(faq_arrow)
        let faq = { faq_paragraph, faq_arrow };
        console.log(faq);
        faq_arrow.addEventListener("click", () => selectFaq(faq));
        return faq;
    });

    function selectFaq(selectedFaq) {
        for (let faq of faqs) {
            let selected = faq == selectedFaq;
            if (selected) {
                if (faq.faq_paragraph.style.display == "block") {
                    faq.faq_paragraph.style.display = "none";
                    faq.faq_arrow.classList.remove("faq__arrow_status-active");
                } else {
                    faq.faq_paragraph.style.animation = `rollDown 0.3s linear`;
                    faq.faq_paragraph.style.display = "block";
                    faq.faq_arrow.classList.add("faq__arrow_status-active");
                }
            } else {
                faq.faq_arrow.classList.remove("faq__arrow_status-active");
                faq.faq_paragraph.style.display = "none";
            }
        }
    }
}

displayFaq(document.querySelectorAll('.faq__paragraph'))

//functionality to switch features
function featuresTab(node) {
    let tabs = Array.from(node.children).map((node, index) => {
        let tabButtons = Array.from(document.querySelectorAll('.feature'));
        let tabBtn = tabButtons[index];
        let tab = { node, tabBtn };
        tabBtn.addEventListener("click", () => selectTab(tab))
        return tab;
    })

    function selectTab(selectedTab) {
        for (let tab of tabs) {
            let selected = tab == selectedTab;
            tab.node.style.animation = `tab 0.4s ease-in`;
            tab.node.style.display = selected ? "" : "none";
            tab.tabBtn.className = selected ? "feature feature_status-active" : "feature";
        }
    }
    selectTab(tabs[0])
}
featuresTab(document.querySelector('.feature__items'))

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