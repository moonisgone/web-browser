const startStopBtn = document.querySelector('.start-stop');
const replayBtn = document.querySelector('.replay');
const clockText = document.querySelector('.time_sec');
const count = document.querySelector('.count');
const alarm = document.querySelector('.alarm');
const alarmText = document.querySelector('.text');
const bugs = document.querySelector('.bugs');
const carrots = document.querySelector('.carrots');

let id = 0;
const ITEM_COUNT = 10;
let time = 10;

function createBugs(){
    let bug = document.createElement('img');
    bug.src = 'img/bug.png';
    bug.setAttribute('class','bug');
    bug.setAttribute('data-id',id);
    id++;
    return bug;
}

function createCarrot(){
    let carrot = document.createElement('img');
    carrot.src = 'img/carrot.png';
    carrot.setAttribute('class','carrot');
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

function showAlarm(){
    alarm.style.display = 'block';
}

function showTime(){
    clockText.innerHTML=`0:${time}`
    if(time === 0){
        showAlarm();
        return;
    }
    time = time - 1;
    setTimeout(showTime,1000);
}

startStopBtn.addEventListener('click',()=>{

    showTime();
    addItem(ITEM_COUNT);   
})