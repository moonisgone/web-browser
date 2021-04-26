'use strict';

const screen = document.querySelector('.screen');
const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');
const documentClient = document.querySelector('.clientWidth');


let screenWidth;
let screenHeight;
let outerWidth;
let outerHeight;
let innerWidth;
let innerHeight;
let clientWidth, clientHeight;

function printValue(){
    screenWidth = window.screen.width;
    screenHeight = window.screen.height;
    outerWidth = window.outerWidth;
    outerHeight = window.outerHeight;
    innerWidth = window.innerWidth;
    innerHeight = window.innerHeight;
    clientWidth = document.documentElement.clientWidth;
    clientHeight = document.documentElement.clientHeight;

    screen.innerHTML = `Window.screen :${screenWidth}, ${screenHeight} `;
    console.log(screen);
    outer.innerHTML = `Window.outer : ${outerWidth}, ${outerHeight}`;
    inner.innerHTML = `Window.inner : ${innerWidth}, ${innerHeight}`;
    documentClient.innerHTML = `DocumentElement.clientWidth : ${clientWidth}, ${clientHeight}`
}

function updateValue(){
    window.addEventListener('resize',()=>{
        printValue();
    });
}
printValue();
updateValue();