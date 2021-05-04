const startStopBtn = document.querySelector('.start-stop');
const replayBtn = document.querySelector('.replay');
const clockText = document.querySelector('.time_sec');
const count = document.querySelector('.count');
const alarm = document.querySelector('.alarm');
const alarmText = document.querySelector('.text');
const bugs = document.querySelector('.bugs');
const carrots = document.querySelector('.carrots');
const container = document.querySelector('.container');


const carrotSound = new Audio('./sound/carrot_pull.mp3');
const alertSound = new Audio('./sound/alert.wav');
const backgoundSound = new Audio('./sound/bg.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const winSound = new Audio('./sound/game_win.mp3');

let id = 0;
const ITEM_COUNT = 10;
let time = 10;
let removeCarrotCount = 0;
let timer;
let num;

function createBugs(){
    let bug = document.createElement('img');
    bug.src = 'img/bug.png';
    bug.setAttribute('class','bug');
    
    return bug;
}

carrots.addEventListener('click',(e)=>{
    console.log(e.target.dataset.id);
    playSound(carrotSound);
    let i = e.target.dataset.id;
    const item = document.querySelector(`.carrot[data-id="${i}"]`);
    item.remove();
    removeCarrotCount++;
    showCount();
    
})

function playSound(sound){
    sound.play();
}

function stopSound(sound){
    sound.pause();
}

bugs.addEventListener('click',()=>{
    failAlarm();
    clearTimeout(timer);
})

function createCarrot(){
    let carrot = document.createElement('img');
    carrot.src = 'img/carrot.png';
    carrot.setAttribute('class','carrot');
    carrot.setAttribute('data-id',id);
    id++;
    return carrot;
}

// min<=random<=max
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function randomPosition(item){
    const itemRect = item.getBoundingClientRect();
    const itemHalfWidth = itemRect.width / 2;
    const itemHalfHeight = itemRect.height / 2;
    //1536  722/2 -> 360
    let x = rand(30,1150);
    let y = rand(350,550);
    //item.style.transform = `translate(${x - itemHalfWidth}px,${y - itemHalfHeight}px)`;
    item.style.top = `${y}px`;
    item.style.left = `${x}px`;
}

function addItem(item_count){

    for(let i=0;i<item_count;i++)
    {
        let bug = createBugs();
        let carrot = createCarrot();
        bugs.appendChild(bug);
        carrots.appendChild(carrot);
      
        randomPosition(bug);
        randomPosition(carrot);
    }
    
}

function showCount(){
    num = 10 - removeCarrotCount;
    count.innerHTML = `${num}`;
    if(num===0){
        successAlarm();
        clearTimeout(timer);
    }
}

function successAlarm(){
    playSound(winSound);
    startStopBtn.style.display = 'none';
    alarm.style.display = 'block';
    alarmText.innerHTML = "YOU WIN!";
}
function failAlarm(){
    playSound(bugSound);
    startStopBtn.style.display = 'none';
    alarm.style.display = 'block';
    alarmText.innerHTML = "YOU LOSE..";
}

function showAlarm(){
    alarm.style.display = 'block';
}

function showTime(){
    
    clockText.innerHTML=`0:${time}`
    if(time === 0){
        failAlarm();
        return;
    }
    time = time - 1;
    timer = setTimeout(showTime,1000);
}

// 해야될것
// 1. 리플레이 할떄 벌래 지우는것
function resetAllItem(){
    console.log(bugs.hasChildNodes());
    console.log(bugs.childNodes[0]);
    while ( bugs.hasChildNodes() ) {
        bugs.removeChild( bugs.childNodes[0] );
      }
    while ( carrots.hasChildNodes() ) {
        carrots.removeChild( carrots.childNodes[0] );
    }
}

replayBtn.addEventListener('click',()=>{
    playSound(bugSound);
    startStopBtn.style.display = 'inline-block';
    alarm.style.display = 'none';
    time = 10 ;
    removeCarrotCount = 0;
    showCount();
    showTime();
    resetAllItem();
    addItem(ITEM_COUNT);  
    startStopBtn.innerHTML='<i class="fas fa-stop"></i>';
    startStopBtn.dataset.toggle = 'start';
})

startStopBtn.addEventListener('click',()=>{
    console.log(startStopBtn.dataset.toggle);
    if(startStopBtn.dataset.toggle === 'stop') // 재생클릭시
    {
        playSound(bugSound);
        showCount();
        showTime();
        addItem(ITEM_COUNT);  
        startStopBtn.innerHTML='<i class="fas fa-stop"></i>';
        startStopBtn.dataset.toggle = 'start';

    }else{   // 스탑 클릭시
        stopSound(bugSound);
        playSound(alertSound);
        resetAllItem();
        clearTimeout(timer);
        time = 10 ;
        removeCarrotCount = 0;
        clockText.innerHTML='00:00';
        count.innerHTML = '0';
        startStopBtn.innerHTML='<i class="fas fa-play"></i>';
        startStopBtn.dataset.toggle = 'stop';
    }
      
});