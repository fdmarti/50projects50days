"use strict";
const image = document.querySelector('.image');
const heartIcon = document.querySelector('.heart');
image.addEventListener('dblclick', () => {
    heartIcon.style.display = 'block';
    setTimeout(() => {
        heartIcon.style.display = 'none';
    }, 1000);
});
