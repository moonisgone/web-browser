'use strict';

const targetImg = document.querySelector('.targetImg');
const verticalLine = document.querySelector('.verticalLine');
const horizentalLine = document.querySelector('.horizentalLine');
const tag = document.querySelector('.tag');

//노트북으로 무언가를 돌리면서 할떄 성능저하떔에 값이 잘 안들어올수 있음
//그렇기 때문에 윈도우가 모루 로드 뒤면 실행하도록 만듦.
addEventListener('load',()=>{
    const targetRect = targetImg.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;
    document.addEventListener('mousemove',(e)=>{
        let x = e.clientX;
        let y = e.clientY;
    /* 성능이 안좋은 방법,,
        verticalLine.style.left = `${x}px`;
        horizentalLine.style.top = `${y}px`;
        targetImg.style.left = `${x}px`;
        targetImg.style.top = `${y}px`;
        tag.style.left = `${x}px`;
        tag.style.top = `${y}px`;
        tag.innerHTML = `${x}px, ${y}px`;
        */
        verticalLine.style.transform = `translateX(${x}px)`;
        horizentalLine.style.transform = `translateY(${y}px)`;
        targetImg.style.transform = `translate(${x-targetHalfWidth}px,${y-targetHalfHeight}px)`;
        tag.style.transform = `translate(${x}px,${y}px)`;
        tag.innerHTML = `${x}px, ${y}px`;
    });
})