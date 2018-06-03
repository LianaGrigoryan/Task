var f;

function startTimer(duration, id) {
    var timer = duration, minutes, seconds;
    f = setInterval(function () {
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

function Start() {
    clearInterval(f);
    var fiveMinutes = 60 * 20;
    startTimer(fiveMinutes, "c1");
}

function Stop() {
    clearInterval(f);
}

function Reset() {
    clearInterval(f);
    document.getElementById("c1").innerHTML = "20:00";
}
