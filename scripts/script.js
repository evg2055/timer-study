// 'use strict'; не могу побороть 10 стр.
const BUTTON = document.querySelector('.button');

function onclick () {
    const VALUE = +(document.getElementsByClassName('input')[0].value);
    let times = VALUE * 60;
    BUTTON.style.background = "red";
    BUTTON.innerHTML = "wait...";
    intervalId2 = setInterval(function run() {
        timer(times);
        times--;
    }, 1000);
    
}

function timer(times) {
    let time = times;
    const seconds = Math.trunc(time % 60); 
    const minutes = Math.trunc(time / 60 % 60);
    const hour = Math.trunc(time / 60 / 60 % 60);
    const HOURDISPLAY = document.querySelector('.hour');
    const MINUTESDISPLAY = document.querySelector('.minutes');
    const SECONDSDISPLAY = document.querySelector('.seconds');

    if(time < 0) {
        alert('Time is out');
        BUTTON.innerHTML = "ta-dah!";
        clearInterval(intervalId2);
    } else {
        SECONDSDISPLAY.innerHTML = seconds;
        MINUTESDISPLAY.innerHTML = minutes;
        HOURDISPLAY.innerHTML = hour;
        if (seconds < 10) {
            SECONDSDISPLAY.innerHTML = '0' + seconds;
        } if (minutes < 10) {
            MINUTESDISPLAY.innerHTML = '0' + minutes;
        }
    }
}

BUTTON.addEventListener ("click" , onclick);