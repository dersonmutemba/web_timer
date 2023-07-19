

const urlParams = new URLSearchParams(window.location.search);
const hours = urlParams.get("hours") ?? 0;
const minutes = urlParams.get("minutes") ?? 0;
const seconds = urlParams.get("seconds") ?? 0;

let time = new Date();
time.setHours(hours); time.setMinutes(minutes); time.setSeconds(seconds);

showClock();
var changingTime = time;
controlTime();

function showClock() {
    var timerClockHour = document.getElementById("timer-clock-hour");
    var timerClockMinute = document.getElementById("timer-clock-minute");
    var timerClockSecond = document.getElementById("timer-clock-second");
    timerClockHour.innerText = valueintwodigits(time.getHours() + "");
    timerClockMinute.innerText = valueintwodigits(time.getMinutes() + "");
    timerClockSecond.innerText = valueintwodigits(time.getSeconds() + "");
}

function updateClock() {
    var timerClockHour = document.getElementById("timer-clock-hour");
    var timerClockMinute = document.getElementById("timer-clock-minute");
    var timerClockSecond = document.getElementById("timer-clock-second");
    timerClockHour.innerText = valueintwodigits(changingTime.getHours() + "");
    timerClockMinute.innerText = valueintwodigits(changingTime.getMinutes() + "");
    timerClockSecond.innerText = valueintwodigits(changingTime.getSeconds() + "");
}

function delay (duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}

async function controlTime() {
    while (parseInt(changingTime.getHours()) != 0 || parseInt(changingTime.getMinutes()) != 0 || parseInt(changingTime.getSeconds()) != 0) {
        await delay(1000);
        changingTime.setSeconds(changingTime.getSeconds() - 1);
        updateClock();
    }
}