var secondup = document.getElementById('form-inputs-seconds-arrow-up');
var secondinput = document.getElementById('form-inputs-seconds-input');
var seconddown = document.getElementById('form-inputs-seconds-arrow-down');

var minuteup = document.getElementById('form-inputs-minutes-arrow-up');
var minuteinput = document.getElementById('form-inputs-minutes-input');
var minutedown = document.getElementById('form-inputs-minutes-arrow-down');

var hourup = document.getElementById('form-inputs-hours-arrow-up');
var hourinput = document.getElementById('form-inputs-hours-input');
var hourdown = document.getElementById('form-inputs-hours-arrow-down');

let time = new Date();
time.setHours(0); time.setMinutes(0); time.setSeconds(0);
let oldHours = parseInt(hourinput.value);
let oldMinutes = parseInt(minuteinput.value);
let oldSeconds = parseInt(secondinput.value);
let newHours = parseInt(hourinput.value);
let newMinutes = parseInt(minuteinput.value);
let newSeconds = parseInt(secondinput.value);

function formatinput(input) {
    input.addEventListener('input', function () {
        this.value = parseInt(this.value) + '';
        if (parseInt(this.value) > parseInt(this.max)) {
            this.value = this.max;
        }
        this.value = valueintwodigits(this.value);
        adjusttime();
    });
}

formatinput(secondinput);
formatinput(minuteinput);
formatinput(hourinput);

function setinputvalues() {
    secondinput.value = time.getSeconds();
    dispatchInputEvent(secondinput);
    minuteinput.value = time.getMinutes();
    dispatchInputEvent(minuteinput);
    hourinput.value = time.getHours();
    dispatchInputEvent(hourinput);
}

async function adjusttime() {
    newHours = parseInt(hourinput.value);
    newMinutes = parseInt(minuteinput.value);
    newSeconds = parseInt(secondinput.value);
    if (newHours != oldHours) {
        time.setHours(newHours);
        oldHours = newHours;
    }
    if (newMinutes != oldMinutes) {
        time.setMinutes(newMinutes);
        oldMinutes = newMinutes;
    }
    if (newSeconds != oldSeconds) {
        time.setSeconds(newSeconds);
        oldSeconds = newSeconds;
    }
}

function dispatchInputEvent(input) {
    input.dispatchEvent(new InputEvent('input'));
}

// TODO: add some long press events
secondup.onclick = function (event) {
    time.setSeconds(time.getSeconds() + 1);
    setinputvalues();
}
seconddown.onclick = function (event) {
    if (time.getHours() != 0 || time.getMinutes() != 0 || time.getSeconds() != 0) {
        time.setSeconds(time.getSeconds() - 1);
        setinputvalues();
    }
}

minuteup.onclick = function (event) {
    time.setMinutes(time.getMinutes() + 1);
    setinputvalues();
}
minutedown.onclick = function (event) {
    if (time.getHours() != 0 || time.getMinutes() != 0) {
        time.setMinutes(time.getMinutes() - 1);
    } else {
        time.setHours(0); time.setMinutes(0); time.setSeconds(0);
    }
    setinputvalues();
}

hourup.onclick = function (event) {
    time.setHours(time.getHours() + 1);
    setinputvalues();
}
hourdown.onclick = function (event) {
    if (time.getHours() != 0) {
        time.setHours(time.getHours() - 1);
    } else {
        time.setHours(0); time.setMinutes(0); time.setSeconds(0);
    }
    setinputvalues();
}

function addSec() {
    time.setSeconds(time.getSeconds() + 1);
}