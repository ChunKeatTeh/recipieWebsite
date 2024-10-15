const lockWord = document.getElementById("lockStatus");
const lockedWord = document.getElementById("openStatus");
var locked = -1;
var lockWordAdd = "Disabled";
const lockedWords = "Alert! Alarm triggered";
var buzzer = false;

function lock() {
    locked *= -1;

    if (locked == 1) {
        lockWordAdd = "Enabled";
    } else {
        lockWordAdd = "Disabled";
    }

    lockWord.innerHTML = "Lock: " + lockWordAdd;
}

function trigger() {
    if (locked == 1) {
        lockedWord.innerHTML = lockedWords;
        turnOn(Buzzer);
        buzzer = true;
    }
}

function untrigger() {
    lockedWord.innerHTML = "NaN";
    turnOff(Buzzer);
    buzzer = false;
}

function check() {
    if (digitalIn(LightBlockSensor) == 1) {
        return false;
    } else {
        return true;
    }
};

while (true) {
    if (check() && !buzzer) {
        trigger();
    } else if (!check() && buzzer) {
        untrigger();
    }
};