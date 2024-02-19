"use strict";
const navbar = document.querySelector('.navbar');
const scrollFunction = (event) => {
    console.log(window.scrollY);
    if (window.scrollY >= 150 && window.scrollY < 900) {
        navbar.classList.add('active');
    }
    else if (window.scrollY >= 900) {
        navbar.classList.remove('active');
    }
    else {
        navbar.classList.remove('active');
    }
};
window.addEventListener('scroll', scrollFunction);
