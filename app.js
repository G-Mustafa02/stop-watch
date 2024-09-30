// let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
// let timeRef = document.querySelector(".timer-display");
// let int = null;

// document.getElementById("start-timer").addEventListener("click", () => {
//     if(int !== null) {
//         clearInterval(int);
//     }
//     int = setInterval(displayTimer, 10);
// });

// document.getElementById("pause-timer").addEventListener("click", () => {
//     clearInterval(int);
// });

// document.getElementById("reset-timer").addEventListener("click", () => {
//     clearInterval(int);
//     [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
//     timeRef.innerHTML = "00 : 00 : 00 : 000 ";
// }); 

// function displayTimer() {
//     milliseconds += 10;
//     if(milliseconds == 1000) {
//         milliseconds = 0;
//         seconds++;
//         if(seconds == 60) {
//             seconds = 0;
//             minutes++;
//             if(minutes == 60) {
//                 minutes = 0;
//                 hours++;
//             }
//         }
//     }

//     let h = hours < 10 ? "0" + hours : hours;
//     let m = minutes < 10 ? "0" + minutes : minutes;
//     let s = seconds < 10 ? "0" + seconds : seconds;
//     let ms = 
//         milliseconds < 10
//         ? "00" + milliseconds
//         : milliseconds < 100
//         ? "0" + milliseconds
//         : milliseconds;

//     timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

// }

var hr = 0;
var min = 0;
var sec = 0;
var t = 0;
function starttimer(){
    if (sec < 59) {
        sec++;
        document.querySelector("#sec").innerHTML = sec;
    }else{
        min++;
        sec = 0;
        document.querySelector("#sec").innerHTML = sec;
    }

    if(min<=59){
        document.querySelector("#min").innerHTML = min;
    }else{
        min = 0;
        hrs++;
        document.querySelector("#min").innerHTML = min ;
    }
    if(hrs < 24){
        document.querySelector("#hrs").innerHTML = hr
    }
}

function start(){
    t = setInterval(starttimer, 1000)
}

function stop(){
    clearInterval(t)
}

function reset(){
    clearInterval(t)
    document.querySelector("#sec").innerHTML = "00";
    document.querySelector("#min").innerHTML = "00";
    document.querySelector("#hrs").innerHTML = "00";

}









