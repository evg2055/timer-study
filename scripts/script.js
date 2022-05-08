'use strict';
let button = document.querySelector('.button');
let minutesDisplay = document.querySelector('.minutes');
let secondsDisplay = document.querySelector('.seconds');
let times;
let intervalId
let value;
// let seconds = (times % 60); почему-то не срабатывют(
// let minutes = (times / 60 % 60);

button .onclick = function() {
    value = +(document.getElementsByClassName('input')[0].value);
    // console.log (value);
    times = value * 60;
    
    intervalId = setInterval(timer, 1000);

    button.style.background = "red";
    button.innerHTML = "wait...";
}; 



function timer() {
    if(times < 0) {
        clearInterval(intervalId);
        alert('Time is out');
        button.innerHTML = "ta-dah!";
    } else {
        secondsDisplay.innerHTML = Math.trunc(times % 60);
        minutesDisplay.innerHTML = Math.trunc(times / 60 % 60);

        if (Math.trunc(times % 60) < 10) {
            secondsDisplay.innerHTML = '0' + Math.trunc(times % 60);
        }
    }
    --times;
    // console.log(times);
}
