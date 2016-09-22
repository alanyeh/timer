var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');
var plusBtn = document.getElementById('add');

function startTimer(duration, display) {
    var t = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(t / 60, 10)
        seconds = parseInt(t % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + " : " + seconds;

        if (--t< 0) {
            t = duration;
        }
    }, 1000);
}

toggleBtn.addEventListener('click', function() {
    var fiveMinutes = 60 * 5,
        display = document.getElementById('timer');
    startTimer(fiveMinutes, display);
});
