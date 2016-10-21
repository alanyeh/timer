var display = document.getElementById('timer');
var min = 30;
var time = 3600 * min;
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');
var plusBtn = document.getElementById('add');
var minusBtn = document.getElementById('minus');
var timerText = document.getElementById('timerText');
var state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed
var timerInterval;
var resumeTime;
var toggleColor = document.getElementById('timerDot');


plusBtn.addEventListener('click', function() {
	if (state == 0) {
		min++;
		time = 60 * min;
		min = min < 10 ? "0" + min : min; //add zero before number if less than 2
		updateDisplay();
	}
});

minusBtn.addEventListener('click', function() {
	if (min > 0) {
		if (state == 0) {
			min--;
			time = 60 * min;
			min = min < 10 ? "0" + min : min; //add zero before number if less than 2
			updateDisplay();
		}
	}
});

function startTimer(duration, display) {
		var t = duration;
		if (state != 1) {
			timerInterval = setInterval(function () {
					minutes = parseInt(t / 3600);
					seconds = parseInt((t % 6000) / 100);
					milliseconds = parseInt(t % 60);

					minutes = minutes < 10 ? "0" + minutes : minutes; //add zero before number if less than 2
					seconds = seconds < 10 ? "0" + seconds : seconds; //add zero before if less than 2
					milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds; //add zero before if less than 2

					display.textContent = minutes + " : " + seconds + " : " + milliseconds;
					resumeTime = ((minutes * 60) + (seconds % 60));
					state = 1;

					if (--t< 0) {
							t = duration;
					}
			}, 10);
			return resumeTime;
		}
}


function updateDisplay() {
	display.textContent = min + " : 00";
};

toggleBtn.addEventListener('click', function() {
		if (state == 0) {
			startTimer(time, display);
			toggleColor.style.backgroundColor = '#F84982';
		}
		else if(state == 1) {
			clearInterval(timerInterval);
			state = 2;
			toggleColor.style.backgroundColor = '#189cc4';
		}
		else if(state == 2) {
			startTimer(resumeTime, display);
			state = 3;
			toggleColor.style.backgroundColor = '#F84982';
		}
});

toggleBtn.addEventListener('dblclick', function(){
	clearInterval(timerInterval);
	time = 60 * min;
	minutes = parseInt(time / 60)
	seconds = parseInt(time % 60);

	minutes = minutes < 10 ? "0" + minutes : minutes; //add zero before number if less than 2
	seconds = seconds < 10 ? "0" + seconds : seconds; //add zero before if less than 2

	display.textContent = minutes + " : " + seconds;

	state = 0;
	toggleColor.style.backgroundColor = '#F84982';
});
