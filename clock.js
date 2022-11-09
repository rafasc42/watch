let hourDisplay = document.querySelector("#hour");
let minutesDisplay = document.querySelector("#minutes");
let secondsDisplay = document.querySelector("#seconds");
let sessionDisplay = document.querySelector("#session");

let watcher = null;
let hour;
let minutes;
let seconds;

setInterval(()=>{
    watcher = new Date();
    hour = watcher.getHours();
    minutes = watcher.getMinutes();
    seconds = watcher.getSeconds();

    hourDisplay.innerHTML = hour;
    minutesDisplay.innerHTML = minutes;
    secondsDisplay.innerHTML = seconds;

    if(hour > 12){
        hour = hour - 12;
        sessionDisplay.innerHTML = "PM";
    } else {
        hourDisplay.innerHTML = hour;
        sessionDisplay.innerHTML = "AM";
    }

    if(hour < 10){
        hourDisplay.innerHTML = ("0"+hour);
    }
    if(minutes < 10){
        minutesDisplay.innerHTML = ("0"+ minutes);
    }
    if(seconds < 10){
        secondsDisplay.innerHTML = ("0" + seconds);
    }
}, 1000);

function sessionCondition(){
    if(hour > 12){
        sess
    }
}