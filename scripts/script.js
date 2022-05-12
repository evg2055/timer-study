// // 'use strict'; не могу побороть 10 стр.
// const BUTTON = document.querySelector('.button');

// function setTimer() {
//     const VALUE = +(document.getElementsByClassName('input')[0].value);
//     let times = VALUE * 60;
//     BUTTON.style.background = "red";
//     BUTTON.innerHTML = "wait...";
//     intervalId2 = setInterval(function run() {
//         timer(times);
//         times--;
//     }, 1000);
    
// }

// function timer(times) {
//     let time = times;
//     const seconds = Math.trunc(time % 60); 
//     const minutes = Math.trunc(time / 60 % 60);
//     const hour = Math.trunc(time / 60 / 60 % 60);
//     const HOURDISPLAY = document.querySelector('.hour');
//     const MINUTESDISPLAY = document.querySelector('.minutes');
//     const SECONDSDISPLAY = document.querySelector('.seconds');

//     if(time < 0) {
//         alert('Time is out');
//         BUTTON.innerHTML = "ta-dah!";
//         clearInterval(intervalId2);
//     } else {
//         SECONDSDISPLAY.innerHTML = seconds;
//         MINUTESDISPLAY.innerHTML = minutes;
//         HOURDISPLAY.innerHTML = hour;
//         if (seconds < 10) {
//             SECONDSDISPLAY.innerHTML = '0' + seconds;
//         } if (minutes < 10) {
//             MINUTESDISPLAY.innerHTML = '0' + minutes;
//         }
//     }
// }

// BUTTON.addEventListener ("click" , setTimer);


'use strict';
const BUTTON = document.querySelector('.button');
let intervalId2;
const HOURDISPLAY = document.querySelector('.hour');
const MINUTESDISPLAY = document.querySelector('.minutes');
const SECONDSDISPLAY = document.querySelector('.seconds');

function setTimer() {
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

    if(time < 0) {
        alert('Time is out');
        BUTTON.innerHTML = "ta-dah!";
        clearInterval(intervalId2);
    } else {
        SECONDSDISPLAY.innerHTML = dial(time)[0];
        MINUTESDISPLAY.innerHTML = dial(time)[1];
        HOURDISPLAY.innerHTML = dial(time)[2];
        if (dial(time)[0] < 10) {
            SECONDSDISPLAY.innerHTML = '0' + dial(time)[0];
        } if (dial(time)[1] < 10) {
            MINUTESDISPLAY.innerHTML = '0' + dial(time)[1];
        }
    }
}

function dial(time) {
    let arrTimes = [];

    arrTimes.push(Math.trunc(time % 60), Math.trunc(time / 60 % 60), Math.trunc(time / 60 / 60 % 60)); 

    return arrTimes;
}

BUTTON.addEventListener ("click" , setTimer);


