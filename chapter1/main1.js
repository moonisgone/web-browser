'use strict';

const pointBox = document.querySelector('.pointerBox');

let clientX,clientY;
let pageX, pageY;
let rect;

function callXY(){
    clientX = window.cli
}


pointBox.addEventListener('click',(e)=>{
    rect = pointBox.getBoundingClientRect();
    clientX = e.clientX;
    clientY = e.clientY;
    pageX = e.pageX;
    pageY = e.pageY;
    console.log(rect);
    console.log(`clientX :  ${clientX}, clientY : ${clientY}` );
    console.log(`pageX :  ${pageX}, pageY : ${pageY}` );
})
