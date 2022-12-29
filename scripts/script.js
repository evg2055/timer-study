'use strict';

const BUTTON = document.getElementById('button');
const DISPLAY = document.getElementById('display');
const INPUT = document.getElementById('input');

BUTTON.addEventListener('click', run);
document.addEventListener('change',  run);

function run() {
    BUTTON.removeEventListener('click', run);
    timer();
} 

function timer() {
    var time = INPUT.value * 60;

    var timeObj = {
        };

    const timerId = setInterval(() => {
        time--;
        timeObj.hour = Math.trunc(time / 60 / 60 % 60);
        timeObj.minute = Math.trunc(time / 60 % 60);
        timeObj.second =  Math.trunc(time % 60) ;

        for(var elem in timeObj) {
            var ELEMENT = timeObj[elem];

            if(ELEMENT < 10) {timeObj[elem] = '0' + ELEMENT} ;
        };

        DISPLAY.innerText = `${timeObj.hour} : ${timeObj.minute} : ${timeObj.second}`;
       
        if(time <= 0) {
            clearInterval(timerId);
            alert('done');
            BUTTON.addEventListener('click', run);
        };
    } , 1000);
};