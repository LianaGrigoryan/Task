var f = [];
var fiveMinutes = 60 * 20;

function startTimer(duration, id,i) {
    var timer = duration, minutes, seconds;
    f[i] = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById(id).innerHTML = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function Start1() {
    clearInterval(f[1]);
    setInterval(startTimer,1);
    startTimer(fiveMinutes, "c1",1);
}

function Stop1() {
    setInterval(startTimer,1);
    clearInterval(f[1]);
}

function Reset1() {
    setInterval(startTimer,1);
    clearInterval(f[1]);
    document.getElementById("c1").innerHTML = "20:00";
}
function Start2() {
    clearInterval(f[2]);
    startTimer(fiveMinutes, "c2",2);
}

function Stop2() {
    clearInterval(f[2]);
}

function Reset2() {
    clearInterval(f[2]);
    document.getElementById("c2").innerHTML = "20:00";
}
function Start3() {
    clearInterval(f[3]);
    startTimer(fiveMinutes, "c3",3);
}

function Stop3() {
    clearInterval(f[3]);
}

function Reset3() {
    clearInterval(f[3]);
    document.getElementById("c3").innerHTML = "20:00";
}
function Start4() {
    clearInterval(f[4]);
    startTimer(fiveMinutes, "c4", 4);
}

function Stop4() {
    clearInterval(f[4]);
}

function Reset4() {5
    clearInterval(f[4]);
    document.getElementById("c4").innerHTML = "20:00";
}