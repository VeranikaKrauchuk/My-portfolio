window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.header__nav'),
        navItem = document.querySelectorAll('.nav__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('header__nav_active');
    });

    navItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('header__nav_active');
        })
    })
})