let heading = document.getElementById("heading");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let timerStarted = false;
let count = 0;
let timervalue;
let startMyTimer = function(){
    if(timerStarted) return;

    timervalue = setInterval(()=>{
        heading.innerHTML = `Timer : ${count}`;
        count++;
    }, 1000)
    timerStarted = true;
}
let stopMyTimer = function(){
    timerStarted = false
    clearInterval(timervalue)
    
}

let resetMyTimer = function(){
    timerStarted = false
    clearInterval(timervalue)
    heading.innerHTML = `Timer`;
    count = 0;
}


start.addEventListener("click", startMyTimer)
stop.addEventListener("click", stopMyTimer)
reset.addEventListener("click", resetMyTimer);