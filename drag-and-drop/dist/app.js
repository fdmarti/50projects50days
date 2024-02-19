"use strict";
const fill = document.querySelector('.fill');
const blocks = document.querySelectorAll('.block');
const removeFill = (event) => {
    const target = event.target;
};
fill.addEventListener('dragstart', removeFill);
