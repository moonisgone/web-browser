const startStopBtn = document.querySelector('.start-stop');
const replayBtn = document.querySelector('.replay');
const clockText = document.querySelector('.time_sec');
const count = document.querySelector('.count');
const alarm = document.querySelector('.alarm');
const alarmText = document.querySelector('.text');
const bugs = document.querySelector('.bugs');
const carrots = document.querySelector('.carrots');
const startImg = document.querySelector('.fa-play');
const stopImg = document.querySelector('.fa-stop');

let id = 0;
const ITEM_COUNT = 10;
let time = 10;
let removeCarrotCount = 0;
let timer;

function createBugs(){
    let bug = document.createElement('img');
    bug.src = 'img/bug.png';
    bug.setAttribute('class','bug');
    return bug;
}

carrots.addEventListener('click',(e)=>{
    console.log(e.target.dataset.id);
    let i = e.target.dataset.id;
    const item = document.querySelector(`.carrot[data-id="${i}"]`);
    item.remove();
    removeCarrotCount++;
    showCount();
    
})

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
    let x = rand(20,1500);
    let y = rand(300,600);
    item.style.transform = `translate(${x - itemHalfWidth}px,${y - itemHalfHeight}px)`;
    
}

function addItem(item_count){

    for(let i=0;i<item_count;i++)
    {
        let bug = createBugs();
        let carrot = createCarrot();
        bugs.appendChild(bug);
        carrots.appendChild(carrot);

        bug.style.width = '40px';
        bug.style.height = '40px';
        carrot.style.width = '50px';
        carrot.style.height = '50px';
      
        randomPosition(bug);
        randomPosition(carrot);
    }
    
}

function showCount(){
    let num = 10 - removeCarrotCount;
    count.innerHTML = `${num}`;
    if(num===0){
        successAlarm();
    }
}

function successAlarm(){
    startStopBtn.style.display = 'none';
    alarm.style.display = 'block';
    alarmText.innerHTML = "YOU WIN!";
}
function failAlarm(){
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

startStopBtn.addEventListener('click',()=>{
    console.log(startStopBtn.dataset.toggle);
    if(startStopBtn.dataset.toggle === 'stop') // 재생클릭시
    {
        showCount();
        showTime();
        addItem(ITEM_COUNT);  
        startStopBtn.innerHTML='<i class="fas fa-stop"></i>';
        startStopBtn.dataset.toggle = 'start';

    }else{   // 스탑 클릭시
        startStopBtn.innerHTML='<i class="fas fa-play"></i>';
        startStopBtn.dataset.toggle = 'stop';
    }
    console.log(startStopBtn.dataset.toggle);
    
    //showTime();
    //addItem(ITEM_COUNT);   
})