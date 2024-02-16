"use strict";
const backgroundImage = document.querySelector('.background-image');
const inputPassword = document.getElementById('password');
const MAX_BLUR = 10;
inputPassword.addEventListener('keyup', (event) => {
    const target = event.target;
    const lengthValue = target.value.length;
    backgroundImage.style.filter = `blur(${MAX_BLUR - lengthValue}px)`;
});
