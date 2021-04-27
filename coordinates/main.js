'use strict';

const targetImg = document.querySelector('.targetImg');
const verticalLine = document.querySelector('.verticalLine');
const horizentalLine = document.querySelector('.horizentalLine');
const tag = document.querySelector('.tag');


document.addEventListener('mousemove',(e)=>{
    let x = e.clientX;
    let y = e.clientY;

    verticalLine.style.left = `${x}px`;
    horizentalLine.style.top = `${y}px`;
    targetImg.style.left = `${x}px`;
    targetImg.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    tag.innerHTML = `${x}px, ${y}px`;
});